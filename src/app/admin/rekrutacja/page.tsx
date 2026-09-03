import type { Metadata } from "next"
import Link from "next/link"
import RecruitmentContentForm from "@/components/admin/RecruitmentContentForm"
import { getRecruitmentContent, listRecruitmentDocuments, type RecruitmentDocumentCategory } from "@/lib/recruitment-documents"
import { deleteRecruitmentDocumentAction, updateRecruitmentContentAction, uploadRecruitmentDocumentAction } from "./actions"

export const metadata: Metadata = {
  title: "Dokumenty rekrutacyjne | Panel administracyjny",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

const categories: { value: RecruitmentDocumentCategory; label: string }[] = [
  { value: "czarno-biale", label: "Dokumenty czarno-białe" },
  { value: "kolor", label: "Dokumenty kolorowe" },
]

export default async function RecruitmentDocumentsAdminPage() {
  const [content, documents] = await Promise.all([getRecruitmentContent(), listRecruitmentDocuments()])

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1">Rekrutacja</h1>
          <p className="text-muted mb-0">Edytuj treść strony rekrutacji oraz zarządzaj dokumentami do pobrania.</p>
        </div>
        <Link href="/admin" className="btn btn-outline-secondary rounded-pill">
          Wróć do panelu
        </Link>
      </div>

      <RecruitmentContentForm content={content} action={updateRecruitmentContentAction} />

      <h2 className="h4 mb-3">Dokumenty do pobrania</h2>
      <div className="row g-4">
        {categories.map((category) => {
          const categoryDocuments = documents.filter((document) => document.category === category.value)

          return (
            <div className="col-lg-6" key={category.value}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h2 className="h4">{category.label}</h2>
                  <form action={uploadRecruitmentDocumentAction} className="d-flex flex-wrap gap-2 mb-4">
                    <input type="hidden" name="category" value={category.value} />
                    <input
                      type="file"
                      name="document"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="form-control"
                      required
                    />
                    <button type="submit" className="btn btn-primary">
                      Dodaj dokument
                    </button>
                  </form>

                  {categoryDocuments.length > 0 ? (
                    <ul className="list-group list-group-flush">
                      {categoryDocuments.map((document) => (
                        <li className="list-group-item px-0 d-flex justify-content-between align-items-center gap-3" key={document.url}>
                          <a href={document.url} target="_blank" rel="noreferrer" className="text-break">
                            {document.name}
                          </a>
                          <form action={deleteRecruitmentDocumentAction}>
                            <input type="hidden" name="url" value={document.url} />
                            <button type="submit" className="btn btn-sm btn-outline-danger">
                              Usuń
                            </button>
                          </form>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted mb-0">Brak dokumentów.</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
