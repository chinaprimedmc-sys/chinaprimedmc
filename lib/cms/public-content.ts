import "server-only";

import { siteConfig } from "@/config/site";
import {
  destinationInterestImages,
  destinationInterests,
  destinationRegions,
  explorerDestinations,
} from "@/content/destinations/explorer";
import { getDestinationEditorial } from "@/content/destinations/editorial";
import { journalArticles } from "@/content/journal";
import {
  exploreChina,
  heroImage,
  homeEditorialImages,
  homeNavItems,
  planningSteps,
  primaryAction,
  proofPoints,
} from "@/content/home/homepage";
import { mergeCoreJourneyFallbacks } from "@/lib/cms/core-journey-fallbacks";
import type { MediaAsset } from "@/types/component-library";

export async function getPublicSiteSettings() {
  return {
    siteTitle: "AVIORA",
    brandDescriptor: "Private China journeys by China Prime DMC",
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
      headline: `${destination.name}, designed around your pace.`,
      summary: destination.description,
      kicker: destination.kicker,
      bestFor: destination.bestFor,
      recommendedStay: destination.stay,
      bestTime: editorial.bestTime,
      orientation: editorial.orientation,
      interests: [...destination.interests],
      highlights: [...editorial.experiences],
      planningNotes: [...editorial.planningNotes],
      featured: Boolean(destination.guideHref),
      sortOrder: 100,
      seoTitle: `${destination.name} Private Travel Guide | AVIORA`,
      seoDescription: destination.description,
      heroImage: destination.image,
    };
  });
}

export async function getPublicDestination(slug: string) {
  return (await getPublicDestinations()).find((destination) => destination.slug === slug) ?? null;
}

export async function getPublicDestinationHub() {
  return {
    heroEyebrow: "Explore China by feeling",
    heroTitle: "Where in China would you like to begin?",
    heroCopy:
      "Start with what moves you. Discover the landscapes, cities and living cultures that can shape a private journey through China.",
    heroImage: {
      src: "/home/beijing-forbidden-city-1400.webp",
      alt: "Imperial rooftops in Beijing opening a journey across China",
    } satisfies MediaAsset,
    interestEyebrow: "01 · Follow your curiosity",
    interestTitle: "What draws you to China?",
    interestCopy:
      "Choose an instinct, not a place name. We will reveal the destinations that express it best.",
    interests: destinationInterests.map((item) => ({
      ...item,
      image: destinationInterestImages[item.id],
    })),
    featuredEyebrow: "02 · The cinematic edit",
    featuredTitle: "China, one chapter at a time.",
    featuredCopy: "Scroll through the edit. Every frame opens a real destination guide.",
    regionsEyebrow: "03 · Read the country",
    regionsTitle: "Five regions. Twenty ways into China.",
    regionsCopy:
      "Explore every destination by region. Each card links to practical guidance on character, pacing, timing and signature experiences.",
    regions: [...destinationRegions],
    journeysEyebrow: "04 · Journeys that connect",
    journeysTitle: "See how places become a journey.",
    journeysCopy:
      "These private routes show how different chapters of China can connect without forcing the pace.",
    featuredJourneys: mergeCoreJourneyFallbacks([]),
    ctaEyebrow: "05 · A route made personal",
    ctaTitle: "Not sure where to begin?",
    ctaCopy:
      "A China specialist can connect the destinations, dates and pace into one coherent private journey.",
    ctaLabel: "Shape my China journey",
  };
}

export async function getPublicHomePage() {
  const destinations = await getPublicDestinations();
  const featuredJourneys = mergeCoreJourneyFallbacks([]);
  return {
    heroEyebrow: "AVIORA",
    heroTitle: "China, beautifully within reach.",
    heroCopy:
      "Private China journeys with the wonder kept in, and the friction quietly designed out.",
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
    destinationsEyebrow: "Explore China",
    destinationsTitle: "Begin with a place. Then find your pace.",
    destinationsCopy:
      "A few strong starting points for the route, the atmosphere, and the way you want to travel.",
    whyEyebrow: "Why AVIORA",
    whyTitle: "The practical worries are part of the design.",
    whyCopy:
      "A beautiful China trip is scenery, yes. It is also language, pacing, tickets, meals, transfers, rest, and knowing exactly who is taking care of the details.",
    whyStats: [
      { title: "Licensed", description: "Inbound tourism operator" },
      { title: "Private", description: "Daily rhythm" },
      { title: "0", description: "Shopping-tour pressure" },
    ],
    whyPoints: proofPoints,
    planningEyebrow: "How planning works",
    planningTitle: "Start with your reality, not a fixed package.",
    planningCopy:
      "The first conversation gives us enough context to suggest a route direction without asking you to solve the whole trip before we begin.",
    planningImage: homeEditorialImages.paintingExperience,
    planningSteps,
    tradeEyebrow: "Travel trade presence",
    tradeTitle: "In the room where China travel is discussed.",
    tradeCopy:
      "Recent face-to-face conversations in Kuala Lumpur, focused on practical inbound China travel and clearer local delivery.",
    tradeImages: [
      homeEditorialImages.tradeConsultation,
      homeEditorialImages.tradeBuyerMeeting,
      homeEditorialImages.tradeMuslimBuyers,
    ],
    journalEyebrow: "Travel journal",
    journalTitle: "Useful thinking before you choose a route.",
    journalCopy:
      "Practical planning notes for the questions travelers ask before the journey feels real.",
    ctaEyebrow: "Start the conversation",
    ctaTitle: "Tell us who is traveling. We will suggest the first shape of the journey.",
    ctaCopy:
      "Start with dates, travelers, pace, comfort level, and the questions you are not sure how to ask yet.",
    ctaImage: homeEditorialImages.guilinLandscape,
    fallbackExploreChina: exploreChina,
  };
}
