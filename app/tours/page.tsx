import type { Metadata } from "next";

import { JourneyEditorialGrid } from "@/components/cards/journey-editorial-grid";
import { SectionHeader } from "@/components/content";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { journeyCatalog } from "@/content/tours/catalog";
import { destinations } from "@/content/destinations";
import { homeNavItems, primaryAction } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { cmsJourneyToCatalogItem } from "@/lib/cms/adapters";
import { getPublishedCmsJourneys } from "@/lib/cms/data";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours and Custom Itinerary Ideas",
  description:
    "Explore private China journey ideas for first-time visitors, families, couples, and luxury travelers. Every route is shaped around your travelers.",
  path: "/tours",
});

export default async function ToursPage() {
  const cmsJourneys = await getPublishedCmsJourneys();
  const cmsCatalogItems = cmsJourneys
    .map(cmsJourneyToCatalogItem)
    .filter((journey): journey is NonNullable<typeof journey> => Boolean(journey));
  const cmsSlugs = new Set(cmsCatalogItems.map((journey) => journey.slug));
  const catalog = [
    ...journeyCatalog.filter((journey) => !cmsSlugs.has(journey.slug)),
    ...cmsCatalogItems,
  ];

  return (
    <PageContainer>
      <JsonLd
        id="tours-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Private China Tours",
          description:
            "Private China journey ideas for international travelers, families, seniors, and travel advisors.",
          url: "https://chinaprimedmc.com/tours",
          hasPart: catalog.map((tour) => ({
            "@type": "TouristTrip",
            name: tour.title,
            url: `https://chinaprimedmc.com/tours/${tour.slug}`,
          })),
        }}
      />
      <JsonLd
        id="tours-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tours", path: "/tours" },
        ])}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-10">
          <SectionHeader
            eyebrow="Journeys"
            title="The starting point is never a package."
            description="Choose a route direction, a travel style, or simply a city you want to understand. We shape the first proposal around who is traveling, how they like to move, and what should be left out."
          />
          <JourneyEditorialGrid items={catalog} />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Tours",
            items: catalog.map((journey) => ({
              label: journey.title,
              href: journey.href,
            })),
          },
          {
            title: "Destinations",
            items: destinations.map((destination) => ({
              label: destination.name,
              href: `/destinations/${destination.slug}`,
            })),
          },
          {
            title: "Planning",
            items: [
              { label: "Journal", href: "/journal" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ],
          },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
