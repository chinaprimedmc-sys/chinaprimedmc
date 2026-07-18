import { NextResponse } from "next/server";

import { inquirySchema } from "@/lib/inquiries/schema";
import { createInquiry } from "@/lib/inquiries/supabase";
import { consumeRateLimit, hashRateLimitKey } from "@/lib/security/rate-limit";

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

  let stage = "request-setup";

  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const contact = parsed.data.email || parsed.data.whatsapp || parsed.data.phone;
    stage = "rate-limit-ip";
    const ipAllowed = await consumeRateLimit("inquiry-ip", await hashRateLimitKey(ip), 6, 3600);
    stage = "rate-limit-contact";
    const contactAllowed = await consumeRateLimit(
      "inquiry-contact",
      await hashRateLimitKey(contact),
      3,
      86400,
    );
    if (!ipAllowed || !contactAllowed) {
      return NextResponse.json(
        { error: "Too many submissions. Please contact us on WhatsApp if you need help." },
        { status: 429 },
      );
    }
    stage = "turnstile";
    if (!(await verifyTurnstile(parsed.data.turnstileToken, ip))) {
      return NextResponse.json(
        { error: "Security check failed. Please try again." },
        { status: 400 },
      );
    }
    stage = "database-write";
    await createInquiry(parsed.data);
    stage = "notification";
    await notifyInquiry(parsed.data).catch((error) =>
      console.error("Inquiry notification failed", error),
    );
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Inquiry submission failed", {
      stage,
      error: summarizeInquiryError(error),
    });
    return NextResponse.json(
      { error: "We could not save your inquiry. Please try again or contact us on WhatsApp." },
      { status: 503 },
    );
  }
}

function summarizeInquiryError(error: unknown) {
  if (!(error instanceof Error)) return "Unknown error";

  const supabaseStatus = error.message.match(/^Supabase request failed \((\d{3})\)/)?.[1];
  if (supabaseStatus) return `Supabase request failed (${supabaseStatus})`;
  if (
    error.message.startsWith("Supabase ") &&
    error.message.endsWith("configuration is missing.")
  ) {
    return error.message;
  }

  return error.name;
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token, remoteip: ip });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    cache: "no-store",
  });
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

async function notifyInquiry(input: import("@/lib/inquiries/schema").InquiryInput) {
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhook) return;
  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: "inquiry.created", inquiry: input }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
}
