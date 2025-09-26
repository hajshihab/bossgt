// DELETE: /api/products?id=123
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  try {
    await prisma.product.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: /api/products
export async function GET() {
  const products = await prisma.product.findMany();
  // Parse specs/images JSON strings back to arrays
  const parsed = products.map((p: any) => ({
    ...p,
    specs: p.specs ? JSON.parse(p.specs) : [],
    images: p.images ? JSON.parse(p.images) : [],
  }));
  return NextResponse.json(parsed);
}

// POST: /api/products
export async function POST(req: Request) {
  const data = await req.json();
  const product = await prisma.product.create({
    data: {
      name: data.name,
      category: data.category,
      specs: JSON.stringify(data.specs || []),
      images: JSON.stringify(data.images || []),
    },
  });
  // Parse specs/images for response
  return NextResponse.json({
    ...product,
    specs: product.specs ? JSON.parse(product.specs) : [],
    images: product.images ? JSON.parse(product.images) : [],
  });
}
