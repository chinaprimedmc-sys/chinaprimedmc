import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { HomeExpertConsultation } from "@/components/home/home-expert-consultation";
import { SiteFooter } from "@/components/footer/site-footer";
import { HomeHeroMotion } from "@/components/home/home-hero-motion";
import { HomeServiceStandard } from "@/components/home/home-service-standard";
import { HomeServiceAchievements } from "@/components/home/home-service-achievements";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { HomeJourneySelector, HomeSectionReveal } from "@/components/home/home-journey-selector";
import { HomePhilosophy } from "@/components/home/home-philosophy";
import { HomeStoryExperience } from "@/components/home/home-story-experience";
import { HomeSoftSnap } from "@/components/home/home-soft-snap";
import styles from "@/components/home/home-redesign.module.css";
import { siteConfig } from "@/config/site";
import { desktopHeroImage, mobileHeroImage } from "@/content/home/homepage";
import { cultureStoryImages, foodStoryImages } from "@/content/home/story-media.generated";
import { journeyCatalog } from "@/content/tours/catalog";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { getPublicHomePage, getPublicSiteSettings } from "@/lib/cms/public-content";
import { mergeCoreJourneyFallbacks } from "@/lib/cms/core-journey-fallbacks";

const selectedJourneyContent: Record<
  string,
  {
    title: string;
    meta: string;
    mobileDuration: string;
    mobileAudience: string;
    duration: string;
    fit: string;
    summary: string;
    proofs?: string[];
    image?: { src: string; alt: string; width: number; height: number };
  }
> = {
  "china-at-an-easier-pace-12-day-private-tour": {
    title: "China, Considered",
    meta: "12 days · Beijing · Xi'an · Shanghai",
    mobileDuration: "12 days · 11 nights",
    mobileAudience: "Best for mature travellers & couples",
    duration: "12 days",
    fit: "A premium first journey at an easier pace",
    summary:
      "Five-star stays, private guides and only two hotel changes, with recovery protected after the Great Wall and Terracotta Army.",
    proofs: [
      "Five-star hotels",
      "Private courtyard table",
      "Local cultural specialists",
      "First-class rail",
      "Only two hotel changes",
      "Protected recovery time",
    ],
    image: {
      src: "/tours/first-china-beautifully-paced/beijing-great-wall-couple.webp",
      alt: "Two mature travellers enjoying a measured visit to the Great Wall near Beijing",
      width: 1280,
      height: 1920,
    },
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    title: "China With Your Children",
    meta: "12 days · Beijing · Xi'an · Chengdu · Shanghai",
    mobileDuration: "12 days · 11 nights",
    mobileAudience: "Best for families with children aged 6–17",
    duration: "12 days",
    fit: "Our signature private journey for families",
    summary:
      "The Great Wall, Terracotta Warriors and pandas become a family story through private challenges, hands-on encounters and protected downtime.",
    proofs: [
      "Age-aware private guides",
      "Great Wall photographer",
      "Private clay studio",
      "Panda interpretation",
      "Room setup reviewed",
      "Protected family downtime",
    ],
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    title: "China's Essential Contrasts",
    meta: "11 days · Beijing · Xi'an · Chengdu · Shanghai",
    mobileDuration: "11 days · 10 nights",
    mobileAudience: "Best for a comprehensive first journey",
    duration: "11 days",
    fit: "The strongest all-round first journey",
    summary:
      "Imperial Beijing, the Terracotta Warriors, giant pandas and Shanghai, privately connected across eleven balanced days.",
    proofs: [
      "Quieter Great Wall timing",
      "Terracotta Army context",
      "Pandas at a better hour",
      "Private city guides",
      "Managed rail and flight",
      "China-based support",
    ],
  },
  "first-china-beautifully-paced": {
    title: "Beijing, Xi'an & Shanghai",
    meta: "9 days · Beijing · Xi'an · Shanghai",
    mobileDuration: "9 days · 8 nights",
    mobileAudience: "Best for first-time visitors",
    duration: "9 days",
    fit: "Ideal for a first visit to China",
    summary:
      "The Great Wall, Terracotta Warriors and Shanghai after dark, privately arranged at your pace.",
    image: {
      src: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour/photo-41.webp",
      alt: "Shanghai and the Huangpu River glowing at dusk",
      width: 1600,
      height: 900,
    },
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    title: "Chengdu & Jiuzhaigou",
    meta: "7 days · Chengdu · Jiuzhaigou",
    mobileDuration: "7 days · 6 nights",
    mobileAudience: "Best for food, nature & an easier pace",
    duration: "7 days",
    fit: "For nature, food and an easier pace",
    summary: "Meet the pandas, taste Sichuan and slow down among Jiuzhaigou's clear blue lakes.",
    image: {
      src: "/home/jiuzhaigou-five-flower-lake.webp",
      alt: "Clear turquoise water and autumn forest at Five Flower Lake in Jiuzhaigou",
      width: 1920,
      height: 1200,
    },
  },
  "shanghai-zhangjiajie-floating-peaks": {
    title: "Shanghai & Zhangjiajie",
    meta: "8 days · Shanghai · Zhangjiajie",
    mobileDuration: "8 days · 7 nights",
    mobileAudience: "Best for landscapes & modern China",
    duration: "8 days",
    fit: "For striking landscapes and modern China",
    summary:
      "Shanghai's energy and Zhangjiajie's sandstone peaks, seamlessly connected in one private journey.",
    image: {
      src: "/tours/shanghai-zhangjiajie-floating-peaks/zhangjiajie-sunny-peaks.webp",
      alt: "Zhangjiajie's sandstone peaks rising through sunlit green forest",
      width: 1600,
      height: 800,
    },
  },
};

const selectedJourneySlugs = [
  "china-family-tour-with-pandas-12-day-private-tour",
  "china-at-an-easier-pace-12-day-private-tour",
  "beijing-xian-chengdu-shanghai-private-11-day-tour",
];

const chinaStoryCatalog = [
  {
    id: "culture",
    label: "Culture",
    title: "Culture Experience",
    images: cultureStoryImages,
  },
  {
    id: "food",
    label: "Food",
    title: "Food Experience",
    images: foodStoryImages,
  },
  {
    id: "landscapes",
    label: "Landscapes",
    title: "Landscape Experience",
    images: [
      {
        src: "/home/story-optimized/landscape-wulingyuan.avif",
        alt: "Travelers looking across the sandstone pillars of Wulingyuan in Zhangjiajie",
        width: 1440,
        height: 1920,
        caption: "Zhangjiajie · A wide view across Wulingyuan",
      },
      {
        src: "/home/story-optimized/landscape-tianmen-cableway.avif",
        alt: "Cable cars crossing the green mountain valley below Tianmen Mountain",
        width: 1440,
        height: 1920,
        caption: "Tianmen · Moving gently through the mountains",
      },
      {
        src: "/home/story-optimized/landscape-temple-interior.avif",
        alt: "The richly painted interior of the Hall of Prayer for Good Harvests in Beijing",
        width: 1820,
        height: 2428,
        caption: "Beijing · Architecture made to be looked up at",
      },
      {
        src: "/home/story-optimized/landscape-temple-morning.avif",
        alt: "The Temple of Heaven framed by trees and morning light in Beijing",
        width: 1440,
        height: 1920,
        caption: "Beijing · Morning light through the trees",
      },
    ],
  },
];

const chinaStories = ["food", "landscapes", "culture"].map((id) =>
  chinaStoryCatalog.find((story) => story.id === id)!,
);

export const metadata: Metadata = createMetadata({
  title: "Tailor-Made Private China Tours",
  description:
    "Plan a private China journey with AVIORA China Travel. Enjoy handpicked 4- and 5-star hotels, private guides, seamless transfers and no forced shopping.",
  image: siteConfig.ogImage,
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "Private travelers exploring the Great Wall with an AVIORA China travel specialist",
});

export default async function HomePage() {
  const [home, settings] = await Promise.all([getPublicHomePage(), getPublicSiteSettings()]);
  const allJourneys = mergeCoreJourneyFallbacks(home.featuredJourneys);
  const journeys = selectedJourneySlugs
    .map((slug) => allJourneys.find((journey) => journey.slug === slug))
    .filter((journey) => Boolean(journey?.hero_image))
    .map((journey) => {
      const editorial = selectedJourneyContent[journey!.slug];
      const cmsImage = journey!.hero_image!;
      const pricing = journeyCatalog.find((item) => item.slug === journey!.slug)?.pricing;
      return {
        title: editorial.title,
        meta: editorial.meta,
        mobileDuration: editorial.mobileDuration,
        mobileAudience: editorial.mobileAudience,
        duration: editorial.duration,
        fit: editorial.fit,
        summary: editorial.summary,
        description: editorial.summary,
        proofs: editorial.proofs ?? [
          "Private guides",
          "Private car & driver",
          "Tailored pace",
          "Local support",
          "No shopping stops",
          "Experiences arranged around you",
        ],
        price: pricing
          ? `US$${pricing.fromUsd.toLocaleString("en-US")} per person`
          : "Price tailored to your trip",
        priceBasis: pricing
          ? "Based on four guests sharing two rooms."
          : "Your quote reflects your dates, hotels and party size.",
        href: `/tours/${journey!.slug}`,
        image: editorial.image ?? {
          src: cmsImage.url,
          alt: cmsImage.alt_text,
          width: cmsImage.width ?? 1600,
          height: cmsImage.height ?? 1000,
        },
      };
    });
  const navigation = settings.navigation.filter((item) =>
    ["Journeys", "Destinations", "About AVIORA", "Journal", "Travel Trade"].includes(item.label),
  );

  return (
    <main className={`${styles.page} home-immersive-page`}>
      <JsonLd id="featured-journeys-schema" data={featuredJourneysSchema(journeys)} />
      <SiteNavigation
        items={navigation}
        className="home-navigation-entrance"
        cta={{ label: "Plan My Trip", href: settings.primaryCtaHref }}
        mobileCta={{ label: "Explore Journeys", href: "/tours" }}
        tone="adaptive"
        showWhatsapp={false}
        variant="default"
      />

      <HomeHeroMotion
        desktopImage={desktopHeroImage}
        mobileImage={mobileHeroImage}
        eyebrow="AVIORA TRAVEL"
        title={"China,\nAt Your Own Pace"}
        copy="Your trip, planned around you by our team here in China."
        primary={{ label: "Find your ideal journey", href: "/tours" }}
        trustItems={["Licensed in China", "Private travel", "No shopping"]}
      />

      <HomeServiceAchievements />
      <HomeSoftSnap />
      <HomeServiceStandard />

      <HomeStoryExperience stories={chinaStories} />

      <section
        id="selected-journeys"
        className={`${styles.chapter} ${styles.journeys}`}
        aria-labelledby="selected-journeys-title"
      >
        <div className={styles.container}>
          <HomeSectionReveal className={styles.journeySectionHeading}>
            <h2 id="selected-journeys-title">See China Your Way.</h2>
            <Link href="/tours" className={styles.journeyHeadingAction}>
              Explore all journeys <ArrowUpRight aria-hidden="true" />
            </Link>
          </HomeSectionReveal>
          <HomeSectionReveal className={styles.journeySelectorReveal} delay={80}>
            <HomeJourneySelector journeys={journeys} whatsappHref={settings.whatsappHref} />
          </HomeSectionReveal>
        </div>
      </section>

      <HomePhilosophy />

      <HomeExpertConsultation />
      <SiteFooter />
    </main>
  );
}

function featuredJourneysSchema(
  journeys: Array<{
    title: string;
    description: string;
    href: string;
    image: { src: string };
    meta: string;
  }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected private China journeys",
    numberOfItems: journeys.length,
    itemListElement: journeys.map((journey, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristTrip",
        name: journey.title,
        description: journey.description,
        url: new URL(journey.href, siteConfig.url).toString(),
        image: new URL(journey.image.src, siteConfig.url).toString(),
        itinerary: journey.meta,
        provider: {
          "@type": "TravelAgency",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
    })),
  };
}
