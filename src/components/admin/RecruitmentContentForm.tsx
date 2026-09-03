"use client"

import { useState } from "react"
import type { RecruitmentContent } from "@/lib/recruitment-documents"

type Props = {
  content: RecruitmentContent
  action: (formData: FormData) => void
}

export default function RecruitmentContentForm({ content, action }: Props) {
  const [value, setValue] = useState(content)

  const update = <K extends keyof RecruitmentContent>(key: K, next: RecruitmentContent[K]) => {
    setValue((current) => ({ ...current, [key]: next }))
  }

  return (
    <form action={action} className="card shadow-sm mb-5">
      <input type="hidden" name="content" value={JSON.stringify(value)} />
      <div className="card-body">
        <h2 className="h4 mb-4">Treść strony</h2>
        <div className="row g-3">
          <Field label="Nagłówek" value={value.title} onChange={(next) => update("title", next)} />
          <Field label="Wprowadzenie (pod nagłówkiem)" value={value.introduction} onChange={(next) => update("introduction", next)} />
          <Field label="Nagłówek kryteriów" value={value.eligibilityTitle} onChange={(next) => update("eligibilityTitle", next)} />
          <Field label="Nagłówek kroków" value={value.stepsTitle} onChange={(next) => update("stepsTitle", next)} />
          <Field label="Nagłówek dokumentów" value={value.documentsTitle} onChange={(next) => update("documentsTitle", next)} />
        </div>

        <h3 className="h5 mt-5">Kryteria uczestnictwa</h3>
        {value.eligibilityItems.map((item, index) => (
          <div className="input-group mt-2" key={index}>
            <input
              className="form-control"
              value={item}
              onChange={(event) => update("eligibilityItems", value.eligibilityItems.map((entry, i) => i === index ? event.target.value : entry))}
            />
            <button type="button" className="btn btn-outline-danger" onClick={() => update("eligibilityItems", value.eligibilityItems.filter((_, i) => i !== index))}>
              Usuń
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-sm btn-outline-primary mt-3" onClick={() => update("eligibilityItems", [...value.eligibilityItems, ""])}>
          + Dodaj kryterium
        </button>

        <h3 className="h5 mt-5">Kroki rekrutacji</h3>
        {value.steps.map((step, index) => (
          <div className="border rounded p-3 mt-3" key={index}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <strong>Krok {index + 1}</strong>
              <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => update("steps", value.steps.filter((_, i) => i !== index))}>
                Usuń krok
              </button>
            </div>
            <Field label="Tytuł" value={step.title} onChange={(next) => update("steps", value.steps.map((entry, i) => i === index ? { ...entry, title: next } : entry))} />
            <div className="mt-3">
              <label className="form-label">Opis</label>
              <textarea className="form-control" rows={3} value={step.description} onChange={(event) => update("steps", value.steps.map((entry, i) => i === index ? { ...entry, description: event.target.value } : entry))} />
            </div>
            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" id={`arrow-${index}`} checked={step.showArrow} onChange={(event) => update("steps", value.steps.map((entry, i) => i === index ? { ...entry, showArrow: event.target.checked } : entry))} />
              <label className="form-check-label" htmlFor={`arrow-${index}`}>Pokaż strzałkę po tym kroku</label>
            </div>
          </div>
        ))}
        <button type="button" className="btn btn-sm btn-outline-primary mt-3" onClick={() => update("steps", [...value.steps, { title: "", description: "", showArrow: false }])}>
          + Dodaj krok
        </button>
      </div>
      <div className="card-footer bg-white text-end">
        <button type="submit" className="btn btn-primary rounded-pill">Zapisz treść strony</button>
      </div>
    </form>
  )
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="col-12">
      <label className="form-label">{label}</label>
      <input className="form-control" value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  )
}
