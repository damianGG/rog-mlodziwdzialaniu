"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ADMIN_SESSION_COOKIE, checkAdminCredentials, createAdminSessionValue } from "@/lib/admin-auth"

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")

  if (!checkAdminCredentials(email, password)) {
    redirect("/admin/login?error=1")
  }

  const sessionValue = await createAdminSessionValue()
  cookies().set(ADMIN_SESSION_COOKIE, sessionValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  })

  redirect("/admin")
}

export async function logoutAction() {
  cookies().delete(ADMIN_SESSION_COOKIE)
  redirect("/admin/login")
}
