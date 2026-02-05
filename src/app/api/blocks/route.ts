import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { validateCsrfToken } from "@/lib/csrf";

const blockSchema = z.object({
  blockedId: z.string().min(4)
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
  const parsed = blockSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const block = await prisma.block.upsert({
    where: {
      blockerId_blockedId: {
        blockerId: user.id,
        blockedId: parsed.data.blockedId
      }
    },
    update: {},
    create: {
      blockerId: user.id,
      blockedId: parsed.data.blockedId
    }
  });

  return NextResponse.json({ ok: true, block });
}
