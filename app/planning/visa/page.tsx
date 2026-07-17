import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards/feature-card";
import { SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { heroImage, homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { visaFacts, visaSteps } from "@/content/planning";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "China Visa and Transit Planning",
  description:
    "A structured China visa and transit planning guide for private travelers, including current policy checks and document preparation.",
  path: "/planning/visa",
  image: heroImage.src,
});

export default function VisaPlanningPage() {
  return (
    <PageContainer>
      <JsonLd
        id="visa-planning-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Planning", path: "/planning" },
          { name: "Visa", path: "/planning/visa" },
        ])}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <HeroLargeImage
        eyebrow="Visa planning"
        title="Entry rules should shape the route before the route shapes the trip."
        subtitle="This page is a structured home for current visa and transit notes. Real policy text should be verified before ticketing and again before departure."
        image={heroImage}
        primary={{ label: "Ask About Entry", href: primaryAction.href }}
        secondary={{ label: "Planning FAQ", href: "/planning/faq" }}
        overlay="medium"
      />

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="At a glance"
            title="Keep policy details structured, visible, and replaceable."
            description="Entry requirements should be verified against passport nationality, route, and travel dates before tickets are issued."
          />
          <GridSystem columns={4}>
            {visaFacts.map((fact) => (
              <FeatureCard key={fact.label} title={fact.value} description={fact.helper} />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Process"
            title="A calm entry check has a sequence."
            description="Transit visa-free planning depends on the whole route, not only the city name."
          />
          <div className="grid gap-4">
            {visaSteps.map((step, index) => (
              <Card key={step.title} className="grid gap-4 p-5 md:grid-cols-[auto_1fr] md:p-6">
                <div className="bg-foreground text-background grid size-12 place-items-center rounded text-sm font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <Badge>Visa step</Badge>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.025em]">{step.title}</h2>
                  <p className="text-muted mt-3 text-sm leading-7">{step.description}</p>
                  <p className="text-muted mt-3 text-xs leading-6">{step.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.rail}
            eyebrow="Route check"
            title="Send passport nationality and the intended entry route early."
            description="We can flag route questions before hotels and domestic transport become harder to change."
            primary={{ label: "Start Entry Check", href: primaryAction.href }}
            secondary={{ label: "Senior Travel", href: "/senior-travel" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Planning",
            items: [
              { label: "Planning Hub", href: "/planning" },
              { label: "FAQ", href: "/planning/faq" },
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
