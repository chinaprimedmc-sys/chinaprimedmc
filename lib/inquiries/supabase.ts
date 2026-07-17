import "server-only";

import type { InquiryInput } from "@/lib/inquiries/schema";

import { supabaseRest } from "@/lib/supabase/server";

export async function createInquiry(input: InquiryInput) {
  await supabaseRest("inquiries", {
    role: "service",
    method: "POST",
    headers: {
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
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
    }),
    cache: "no-store",
  });
}
