import { JourneyEditorialGrid } from "@/components/cards/journey-editorial-grid";
import { SiteFooter } from "@/components/footer/site-footer";
import { PageClosing } from "@/components/footer/page-closing";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { journeyCatalog } from "@/content/tours/catalog";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getPublicSiteSettings } from "@/lib/cms/public-content";

export async function JourneyDiscoveryPage({
  initialQueryString = "",
}: {
  initialQueryString?: string;
}) {
  const settings = await getPublicSiteSettings();
  const catalog = journeyCatalog;
  const path = "/tours";
  const name = "Private China Tours, Drivers & Expert Guides | AVIORA";
  const description =
    "A China-based private travel operator providing tailor-made multi-city journeys, private day tours, expert guides, professionally arranged vehicles and driver services.";

  return (
    <PageContainer>
      <JsonLd
        id="tours-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${siteConfig.url}${path}#collection`,
              name,
              description,
              url: new URL(path, siteConfig.url).toString(),
              about: { "@id": `${siteConfig.url}/#organization` },
              mainEntity: { "@id": `${siteConfig.url}${path}#journeys` },
              hasPart: [
                { "@id": `${siteConfig.url}${path}#private-services` },
                { "@id": `${siteConfig.url}${path}#signature-collection` },
                { "@id": `${siteConfig.url}${path}#day-tours` },
              ],
            },
            {
              "@type": "ItemList",
              "@id": `${siteConfig.url}${path}#journeys`,
              name: "Private China journeys",
              numberOfItems: catalog.length,
              itemListElement: catalog.map((tour, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
                item: {
                  "@type": "TouristTrip",
                  name: tour.title,
                  description: tour.hook,
                  touristType: tour.bestForSummary,
                  itinerary: tour.routeLabel,
                  url: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
                  provider: { "@id": `${siteConfig.url}/#organization` },
                },
              })),
            },
            {
              "@type": "ItemList",
              "@id": `${siteConfig.url}${path}#private-services`,
              name: "Private China travel services",
              description:
                "Private vehicle and driver arrangements, expert private guides, private day tours and tailor-made China journeys.",
              itemListElement: [
                {
                  name: "Complete private China journeys",
                  item: new URL("/tours", siteConfig.url).toString(),
                },
                {
                  name: "Private China day tours",
                  item: new URL("/tours#private-day-tours", siteConfig.url).toString(),
                },
                {
                  name: "Private vehicle and driver service in China",
                  item: new URL("/contact", siteConfig.url).toString(),
                },
                {
                  name: "Expert private guide service in China",
                  item: new URL("/contact", siteConfig.url).toString(),
                },
              ].map((service, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: service.name,
                item: service.item,
              })),
            },
            {
              "@type": "ItemList",
              "@id": `${siteConfig.url}${path}#signature-collection`,
              name: "AVIORA Signature private journeys",
              itemListElement: catalog
                .filter((tour) => tour.commercialRole === "signature")
                .slice(0, 6)
                .map((tour, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
                  name: tour.title,
                })),
            },
            {
              "@type": "ItemList",
              "@id": `${siteConfig.url}${path}#day-tours`,
              name: "Private China day tours",
              itemListElement: catalog
                .filter((tour) => tour.recommendedDaysMax <= 1)
                .map((tour, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
                  name: tour.title,
                })),
            },
          ],
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
        className="home-navigation-entrance"
        cta={{ label: "Plan My Trip", href: settings.primaryCtaHref }}
        mobileCta={{ label: "Explore Journeys", href: "/tours" }}
        mobileScrolledTools={{
          filterLabel: "Filter",
          filterEvent: "aviora:open-journey-filters",
          searchLabel: "Search",
          searchEvent: "aviora:open-journey-search",
          planLabel: "Plan My Trip",
          planHref: "/start-planning?source=journeys-toolbar",
        }}
        tone="adaptive"
        showWhatsapp={false}
        variant="default"
      />

      <JourneyEditorialGrid items={catalog} initialQueryString={initialQueryString} />

      <PageClosing intent="tours" />

      <SiteFooter />
    </PageContainer>
  );
}
