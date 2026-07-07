import { NextResponse } from "next/server";

import { newsletterSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  console.info("[newsletter] new subscriber", parsed.data.email);

  return NextResponse.json({ success: true });
}
