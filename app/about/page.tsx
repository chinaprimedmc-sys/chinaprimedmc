import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards/feature-card";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { verifiedCredentials } from "@/content/trust";
import { Section } from "@/design-system/primitives/section";
import { heroImage, homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "About AVIORA and China Prime DMC",
  description:
    "Meet AVIORA, the international-facing private China travel brand, and the licensed China operating company behind China Prime DMC services.",
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
              One international brand. One accountable China operator.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              AVIORA is how international travelers meet us. China Prime DMC describes the
              destination-management work behind each journey. Ground services in China are
              contracted and operated by {siteConfig.operator.englishReferenceName}, a
              Guangzhou-registered company that is {siteConfig.operator.tourismLicense.statement}.
            </p>
          </div>
          <GridSystem columns={3}>
            {verifiedCredentials.map((credential) => (
              <FeatureCard
                key={credential.title}
                title={credential.title}
                description={credential.description}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>
      <Section spacing="default" className="bg-white">
        <ContentContainer
          size="xl"
          className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div className="rounded-[1.5rem] border border-black/8 bg-[var(--bg-secondary)] p-8 md:p-12">
            <OptimizedImage
              src={siteConfig.logo}
              alt="AVIORA private China journey brand"
              width={900}
              height={600}
              className="h-auto w-full object-contain"
              frameClassName="bg-transparent"
            />
          </div>
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
              How the names connect
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight font-medium md:text-5xl">
              AVIORA speaks to the traveler. China Prime DMC delivers the ground reality.
            </h2>
            <div className="text-muted mt-6 grid gap-4 text-base leading-8">
              <p>
                AVIORA is the overseas-facing brand for private journey design, communication, and
                the customer experience.
              </p>
              <p>
                China Prime DMC expresses our role as the destination-management team coordinating
                guides, transfers, tickets, stays, and day-to-day support in China.
              </p>
              <p>
                The legal operator is {siteConfig.operator.englishReferenceName} (
                {siteConfig.operator.legalName}; English translation for reference), registered in
                Guangzhou on March 28, 2018. It is {siteConfig.operator.tourismLicense.statement}.
                Every confirmed proposal identifies the relevant contracting details before payment.
              </p>
            </div>
          </div>
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
