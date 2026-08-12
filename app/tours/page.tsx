import type { Metadata } from "next";

import { JourneyEditorialGrid } from "@/components/cards/journey-editorial-grid";
import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { journeyCatalog } from "@/content/tours/catalog";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getPublicDestinations, getPublicSiteSettings } from "@/lib/cms/public-content";

export const metadata: Metadata = createMetadata({
  title: "Private China Journeys | Tailor-Made Travel by AVIORA",
  description:
    "Explore private China journeys through Beijing, Xi'an, Chengdu and Shanghai, with thoughtful routes, considered hotels and local support.",
  path: "/tours",
});

export default async function ToursPage() {
  const [destinations, settings] = await Promise.all([
    getPublicDestinations(),
    getPublicSiteSettings(),
  ]);
  const catalog = journeyCatalog;

  return (
    <PageContainer>
      <JsonLd
        id="tours-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Private China Journeys",
          description:
            "Tailor-made private China journey ideas for couples, families, older travelers and small private groups.",
          url: new URL("/tours", siteConfig.url).toString(),
          hasPart: catalog.map((tour) => ({
            "@type": "TouristTrip",
            name: tour.title,
            url: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
          })),
        }}
      />
      <JsonLd
        id="tours-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journeys", path: "/tours" },
        ])}
      />
      <SiteNavigation
        items={settings.navigation}
        cta={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
        tone="light"
      />

      <JourneyEditorialGrid items={catalog} />

      <SiteFooter
        columns={[
          {
            title: "Journeys",
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
        social={settings.socialLinks}
      />
    </PageContainer>
  );
}
