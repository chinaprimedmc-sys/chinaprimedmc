import "server-only";

import type { InquiryInput } from "@/lib/inquiries/schema";

import { supabaseRest } from "@/lib/supabase/server";

export async function createInquiry(input: InquiryInput) {
  const baseRecord = {
    source_page: input.sourcePage,
    journey_slug: input.journeySlug || null,
    traveler_type: input.travelerType,
    adults: input.adults,
    children: input.children,
    traveling_with_seniors: input.travelingWithSeniors,
    travel_timing: input.timing || null,
    trip_duration: input.duration || null,
    destinations: input.destinations,
    budget_tier: input.budgetTier,
    travel_styles: input.styles,
    preferred_contact_methods: input.contactMethods,
    name: input.name,
    email: input.email || null,
    whatsapp: input.whatsapp || null,
    phone: input.phone || null,
    notes: input.notes || null,
  };

  try {
    await insertInquiry({
      ...baseRecord,
      landing_page: input.landingPage || null,
      referrer: input.referrer || null,
      utm_source: input.utmSource || null,
      utm_medium: input.utmMedium || null,
      utm_campaign: input.utmCampaign || null,
      utm_content: input.utmContent || null,
      utm_term: input.utmTerm || null,
      gclid: input.gclid || null,
      viewed_journeys: input.viewedJourneys,
    });
  } catch (error) {
    if (!isMissingAttributionColumnError(error)) throw error;

    await insertInquiry(baseRecord);
  }
}

async function insertInquiry(record: Record<string, unknown>) {
  await supabaseRest("inquiries", {
    role: "service",
    method: "POST",
    headers: {
      Prefer: "return=minimal",
    },
    body: JSON.stringify(record),
    cache: "no-store",
  });
}

function isMissingAttributionColumnError(error: unknown) {
  return (
    error instanceof Error &&
    /column inquiries\.(landing_page|referrer|utm_|gclid|viewed_journeys)/.test(error.message)
  );
}
