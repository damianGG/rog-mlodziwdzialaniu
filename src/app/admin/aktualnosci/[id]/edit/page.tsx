import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import AktualnoscForm from "@/components/admin/AktualnoscForm"
import { getAktualnoscById } from "@/lib/aktualnosci-repo"
import { updateAktualnoscAction } from "../../actions"

export const metadata: Metadata = {
  title: "Edytuj aktualność | Panel administracyjny",
  robots: { index: false, follow: false },
}

export default async function EditAktualnoscPage({ params }: { params: { id: string } }) {
  const id = Number(params.id)
  const aktualnosc = Number.isFinite(id) ? await getAktualnoscById(id) : undefined

  if (!aktualnosc) {
    notFound()
  }

  const boundAction = updateAktualnoscAction.bind(null, aktualnosc.id)

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link href="/admin" className="text-decoration-none">
          ← Wróć do panelu
        </Link>
        <h1 className="h2 mt-2">Edytuj aktualność</h1>
      </div>
      <AktualnoscForm
        action={boundAction}
        submitLabel="Zapisz zmiany"
        defaultValues={{
          kod: aktualnosc.kod,
          tytul: aktualnosc.tytul,
          podtytul: aktualnosc.podtytul,
          data: aktualnosc.data,
          opis: aktualnosc.opis,
          pliki: aktualnosc.pliki,
        }}
      />
    </div>
  )
}
