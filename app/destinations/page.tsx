import type { Metadata } from "next";

import { destinationAsset } from "@/content/destinations/assets";
import {
  CatalogListTemplate,
  DestinationGrid,
  FilterLink,
} from "@/features/catalog/catalog-list-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getCmsCatalog } from "@/services/cms/resolver";

type DestinationsPageProps = {
  searchParams: Promise<{ region?: string; type?: string }>;
};

export const metadata: Metadata = createMetadata({
  title: "China Destinations for Private Travel",
  description:
    "Explore China destinations by region and travel style, from Beijing and Chengdu to Shanghai, with private journey ideas from China Prime DMC.",
  path: "/destinations",
  image: destinationAsset.jiuzhaigouBrightLake.src,
});

export const dynamic = "force-dynamic";

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const filters = await searchParams;
  const { destinations: catalogDestinations } = await getCmsCatalog();
  const destinations = catalogDestinations.filter((destination) => {
    if (filters.region && destination.region !== filters.region) return false;
    if (filters.type && destination.type !== filters.type) return false;
    return destination.visibility.state === "published";
  });
  const regions = [...new Set(catalogDestinations.map((destination) => destination.region))];
  const types = [...new Set(catalogDestinations.map((destination) => destination.type))];

  return (
    <>
      <JsonLd
        id="destinations-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ])}
      />
      <JsonLd
        id="destinations-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "China Destinations",
          url: "https://chinaprimedmc.com/destinations",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: catalogDestinations.map((destination, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://chinaprimedmc.com/destination/${destination.slug}`,
              name: destination.name,
            })),
          },
        }}
      />
      <CatalogListTemplate
        eyebrow="Destinations"
        title="Where in China do you want the story to begin?"
        description="Browse China by region, landscape, culture, and travel rhythm. Each destination opens into highlights, best seasons, private experiences, and sample journeys."
        image={destinationAsset.jiuzhaigouBrightLake}
        countLabel={`${destinations.length} destinations`}
        filters={
          <>
            <FilterLink
              href="/destinations"
              label="All"
              active={!filters.region && !filters.type}
            />
            {regions.map((region) => (
              <FilterLink
                key={region}
                href={`/destinations?region=${encodeURIComponent(region)}`}
                label={region}
                active={filters.region === region}
              />
            ))}
            {types.map((type) => (
              <FilterLink
                key={type}
                href={`/destinations?type=${encodeURIComponent(type)}`}
                label={type}
                active={filters.type === type}
              />
            ))}
          </>
        }
      >
        <DestinationGrid destinations={destinations} />
      </CatalogListTemplate>
    </>
  );
}
