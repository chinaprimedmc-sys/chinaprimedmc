import type { Metadata } from "next";

import { DestinationExplorer } from "@/components/destinations/destination-explorer";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { explorerDestinations } from "@/content/destinations/explorer";
import { heroImage, homeNavItems, primaryAction } from "@/content/home/homepage";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "China Destinations for Private Journeys",
  description:
    "Explore Beijing, Xi'an, Shanghai, Chengdu, Yunnan, Guilin, Zhangjiajie, the Silk Road and more by interests, regions and realistic private-trip pacing.",
  path: "/destinations",
  image: heroImage.src,
});

export default function DestinationsPage() {
  const pageUrl = new URL("/destinations", siteConfig.url).toString();

  return (
    <main className="min-h-svh overflow-x-clip bg-[#090a09]">
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
            numberOfItems: explorerDestinations.length,
            itemListElement: explorerDestinations.map((destination, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "TouristDestination",
                name: destination.name,
                description: destination.description,
                url: destination.guideHref
                  ? new URL(destination.guideHref, siteConfig.url).toString()
                  : `${pageUrl}#${destination.id}`,
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
        tone="dark"
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />
      <DestinationExplorer />
      <SiteFooter
        columns={[
          {
            title: "Destination guides",
            items: explorerDestinations
              .filter((destination) => destination.guideHref)
              .map((destination) => ({ label: destination.name, href: destination.guideHref! })),
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
