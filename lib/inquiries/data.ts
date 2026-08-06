import "server-only";

import { supabaseRest } from "@/lib/supabase/server";

export type InquiryRecord = {
  id: string;
  created_at: string;
  status: "new" | "contacted" | "qualified" | "proposal_sent" | "won" | "lost";
  source_page: string;
  landing_page: string | null;
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  gclid: string | null;
  viewed_journeys: string[];
  journey_slug: string | null;
  traveler_type: string;
  adults: number;
  children: number;
  traveling_with_seniors: boolean;
  travel_timing: string | null;
  trip_duration: string | null;
  destinations: string[];
  budget_tier: string;
  travel_styles: string[];
  preferred_contact_methods: string[];
  name: string;
  email: string | null;
  whatsapp: string | null;
  phone: string | null;
  notes: string | null;
};

export function getAdminInquiries() {
  return supabaseRest<InquiryRecord[]>("inquiries?select=*&order=created_at.desc&limit=500", {
    role: "service",
    cache: "no-store",
  });
}
