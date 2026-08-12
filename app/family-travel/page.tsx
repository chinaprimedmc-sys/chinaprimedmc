import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

const guide = getAudienceGuide("family-travel");

export const metadata: Metadata = createMetadata({
  title: guide?.seo.title,
  description: guide?.seo.description,
  path: "/family-travel",
  image: guide?.image.src,
});

export default function FamilyTravelPage() {
  if (!guide) notFound();

  const familyTours = tours.filter((tour) => tour.styles.includes("Family"));
  const familyDestinations = destinations.filter((destination) =>
    destination.quickFacts
      .find((fact) => fact.label === "Suitable For")
      ?.value.toLowerCase()
      .includes("famil"),
  );

  return (
    <PageContainer>
      <JsonLd
        id="family-travel-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Family Travel",
          description: guide.seo.description,
          url: new URL("/family-travel", siteConfig.url).toString(),
          keywords: guide.seo.keywords,
        }}
      />
      <JsonLd
        id="family-travel-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Family Travel", path: "/family-travel" },
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
        primary={{ label: "Plan My Trip", href: primaryAction.href }}
        secondary={{ label: "Browse Tours", href: "/tours/first-china-beautifully-paced" }}
        overlay="medium"
      />

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Who it suits"
            title={guide.primaryConcern}
            description="The goal is not to remove culture or depth. It is to make the day structure work for real family energy."
          />
          <GridSystem columns={3}>
            {guide.bestFor.map((item) => (
              <FeatureCard
                key={item}
                title={item}
                description="The route can be shaped around the group's interests, energy, ages, and comfort preferences."
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Design details"
            title="Family travel changes how each day should work."
            description="Start times, meal breaks, hotel setup and the length of each visit should reflect your children's ages and interests."
          />
          <div className="grid gap-4">
            {guide.designDetails.map((detail, index) => (
              <Card key={detail.title} className="grid gap-4 p-5 md:grid-cols-[auto_1fr] md:p-6">
                <div className="bg-foreground text-background grid size-12 place-items-center rounded text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <Badge>Family planning</Badge>
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
            title="Start with family-aware route ideas."
            description="These routes remain customizable, but they already point toward softer pacing and child-friendly moments."
          />
          <GridSystem columns={2}>
            {familyTours.map((tour) => (
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
                action={{ label: "View family route", href: `/tours/${tour.slug}` }}
                variant="large"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Family-friendly chapters"
            title="Places that support softer family pacing."
            description="Compare cities through the practical details that matter when children or older relatives are traveling."
          />
          <GridSystem columns={3}>
            {familyDestinations.map((destination) => (
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
            eyebrow="Your family trip"
            title={guide.ctaTitle}
            description={guide.ctaDescription}
            primary={{ label: "Email a Family Inquiry", href: primaryAction.href }}
            secondary={{ label: "Planning FAQ", href: "/planning/faq" }}
          />
        </ContentContainer>
      </Section>

      <Section spacing="compact" className="bg-white">
        <ContentContainer size="md" className="flex flex-col gap-3 md:flex-row">
          <CtaButton
            href="https://wa.me/447985052302"
            variant="whatsappFrosted"
            className="w-full md:w-auto"
          >
            WhatsApp Family Trip Notes
          </CtaButton>
          <CtaButton
            href="mailto:chinaprimedmc@gmail.com"
            variant="outline"
            className="w-full md:w-auto"
          >
            Email chinaprimedmc@gmail.com
          </CtaButton>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Family Planning",
            items: [
              {
                label: "Beijing, Xi'an & Shanghai Private Tour",
                href: "/tours/first-china-beautifully-paced",
              },
              { label: "Planning FAQ", href: "/planning/faq" },
              { label: "Visa Notes", href: "/planning/visa" },
            ],
          },
          { title: "Explore", items: homeNavItems },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
