"use client";
import { InquiryForm } from "./inquiry-form";
export function StartPlanningForm({
  savedJourneys = [],
  currentJourney,
  preference,
  matchSummary,
  placement = "start_planning_page",
}: {
  savedJourneys?: string[];
  currentJourney?: { slug: string; title: string };
  preference?: string;
  matchSummary?: string;
  placement?: string;
}) {
  const summary = [
    currentJourney?.title,
    savedJourneys.length ? "Saved journeys: " + savedJourneys.join(", ") : "",
    preference ? "Planning preference: " + preference.replaceAll("-", " ") : "",
    matchSummary ? "Journey finder: " + matchSummary : "",
  ]
    .filter(Boolean)
    .join("\n");
  return <InquiryForm placement={placement} journeySlug={currentJourney?.slug} summary={summary} />;
}
