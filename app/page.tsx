import type { Metadata } from "next";

import { SiteFooter } from "@/components/footer/site-footer";
import { HomeEditorialExperience } from "@/components/home/home-editorial-experience";
import homeStyles from "@/components/home/home-editorial-experience.module.css";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { desktopHeroImage, mobileHeroImage } from "@/content/home/homepage";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { getPublicHomePage, getPublicSiteSettings } from "@/lib/cms/public-content";
import { mergeCoreJourneyFallbacks } from "@/lib/cms/core-journey-fallbacks";

const featuredJourneyEditorial: Record<
  string,
  {
    title: string;
    routeLine: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  }
> = {
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    title: "11-Day Beijing, Xi'an, Chengdu & Shanghai Private Tour",
    routeLine: "11 days · Beijing, Xi'an, Chengdu and Shanghai",
    description:
      "The Great Wall, Terracotta Warriors, giant pandas and contemporary Shanghai, privately connected across one balanced journey.",
    imageSrc: "",
    imageAlt: "",
  },
  "first-china-beautifully-paced": {
    title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
    routeLine: "9 days · Beijing, Xi'an and Shanghai",
    description:
      "China's three defining cities, privately arranged with considered pacing and local support throughout.",
    imageSrc: "/home/featured-journeys/beijing-xian-shanghai.avif",
    imageAlt: "The Great Wall crossing mountain ridges near Beijing in warm evening light",
  },
  "chengdu-pandas-sichuan-table": {
    title: "5-Day Chengdu Panda & Sichuan Food Private Tour",
    routeLine: "5 days · Chengdu and Leshan",
    description:
      "Pandas, regional cuisine and Chengdu's everyday life, arranged from one carefully chosen base.",
    imageSrc: "/home/featured-journeys/chengdu-pandas.avif",
    imageAlt: "Three giant pandas eating bamboo in Chengdu",
  },
  "beijing-great-wall-private-5-day-tour": {
    title: "5-Day Beijing & Great Wall Private Tour",
    routeLine: "5 days · Beijing",
    description:
      "Beijing's imperial landmarks, neighborhoods and cultural traditions, shaped around your interests and preferred pace.",
    imageSrc: "/home/featured-journeys/beijing-great-wall.avif",
    imageAlt: "The Great Wall winding through autumn forest near Beijing",
  },
  "shanghai-zhangjiajie-floating-peaks": {
    title: "8-Day Shanghai & Zhangjiajie Private Tour",
    routeLine: "8 days · Shanghai, Wulingyuan and Zhangjiajie",
    description:
      "Contemporary Shanghai and remarkable mountain landscapes, connected through seamless private arrangements.",
    imageSrc: "/home/featured-journeys/shanghai-zhangjiajie.avif",
    imageAlt: "Sandstone pillars rising through Zhangjiajie National Forest Park",
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
      imageSrc: "",
      imageAlt: "",
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
    imageSrc: "",
    imageAlt: "",
  };
}

export const metadata: Metadata = createMetadata({
  title: "Private China Travel & Tailor-Made Journeys",
  description:
    "Plan a tailor-made China journey with AVIORA, a China-based team creating private routes, considered hotels and trusted local support.",
  image: desktopHeroImage.src,
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
          src: editorial.imageSrc || journey.hero_image!.url,
          alt: editorial.imageAlt || journey.hero_image!.alt_text,
          objectPosition: editorial.imageSrc ? "50% 50%" : journey.hero_image!.object_position,
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
        className={homeStyles.navigation}
        cta={{ label: "Start Planning", href: settings.primaryCtaHref }}
        showWhatsapp={false}
        tone="light"
        scrollThreshold="hero"
        mobileMenuTone="editorial-dark"
      />

      <HomeEditorialExperience
        desktopImage={desktopHeroImage}
        mobileImage={mobileHeroImage}
        featuredJourneys={featuredJourneys}
        intentPaths={home.intentPaths}
        trustPoints={home.trustPoints}
        planningSteps={home.planningSteps}
        ctaImage={home.ctaImage}
        primaryHref={settings.primaryCtaHref}
      />

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
