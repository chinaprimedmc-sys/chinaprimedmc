import type { Metadata } from "next";

import { JourneyDiscoveryPage } from "@/features/tours/journey-discovery-page";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tailor-Made China Tours 2026–2027",
  description:
    "Compare private China tours for 2026–2027, then tailor the route, pace and hotels with local specialists. Private guides and no forced shopping.",
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
