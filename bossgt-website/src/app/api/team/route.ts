import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: /api/team
export async function GET() {
  const members = await prisma.teamMember.findMany({ orderBy: { id: "desc" } });
  return NextResponse.json(members);
}

// POST: /api/team
export async function POST(req: Request) {
  const data = await req.json();
  const member = await prisma.teamMember.create({
    data: {
      name: data.name,
      role: data.role,
      bio: data.bio || null,
      image: data.image || null,
    },
  });
  return NextResponse.json(member);
}

// DELETE: /api/team?id=123
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  try {
    await prisma.teamMember.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
