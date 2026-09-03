import { list } from "@vercel/blob"

export type RecruitmentDocumentCategory = "czarno-biale" | "kolor"

export type RecruitmentDocument = Awaited<ReturnType<typeof list>>["blobs"][number] & {
  category: RecruitmentDocumentCategory
  name: string
}

const PREFIX = "rekrutacja/"

export async function listRecruitmentDocuments(): Promise<RecruitmentDocument[]> {
  const { blobs } = await list({ prefix: PREFIX })

  return blobs
    .map((blob) => {
      const [category, ...nameParts] = blob.pathname.slice(PREFIX.length).split("/")
      if ((category !== "czarno-biale" && category !== "kolor") || nameParts.length === 0) return null

      return {
        ...blob,
        category,
        name: nameParts.join("/"),
      }
    })
    .filter((document): document is RecruitmentDocument => document !== null)
    .sort((a, b) => a.name.localeCompare(b.name, "pl"))
}

export function getRecruitmentDocumentPath(
  category: RecruitmentDocumentCategory,
  filename: string,
): string {
  const safeFilename = filename
    .replace(/[/\\]/g, "-")
    .replace(/[\x00-\x1F\x7F]/g, "-")
    .replace(/^-+|-+$/g, "")

  return `${PREFIX}${category}/${safeFilename || "dokument"}`
}
