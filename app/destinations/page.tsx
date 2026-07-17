import type { Metadata } from "next";

import { DestinationCard } from "@/components/cards/destination-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { TourCard } from "@/components/cards/tour-card";
import { SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { destinations } from "@/content/destinations";
import { heroImage, homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { tours } from "@/content/tours";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Private China Destinations",
  description:
    "Explore private China destination guides for Beijing, Shanghai, Chengdu, and future China routes with family, senior, luxury, and slow-travel pacing.",
  path: "/destinations",
  image: heroImage.src,
});

export default function DestinationsPage() {
  const featuredTour = tours[0];

  return (
    <PageContainer>
      <JsonLd
        id="destinations-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Private China Destinations",
          description:
            "Destination guides for private China journeys, designed around international travelers, families, seniors, and travel advisors.",
          url: "https://chinaprimedmc.com/destinations",
          hasPart: destinations.map((destination) => ({
            "@type": "TouristDestination",
            name: destination.name,
            url: `https://chinaprimedmc.com/destinations/${destination.slug}`,
          })),
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
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <Section spacing="spacious">
        <ContentContainer size="xl" className="grid gap-10">
          <div className="max-w-4xl">
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
              Destinations
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              Choose the right China chapters before choosing the route.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              Explore practical timing, who each place suits, related tours, gallery media, and
              planning notes for the cities currently covered.
            </p>
          </div>
          <GridSystem columns={3} gap="lg">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.slug}
                title={destination.name}
                description={`${destination.hero.tagline} ${destination.hero.summary}`}
                image={destination.hero.image}
                href={`/destinations/${destination.slug}`}
                badges={[destination.region]}
                meta={[
                  {
                    label: "Best season",
                    value:
                      destination.quickFacts.find((fact) => fact.label === "Best Season")?.value ??
                      "By request",
                  },
                  {
                    label: "Stay",
                    value:
                      destination.quickFacts.find((fact) => fact.label === "Recommended Stay")
                        ?.value ?? "Flexible",
                  },
                ]}
                action={{ label: "View guide", href: `/destinations/${destination.slug}` }}
                variant={index === 0 ? "featured" : "medium"}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Planning logic"
            title="A destination is useful only when it supports the traveler."
            description="Use the guides to compare comfort, timing, and route connections before starting a custom proposal."
          />
          <GridSystem columns={3}>
            <FeatureCard
              title="Family and senior fit"
              description="Each guide records walking load, hotel logic, transfer comfort, and pacing notes for older parents or children."
            />
            <FeatureCard
              title="Season and stay length"
              description="Best-season and recommended-stay fields are exposed as quick facts, metadata, and internal linking context."
            />
            <FeatureCard
              title="Tour relationships"
              description="Destination pages link into matching private routes, so travelers can move from place inspiration to route planning."
            />
          </GridSystem>
        </ContentContainer>
      </Section>

      {featuredTour ? (
        <Section spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Route example"
              title="Start from a place, then shape the journey."
              description="The destination hub links into journey pages and keeps SEO pages from becoming isolated."
            />
            <GridSystem columns={2}>
              <TourCard
                title={featuredTour.title}
                description={featuredTour.subtitle}
                image={featuredTour.hero.image}
                href={`/tours/${featuredTour.slug}`}
                badges={featuredTour.styles.slice(0, 3)}
                meta={[
                  { label: "Length", value: featuredTour.duration },
                  { label: "Route", value: featuredTour.route },
                ]}
                action={{ label: "View route", href: `/tours/${featuredTour.slug}` }}
                variant="large"
              />
              <CtaCard
                eyebrow="Custom planning"
                title="Have a destination in mind but not the route?"
                description="Send the city, season, travelers, and comfort concerns. We will turn the destination list into a workable private route."
                primary={{ label: "Start Planning", href: primaryAction.href }}
                secondary={{ label: "Explore Tours", href: "/tours" }}
              />
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.rail}
            eyebrow="Next step"
            title="Build a route around the people traveling."
            description="The same destination can feel very different for children, older parents, photographers, couples, or advisors."
            primary={{ label: "Plan My Trip", href: primaryAction.href }}
            secondary={{ label: "See Journey Ideas", href: "/tours" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
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
              { label: "Tours", href: "/tours" },
              { label: "Journal", href: "/journal" },
              { label: "Contact", href: "/contact" },
            ],
          },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
