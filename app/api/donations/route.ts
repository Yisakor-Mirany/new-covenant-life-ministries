import { NextResponse } from "next/server";

import { donationSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = donationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  console.info("[donations] new donation request", {
    frequency: parsed.data.frequency,
    amount: parsed.data.amount,
    currency: parsed.data.currency,
    purpose: parsed.data.purpose,
    region: parsed.data.region,
    paymentMethod: parsed.data.paymentMethod,
    anonymous: parsed.data.anonymous,
  });

  return NextResponse.json({ success: true });
}
