import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";
import { validateCsrfToken } from "@/lib/csrf";
import { chatMessageSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const csrf = req.headers.get("x-csrf-token") ?? undefined;
  if (!validateCsrfToken(csrf)) {
    return NextResponse.json({ error: "Nieprawidłowy token CSRF." }, { status: 403 });
  }

  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Musisz się zalogować." }, { status: 401 });
  }

  const limit = rateLimit(`chat:${user.id}`, 20, 1000 * 60);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Zbyt dużo wiadomości." }, { status: 429 });
  }

  const body = await req.json();
  const parsed = chatMessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Nieprawidłowa wiadomość." }, { status: 400 });
  }

  const membership = await prisma.groupMember.findUnique({
    where: {
      userId_groupId: { userId: user.id, groupId: parsed.data.groupId }
    }
  });

  if (!membership) {
    return NextResponse.json({ error: "Brak dostępu do czatu." }, { status: 403 });
  }

  const message = await prisma.chatMessage.create({
    data: {
      groupId: parsed.data.groupId,
      userId: user.id,
      body: parsed.data.body
    },
    include: { user: true }
  });

  return NextResponse.json({
    message: {
      id: message.id,
      body: message.body,
      createdAt: message.createdAt,
      user: {
        id: message.user.id,
        displayName: message.user.displayName ?? "Anonymous",
        avatarUrl: message.user.avatarUrl
      }
    }
  });
}
