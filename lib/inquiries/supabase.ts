import "server-only";

import type { InquiryInput } from "@/lib/inquiries/schema";

type SupabaseConfig = {
  url: string;
  anonKey: string;
};

function getSupabaseConfig(): SupabaseConfig {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const anonKey = process.env.SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase inquiry storage is not configured.");
  }

  return { url, anonKey };
}

export async function createInquiry(input: InquiryInput) {
  const { url, anonKey } = getSupabaseConfig();
  const response = await fetch(`${url}/rest/v1/inquiries`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      "Content-Type": "application/json",
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

  if (!response.ok) {
    const details = await response.text();
    console.error("Supabase inquiry insert failed", response.status, details);
    throw new Error("Inquiry storage failed.");
  }
}
