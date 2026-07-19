import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

import { BlogCard } from "@/components/cards/blog-card";
import { HeroTrustPills, SectionHeader } from "@/components/content";
import { CtaButton } from "@/components/cta";
import { CtaCard } from "@/components/cta/cta-card";
import { FloatingCta } from "@/components/cta/floating-cta";
import { StickyMobileCta } from "@/components/cta/sticky-mobile-cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import {
  DestinationFocusGallery,
  FeaturedJourneyCinema,
  HomeReveal,
  PlanningStory,
} from "@/components/home/home-immersive-sections";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import {
  exploreChina,
  heroImage,
  homeEditorialImages,
  homeNavItems,
  journal,
  journeys,
  planningSteps,
  primaryAction,
  proofPoints,
  secondaryHeroActions,
} from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours for Families, Couples, and Luxury Travelers",
  description:
    "Plan a private China journey with aviora: custom routes, private guides, family-friendly pacing, luxury hotels, and stress-free local logistics.",
  image: heroImage.src,
});

export default function HomePage() {
  return (
    <PageContainer className="pb-20 md:pb-0">
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
        whatsapp={{ label: "WhatsApp", href: "https://wa.me/447985052302" }}
      />

      <HeroLargeImage
        brandLockup={{ name: "AVIORA", descriptor: "Private China journeys by China Prime DMC" }}
        title="China, beautifully within reach."
        subtitle="Private China journeys with the wonder kept in, and the friction quietly designed out."
        image={heroImage}
        primary={{ label: "Plan My Trip", href: primaryAction.href }}
        secondary={secondaryHeroActions.whatsapp}
        composition="editorial"
        align="left"
        overlay="subtle"
      >
        <HeroTrustPills
          mode="ticker"
          tone="light"
          items={[
            siteConfig.operator.tourismLicense.shortLabel,
            "China-registered operating company",
            "Private, no-shopping travel",
          ]}
        />
      </HeroLargeImage>

      <FeaturedJourneyCinema journeys={journeys} />

      <Section id="destinations" spacing="spacious">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <SectionHeader
            eyebrow="Explore China"
            title="Begin with a place. Then find your pace."
            description="A few strong starting points for the route, the atmosphere, and the way you want to travel."
          />
          <HomeReveal delay={80}>
            <DestinationFocusGallery items={exploreChina} />
          </HomeReveal>
        </ContentContainer>
      </Section>

      <Section id="why" spacing="spacious" className="bg-[var(--bg-dark-primary)] text-white">
        <ContentContainer size="xl" className="home-section-safe grid gap-14">
          <HomeReveal className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                Why AVIORA
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.96] font-medium tracking-[-0.02em] md:text-7xl">
                The practical worries are part of the design.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/66 md:text-lg">
              A beautiful China trip is scenery, yes. It is also language, pacing, tickets, meals,
              transfers, rest, and knowing exactly who is taking care of the details.
            </p>
          </HomeReveal>
          <HomeReveal delay={80} className="grid border-y border-white/12 md:grid-cols-3">
            {[
              ["Licensed", "Inbound tourism operator"],
              ["Private", "Daily rhythm"],
              ["0", "Shopping-tour pressure"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`py-8 md:px-8 md:py-10 ${index ? "border-t border-white/12 md:border-t-0 md:border-l" : ""}`}
              >
                <p className="font-serif text-5xl leading-none md:text-6xl">{value}</p>
                <p className="mt-3 text-xs tracking-[0.14em] text-white/55 uppercase">{label}</p>
              </div>
            ))}
          </HomeReveal>
          <HomeReveal delay={140}>
            <GridSystem columns={3}>
              {proofPoints.map((point, index) => {
                const Icon = index === 0 ? ShieldCheck : index === 1 ? CheckCircle2 : Sparkles;
                return (
                  <article key={point.title} className="border-t border-white/14 pt-6">
                    <Icon size={18} className="text-white/58" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-medium">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/58">{point.description}</p>
                  </article>
                );
              })}
            </GridSystem>
          </HomeReveal>
        </ContentContainer>
      </Section>

      <Section id="planning" spacing="spacious">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <HomeReveal>
            <Badge>How planning works</Badge>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.96] font-medium tracking-[-0.02em] md:text-7xl">
              Start with your reality, not a fixed package.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              The first conversation gives us enough context to suggest a route direction without
              asking you to solve the whole trip before we begin.
            </p>
          </HomeReveal>
          <HomeReveal delay={80}>
            <PlanningStory image={homeEditorialImages.paintingExperience} steps={planningSteps} />
          </HomeReveal>
          <CtaButton href={primaryAction.href} className="w-fit max-md:mx-auto" size="sm">
            Start planning
          </CtaButton>
        </ContentContainer>
      </Section>

      <Section spacing="spacious" className="bg-[var(--bg-secondary)]">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <HomeReveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Badge>Travel trade presence</Badge>
              <h2 className="mt-6 font-serif text-5xl leading-[0.96] font-medium tracking-[-0.02em] md:text-7xl">
                In the room where China travel is discussed.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Recent face-to-face conversations in Kuala Lumpur, focused on practical inbound China
              travel and clearer local delivery.
            </p>
          </HomeReveal>
          <HomeReveal
            delay={100}
            className="home-trade-gallery grid gap-5 lg:grid-cols-12 lg:grid-rows-2"
          >
            <figure className="home-trade-gallery__image relative min-h-[31rem] overflow-hidden rounded-[1.25rem] lg:col-span-8 lg:row-span-2 lg:min-h-[42rem]">
              <OptimizedImage
                src={homeEditorialImages.tradeConsultation.src}
                alt={homeEditorialImages.tradeConsultation.alt}
                fill
                sizes="(min-width:1024px) 66vw, 100vw"
                objectPosition={homeEditorialImages.tradeConsultation.objectPosition}
                frameClassName="absolute inset-0 h-full"
                className="h-full w-full"
              />
              <figcaption className="absolute right-5 bottom-5 rounded-full border border-white/30 bg-black/36 px-4 py-2 text-[0.65rem] font-medium tracking-[0.12em] text-white uppercase backdrop-blur-xl">
                Face-to-face travel consultation
              </figcaption>
            </figure>
            {[homeEditorialImages.tradeBuyerMeeting, homeEditorialImages.tradeMuslimBuyers].map(
              (image, index) => (
                <figure
                  className="home-trade-gallery__image relative min-h-[19rem] overflow-hidden rounded-[1.25rem] lg:col-span-4 lg:min-h-0"
                  key={image.src}
                >
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width:1024px) 34vw, 100vw"
                    objectPosition={image.objectPosition}
                    frameClassName="absolute inset-0 h-full"
                    className="h-full w-full"
                  />
                  <figcaption className="absolute right-4 bottom-4 rounded-full border border-white/30 bg-black/36 px-3 py-2 text-[0.6rem] font-medium tracking-[0.1em] text-white uppercase backdrop-blur-xl">
                    {index === 0 ? "Travel buyer meeting" : "Muslim travel buyers"}
                  </figcaption>
                </figure>
              ),
            )}
          </HomeReveal>
        </ContentContainer>
      </Section>

      <Section id="journal" spacing="spacious">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <HomeReveal>
            <SectionHeader
              eyebrow="Travel journal"
              title="Useful thinking before you choose a route."
              description="Practical planning notes for the questions travelers ask before the journey feels real."
            />
          </HomeReveal>
          <HomeReveal delay={100}>
            <GridSystem columns={3}>
              {journal.map((article) => (
                <BlogCard
                  key={article.title}
                  title={article.title}
                  excerpt={article.excerpt}
                  href={article.href}
                  image={article.image}
                  category={article.category}
                  eager
                />
              ))}
            </GridSystem>
          </HomeReveal>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="home-section-safe">
          <CtaCard
            variant="image"
            image={homeEditorialImages.guilinLandscape}
            eyebrow="Start the conversation"
            title="Tell us who is traveling. We will suggest the first shape of the journey."
            description="Start with dates, travelers, pace, comfort level, and the questions you are not sure how to ask yet."
            primary={{ label: "Plan My Trip", href: primaryAction.href }}
            secondary={{
              label: secondaryHeroActions.email.label,
              href: secondaryHeroActions.email.href,
            }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Explore", items: homeNavItems },
          {
            title: "Travel styles",
            items: [
              { label: "Family China", href: "/family-travel" },
              { label: "Luxury China", href: "/styles/luxury" },
              { label: "Muslim-friendly", href: "/planning/faq" },
            ],
          },
          {
            title: "Planning",
            items: [{ label: "First route idea", href: primaryAction.href }],
          },
          {
            title: "Journal",
            items: journal.map((article) => ({ label: article.category, href: article.href })),
          },
        ]}
        social={[]}
      />
      <FloatingCta label="Plan My Trip" href={primaryAction.href} />
      <StickyMobileCta label="Plan My Trip" href={primaryAction.href} showAfter={720} />
    </PageContainer>
  );
}
