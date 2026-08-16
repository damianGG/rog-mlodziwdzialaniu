import type { Metadata } from "next"
import { loginAction } from "../actions"

export const metadata: Metadata = {
  title: "Logowanie do panelu | Łódzka Strefa Integracji",
  robots: { index: false, follow: false },
}

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const hasError = searchParams.error === "1"

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh", background: "#f4f5f7" }}
    >
      <div className="card shadow-lg" style={{ maxWidth: 420, width: "100%" }}>
        <div className="card-body p-8">
          <h1 className="h3 mb-1">Panel administracyjny</h1>
          <p className="text-muted mb-4">Zaloguj się, aby zarządzać aktualnościami.</p>

          {hasError ? (
            <div className="alert alert-danger" role="alert">
              Nieprawidłowy adres e-mail lub hasło.
            </div>
          ) : null}

          <form action={loginAction}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Adres e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="username"
                className="form-control"
                placeholder="admin@admin.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Hasło
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="form-control"
                placeholder="••••••••"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-pill">
              Zaloguj się
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
