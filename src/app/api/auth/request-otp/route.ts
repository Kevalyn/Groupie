import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rateLimit";
import { validateCsrfToken } from "@/lib/csrf";
import { phoneSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  const csrf = req.headers.get("x-csrf-token") ?? undefined;
  if (!validateCsrfToken(csrf)) {
    return NextResponse.json({ error: "Nieprawidłowy token CSRF." }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const limit = rateLimit(`otp:${ip}`, 5, 1000 * 60 * 5);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Za dużo prób. Spróbuj później." }, { status: 429 });
  }

  const body = await req.json();
  const parsed = phoneSchema.safeParse(body.phone);
  if (!parsed.success) {
    return NextResponse.json({ error: "Nieprawidłowy numer telefonu." }, { status: 400 });
  }

  const code = "123456";
  await prisma.otpRequest.create({
    data: {
      phone: parsed.data,
      code,
      expiresAt: new Date(Date.now() + 1000 * 60 * 10)
    }
  });

  return NextResponse.json({ ok: true });
}
