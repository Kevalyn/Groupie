import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUser } from "@/lib/auth";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const group = await prisma.group.findUnique({
    where: { id: params.id },
    include: {
      meetup: true,
      _count: { select: { members: true } }
    }
  });

  if (!group) {
    return NextResponse.json({ error: "Nie znaleziono grupy." }, { status: 404 });
  }

  const messages = await prisma.chatMessage.findMany({
    where: { groupId: group.id },
    orderBy: { createdAt: "asc" },
    include: { user: true },
    take: 50
  });

  const user = await getSessionUser();
  const isMember = user
    ? Boolean(
        await prisma.groupMember.findUnique({
          where: { userId_groupId: { userId: user.id, groupId: group.id } }
        })
      )
    : false;

  return NextResponse.json({
    group: {
      id: group.id,
      title: group.title,
      description: group.description,
      category: group.category,
      city: group.city,
      area: group.area,
      deadlineAt: group.deadlineAt,
      status: group.status,
      maxMembers: group.maxMembers,
      memberCount: group._count.members,
      meetup: group.meetup
        ? {
            time: group.meetup.time,
            place: group.meetup.place,
            notes: group.meetup.notes
          }
        : null
    },
    currentUserId: user?.id ?? null,
    isMember,
    messages: messages.map((message) => ({
      id: message.id,
      body: message.body,
      createdAt: message.createdAt,
      user: {
        id: message.user.id,
        displayName: message.user.displayName ?? "Anonymous",
        avatarUrl: message.user.avatarUrl
      }
    }))
  });
}
