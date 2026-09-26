"use client";
import { JourneyCatalog } from "@/components/tours/journey-catalog";
import { journeyCatalog } from "@/content/tours/catalog";
export function HomeJourneyFinder() {
  return <JourneyCatalog items={journeyCatalog} variant="home" />;
}
