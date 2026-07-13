import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards/feature-card";
import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { homeNavItems, primaryAction } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { createMetadata } from "@/lib/seo/metadata";

const inquiryHref =
  "mailto:chinaprimedmc@gmail.com?subject=Private%20China%20Journey%20Inquiry&body=Hi%20China%20Prime%20DMC%2C%0A%0AI%27d%20like%20help%20planning%20a%20private%20China%20journey.%0A%0ATravelers%3A%0ADates%3A%0ADestinations%20or%20interests%3A%0AComfort%20level%3A%0AKey%20concerns%3A%0A";

export const metadata: Metadata = createMetadata({
  title: "Contact China Prime DMC",
  description:
    "Contact China Prime DMC to plan a private China journey, request a first route idea, or discuss travel advisor cooperation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageContainer>
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan Your Journey", href: primaryAction.href }}
      />
      <Section spacing="spacious" className="pt-32">
        <ContentContainer size="lg" className="grid gap-10">
          <div className="max-w-4xl">
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">Contact</p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              Tell us what needs to feel easy.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              Share dates, travelers, preferred comfort level, and the questions you are unsure how
              to ask. We will reply with a thoughtful first direction.
            </p>
          </div>
          <Card className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">Private journey inquiry</h2>
              <p className="text-muted mt-2 text-sm leading-6">
                Email is the production-ready inquiry path for this release. A full backend form can
                be connected in the next operational sprint.
              </p>
            </div>
            <CtaButton href={inquiryHref}>Email China Prime DMC</CtaButton>
          </Card>
          <GridSystem columns={3}>
            <FeatureCard title="Email" description={siteConfig.email} />
            <FeatureCard
              title="Best for"
              description="Private tours, family trips, luxury routes, B2B advisor cooperation."
            />
            <FeatureCard
              title="Response focus"
              description="Routing, pacing, comfort level, logistics, and next-step planning."
            />
          </GridSystem>
        </ContentContainer>
      </Section>
      <SiteFooter
        columns={[{ title: "Explore", items: homeNavItems }]}
        social={[]}
        email={siteConfig.email}
      />
    </PageContainer>
  );
}
