import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  // NOTE: Wire this up to an email service or CMS (e.g. Resend, Sanity) when available.
  console.info("[contact] new submission received", {
    name: parsed.data.name,
    subject: parsed.data.subject,
  });

  return NextResponse.json({ success: true });
}
