import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: /api/certificates
export async function GET() {
  const certificates = await prisma.certificate.findMany({ orderBy: { id: "desc" } });
  return NextResponse.json(certificates);
}

// POST: /api/certificates
export async function POST(req: Request) {
  const data = await req.json();
  const certificate = await prisma.certificate.create({
    data: {
      title: data.title,
      issuer: data.issuer,
      image: data.image || null,
    },
  });
  return NextResponse.json(certificate);
}

// DELETE: /api/certificates?id=123
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  try {
    await prisma.certificate.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
