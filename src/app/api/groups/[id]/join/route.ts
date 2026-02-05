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

  const group = await prisma.group.findUnique({
    where: { id: params.id },
    include: { _count: { select: { members: true } } }
  });

  if (!group) {
    return NextResponse.json({ error: "Nie znaleziono grupy." }, { status: 404 });
  }

  if (group._count.members >= group.maxMembers) {
    return NextResponse.json({ error: "Grupa jest pełna." }, { status: 400 });
  }

  await prisma.groupMember.upsert({
    where: { userId_groupId: { userId: user.id, groupId: group.id } },
    update: {},
    create: { userId: user.id, groupId: group.id }
  });

  return NextResponse.json({ ok: true });
}
