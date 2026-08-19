import type { Metadata } from "next"
import Link from "next/link"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { listAktualnosci } from "@/lib/aktualnosci-repo"
import DeleteAktualnoscButton from "@/components/admin/DeleteAktualnoscButton"
import { logoutAction } from "./actions"

export const metadata: Metadata = {
  title: "Panel administracyjny | Łódzka Strefa Integracji",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminDashboardPage() {
  const items = await listAktualnosci()

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        <div>
          <h1 className="h2 mb-1">Panel administracyjny</h1>
          <p className="text-muted mb-0">Zarządzaj aktualnościami wyświetlanymi na stronie.</p>
        </div>
        <div className="d-flex gap-2">
          <Link href="/admin/aktualnosci/new" className="btn btn-primary rounded-pill">
            + Nowa aktualność
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="btn btn-outline-secondary rounded-pill">
              Wyloguj
            </button>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Kod</th>
                <th>Tytuł</th>
                <th>Data</th>
                <th>Pliki</th>
                <th className="text-end">Akcje</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.kod || "—"}</td>
                  <td style={{ maxWidth: 420 }}>
                    <Link href={`/aktualnosci/${item.slug}`} target="_blank" className="text-decoration-none">
                      {item.tytul}
                    </Link>
                  </td>
                  <td className="text-nowrap">
                    {format(new Date(item.data), "dd MMMM yyyy", { locale: pl })}
                  </td>
                  <td>{item.pliki.length}</td>
                  <td className="text-end">
                    <div className="d-flex justify-content-end gap-2">
                      <Link href={`/admin/aktualnosci/${item.id}/edit`} className="btn btn-sm btn-outline-primary">
                        Edytuj
                      </Link>
                      <DeleteAktualnoscButton id={item.id} tytul={item.tytul} />
                    </div>
                  </td>
                </tr>
              ))}
              {items.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-muted py-5">
                    Brak aktualności. Dodaj pierwszą, klikając „Nowa aktualność”.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
