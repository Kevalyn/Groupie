import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { validateCsrfToken } from "@/lib/csrf";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const csrf = req.headers.get("x-csrf-token") ?? undefined;
  if (!validateCsrfToken(csrf)) {
    return NextResponse.json({ error: "Nieprawidłowy token CSRF." }, { status: 403 });
  }

  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Musisz się zalogować." }, { status: 401 });
  }

  await prisma.groupMember.deleteMany({
    where: { userId: user.id, groupId: params.id }
  });

  return NextResponse.json({ ok: true });
}
