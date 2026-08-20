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
  const name = "Private China Tours, Tailor-Made Around You";
  const description =
    "Tailor-made private China tours for 2026 and 2027 with private guides, transfers and China-based support.";

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
