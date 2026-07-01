import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { SearchResultsTemplate } from "@/features/discovery/search-results-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import type { DiscoveryType } from "@/types/discovery";

type SearchPageProps = {
  searchParams: Promise<{
    days?: string;
    family?: string;
    private?: string;
    q?: string;
    region?: string;
    style?: string;
    type?: string;
  }>;
};

const supportedTypes: DiscoveryType[] = ["destination", "tour", "experience", "article"];

export function generateMetadata(): Metadata {
  return createMetadata({
    title: "Search China Journeys",
    description:
      "Search premium China destinations, private tours, experiences, and travel guides. Save ideas into My Trip and request a customized journey.",
    path: "/search",
  });
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = normalizeSearchParam(params.q);
  const type = normalizeType(params.type);
  const filters = {
    ...(params.region ? { region: [params.region] } : {}),
    ...(params.style ? { travelStyle: [params.style] } : {}),
    ...(params.days ? { days: [params.days] } : {}),
    ...(params.family === "true" ? { familyFriendly: true } : {}),
    ...(params.private === "true" ? { privateTour: true } : {}),
  };

  return (
    <>
      <JsonLd
        id="search-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Search China Journeys",
          description:
            "Search premium China destinations, private tours, experiences, and travel guides.",
          url: new URL("/search", siteConfig.url).toString(),
          isPartOf: {
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />
      <JsonLd
        id="search-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Search", path: "/search" },
        ])}
      />
      <SearchResultsTemplate query={query} type={type} filters={filters} />
    </>
  );
}

function normalizeSearchParam(value: string | undefined) {
  return value?.trim().slice(0, 80) ?? "";
}

function normalizeType(value: string | undefined) {
  if (!value) return undefined;
  return supportedTypes.includes(value as DiscoveryType) ? (value as DiscoveryType) : undefined;
}
