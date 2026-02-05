import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "groupie_csrf";

export function getOrCreateCsrfToken() {
  const cookieStore = cookies();
  let token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    token = crypto.randomBytes(16).toString("hex");
    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/"
    });
  }

  return token;
}

export function validateCsrfToken(headerToken?: string) {
  const cookieStore = cookies();
  const cookieToken = cookieStore.get(COOKIE_NAME)?.value;
  if (!cookieToken || !headerToken) return false;
  return crypto.timingSafeEqual(Buffer.from(cookieToken), Buffer.from(headerToken));
}
