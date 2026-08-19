"use client"

import { deleteAktualnoscAction } from "@/app/admin/aktualnosci/actions"

export default function DeleteAktualnoscButton({ id, tytul }: { id: number; tytul: string }) {
  const boundAction = deleteAktualnoscAction.bind(null, id)

  return (
    <form
      action={boundAction}
      onSubmit={(event) => {
        const confirmed = window.confirm(`Usunąć aktualność „${tytul}”? Tej operacji nie można odwrócić.`)
        if (!confirmed) {
          event.preventDefault()
        }
      }}
    >
      <button type="submit" className="btn btn-sm btn-outline-danger">
        Usuń
      </button>
    </form>
  )
}
