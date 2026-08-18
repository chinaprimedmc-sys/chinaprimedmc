import { JourneyEditorialGrid } from "@/components/cards/journey-editorial-grid";
import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import type { JourneyDiscoveryProfile } from "@/content/tours/discovery-profiles";
import { journeyCatalog } from "@/content/tours/catalog";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getPublicDestinations, getPublicSiteSettings } from "@/lib/cms/public-content";

export async function JourneyDiscoveryPage({
  initialQueryString = "",
  profile,
}: {
  initialQueryString?: string;
  profile?: JourneyDiscoveryProfile;
}) {
  const [destinations, settings] = await Promise.all([
    getPublicDestinations(),
    getPublicSiteSettings(),
  ]);
  const catalog = journeyCatalog;
  const schemaCatalog = profile ? catalog.filter(profile.matches) : catalog;
  const path = profile?.path ?? "/tours";
  const name = profile?.name ?? "Private China Tours, Tailor-Made Around You";
  const description =
    profile?.metadataDescription ??
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
          ...(profile
            ? {
                about: profile.name,
                audience: {
                  "@type": "Audience",
                  audienceType: profile.name,
                },
              }
            : {}),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: schemaCatalog.length,
            itemListElement: schemaCatalog.map((tour, index) => ({
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
          ...(profile ? [{ name: profile.name, path: profile.path }] : []),
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

      <JourneyEditorialGrid
        items={catalog}
        initialQueryString={profile?.queryString ?? initialQueryString}
        hero={profile ? { ...profile.hero, service: profile.service } : undefined}
      />

      <SiteFooter
        columns={[
          {
            title: "Journeys",
            items: [
              { label: "All private journeys", href: "/tours" },
              {
                label: "Muslim-friendly travel",
                href: "/tours/discover/muslim-friendly-china",
              },
              { label: "Family journeys", href: "/tours/discover/family-china-tours" },
              {
                label: "Journeys for women",
                href: "/tours/discover/china-tours-for-women",
              },
              { label: "Easy-paced journeys", href: "/tours/discover/easy-paced-china" },
            ],
          },
          {
            title: "Destinations",
            items: destinations.slice(0, 5).map((destination) => ({
              label: destination.name,
              href: `/destinations/${destination.slug}`,
            })),
          },
          {
            title: "Planning",
            items: [
              { label: "Start planning", href: "/start-planning" },
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
