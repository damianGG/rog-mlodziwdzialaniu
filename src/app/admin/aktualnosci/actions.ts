"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { del, put } from "@vercel/blob"
import {
  createAktualnosc,
  deleteAktualnosc,
  getAktualnoscById,
  updateAktualnosc,
} from "@/lib/aktualnosci-repo"
import type { PlikAktualnosci } from "@/lib/db/schema"

export type ActionResult = { error?: string } | undefined

function parseExistingFiles(formData: FormData): PlikAktualnosci[] {
  const raw = formData.get("istniejacePliki")
  if (typeof raw !== "string" || !raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is PlikAktualnosci =>
        !!item && typeof item.nazwa === "string" && typeof item.url === "string",
    )
  } catch {
    return []
  }
}

async function uploadNewFiles(formData: FormData): Promise<PlikAktualnosci[]> {
  const files = formData.getAll("nowePliki").filter((f): f is File => f instanceof File && f.size > 0)
  const uploaded: PlikAktualnosci[] = []
  for (const file of files) {
    const blob = await put(file.name, file, { access: "public", addRandomSuffix: true })
    uploaded.push({ nazwa: file.name, url: blob.url })
  }
  return uploaded
}

function readFields(formData: FormData) {
  return {
    kod: String(formData.get("kod") ?? "").trim(),
    tytul: String(formData.get("tytul") ?? "").trim(),
    podtytul: String(formData.get("podtytul") ?? "").trim(),
    data: String(formData.get("data") ?? "").trim(),
    opis: String(formData.get("opis") ?? "").trim(),
  }
}

export async function createAktualnoscAction(
  _prevState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const fields = readFields(formData)
  if (!fields.tytul || !fields.data) {
    return { error: "Tytuł i data są wymagane." }
  }

  const keptFiles = parseExistingFiles(formData)
  const uploadedFiles = await uploadNewFiles(formData)

  await createAktualnosc({
    ...fields,
    pliki: [...keptFiles, ...uploadedFiles],
  })

  revalidatePath("/aktualnosci")
  redirect("/admin")
}

export async function updateAktualnoscAction(
  id: number,
  _prevState: ActionResult,
  formData: FormData,
): Promise<ActionResult> {
  const fields = readFields(formData)
  if (!fields.tytul || !fields.data) {
    return { error: "Tytuł i data są wymagane." }
  }

  const existing = await getAktualnoscById(id)
  if (!existing) {
    return { error: "Nie znaleziono aktualności." }
  }

  const keptFiles = parseExistingFiles(formData)
  const uploadedFiles = await uploadNewFiles(formData)

  const removedFiles = existing.pliki.filter((f) => !keptFiles.some((k) => k.url === f.url))
  await Promise.all(removedFiles.map((f) => del(f.url).catch(() => undefined)))

  await updateAktualnosc(id, {
    ...fields,
    pliki: [...keptFiles, ...uploadedFiles],
  })

  revalidatePath("/aktualnosci")
  revalidatePath(`/aktualnosci/${existing.slug}`)
  redirect("/admin")
}

export async function deleteAktualnoscAction(id: number, _formData: FormData): Promise<void> {
  const existing = await getAktualnoscById(id)
  if (existing) {
    await Promise.all(existing.pliki.map((f) => del(f.url).catch(() => undefined)))
    await deleteAktualnosc(id)
    revalidatePath("/aktualnosci")
    revalidatePath(`/aktualnosci/${existing.slug}`)
  }
  revalidatePath("/admin")
}
