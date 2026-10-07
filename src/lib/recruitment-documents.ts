import { list } from "@vercel/blob"

export type RecruitmentDocumentCategory = "czarno-biale" | "kolor"

export type RecruitmentDocument = Awaited<ReturnType<typeof list>>["blobs"][number] & {
  category: RecruitmentDocumentCategory
  name: string
}

const PREFIX = "rekrutacja/"
const CONTENT_PATH = `${PREFIX}content.json`
const MOJIBAKE_PATTERN = /[\u00C2-\u00F4][\u0080-\u00BF]/

function normalizeFilename(filename: string): string {
  return MOJIBAKE_PATTERN.test(filename)
    ? Buffer.from(filename, "latin1").toString("utf8")
    : filename
}

export type RecruitmentStep = {
  title: string
  description: string
  showArrow: boolean
}

export type RecruitmentContent = {
  title: string
  introduction: string
  eligibilityTitle: string
  eligibilityItems: string[]
  stepsTitle: string
  steps: RecruitmentStep[]
  documentsTitle: string
}

export const defaultRecruitmentContent: RecruitmentContent = {
  title: "Rekrutacja",
  introduction: "Sprawdź, jak wygląda proces rekrutacji do projektu.",
  eligibilityTitle: "Kto może wziąć udział?",
  eligibilityItems: [
    "osoby w wieku 18–29 lat",
    "mieszkańcy województwa łódzkiego",
    "osoby bezrobotne lub bierne zawodowo",
    "osoby zagrożone ubóstwem lub wykluczeniem społecznym",
  ],
  stepsTitle: "Jak się zgłosić?",
  steps: [
    { title: "Pobierz dokumenty", description: "Wybierz dokumenty rekrutacyjne do pobrania.", showArrow: true },
    { title: "Wypełnij dokumenty", description: "Wypełnij formularz rekrutacyjny i wymagane załączniki.", showArrow: true },
    { title: "Złóż dokumenty", description: "Dostarcz komplet dokumentów osobiście, pocztą lub e-mailem.", showArrow: false },
  ],
  documentsTitle: "Dokumenty rekrutacyjne do pobrania",
}

export async function listRecruitmentDocuments(): Promise<RecruitmentDocument[]> {
  const { blobs } = await list({ prefix: PREFIX })

  return blobs
    .filter((blob) => blob.pathname !== CONTENT_PATH)
    .map((blob) => {
      const [category, ...nameParts] = blob.pathname.slice(PREFIX.length).split("/")
      if ((category !== "czarno-biale" && category !== "kolor") || nameParts.length === 0) return null

      return {
        ...blob,
        category,
        name: normalizeFilename(nameParts.join("/")),
      }
    })
    .filter((document): document is RecruitmentDocument => document !== null)
    .sort((a, b) => a.name.localeCompare(b.name, "pl"))
}

export async function getRecruitmentContent(): Promise<RecruitmentContent> {
  const { blobs } = await list({ prefix: CONTENT_PATH })
  const contentBlob = blobs.find((blob) => blob.pathname === CONTENT_PATH)
  if (!contentBlob) return defaultRecruitmentContent

  try {
    const response = await fetch(contentBlob.url, { cache: "no-store" })
    const content = await response.json()
    if (!isRecruitmentContent(content)) return defaultRecruitmentContent
    return content
  } catch {
    return defaultRecruitmentContent
  }
}

export function isRecruitmentContent(value: unknown): value is RecruitmentContent {
  if (!value || typeof value !== "object") return false
  const content = value as RecruitmentContent
  return (
    typeof content.title === "string" &&
    typeof content.introduction === "string" &&
    typeof content.eligibilityTitle === "string" &&
    Array.isArray(content.eligibilityItems) &&
    content.eligibilityItems.every((item) => typeof item === "string") &&
    typeof content.stepsTitle === "string" &&
    Array.isArray(content.steps) &&
    content.steps.every(
      (step) =>
        !!step &&
        typeof step.title === "string" &&
        typeof step.description === "string" &&
        typeof step.showArrow === "boolean",
    ) &&
    typeof content.documentsTitle === "string"
  )
}

export { CONTENT_PATH }

export function getRecruitmentDocumentPath(
  category: RecruitmentDocumentCategory,
  filename: string,
): string {
  const safeFilename = normalizeFilename(filename)
    .replace(/[/\\]/g, "-")
    .replace(/[\x00-\x1F\x7F]/g, "-")
    .replace(/^-+|-+$/g, "")

  return `${PREFIX}${category}/${safeFilename || "dokument"}`
}
