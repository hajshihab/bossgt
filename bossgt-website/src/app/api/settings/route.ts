import { NextResponse } from "next/server";

// In-memory settings (replace with DB in production)
let settings = {
  siteName: "BOSSGT",
  logo: "",
  primaryColor: "#38bdf8",
  contactEmail: "",
};

// GET: /api/settings
export async function GET() {
  return NextResponse.json(settings);
}

// POST: /api/settings
export async function POST(req: Request) {
  const data = await req.json();
  settings = { ...settings, ...data };
  return NextResponse.json(settings);
}
