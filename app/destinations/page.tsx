import type { Metadata } from "next";

import { DestinationExplorer } from "@/components/destinations/destination-explorer";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import {
  getPublicDestinationHub,
  getPublicDestinations,
  getPublicSiteSettings,
} from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "China Destinations for Private Journeys",
  description:
    "Explore Beijing, Xi'an, Shanghai, Chengdu, Chongqing, Leshan, Jiuzhaigou and Zhangjiajie, each connected to a real private China journey.",
  path: "/destinations",
  image: "/home/beijing-forbidden-city-1400.webp",
});

export default async function DestinationsPage() {
  const [hub, destinations, settings] = await Promise.all([
    getPublicDestinationHub(),
    getPublicDestinations(),
    getPublicSiteSettings(),
  ]);
  const pageUrl = new URL("/destinations", siteConfig.url).toString();

  return (
    <main className="min-h-svh overflow-x-clip bg-[#f7f7f3]">
      <JsonLd
        id="destinations-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "China destinations for private journeys",
          description:
            "An interest-led guide to China's major cultural, landscape, food and city destinations for private international travelers.",
          url: pageUrl,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: destinations.length,
            itemListElement: destinations.map((destination, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "TouristDestination",
                name: destination.name,
                description: destination.summary,
                url: new URL(`/destinations/${destination.slug}`, siteConfig.url).toString(),
              },
            })),
          },
        }}
      />
      <JsonLd
        id="destinations-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ])}
      />
      <SiteNavigation
        tone="light"
        items={settings.navigation}
        cta={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
      />
      <DestinationExplorer
        content={hub}
        destinations={destinations}
        journeys={hub.featuredJourneys.map((journey) => ({
          title: journey.title,
          route: journey.route,
          duration: journey.duration_label,
          href: `/tours/${journey.slug}`,
          image: journey.hero_image
            ? {
                src: journey.hero_image.url,
                alt: journey.hero_image.alt_text,
                objectPosition: journey.hero_image.object_position,
              }
            : undefined,
        }))}
      />
      <SiteFooter
        columns={[
          {
            title: "Destination guides",
            items: destinations.map((destination) => ({
              label: destination.name,
              href: `/destinations/${destination.slug}`,
            })),
          },
          {
            title: "Explore",
            items: [
              { label: "Private Journeys", href: "/tours" },
              { label: "Travel Styles", href: "/styles" },
              { label: "Journal", href: "/journal" },
              { label: "Start Planning", href: "/start-planning" },
            ],
          },
        ]}
        social={[]}
      />
    </main>
  );
}
