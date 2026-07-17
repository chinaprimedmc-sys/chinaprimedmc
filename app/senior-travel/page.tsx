import type { Metadata } from "next";

import { DestinationCard } from "@/components/cards/destination-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { SectionHeader } from "@/components/content";
import { CtaButton } from "@/components/cta";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { destinations } from "@/content/destinations";
import { homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { getAudienceGuide } from "@/content/planning";
import { tours } from "@/content/tours";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

const guide = getAudienceGuide("senior-travel");

export const metadata: Metadata = createMetadata({
  title: guide?.seo.title,
  description: guide?.seo.description,
  path: "/senior-travel",
  image: guide?.image.src,
});

export default function SeniorTravelPage() {
  if (!guide) return null;

  const seniorTours = tours.filter(
    (tour) => tour.styles.includes("Family") || tour.styles.includes("First-time China"),
  );
  const slowerDestinations = destinations.filter((destination) =>
    destination.quickFacts
      .find((fact) => fact.label === "Travel Style")
      ?.value.toLowerCase()
      .match(/slow|food|culture|family|design/),
  );

  return (
    <PageContainer>
      <JsonLd
        id="senior-travel-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Senior Travel",
          description: guide.seo.description,
          url: "https://chinaprimedmc.com/senior-travel",
          keywords: guide.seo.keywords,
        }}
      />
      <JsonLd
        id="senior-travel-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Senior Travel", path: "/senior-travel" },
        ])}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <HeroLargeImage
        eyebrow={guide.eyebrow}
        title={guide.title}
        subtitle={guide.summary}
        image={guide.image}
        primary={{ label: "Call +44 7985 052302", href: siteConfig.phoneHref }}
        secondary={{ label: "WhatsApp Us", href: "https://wa.me/447985052302" }}
        overlay="medium"
      />

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Who it suits"
            title={guide.primaryConcern}
            description="Senior-friendly does not mean less meaningful. It means the cultural depth is carried by a calmer operating plan."
          />
          <GridSystem columns={3}>
            {guide.bestFor.map((item) => (
              <FeatureCard
                key={item}
                title={item}
                description="A private route can be adjusted around this traveler's needs, energy, and preferred level of support."
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Comfort details"
            title="The route should reduce uncertainty before travel starts."
            description="These details are small on paper and large in the actual experience."
          />
          <div className="grid gap-4">
            {guide.designDetails.map((detail, index) => (
              <Card key={detail.title} className="grid gap-4 p-5 md:grid-cols-[auto_1fr] md:p-6">
                <div className="bg-foreground text-background grid size-12 place-items-center rounded text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <Badge>Senior-friendly</Badge>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.025em]">
                    {detail.title}
                  </h2>
                  <p className="text-muted mt-3 text-sm leading-7">{detail.description}</p>
                  <p className="text-muted mt-3 text-xs leading-6">{detail.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Route examples"
            title="Use a classic route, then soften the rhythm."
            description="First-time and family-aware routes are useful starting points because they already expose pacing, transfer, and hotel decisions."
          />
          <GridSystem columns={2}>
            {seniorTours.map((tour) => (
              <DestinationCard
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
                action={{ label: "View adaptable route", href: `/tours/${tour.slug}` }}
                variant="large"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Gentler chapters"
            title="Places that can support slower days."
            description="Each destination still needs local route design, but these chapters often work well for calmer pacing."
          />
          <GridSystem columns={3}>
            {slowerDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                title={destination.name}
                description={`${destination.hero.tagline} ${destination.hero.summary}`}
                image={destination.hero.image}
                href={`/destinations/${destination.slug}`}
                badges={[destination.region]}
                action={{ label: "View guide", href: `/destinations/${destination.slug}` }}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.tea}
            eyebrow="Talk first"
            title={guide.ctaTitle}
            description={guide.ctaDescription}
            primary={{ label: "Call +44 7985 052302", href: siteConfig.phoneHref }}
            secondary={{ label: "Send WhatsApp", href: "https://wa.me/447985052302" }}
          />
        </ContentContainer>
      </Section>

      <Section spacing="compact" className="bg-white">
        <ContentContainer size="md" className="grid gap-3 md:grid-cols-3">
          <CtaButton href={siteConfig.phoneHref} size="lg" className="w-full">
            Call {siteConfig.phone}
          </CtaButton>
          <CtaButton
            href="https://wa.me/447985052302"
            variant="outline"
            size="lg"
            className="w-full"
          >
            WhatsApp
          </CtaButton>
          <CtaButton
            href={`mailto:${siteConfig.email}`}
            variant="outline"
            size="lg"
            className="w-full"
          >
            Email
          </CtaButton>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Senior Planning",
            items: [
              { label: "Planning FAQ", href: "/planning/faq" },
              { label: "Visa Notes", href: "/planning/visa" },
              { label: "Contact", href: "/contact" },
            ],
          },
          { title: "Explore", items: homeNavItems },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
