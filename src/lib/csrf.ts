import crypto from "crypto";
import { cookies } from "next/headers";

export const CSRF_COOKIE_NAME = "groupie_csrf";

export function getCsrfCookieToken() {
  return cookies().get(CSRF_COOKIE_NAME)?.value ?? null;
}

export function validateCsrfToken(headerToken?: string) {
  const cookieToken = getCsrfCookieToken();
  if (!cookieToken || !headerToken) return false;

  // Prevent timing attacks (ensure equal length first)
  const a = Buffer.from(cookieToken);
  const b = Buffer.from(headerToken);
  if (a.length !== b.length) return false;

  return crypto.timingSafeEqual(a, b);
}
