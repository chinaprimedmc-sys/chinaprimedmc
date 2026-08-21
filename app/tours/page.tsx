import type { Metadata } from "next";

import { JourneyDiscoveryPage } from "@/features/tours/journey-discovery-page";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours, Drivers & Expert Guides",
  description:
    "Explore AVIORA private China journeys, private day tours, vehicle-and-driver service and expert private guides. Tailor the route, pace and support around your plans with a China-based operator.",
  path: "/tours",
});

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const initialParams = await searchParams;
  return <JourneyDiscoveryPage initialQueryString={toQueryString(initialParams)} />;
}

function toQueryString(params: Record<string, string | string[] | undefined>) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === "string") query.set(key, value);
    else value?.forEach((entry) => query.append(key, entry));
  });
  return query.toString();
}
