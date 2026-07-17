import type { Metadata } from "next";

import { DestinationCard } from "@/components/cards/destination-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { heroImage, homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { planningCards } from "@/content/planning";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "China Travel Planning Guide",
  description:
    "Practical China travel planning for private journeys: visa structure, FAQ, family travel, senior-friendly travel, and custom route preparation.",
  path: "/planning",
  image: heroImage.src,
});

export default function PlanningPage() {
  return (
    <PageContainer>
      <JsonLd
        id="planning-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "China Travel Planning Guide",
          description:
            "Planning resources for private China travel, visa preparation, FAQ, family travel, and senior-friendly journeys.",
          url: new URL("/planning", siteConfig.url).toString(),
          hasPart: planningCards.map((card) => ({
            "@type": "WebPage",
            name: card.title,
            url: new URL(card.href, siteConfig.url).toString(),
          })),
        }}
      />
      <JsonLd
        id="planning-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Planning", path: "/planning" },
        ])}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <HeroLargeImage
        eyebrow="Planning"
        title="The quieter parts of China travel matter most."
        subtitle="Visa notes, daily comfort, family rhythm, older-parent pacing, and practical questions belong in the plan before the route looks beautiful."
        image={heroImage}
        primary={{ label: "Start Planning", href: primaryAction.href }}
        secondary={{ label: "Read FAQ", href: "/planning/faq" }}
        overlay="medium"
      />

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Planning hub"
            title="Choose the question behind the itinerary."
            description="These pages are structured for real operating notes later, while already giving users a clear path through practical concerns."
          />
          <GridSystem columns={2} gap="lg">
            {planningCards.map((card) => (
              <DestinationCard
                key={card.href}
                title={card.title}
                description={card.description}
                image={card.image}
                href={card.href}
                badges={card.badges}
                action={{ label: "Open guide", href: card.href }}
                variant="large"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Planning principles"
            title="Good route design prevents small problems from becoming the trip."
            description="This planning section keeps practical topics visible without turning the site into a generic travel manual."
          />
          <GridSystem columns={3}>
            <FeatureCard
              title="Check entry rules early"
              description="Visa and transit logic should be checked before flights, hotel sequence, and route assumptions become fixed."
            />
            <FeatureCard
              title="Design around the people"
              description="Children, older parents, couples, and advisors need different timing even when the destination list is the same."
            />
            <FeatureCard
              title="Keep contact simple"
              description="Email, WhatsApp, and phone remain clear paths so travelers can ask the practical question first."
            />
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.tea}
            eyebrow="Next step"
            title="Send the practical constraints first."
            description="Dates, ages, passport nationality, walking tolerance, dietary needs, and hotel expectations help us design a route that works in real life."
            primary={{ label: "Start Planning", href: primaryAction.href }}
            secondary={{ label: "Visa Notes", href: "/planning/visa" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Planning",
            items: [
              { label: "Visa", href: "/planning/visa" },
              { label: "FAQ", href: "/planning/faq" },
              { label: "Family Travel", href: "/family-travel" },
              { label: "Senior Travel", href: "/senior-travel" },
            ],
          },
          { title: "Explore", items: homeNavItems },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
