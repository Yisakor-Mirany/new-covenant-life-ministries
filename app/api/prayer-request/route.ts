import { NextResponse } from "next/server";

import { prayerRequestSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = prayerRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  console.info("[prayer-request] new request received", {
    confidential: parsed.data.confidential,
  });

  return NextResponse.json({ success: true });
}
