import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { FeaturedJourneyCinema, HomeReveal } from "@/components/home/home-immersive-sections";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { desktopHeroImage, heroImage, mobileHeroImage } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { getPublicHomePage, getPublicSiteSettings } from "@/lib/cms/public-content";
import { mergeCoreJourneyFallbacks } from "@/lib/cms/core-journey-fallbacks";

const featuredJourneyEditorial: Record<
  string,
  { title: string; routeLine: string; description: string }
> = {
  "first-china-beautifully-paced": {
    title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
    routeLine: "9 days · Beijing, Xi'an and Shanghai",
    description:
      "China's three defining cities, privately arranged with considered pacing and local support throughout.",
  },
  "chengdu-pandas-sichuan-table": {
    title: "5-Day Chengdu Panda & Sichuan Food Private Tour",
    routeLine: "5 days · Chengdu and Leshan",
    description:
      "Pandas, regional cuisine and Chengdu's everyday life, arranged from one carefully chosen base.",
  },
  "beijing-great-wall-private-5-day-tour": {
    title: "5-Day Beijing & Great Wall Private Tour",
    routeLine: "5 days · Beijing",
    description:
      "Beijing's imperial landmarks, neighborhoods and cultural traditions, shaped around your interests and preferred pace.",
  },
  "shanghai-zhangjiajie-floating-peaks": {
    title: "8-Day Shanghai & Zhangjiajie Private Tour",
    routeLine: "8 days · Shanghai, Wulingyuan and Zhangjiajie",
    description:
      "Contemporary Shanghai and remarkable mountain landscapes, connected through seamless private arrangements.",
  },
};

function getFeaturedJourneyEditorial(slug: string, title: string, duration: string, route: string) {
  const preferredEditorial = featuredJourneyEditorial[slug];
  if (preferredEditorial) return preferredEditorial;

  const simplifiedTitle = title
    .replace(/^\s*\d+\s*[-–—]?\s*day\s+/i, "")
    .replace(/\s*[-–—]\s*a\s+private\s+\d+\s*[-–—]?\s*day\s+journey\s*$/i, "")
    .replace(/\s+(?:private\s+)?(?:tour|journey)\s*$/i, "")
    .trim();

  const displayTitle = simplifiedTitle || title;
  if (displayTitle.length <= 58) {
    return {
      title: displayTitle,
      routeLine: `${duration} · ${route.replaceAll(" · ", ", ")}`,
      description: "A private China journey arranged around your interests, comfort and pace.",
    };
  }

  const shortenedTitle = displayTitle
    .slice(0, 58)
    .replace(/\s+\S*$/, "")
    .trim();
  return {
    title: `${shortenedTitle || displayTitle.slice(0, 58).trim()}…`,
    routeLine: `${duration} · ${route.replaceAll(" · ", ", ")}`,
    description: "A private China journey arranged around your interests, comfort and pace.",
  };
}

export const metadata: Metadata = createMetadata({
  title: "Private China Tours, Tailored by Local Experts",
  description:
    "Plan a private China tour with carefully selected hotels, exceptional local guides, private transfers and licensed local support.",
  image: heroImage.src,
});

export default async function HomePage() {
  const [home, settings] = await Promise.all([getPublicHomePage(), getPublicSiteSettings()]);
  const featuredJourneys = mergeCoreJourneyFallbacks(home.featuredJourneys)
    .filter((journey) => journey.hero_image)
    .map((journey) => {
      const editorial = getFeaturedJourneyEditorial(
        journey.slug,
        journey.title,
        journey.duration_label,
        journey.route,
      );

      return {
        title: journey.title,
        displayTitle: editorial.title,
        navLabel: editorial.title,
        routeLine: editorial.routeLine,
        description: editorial.description,
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
  const homeNavigation = settings.navigation.filter((item) =>
    ["Journeys", "Destinations", "About AVIORA", "Journal"].includes(item.label),
  );

  return (
    <PageContainer className="pb-20 md:pb-0">
      <JsonLd id="featured-journeys-schema" data={featuredJourneysSchema(featuredJourneys)} />
      <SiteNavigation
        items={homeNavigation}
        cta={{ label: "Start Planning", href: settings.primaryCtaHref }}
        showWhatsapp={false}
      />

      <section className="home-conversion-hero">
        <picture className="home-conversion-hero__media">
          <source media="(min-width: 768px)" srcSet={desktopHeroImage.src} type="image/avif" />
          <img
            src={mobileHeroImage.src}
            alt={mobileHeroImage.alt}
            width={mobileHeroImage.width}
            height={mobileHeroImage.height}
            loading="eager"
            fetchPriority="high"
            className="home-conversion-hero__image"
          />
        </picture>
        <div className="home-conversion-hero__shade" aria-hidden="true" />
        <ContentContainer
          size="xl"
          className="home-conversion-hero__content relative z-20 flex h-full flex-col justify-end"
        >
          <div className="max-w-[48rem] text-white">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/72 uppercase">
              AVIORA · Private China travel
            </p>
            <h1 className="mt-5 max-w-[46rem] font-serif text-[clamp(3.35rem,7.4vw,6.75rem)] leading-[0.9] font-medium text-balance">
              {home.heroTitle}
            </h1>
            <p className="mt-6 max-w-[38rem] text-base leading-7 text-white/82 md:text-lg md:leading-8">
              {home.heroCopy}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <CtaButton href={settings.primaryCtaHref} size="md">
                Start Planning
              </CtaButton>
              <Link href="#journeys" className="home-conversion-hero__secondary">
                Explore journeys
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="home-conversion-hero__trust" aria-label="Why travelers choose AVIORA">
            {home.heroTrustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <span>China-based support</span>
          </div>
        </ContentContainer>
        <Link
          href="#journeys"
          className="home-conversion-hero__scroll"
          aria-label="See featured journeys"
        >
          <ArrowDown size={15} aria-hidden="true" />
        </Link>
      </section>

      {featuredJourneys.length ? <FeaturedJourneyCinema journeys={featuredJourneys} /> : null}

      <Section id="find-your-china" spacing="spacious" className="bg-[var(--bg-primary)]">
        <ContentContainer size="xl" className="home-section-safe grid gap-10">
          <HomeReveal className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--text-tertiary)] uppercase">
                Find your China
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.95] font-medium text-balance md:text-7xl">
                Not sure where to begin?
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              Start with the experience you want. Each path opens a route or destination that makes
              the choice easier.
            </p>
          </HomeReveal>
          <div className="home-intent-grid">
            {home.intentPaths.map((item, index) => (
              <HomeReveal key={item.title} delay={index * 70}>
                <Link href={item.href} className="home-intent-card group">
                  <OptimizedImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    objectPosition={item.image.objectPosition}
                    frameClassName="absolute inset-0 h-full"
                    className="home-intent-card__image h-full w-full"
                  />
                  <div className="home-intent-card__shade" aria-hidden="true" />
                  <div className="home-intent-card__copy">
                    <p>{item.eyebrow}</p>
                    <div>
                      <h3>{item.title}</h3>
                      <ArrowUpRight size={20} aria-hidden="true" />
                    </div>
                    <span>{item.description}</span>
                  </div>
                </Link>
              </HomeReveal>
            ))}
          </div>
          <Link href="/destinations" className="home-text-link">
            Explore all destinations
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </ContentContainer>
      </Section>

      <Section id="why" spacing="spacious" className="bg-white">
        <ContentContainer size="xl" className="home-trust-section home-section-safe">
          <HomeReveal className="home-trust-section__media">
            <OptimizedImage
              src={home.tradeImages[0]?.src ?? home.heroImage.src}
              alt={home.tradeImages[0]?.alt ?? "A personal conversation about private China travel"}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              objectPosition={home.tradeImages[0]?.objectPosition}
              frameClassName="absolute inset-0 h-full"
              className="home-trust-section__image h-full w-full"
            />
            <p>Real conversations. Local decisions. Clear support.</p>
          </HomeReveal>
          <HomeReveal delay={90} className="home-trust-section__copy">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--text-tertiary)] uppercase">
              Why AVIORA
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] font-medium text-balance md:text-7xl">
              Travel with clarity from the first conversation.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              We shape the route around the people traveling, confirm the important details in
              writing and remain reachable while the trip is underway.
            </p>
            <div className="home-trust-points">
              {home.trustPoints.map((point) => (
                <article key={point.title}>
                  <Check size={17} aria-hidden="true" />
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <ol className="home-planning-steps" aria-label="How planning works">
              {home.planningSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                </li>
              ))}
            </ol>
            <CtaButton href={settings.primaryCtaHref} size="sm" className="mt-8 w-fit">
              Start Planning
            </CtaButton>
          </HomeReveal>
        </ContentContainer>
      </Section>

      <section className="home-final-cta">
        <OptimizedImage
          src={home.ctaImage.src}
          alt={home.ctaImage.alt}
          fill
          sizes="100vw"
          objectPosition={home.ctaImage.objectPosition}
          frameClassName="absolute inset-0 h-full"
          className="home-final-cta__image h-full w-full"
        />
        <div className="home-final-cta__shade" aria-hidden="true" />
        <ContentContainer
          size="xl"
          className="relative z-20 flex min-h-[36rem] items-end py-16 md:py-20"
        >
          <HomeReveal className="max-w-3xl text-white">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/72 uppercase">
              Start the conversation
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.94] font-medium text-balance md:text-7xl">
              Tell us what your ideal China trip looks like.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              Share your dates, who is traveling and what matters most. A China specialist will
              recommend the first useful route direction.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <CtaButton href={settings.primaryCtaHref} size="md">
                Request My Trip Plan
              </CtaButton>
              <Link
                href="/journal/how-to-plan-a-first-private-trip-to-china"
                className="home-conversion-hero__secondary"
              >
                Read the first-trip guide
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </HomeReveal>
        </ContentContainer>
      </section>

      <SiteFooter
        columns={[
          { title: "Explore", items: homeNavigation },
          {
            title: "Planning",
            items: [
              { label: "Start Planning", href: settings.primaryCtaHref },
              { label: "Planning FAQ", href: "/planning/faq" },
              { label: "Visa notes", href: "/planning/visa" },
            ],
          },
          {
            title: "Company",
            items: [
              { label: "About AVIORA", href: "/about" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ],
          },
        ]}
        social={[]}
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
