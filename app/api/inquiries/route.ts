import { NextResponse } from "next/server";

import { inquirySchema } from "@/lib/inquiries/schema";
import { createInquiry } from "@/lib/inquiries/supabase";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please review the highlighted details.",
        fields: parsed.error.flatten().fieldErrors,
        formErrors: parsed.error.flatten().formErrors,
      },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await createInquiry(parsed.data);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "We could not save your inquiry. Please try again or contact us on WhatsApp." },
      { status: 503 },
    );
  }
}
