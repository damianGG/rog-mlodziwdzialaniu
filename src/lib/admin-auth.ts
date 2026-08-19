export const ADMIN_SESSION_COOKIE = "admin_session"
const SESSION_TTL_MS = 1000 * 60 * 60 * 12 // 12 godzin

const ADMIN_EMAIL = "admin@admin.com"
const ADMIN_PASSWORD = "adminadmin"

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set")
  }
  return secret
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload))
  return toHex(signature)
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let mismatch = 0
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return mismatch === 0
}

export function checkAdminCredentials(email: string, password: string): boolean {
  return email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export async function createAdminSessionValue(): Promise<string> {
  const expiresAt = Date.now() + SESSION_TTL_MS
  const payload = `${expiresAt}`
  const signature = await sign(payload)
  return `${payload}.${signature}`
}

export async function isValidAdminSessionValue(value: string | undefined | null): Promise<boolean> {
  if (!value) return false
  const [payload, signature] = value.split(".")
  if (!payload || !signature) return false

  const expectedSignature = await sign(payload)
  if (!constantTimeEqual(signature, expectedSignature)) return false

  const expiresAt = Number(payload)
  if (!Number.isFinite(expiresAt)) return false
  return Date.now() < expiresAt
}
