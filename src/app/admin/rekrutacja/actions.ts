"use server"

import { del, put } from "@vercel/blob"
import { revalidatePath } from "next/cache"
import {
  getRecruitmentDocumentPath,
  CONTENT_PATH,
  isRecruitmentContent,
  listRecruitmentDocuments,
  type RecruitmentDocumentCategory,
} from "@/lib/recruitment-documents"

const MAX_FILE_SIZE = 20 * 1024 * 1024
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
])

function getCategory(value: FormDataEntryValue | null): RecruitmentDocumentCategory | null {
  return value === "czarno-biale" || value === "kolor" ? value : null
}

export async function uploadRecruitmentDocumentAction(formData: FormData): Promise<void> {
  const category = getCategory(formData.get("category"))
  const file = formData.get("document")

  if (!category || !(file instanceof File) || file.size === 0 || file.size > MAX_FILE_SIZE) return
  if (!ALLOWED_TYPES.has(file.type)) return

  await put(getRecruitmentDocumentPath(category, file.name), file, {
    access: "public",
    addRandomSuffix: true,
  })

  revalidatePath("/admin/rekrutacja")
  revalidatePath("/rekrutacja")
}

export async function updateRecruitmentContentAction(formData: FormData): Promise<void> {
  const rawContent = formData.get("content")
  if (typeof rawContent !== "string") return

  try {
    const content = JSON.parse(rawContent)
    if (!isRecruitmentContent(content)) return

    await put(CONTENT_PATH, JSON.stringify(content), {
      access: "public",
      allowOverwrite: true,
      contentType: "application/json",
    })
    revalidatePath("/admin/rekrutacja")
    revalidatePath("/rekrutacja")
  } catch {
    return
  }
}

export async function deleteRecruitmentDocumentAction(formData: FormData): Promise<void> {
  const url = formData.get("url")
  if (typeof url !== "string") return

  const documents = await listRecruitmentDocuments()
  if (!documents.some((document) => document.url === url)) return

  await del(url)
  revalidatePath("/admin/rekrutacja")
  revalidatePath("/rekrutacja")
}
