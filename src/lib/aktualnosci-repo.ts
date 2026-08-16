import { db } from "@/lib/db"
import { aktualnosci, type Aktualnosc, type PlikAktualnosci } from "@/lib/db/schema"
import { createSlug } from "@/lib/slug"
import { desc, eq } from "drizzle-orm"

export type { Aktualnosc, PlikAktualnosci }

export async function listAktualnosci(): Promise<Aktualnosc[]> {
  return db.select().from(aktualnosci).orderBy(desc(aktualnosci.data), desc(aktualnosci.id))
}

export async function getAktualnoscBySlug(slug: string): Promise<Aktualnosc | undefined> {
  const rows = await db.select().from(aktualnosci).where(eq(aktualnosci.slug, slug)).limit(1)
  return rows[0]
}

export async function getAktualnoscById(id: number): Promise<Aktualnosc | undefined> {
  const rows = await db.select().from(aktualnosci).where(eq(aktualnosci.id, id)).limit(1)
  return rows[0]
}

export type AktualnoscInput = {
  kod: string
  tytul: string
  podtytul: string
  data: string
  opis: string
  pliki: PlikAktualnosci[]
}

export async function createAktualnosc(input: AktualnoscInput): Promise<Aktualnosc> {
  const baseSlug = createSlug(input.tytul) || "aktualnosc"

  const [inserted] = await db
    .insert(aktualnosci)
    .values({
      kod: input.kod,
      tytul: input.tytul,
      podtytul: input.podtytul,
      data: input.data,
      opis: input.opis,
      pliki: input.pliki,
      slug: `${Date.now()}-${baseSlug}`,
    })
    .returning()

  const finalSlug = `${inserted.id}-${baseSlug}`
  const [updated] = await db
    .update(aktualnosci)
    .set({ slug: finalSlug, updatedAt: new Date() })
    .where(eq(aktualnosci.id, inserted.id))
    .returning()

  return updated
}

export async function updateAktualnosc(id: number, input: AktualnoscInput): Promise<Aktualnosc | undefined> {
  const [updated] = await db
    .update(aktualnosci)
    .set({
      kod: input.kod,
      tytul: input.tytul,
      podtytul: input.podtytul,
      data: input.data,
      opis: input.opis,
      pliki: input.pliki,
      updatedAt: new Date(),
    })
    .where(eq(aktualnosci.id, id))
    .returning()

  return updated
}

export async function deleteAktualnosc(id: number): Promise<void> {
  await db.delete(aktualnosci).where(eq(aktualnosci.id, id))
}
