import "server-only";

import type { InquiryInput } from "@/lib/inquiries/schema";

import { isMissingAttributionColumnError } from "@/lib/inquiries/supabase-compat";
import { supabaseRest } from "@/lib/supabase/server";

export async function createInquiry(input: InquiryInput) {
  const baseRecord = {
    source_page: input.sourcePage,
    journey_slug: input.journeySlug || null,
    traveler_type: input.travelerType || null,
    adults: input.adults,
    children: input.children,
    includes_older_travelers: input.travelingWithSeniors,
    travel_window: input.timing || null,
    trip_length: input.duration || null,
    destinations: input.destinations,
    comfort_level: input.budgetTier || null,
    journey_styles: input.styles,
    name: input.name,
    email: input.email || null,
    whatsapp: input.whatsapp || null,
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
