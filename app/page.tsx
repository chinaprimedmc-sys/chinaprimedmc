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
import { heroImage } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { getPublicHomePage, getPublicSiteSettings } from "@/lib/cms/public-content";
import { mergeCoreJourneyFallbacks } from "@/lib/cms/core-journey-fallbacks";

const featuredJourneyDisplayTitles: Record<string, string> = {
  "first-china-beautifully-paced": "Beijing, Xi'an & Shanghai",
  "chengdu-pandas-sichuan-table": "Chengdu, Pandas & Sichuan Food",
  "beijing-unhurried-private-5-day-journey": "Beijing Unhurried",
  "shanghai-zhangjiajie-floating-peaks": "Shanghai & Zhangjiajie",
};

function getFeaturedJourneyDisplayTitle(slug: string, title: string) {
  const preferredTitle = featuredJourneyDisplayTitles[slug];
  if (preferredTitle) return preferredTitle;

  const simplifiedTitle = title
    .replace(/^\s*\d+\s*[-–—]?\s*day\s+/i, "")
    .replace(/\s*[-–—]\s*a\s+private\s+\d+\s*[-–—]?\s*day\s+journey\s*$/i, "")
    .replace(/\s+(?:private\s+)?(?:tour|journey)\s*$/i, "")
    .trim();

  const displayTitle = simplifiedTitle || title;
  if (displayTitle.length <= 58) return displayTitle;

  const shortenedTitle = displayTitle
    .slice(0, 58)
    .replace(/\s+\S*$/, "")
    .trim();
  return `${shortenedTitle || displayTitle.slice(0, 58).trim()}…`;
}

function getFeaturedTitleLength(title: string) {
  if (title.length <= 28) return "short" as const;
  if (title.length <= 42) return "medium" as const;
  return "long" as const;
}

export const metadata: Metadata = createMetadata({
  title: "Private China Tours for Families, Couples, and Luxury Travelers",
  description:
    "Plan a private China journey with aviora: custom routes, private guides, family-friendly pacing, luxury hotels, and stress-free local logistics.",
  image: heroImage.src,
});

export default async function HomePage() {
  const [home, settings] = await Promise.all([getPublicHomePage(), getPublicSiteSettings()]);
  const featuredJourneys = mergeCoreJourneyFallbacks(home.featuredJourneys)
    .filter((journey) => journey.hero_image)
    .map((journey, index) => {
      const displayTitle = getFeaturedJourneyDisplayTitle(journey.slug, journey.title);

      return {
        title: journey.title,
        displayTitle,
        navLabel: displayTitle,
        titleLength: getFeaturedTitleLength(displayTitle),
        durationBadge: journey.duration_label.toUpperCase(),
        accent: index % 2 ? ("bamboo" as const) : ("gold" as const),
        description: journey.summary,
        image: {
          src: journey.hero_image!.url,
          alt: journey.hero_image!.alt_text,
          objectPosition: journey.hero_image!.object_position,
        },
        href: `/tours/${journey.slug}`,
        duration: journey.duration_label,
        route: journey.route,
        bestFor: journey.best_for,
      };
    });
  const exploreItems = home.featuredDestinations.length
    ? home.featuredDestinations.map((destination) => ({
        eyebrow: destination.kicker || "Destination",
        title: destination.name,
        description: destination.summary,
        href: `/destinations/${destination.slug}`,
        image: destination.heroImage ?? home.heroImage,
      }))
    : home.fallbackExploreChina;
  const journalItems = home.featuredPosts
    .filter((post) => post.hero_image)
    .map((post) => ({
      title: post.title,
      excerpt: post.summary,
      href: `/journal/${post.slug}`,
      image: {
        src: post.hero_image!.url,
        alt: post.hero_image!.alt_text,
        objectPosition: post.hero_image!.object_position,
      },
      category: post.category,
    }));
  return (
    <PageContainer className="pb-20 md:pb-0">
      <JsonLd id="featured-journeys-schema" data={featuredJourneysSchema(featuredJourneys)} />
      <SiteNavigation
        items={settings.navigation}
        cta={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
        whatsapp={{ label: settings.whatsappLabel, href: settings.whatsappHref }}
      />

      <HeroLargeImage
        brandLockup={{ name: settings.siteTitle, descriptor: settings.brandDescriptor }}
        title={home.heroTitle}
        subtitle={home.heroCopy}
        image={home.heroImage}
        primary={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
        secondary={{ label: settings.whatsappLabel, href: settings.whatsappHref }}
        composition="editorial"
        align="left"
        overlay="subtle"
      >
        <HeroTrustPills mode="ticker" tone="light" items={home.heroTrustItems} />
      </HeroLargeImage>

      {featuredJourneys.length ? <FeaturedJourneyCinema journeys={featuredJourneys} /> : null}

      <Section id="destinations" spacing="spacious">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <SectionHeader
            eyebrow={home.destinationsEyebrow}
            title={home.destinationsTitle}
            description={home.destinationsCopy}
          />
          <HomeReveal delay={80}>
            <DestinationFocusGallery items={exploreItems} />
          </HomeReveal>
        </ContentContainer>
      </Section>

      <Section id="why" spacing="spacious" className="bg-[var(--bg-dark-primary)] text-white">
        <ContentContainer size="xl" className="home-section-safe grid gap-14">
          <HomeReveal className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                {home.whyEyebrow}
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.96] font-medium tracking-[-0.02em] md:text-7xl">
                {home.whyTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/66 md:text-lg">{home.whyCopy}</p>
          </HomeReveal>
          <HomeReveal delay={80} className="grid border-y border-white/12 md:grid-cols-3">
            {home.whyStats.map((stat, index) => (
              <div
                key={stat.title}
                className={`py-8 md:px-8 md:py-10 ${index ? "border-t border-white/12 md:border-t-0 md:border-l" : ""}`}
              >
                <p className="font-serif text-5xl leading-none md:text-6xl">{stat.title}</p>
                <p className="mt-3 text-xs tracking-[0.14em] text-white/55 uppercase">
                  {stat.description}
                </p>
              </div>
            ))}
          </HomeReveal>
          <HomeReveal delay={140}>
            <GridSystem columns={3}>
              {home.whyPoints.map((point, index) => {
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
            <Badge>{home.planningEyebrow}</Badge>
            <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.96] font-medium tracking-[-0.02em] md:text-7xl">
              {home.planningTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              {home.planningCopy}
            </p>
          </HomeReveal>
          <HomeReveal delay={80}>
            <PlanningStory image={home.planningImage} steps={home.planningSteps} />
          </HomeReveal>
          <CtaButton href={settings.primaryCtaHref} className="w-fit max-md:mx-auto" size="sm">
            Start planning
          </CtaButton>
        </ContentContainer>
      </Section>

      <Section spacing="spacious" className="bg-[var(--bg-secondary)]">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <HomeReveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Badge>{home.tradeEyebrow}</Badge>
              <h2 className="mt-6 font-serif text-5xl leading-[0.96] font-medium tracking-[-0.02em] md:text-7xl">
                {home.tradeTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              {home.tradeCopy}
            </p>
          </HomeReveal>
          <HomeReveal
            delay={100}
            className="home-trade-gallery grid gap-5 lg:grid-cols-12 lg:grid-rows-2"
          >
            <figure className="home-trade-gallery__image relative min-h-[31rem] overflow-hidden rounded-[1.25rem] lg:col-span-8 lg:row-span-2 lg:min-h-[42rem]">
              <OptimizedImage
                src={home.tradeImages[0]?.src ?? home.heroImage.src}
                alt={home.tradeImages[0]?.alt ?? "Travel trade consultation"}
                fill
                sizes="(min-width:1024px) 66vw, 100vw"
                objectPosition={home.tradeImages[0]?.objectPosition}
                frameClassName="absolute inset-0 h-full"
                className="h-full w-full"
              />
              <figcaption className="absolute right-5 bottom-5 rounded-full border border-white/30 bg-black/36 px-4 py-2 text-[0.65rem] font-medium tracking-[0.12em] text-white uppercase backdrop-blur-xl">
                Face-to-face travel consultation
              </figcaption>
            </figure>
            {home.tradeImages.slice(1, 3).map((image, index) => (
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
            ))}
          </HomeReveal>
        </ContentContainer>
      </Section>

      <Section id="journal" spacing="spacious">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <HomeReveal>
            <SectionHeader
              eyebrow={home.journalEyebrow}
              title={home.journalTitle}
              description={home.journalCopy}
            />
          </HomeReveal>
          <HomeReveal delay={100}>
            <GridSystem columns={3}>
              {journalItems.map((article) => (
                <BlogCard
                  key={article.title}
                  title={article.title}
                  excerpt={article.excerpt}
                  href={article.href}
                  image={article.image}
                  category={article.category}
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
            image={home.ctaImage}
            eyebrow={home.ctaEyebrow}
            title={home.ctaTitle}
            description={home.ctaCopy}
            primary={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
            secondary={{
              label: "Email a Specialist",
              href: `mailto:${settings.email}`,
            }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Explore", items: settings.navigation },
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
            items: [{ label: "First route idea", href: settings.primaryCtaHref }],
          },
          {
            title: "Journal",
            items: journalItems.map((article) => ({ label: article.category, href: article.href })),
          },
        ]}
        social={[]}
      />
      <FloatingCta label={settings.primaryCtaLabel} href={settings.primaryCtaHref} />
      <StickyMobileCta
        label={settings.primaryCtaLabel}
        href={settings.primaryCtaHref}
        showAfter={720}
      />
    </PageContainer>
  );
}

function featuredJourneysSchema(
  journeys: Array<{
    title: string;
    description: string;
    href: string;
    image: { src: string };
    duration: string;
    route: string;
    bestFor: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured private China tours",
    description:
      "Featured private China journeys designed by AVIORA and delivered by a licensed inbound tourism operator.",
    numberOfItems: journeys.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: journeys.map((journey, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        name: journey.title,
        description: journey.description,
        url: new URL(journey.href, siteConfig.url).toString(),
        image: new URL(journey.image.src, siteConfig.url).toString(),
        duration: journey.duration,
        touristType: journey.bestFor,
        itinerary: journey.route,
        provider: {
          "@type": "TravelAgency",
          name: siteConfig.name,
          url: siteConfig.url,
          email: siteConfig.email,
        },
      },
    })),
  };
}
