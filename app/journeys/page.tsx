import type { Metadata } from "next";

import { destinationAsset } from "@/content/destinations/assets";
import { CatalogListTemplate } from "@/features/catalog/catalog-list-template";
import { JourneyFilterPanel } from "@/features/catalog/journey-filter-panel";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getCmsCatalog } from "@/services/cms/resolver";

export const metadata: Metadata = createMetadata({
  title: "Private China Journeys",
  description:
    "Explore private China journey proposals by luxury, classic, family, and custom travel style.",
  path: "/journeys",
  image: destinationAsset.greatWallJinshanling.src,
});

export const dynamic = "force-dynamic";

export default async function JourneysPage() {
  const { journeys: catalogJourneys } = await getCmsCatalog();
  const journeys = catalogJourneys.filter((journey) => journey.visibility.state === "published");
  const categories = [...new Set(journeys.map((journey) => journey.category))];
  const styles = [...new Set(journeys.flatMap((journey) => journey.styles))];

  return (
    <>
      <JsonLd
        id="journeys-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journeys", path: "/journeys" },
        ])}
      />
      <JsonLd
        id="journeys-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Private China Journeys",
          url: "https://chinaprimedmc.com/journeys",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: catalogJourneys.map((journey, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://chinaprimedmc.com/journey/${journey.slug}`,
              name: journey.title,
            })),
          },
        }}
      />
      <CatalogListTemplate
        eyebrow="Journeys"
        title="Start with a route. Then make it yours."
        description="These are private China journey ideas, not fixed packages. Use them to understand pacing, routing, hotels, highlights, and what kind of trip feels right."
        image={destinationAsset.greatWallJinshanling}
        countLabel=""
        filters={null}
      >
        <JourneyFilterPanel journeys={journeys} categories={categories} styles={styles} />
      </CatalogListTemplate>
    </>
  );
}
