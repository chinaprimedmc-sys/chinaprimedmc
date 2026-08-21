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
  const name = "Private China Tours, Drivers & Expert Guides";
  const description =
    "AVIORA provides Signature private China journeys, classic China routes, private day tours, vehicle-and-driver service and expert private guides, all tailored around the way you want to travel.";

  return (
    <PageContainer>
      <JsonLd
        id="tours-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name,
          description,
          url: new URL(path, siteConfig.url).toString(),
          mainEntity: {
            "@type": "ItemList",
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
              },
            })),
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "AVIORA private China travel services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Complete private China journeys",
                  serviceType: "Tailor-made multi-city private travel",
                  areaServed: "China",
                  url: new URL("/tours", siteConfig.url).toString(),
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Classic China journeys",
                  serviceType: "Private multi-day China routes and regional journeys",
                  areaServed: "China",
                  url: new URL("/tours#classic-china-journeys", siteConfig.url).toString(),
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Private China day tours",
                  serviceType: "Professionally handled private day tours in China",
                  areaServed: "China",
                  url: new URL("/tours", siteConfig.url).toString(),
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Private vehicle and driver service in China",
                  serviceType: "Private vehicle with professional driver",
                  areaServed: "China",
                  url: new URL("/tours", siteConfig.url).toString(),
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Expert private guide service in China",
                  serviceType: "English-speaking private guide",
                  areaServed: "China",
                  url: new URL("/tours", siteConfig.url).toString(),
                },
              },
            ],
          },
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
        cta={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
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
