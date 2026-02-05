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

  const group = await prisma.group.findUnique({ where: { id: params.id } });
  if (!group) {
    return NextResponse.json({ error: "Nie znaleziono grupy." }, { status: 404 });
  }

  const boost = await prisma.boost.create({
    data: {
      groupId: group.id,
      userId: user.id,
      amountPLN: 1
    }
  });

  return NextResponse.json({ ok: true, boost });
}
