import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { validateCsrfToken } from "@/lib/csrf";

const reportSchema = z.object({
  targetType: z.enum(["USER", "MESSAGE"]),
  targetId: z.string().min(4),
  reason: z.string().min(3).max(300)
});

export async function POST(req: NextRequest) {
  const csrf = req.headers.get("x-csrf-token") ?? undefined;
  if (!validateCsrfToken(csrf)) {
    return NextResponse.json({ error: "Nieprawidłowy token CSRF." }, { status: 403 });
  }

  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Musisz się zalogować." }, { status: 401 });
  }

  const body = await req.json();
  const parsed = reportSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const report = await prisma.report.create({
    data: {
      reporterId: user.id,
      targetType: parsed.data.targetType,
      targetUserId: parsed.data.targetType === "USER" ? parsed.data.targetId : null,
      targetMessageId: parsed.data.targetType === "MESSAGE" ? parsed.data.targetId : null,
      reason: parsed.data.reason
    }
  });

  return NextResponse.json({ ok: true, report });
}
