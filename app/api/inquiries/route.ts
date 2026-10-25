import { NextResponse } from "next/server";

import { inquirySchema } from "@/lib/inquiries/schema";
import { createInquiry } from "@/lib/inquiries/supabase";
import { consumeRateLimit, hashRateLimitKey } from "@/lib/security/rate-limit";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyCardTitle } from "@/content/tours/card-copy";
import {
  createJourneyOfferClaim,
  journeyOfferSummary,
  privateJourneyOffer,
} from "@/lib/tours/journey-offer";

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

  const offerJourney = parsed.data.campaignId
    ? journeyCatalog.find((item) => item.slug === parsed.data.journeySlug)
    : undefined;
  if (
    parsed.data.campaignId &&
    (parsed.data.campaignId !== privateJourneyOffer.id ||
      !privateJourneyOffer.active ||
      !offerJourney)
  ) {
    return NextResponse.json(
      { error: "This offer is not available for this journey. Please contact us on WhatsApp." },
      { status: 400 },
    );
  }
  const offer = offerJourney
    ? createJourneyOfferClaim({
        slug: offerJourney.slug,
        title: getJourneyCardTitle(offerJourney),
        href: offerJourney.href,
        fromUsd: offerJourney.pricing.fromUsd,
        pricingUnit: offerJourney.pricing.pricingUnit,
        basePartySize: offerJourney.pricing.basePartySize,
        cardBasis: offerJourney.pricing.cardBasis,
      })
    : undefined;
  // Store the server-calculated price, never a client-supplied reference price or discount.
  // Append the offer summary so client-supplied context in notes is preserved.
  const inquiry = offer
    ? {
        ...parsed.data,
        notes: [parsed.data.notes, journeyOfferSummary(offer)].filter(Boolean).join("\n\n"),
      }
    : parsed.data;

  let stage = "request-setup";

  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const contact = parsed.data.email || parsed.data.whatsapp;
    stage = "turnstile";
    if (
      !(await verifyTurnstileToken(parsed.data.turnstileToken, ip, new URL(request.url).hostname))
    ) {
      return NextResponse.json(
        { error: "Security check failed. Please try again." },
        { status: 400 },
      );
    }

    stage = "rate-limit-ip";
    const ipAllowed = await consumeRateLimit("inquiry-ip-v2", await hashRateLimitKey(ip), 20, 3600);
    if (!ipAllowed) {
      return NextResponse.json(
        {
          error:
            "We have received several requests from this connection. Please wait a little and try again.",
        },
        { status: 429, headers: { "Retry-After": "3600" } },
      );
    }

    stage = "rate-limit-contact";
    const contactAllowed = await consumeRateLimit(
      "inquiry-contact-v2",
      await hashRateLimitKey(contact),
      5,
      86400,
    );
    if (!contactAllowed) {
      return NextResponse.json(
        {
          error:
            "We already have several requests for these contact details. Please contact us on WhatsApp if you need anything else today.",
        },
        { status: 429, headers: { "Retry-After": "86400" } },
      );
    }
    stage = "database-write";
    await createInquiry(inquiry);
    stage = "notification";
    await notifyInquiry(inquiry).catch((error) =>
      console.error("Inquiry notification failed", error),
    );
    return NextResponse.json({ ok: true, ...(offer ? { offer } : {}) }, { status: 201 });
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

async function notifyInquiry(input: import("@/lib/inquiries/schema").InquiryInput) {
  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhook) return;
  const inquiry = Object.fromEntries(
    Object.entries(input).filter(([key]) => key !== "turnstileToken" && key !== "website"),
  );
  const webhookUrl = new URL(webhook);
  if (webhookUrl.protocol !== "https:") throw new Error("Inquiry webhook must use HTTPS.");
  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: "inquiry.created", inquiry }),
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error(`Webhook returned ${response.status}`);
}
