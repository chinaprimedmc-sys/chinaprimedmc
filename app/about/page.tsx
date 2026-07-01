import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards/feature-card";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { ExhibitionProofSection } from "@/components/trust/exhibition-proof-section";
import { planJourneyHref } from "@/config/public-site";
import { Section } from "@/design-system/primitives/section";
import { heroImage, storyImages } from "@/content/home/homepage";
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
      <SiteNavigation cta={{ label: "Plan Your Journey", href: planJourneyHref }} />
      <HeroLargeImage
        eyebrow="About"
        title="A China specialist for travelers who want beauty without friction."
        subtitle="China Prime DMC designs private inbound journeys with local knowledge, careful pacing, no-shopping pressure, and calm operational support for international travelers."
        image={heroImage}
        primary={{ label: "Plan My China Journey", href: planJourneyHref }}
        secondary={{ label: "Contact the Team", href: "/contact" }}
      />
      <Section spacing="default" className="bg-white">
        <ContentContainer size="lg" className="grid gap-10">
          <GridSystem columns={3}>
            <FeatureCard
              title="China ground expertise"
              description="Routes are shaped around real ground conditions: transfers, tickets, meals, timing, and traveler comfort."
            />
            <FeatureCard
              title="Private, no-shopping rhythm"
              description="We avoid exhausting checklist travel and focus on private, well-paced days that still feel full of discovery."
            />
            <FeatureCard
              title="Human care before arrival"
              description="Families, couples, older parents, halal-aware travelers, and advisors all need different planning details."
            />
          </GridSystem>
        </ContentContainer>
      </Section>
      <ExhibitionProofSection />
      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.rail}
            eyebrow="Work with us"
            title="Start with the traveler, then build the route."
            description="Tell us who is traveling, when, and what needs to feel easy. We will suggest the first shape of the journey."
            primary={{ label: "Plan My China Journey", href: planJourneyHref }}
            secondary={{ label: "Contact the Team", href: "/contact" }}
          />
        </ContentContainer>
      </Section>
      <SiteFooter />
    </PageContainer>
  );
}
