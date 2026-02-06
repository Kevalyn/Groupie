import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { CSRF_COOKIE_NAME } from "@/lib/csrf";

export async function GET() {
  const jar = cookies();
  let token = jar.get(CSRF_COOKIE_NAME)?.value;

  if (!token) {
    token = crypto.randomBytes(16).toString("hex");
    jar.set(CSRF_COOKIE_NAME, token, {
      httpOnly: false, // you’re using double-submit token via meta/header
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }

  return NextResponse.json({ token });
}
