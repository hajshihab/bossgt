import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: /api/users
export async function GET() {
  const users = await prisma.user.findMany({ orderBy: { id: "desc" }, select: { id: true, username: true, role: true, createdAt: true, updatedAt: true } });
  return NextResponse.json(users);
}

// POST: /api/users
export async function POST(req: Request) {
  const data = await req.json();
  // TODO: Hash password in production
  const user = await prisma.user.create({
    data: {
      username: data.username,
      password: data.password,
      role: data.role || "admin",
    },
    select: { id: true, username: true, role: true, createdAt: true, updatedAt: true },
  });
  return NextResponse.json(user);
}

// DELETE: /api/users?id=123
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  try {
    await prisma.user.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
