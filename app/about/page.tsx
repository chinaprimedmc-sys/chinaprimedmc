import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards/feature-card";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Section } from "@/design-system/primitives/section";
import { heroImage, homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "About China Prime DMC",
  description:
    "Meet China Prime DMC, a premium inbound China travel specialist designing private journeys for international travelers and travel advisors.",
  path: "/about",
  image: heroImage.src,
});

export default function AboutPage() {
  return (
    <PageContainer>
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />
      <Section spacing="spacious">
        <ContentContainer size="lg" className="grid gap-10">
          <div className="max-w-4xl">
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">About</p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              A China specialist for travelers who want beauty without friction.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              China Prime DMC designs private inbound journeys with local knowledge, careful pacing,
              and calm operational support.
            </p>
          </div>
          <GridSystem columns={3}>
            <FeatureCard
              title="Local expertise"
              description="Routes are shaped around real ground conditions: transfers, tickets, meals, timing, and traveler comfort."
            />
            <FeatureCard
              title="Premium rhythm"
              description="We avoid exhausting checklist travel and focus on private, well-paced days that still feel full of discovery."
            />
            <FeatureCard
              title="Human care"
              description="Families, couples, older parents, halal-aware travelers, and advisors all need different planning details."
            />
          </GridSystem>
        </ContentContainer>
      </Section>
      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.rail}
            eyebrow="Work with us"
            title="Start with the traveler, then build the route."
            description="Tell us who is traveling, when, and what needs to feel easy. We will suggest the first shape of the journey."
            primary={{ label: "Plan My China Journey", href: primaryAction.href }}
            secondary={{ label: "Contact the Team", href: "/contact" }}
          />
        </ContentContainer>
      </Section>
      <SiteFooter columns={[{ title: "Explore", items: homeNavItems }]} social={[]} />
    </PageContainer>
  );
}
