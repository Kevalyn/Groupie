import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rateLimit";
import { validateCsrfToken } from "@/lib/csrf";
import { otpSchema, phoneSchema } from "@/lib/validators";
import { createSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const csrf = req.headers.get("x-csrf-token") ?? undefined;
  if (!validateCsrfToken(csrf)) {
    return NextResponse.json({ error: "Nieprawidłowy token CSRF." }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const limit = rateLimit(`verify:${ip}`, 10, 1000 * 60 * 5);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Za dużo prób. Spróbuj później." }, { status: 429 });
  }

  const body = await req.json();
  const phoneParsed = phoneSchema.safeParse(body.phone);
  const otpParsed = otpSchema.safeParse(body.otp);

  if (!phoneParsed.success || !otpParsed.success) {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const latest = await prisma.otpRequest.findFirst({
    where: { phone: phoneParsed.data },
    orderBy: { createdAt: "desc" }
  });

  if (!latest || latest.expiresAt < new Date() || latest.code !== otpParsed.data) {
    return NextResponse.json({ error: "Kod wygasł lub jest nieprawidłowy." }, { status: 400 });
  }

  const user = await prisma.user.upsert({
    where: { phone: phoneParsed.data },
    update: { lastSeenAt: new Date() },
    create: {
      phone: phoneParsed.data,
      displayName: "Nowy użytkownik",
      trustScore: 50
    }
  });

  await createSession(user.id);

  return NextResponse.json({ ok: true });
}
