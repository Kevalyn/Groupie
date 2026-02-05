import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createGroupSchema } from "@/lib/validators";
import { getSessionUser } from "@/lib/auth";
import { validateCsrfToken } from "@/lib/csrf";

export async function GET() {
  const groups = await prisma.group.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { members: true } }
    }
  });

  return NextResponse.json({
    groups: groups.map((group) => ({
      id: group.id,
      title: group.title,
      description: group.description,
      category: group.category,
      city: group.city,
      area: group.area,
      deadlineAt: group.deadlineAt,
      status: group.status,
      maxMembers: group.maxMembers,
      memberCount: group._count.members
    }))
  });
}

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
  const parsed = createGroupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const group = await prisma.group.create({
    data: {
      ownerId: user.id,
      title: parsed.data.title,
      description: parsed.data.description,
      category: parsed.data.category,
      city: parsed.data.city,
      area: parsed.data.area,
      deadlineAt: new Date(parsed.data.deadlineAt),
      maxMembers: parsed.data.maxMembers,
      members: {
        create: {
          userId: user.id,
          role: "owner"
        }
      }
    }
  });

  return NextResponse.json({ group });
}
