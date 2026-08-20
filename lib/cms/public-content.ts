import "server-only";

import { siteConfig } from "@/config/site";
import { explorerDestinations } from "@/content/destinations/explorer";
import { getDestinationEditorial } from "@/content/destinations/editorial";
import { destinationGuideAssets } from "@/content/destinations/guide-assets";
import { journalArticles } from "@/content/journal";
import {
  destinationImages,
  exploreChina,
  heroImage,
  homeEditorialImages,
  homeNavItems,
  planningSteps,
  primaryAction,
  proofPoints,
} from "@/content/home/homepage";
import { mergeCoreJourneyFallbacks } from "@/lib/cms/core-journey-fallbacks";
import { journeyCatalog } from "@/content/tours/catalog";
import type { MediaAsset } from "@/types/component-library";

const destinationSeoDescriptions: Record<string, string> = {
  beijing:
    "Plan a private Beijing tour with the Great Wall, Forbidden City, hutongs, expert local guides and three to five nights in a well-located hotel.",
  xian: "Explore Xi'an on a private tour with the Terracotta Army, city walls, Silk Road history, Muslim Quarter food and a recommended two to three nights.",
  shanghai:
    "Plan a private Shanghai tour with the Bund, Art Deco streets, local neighborhoods, skyline evenings, selected hotels and an expert local guide.",
  chengdu:
    "Plan a private Chengdu tour with early panda visits, teahouse culture, Sichuan food, family-friendly days and three to five nights in one comfortable base.",
  chongqing:
    "Explore Chongqing's layered river city, night views, hillside streets and hotpot with private transport planned around slopes, stairs and evening timing.",
  leshan:
    "Plan a private Leshan Giant Buddha day from Chengdu with the right river or walking view, realistic transfers, mobility guidance and a real Sichuan itinerary.",
  jiuzhaigou:
    "Visit Jiuzhaigou for clear lakes, forests and highland scenery, with altitude, seasonal access, transfers and walking comfort planned in advance.",
  zhangjiajie:
    "Explore Zhangjiajie's sandstone peaks with private guides, crowd-aware timing, cableways and a walking plan matched to your comfort and the weather.",
};

export async function getPublicSiteSettings() {
  return {
    siteTitle: "AVIORA",
    brandDescriptor: "Tailored private travel across China",
    defaultSeoDescription: siteConfig.description,
    footerDescription:
      "Private China journeys operated in China by a licensed inbound tourism operator.",
    email: siteConfig.email,
    whatsapp: "+447985052302",
    whatsappLabel: "WhatsApp",
    whatsappHref: "https://wa.me/447985052302",
    primaryCtaLabel: primaryAction.label,
    primaryCtaHref: primaryAction.href,
    navigation: homeNavItems,
    socialLinks: siteConfig.socials.map((href) => ({ label: "Social", href })),
    socialImage: undefined,
  };
}

export async function getPublicDestinations() {
  return explorerDestinations.map((destination) => {
    const editorial = getDestinationEditorial(destination);
    return {
      id: destination.id,
      name: destination.name,
      slug: destination.id,
      region: destination.region,
      headline: `Private travel in ${destination.name}`,
      summary: destination.description,
      kicker: destination.kicker,
      bestFor: destination.bestFor,
      recommendedStay: destination.stay,
      bestTime: editorial.bestTime,
      orientation: editorial.orientation,
      interests: [...destination.interests],
      highlights: [...editorial.experiences],
      planningNotes: [...editorial.planningNotes],
      arrival: editorial.arrival,
      gettingAround: editorial.gettingAround,
      stayStrategy: editorial.stayStrategy,
      firstTimerNote: editorial.firstTimerNote,
      faqs: [...editorial.faqs],
      culturalStory: editorial.culturalStory,
      foodStory: editorial.foodStory,
      itinerary: [...editorial.itinerary],
      gallery: destinationGuideAssets[destination.id].gallery,
      featured: Boolean(destination.guideHref),
      sortOrder: 100,
      seoTitle: `Private ${destination.name} Tours and Travel Guide`,
      seoDescription:
        destinationSeoDescriptions[destination.id] ??
        `${destination.description} Plan the right stay, season and route with local China specialists.`,
      heroImage: destination.image,
      relatedJourneys: journeyCatalog
        .filter(
          (journey) =>
            journey.visualStatus !== "pending" &&
            journey.destinationFilters.includes(destination.name),
        )
        .map((journey) => ({
          title: journey.title,
          route: journey.routeLabel,
          duration: journey.durationLabel,
          href: journey.href,
          image: journey.image,
        })),
    };
  });
}

export async function getPublicDestination(slug: string) {
  return (await getPublicDestinations()).find((destination) => destination.slug === slug) ?? null;
}

export async function getPublicDestinationHub() {
  return {
    heroEyebrow: "China destination guides",
    heroTitle: "Find the right destinations for your China journey.",
    heroCopy:
      "Explore China's historic capitals, modern cities and extraordinary landscapes. Each guide explains what makes the destination special, how long to stay and how it can fit into a private China tour.",
    interestEyebrow: "Explore China by destination",
    interestTitle: "Cities, culture and landscapes worth building a journey around.",
    interestCopy:
      "Use our in-depth China travel guides to compare local culture, signature food, the best time to visit and a comfortable length of stay before choosing your route.",
    journeysEyebrow: "Private China tours",
    journeysTitle: "Turn the places you choose into one well-paced journey.",
    journeysCopy:
      "Explore private China tour itineraries that connect major sights with meaningful local experiences, realistic travel times and room to enjoy each destination.",
    featuredJourneys: mergeCoreJourneyFallbacks([]),
    ctaEyebrow: "Plan with a local China specialist",
    ctaTitle: "Not sure which China destinations work well together?",
    ctaCopy:
      "Tell us what interests you, when you want to travel and how you like to explore. We will suggest a practical private route with the right destinations, hotels and pace.",
    ctaLabel: "Plan my private China tour",
  };
}

export async function getPublicHomePage() {
  const destinations = await getPublicDestinations();
  const featuredJourneys = mergeCoreJourneyFallbacks([]);
  return {
    heroEyebrow: "AVIORA",
    heroTitle: "Private China tours, designed around you.",
    heroCopy:
      "Thoughtful routes, carefully chosen hotels and local support throughout your journey.",
    heroImage,
    heroTrustItems: [
      "Licensed inbound tourism operator",
      "China-registered operating company",
      "Private, no-shopping travel",
    ],
    featuredJourneys,
    featuredDestinations: destinations.filter((destination) => destination.featured),
    featuredPosts: journalArticles.slice(0, 3).map((article) => ({
      title: article.title,
      slug: article.slug,
      summary: article.excerpt,
      category: article.category,
      hero_image: {
        url: article.hero.image.src,
        alt_text: article.hero.image.alt,
        object_position: article.hero.image.objectPosition,
      },
    })),
    intentPaths: [
      {
        eyebrow: "A defining first route",
        title: "First trip to China",
        description: "Beijing, Xi'an and Shanghai with private support and a comfortable pace.",
        href: "/tours/first-china-beautifully-paced",
        image: destinationImages.beijing,
      },
      {
        eyebrow: "Easy family moments",
        title: "Pandas and family time",
        description: "Chengdu's pandas, teahouses and food culture from one well-planned base.",
        href: "/tours/chengdu-pandas-sichuan-table",
        image: destinationImages.chengdu,
      },
      {
        eyebrow: "A closer cultural view",
        title: "Food and local life",
        description: "Markets, regional flavors and everyday traditions experienced with context.",
        href: "/destinations/chengdu",
        image: {
          src: "/home/chengdu-tea-house.webp",
          alt: "A traditional Chengdu teahouse where local food and daily life come together",
          width: 1920,
          height: 1200,
          objectPosition: "50% 50%",
        } satisfies MediaAsset,
      },
      {
        eyebrow: "China in the landscape",
        title: "Scenery and nature",
        description: "Shanghai's skyline paired with Zhangjiajie's extraordinary sandstone peaks.",
        href: "/tours/shanghai-zhangjiajie-floating-peaks",
        image: destinationImages.zhangjiajie,
      },
    ],
    trustPoints: [
      {
        title: "Licensed inbound tourism operator",
        description: "Your trip is operated in China by a registered and licensed local company.",
      },
      {
        title: "Private travel without forced shopping",
        description: "Your time is reserved for the places and experiences you chose.",
      },
      {
        title: "Hotels and pacing chosen around you",
        description: "Location, room needs, walking comfort and daily rhythm shape the route.",
      },
      {
        title: "China-based support throughout",
        description: "Our local team remains reachable before arrival and while you travel.",
      },
    ],
    destinationsEyebrow: "Explore China",
    destinationsTitle: "Begin with the China that interests you.",
    destinationsCopy:
      "Compare places by culture, landscape and the experience they add to a private route.",
    whyEyebrow: "Why AVIORA",
    whyTitle: "The difference is in the decisions.",
    whyCopy:
      "We choose the right hotel location, guide, timing and transport for each route, then stay reachable while you travel.",
    whyStats: [
      { title: "Licensed", description: "Inbound tourism operator" },
      { title: "Private", description: "Guide and vehicle" },
      { title: "None", description: "Forced shopping" },
    ],
    whyPoints: proofPoints,
    planningEyebrow: "How planning works",
    planningTitle: "Your trip starts with what matters to you.",
    planningCopy:
      "Share your dates, travelers and priorities. A specialist will shape the first route, hotel and service direction.",
    planningImage: homeEditorialImages.paintingExperience,
    planningSteps,
    tradeEyebrow: "Listening in person",
    tradeTitle: "Better trips begin with better questions.",
    tradeCopy:
      "Our conversations in Kuala Lumpur explored what international guests need from China travel, including family comfort, dietary care and clear local support.",
    tradeImages: [
      homeEditorialImages.tradeConsultation,
      homeEditorialImages.tradeBuyerMeeting,
      homeEditorialImages.tradeMuslimBuyers,
    ],
    journalEyebrow: "Travel journal",
    journalTitle: "Make informed choices before you book.",
    journalCopy:
      "Clear advice on routes, seasons, hotels, family travel and private touring in China.",
    ctaEyebrow: "Start the conversation",
    ctaTitle: "Start with your dates and who is traveling.",
    ctaCopy: "A China specialist will recommend the right route, hotel level and daily pace.",
    ctaImage: homeEditorialImages.guilinLandscape,
    fallbackExploreChina: exploreChina,
  };
}
