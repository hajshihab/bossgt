import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: /api/blog
export async function GET() {
  const posts = await prisma.blogPost.findMany({ orderBy: { id: "desc" } });
  return NextResponse.json(posts);
}

// POST: /api/blog
export async function POST(req: Request) {
  const data = await req.json();
  const post = await prisma.blogPost.create({
    data: {
      title: data.title,
      content: data.content,
      image: data.image || null,
    },
  });
  return NextResponse.json(post);
}

// DELETE: /api/blog?id=123
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  try {
    await prisma.blogPost.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
