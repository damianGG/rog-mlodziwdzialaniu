import { pgTable, serial, text, date, jsonb, timestamp } from "drizzle-orm/pg-core"

export type PlikAktualnosci = {
  nazwa: string
  url: string
}

export const aktualnosci = pgTable("aktualnosci", {
  id: serial("id").primaryKey(),
  kod: text("kod").notNull().default(""),
  tytul: text("tytul").notNull(),
  podtytul: text("podtytul").notNull().default(""),
  data: date("data", { mode: "string" }).notNull().defaultNow(),
  opis: text("opis").notNull().default(""),
  pliki: jsonb("pliki").notNull().default([]).$type<PlikAktualnosci[]>(),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
})

export type Aktualnosc = typeof aktualnosci.$inferSelect
export type NewAktualnosc = typeof aktualnosci.$inferInsert
