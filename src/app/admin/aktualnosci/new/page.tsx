import type { Metadata } from "next"
import Link from "next/link"
import AktualnoscForm from "@/components/admin/AktualnoscForm"
import { createAktualnoscAction } from "../actions"

export const metadata: Metadata = {
  title: "Nowa aktualność | Panel administracyjny",
  robots: { index: false, follow: false },
}

export default function NewAktualnoscPage() {
  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link href="/admin" className="text-decoration-none">
          ← Wróć do panelu
        </Link>
        <h1 className="h2 mt-2">Nowa aktualność</h1>
      </div>
      <AktualnoscForm action={createAktualnoscAction} submitLabel="Dodaj aktualność" />
    </div>
  )
}
