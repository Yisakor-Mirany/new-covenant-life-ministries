import { NextResponse } from "next/server";

import { volunteerSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = volunteerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  console.info("[volunteer] new application", {
    name: parsed.data.name,
    interest: parsed.data.interest,
  });

  return NextResponse.json({ success: true });
}
