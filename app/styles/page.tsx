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
import { siteConfig } from "@/config/site";
import { destinations } from "@/content/destinations";
import { homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { tours } from "@/content/tours";
import { travelStyles } from "@/content/travel-styles";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Private China Travel Styles",
  description:
    "Explore private China travel styles for families, quiet luxury travelers, slow travel, photography, and multi-generational journeys.",
  path: "/styles",
});

export default function StylesPage() {
  return (
    <PageContainer>
      <JsonLd
        id="styles-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Private China Travel Styles",
          description:
            "Travel style guides for private China journey planning, including family, quiet luxury, slow travel, and photography-led routes.",
          url: new URL("/styles", siteConfig.url).toString(),
          hasPart: travelStyles.map((style) => ({
            "@type": "WebPage",
            name: style.title,
            url: new URL(`/styles/${style.slug}`, siteConfig.url).toString(),
          })),
        }}
      />
      <JsonLd
        id="styles-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Travel Styles", path: "/styles" },
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
              Travel styles
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              The same China route should feel different for different travelers.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              See how hotel choice, guide service, transport and daily pace can change the same
              route for different people.
            </p>
          </div>
          <GridSystem columns={2} gap="lg">
            {travelStyles.map((style) => (
              <DestinationCard
                key={style.slug}
                title={style.title}
                description={style.summary}
                image={style.image}
                href={`/styles/${style.slug}`}
                badges={[style.eyebrow]}
                action={{ label: "Explore style", href: `/styles/${style.slug}` }}
                variant="large"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Design principles"
            title="Your travel style should change the actual trip."
            description="The same cities can feel completely different depending on timing, hotel choice, guide service and how much you do each day."
          />
          <GridSystem columns={3}>
            <FeatureCard
              title="Pace"
              description="Start times, walking blocks, transfer days, and rest windows are adjusted before the route is confirmed."
            />
            <FeatureCard
              title="Comfort"
              description="Hotel location, room setup, breakfast reliability, vehicle flow, and guide judgment change the feeling of the trip."
            />
            <FeatureCard
              title="Personal priorities"
              description="Meals, photography, family needs and mobility requirements are discussed before anything is confirmed."
            />
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Route examples"
            title="Start with a route idea, then adjust the style."
            description="Use these tours as a starting point, then change the hotels, pace and experiences around your interests."
          />
          <GridSystem columns={2}>
            {tours.map((tour) => (
              <TourCard
                key={tour.slug}
                title={tour.title}
                description={tour.subtitle}
                image={tour.hero.image}
                href={`/tours/${tour.slug}`}
                badges={tour.styles.slice(0, 3)}
                meta={[
                  { label: "Length", value: tour.duration },
                  { label: "Route", value: tour.route },
                ]}
                action={{ label: "View itinerary", href: `/tours/${tour.slug}` }}
                variant="large"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.tea}
            eyebrow="Custom planning"
            title="Tell us who is traveling before choosing the itinerary."
            description="Families, older parents, couples, solo travelers and photographers need different days even when they visit the same places."
            primary={{ label: "Start Planning", href: primaryAction.href }}
            secondary={{ label: "Browse Destinations", href: "/destinations" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Styles",
            items: travelStyles.map((style) => ({
              label: style.title,
              href: `/styles/${style.slug}`,
            })),
          },
          {
            title: "Destinations",
            items: destinations.map((destination) => ({
              label: destination.name,
              href: `/destinations/${destination.slug}`,
            })),
          },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
