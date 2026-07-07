import { NextResponse } from "next/server";

import { orderSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = orderSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 400 }
    );
  }

  console.info("[orders] new order request", {
    name: parsed.data.name,
    itemCount: parsed.data.items.length,
    addDonation: parsed.data.addDonation,
  });

  return NextResponse.json({ success: true });
}
