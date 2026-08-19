"use client"

import { useState } from "react"
import { useFormState } from "react-dom"
import type { PlikAktualnosci } from "@/lib/db/schema"
import type { ActionResult } from "@/app/admin/aktualnosci/actions"

type DefaultValues = {
  kod: string
  tytul: string
  podtytul: string
  data: string
  opis: string
  pliki: PlikAktualnosci[]
}

type Props = {
  action: (prevState: ActionResult, formData: FormData) => Promise<ActionResult>
  submitLabel: string
  defaultValues?: DefaultValues
}

export default function AktualnoscForm({ action, submitLabel, defaultValues }: Props) {
  const [state, formAction] = useFormState(action, undefined)
  const [keptFiles, setKeptFiles] = useState<PlikAktualnosci[]>(defaultValues?.pliki ?? [])

  function removeKeptFile(url: string) {
    setKeptFiles((prev) => prev.filter((f) => f.url !== url))
  }

  return (
    <form action={formAction} className="card shadow-sm">
      <div className="card-body p-4 p-md-5">
        {state?.error ? (
          <div className="alert alert-danger" role="alert">
            {state.error}
          </div>
        ) : null}

        <input type="hidden" name="istniejacePliki" value={JSON.stringify(keptFiles)} />

        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label" htmlFor="kod">
              Kod
            </label>
            <input
              id="kod"
              name="kod"
              className="form-control"
              placeholder="np. IRŚ"
              defaultValue={defaultValues?.kod ?? ""}
            />
          </div>
          <div className="col-md-8">
            <label className="form-label" htmlFor="data">
              Data
            </label>
            <input
              id="data"
              name="data"
              type="date"
              required
              className="form-control"
              defaultValue={defaultValues?.data ?? ""}
            />
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label" htmlFor="tytul">
            Tytuł
          </label>
          <textarea
            id="tytul"
            name="tytul"
            required
            rows={3}
            className="form-control"
            defaultValue={defaultValues?.tytul ?? ""}
          />
        </div>

        <div className="mt-3">
          <label className="form-label" htmlFor="podtytul">
            Podtytuł
          </label>
          <input
            id="podtytul"
            name="podtytul"
            className="form-control"
            defaultValue={defaultValues?.podtytul ?? ""}
          />
        </div>

        <div className="mt-3">
          <label className="form-label" htmlFor="opis">
            Opis
          </label>
          <textarea
            id="opis"
            name="opis"
            rows={10}
            className="form-control"
            defaultValue={defaultValues?.opis ?? ""}
          />
          <div className="form-text">
            Nowy akapit zaczynaj od pustej linii — dokładnie tak jak wyświetla się na stronie publicznej.
          </div>
        </div>

        <div className="mt-4">
          <label className="form-label d-block">Pliki (PDF)</label>

          {keptFiles.length > 0 ? (
            <ul className="list-group mb-3">
              {keptFiles.map((file) => (
                <li
                  key={file.url}
                  className="list-group-item d-flex justify-content-between align-items-center gap-3"
                >
                  <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-truncate">
                    {file.nazwa}
                  </a>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger flex-shrink-0"
                    onClick={() => removeKeptFile(file.url)}
                  >
                    Usuń
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">Brak dodanych plików.</p>
          )}

          <input type="file" name="nowePliki" multiple accept="application/pdf" className="form-control" />
          <div className="form-text">Możesz wybrać kilka plików PDF jednocześnie.</div>
        </div>

        <div className="mt-5 d-flex gap-2">
          <button type="submit" className="btn btn-primary rounded-pill">
            {submitLabel}
          </button>
          <a href="/admin" className="btn btn-outline-secondary rounded-pill">
            Anuluj
          </a>
        </div>
      </div>
    </form>
  )
}
