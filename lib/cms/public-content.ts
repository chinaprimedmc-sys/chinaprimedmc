import "server-only";

import {
  destinationInterestImages,
  destinationInterests,
  destinationRegions,
  explorerDestinations,
} from "@/content/destinations/explorer";
import { getDestinationEditorial } from "@/content/destinations/editorial";
import {
  exploreChina,
  heroImage,
  homeEditorialImages,
  homeNavItems,
  planningSteps,
  primaryAction,
  proofPoints,
} from "@/content/home/homepage";
import {
  getSanityDestination,
  getSanityDestinationHub,
  getSanityDestinations,
  getSanityHomePage,
  getSanitySiteSettings,
  type SanityDestination,
} from "@/lib/cms/sanity";
import type { MediaAsset } from "@/types/component-library";

export async function getPublicSiteSettings() {
  const value = await safeContent(getSanitySiteSettings);
  return {
    siteTitle: value?.siteTitle || "AVIORA",
    brandDescriptor: value?.brandDescriptor || "Private China journeys by China Prime DMC",
    defaultSeoDescription:
      value?.defaultSeoDescription ||
      "Private China journeys designed by AVIORA and delivered in China by a licensed inbound tourism operator.",
    footerDescription:
      value?.footerDescription ||
      "Private China journeys by China Prime DMC, operated in China by a licensed inbound tourism operator.",
    email: value?.email || "chinaprimedmc@gmail.com",
    whatsapp: value?.whatsapp || "+447985052302",
    whatsappLabel: value?.whatsappLabel || "WhatsApp",
    whatsappHref: value?.whatsappHref || "https://wa.me/447985052302",
    primaryCtaLabel: value?.primaryCtaLabel || primaryAction.label,
    primaryCtaHref: value?.primaryCtaHref || primaryAction.href,
    navigation: value?.navigation?.length ? value.navigation : homeNavItems,
    socialLinks: value?.socialLinks || [],
    socialImage: value?.socialImage,
  };
}

export async function getPublicDestinations() {
  const values = await safeContent(getSanityDestinations);
  if (values?.length) return values.map(normalizeDestination);
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
  const value = await safeContent(() => getSanityDestination(slug));
  if (value) return normalizeDestination(value);
  return (await getPublicDestinations()).find((destination) => destination.slug === slug) ?? null;
}

export async function getPublicDestinationHub() {
  const value = await safeContent(getSanityDestinationHub);
  return {
    heroEyebrow: value?.heroEyebrow || "Explore China by feeling",
    heroTitle: value?.heroTitle || "Where in China would you like to begin?",
    heroCopy:
      value?.heroCopy ||
      "Start with what moves you. Discover the landscapes, cities and living cultures that can shape a private journey through China.",
    heroImage:
      value?.heroImage ||
      ({
        src: "/home/beijing-forbidden-city-1400.webp",
        alt: "Imperial rooftops in Beijing opening a journey across China",
      } satisfies MediaAsset),
    interestEyebrow: value?.interestEyebrow || "01 · Follow your curiosity",
    interestTitle: value?.interestTitle || "What draws you to China?",
    interestCopy:
      value?.interestCopy ||
      "Choose an instinct, not a place name. We will reveal the destinations that express it best.",
    interests: value?.interests?.length
      ? value.interests
      : destinationInterests.map((item) => ({
          ...item,
          image: destinationInterestImages[item.id],
        })),
    featuredEyebrow: value?.featuredEyebrow || "02 · The cinematic edit",
    featuredTitle: value?.featuredTitle || "China, one chapter at a time.",
    featuredCopy:
      value?.featuredCopy || "Scroll through the edit. Every frame opens a real destination guide.",
    regionsEyebrow: value?.regionsEyebrow || "03 · Read the country",
    regionsTitle: value?.regionsTitle || "Five regions. Twenty ways into China.",
    regionsCopy:
      value?.regionsCopy ||
      "Explore every destination by region. Each card links to practical guidance on character, pacing, timing and signature experiences.",
    regions: value?.regions?.length ? value.regions : [...destinationRegions],
    journeysEyebrow: value?.journeysEyebrow || "04 · Journeys that connect",
    journeysTitle: value?.journeysTitle || "See how places become a journey.",
    journeysCopy:
      value?.journeysCopy ||
      "These private routes show how different chapters of China can connect without forcing the pace.",
    featuredJourneys: value?.featuredJourneys || [],
    ctaEyebrow: value?.ctaEyebrow || "05 · A route made personal",
    ctaTitle: value?.ctaTitle || "Not sure where to begin?",
    ctaCopy:
      value?.ctaCopy ||
      "A China specialist can connect the destinations, dates and pace into one coherent private journey.",
    ctaLabel: value?.ctaLabel || "Shape my China journey",
  };
}

export async function getPublicHomePage() {
  const value = await safeContent(getSanityHomePage);
  return {
    heroEyebrow: value?.heroEyebrow || "AVIORA",
    heroTitle: value?.heroTitle || "China, beautifully within reach.",
    heroCopy:
      value?.heroCopy ||
      "Private China journeys with the wonder kept in, and the friction quietly designed out.",
    heroImage: value?.heroImage || heroImage,
    heroTrustItems: value?.heroTrustItems?.length
      ? value.heroTrustItems
      : [
          "Licensed inbound tourism operator",
          "China-registered operating company",
          "Private, no-shopping travel",
        ],
    featuredJourneys: value?.featuredJourneys || [],
    featuredDestinations: value?.featuredDestinations?.length
      ? value.featuredDestinations.map(normalizeDestination)
      : [],
    featuredPosts: value?.featuredPosts || [],
    destinationsEyebrow: value?.destinationsEyebrow || "Explore China",
    destinationsTitle: value?.destinationsTitle || "Begin with a place. Then find your pace.",
    destinationsCopy:
      value?.destinationsCopy ||
      "A few strong starting points for the route, the atmosphere, and the way you want to travel.",
    whyEyebrow: value?.whyEyebrow || "Why AVIORA",
    whyTitle: value?.whyTitle || "The practical worries are part of the design.",
    whyCopy:
      value?.whyCopy ||
      "A beautiful China trip is scenery, yes. It is also language, pacing, tickets, meals, transfers, rest, and knowing exactly who is taking care of the details.",
    whyStats: value?.whyStats?.length
      ? value.whyStats
      : [
          { title: "Licensed", description: "Inbound tourism operator" },
          { title: "Private", description: "Daily rhythm" },
          { title: "0", description: "Shopping-tour pressure" },
        ],
    whyPoints: value?.whyPoints?.length ? value.whyPoints : proofPoints,
    planningEyebrow: value?.planningEyebrow || "How planning works",
    planningTitle: value?.planningTitle || "Start with your reality, not a fixed package.",
    planningCopy:
      value?.planningCopy ||
      "The first conversation gives us enough context to suggest a route direction without asking you to solve the whole trip before we begin.",
    planningImage: value?.planningImage || homeEditorialImages.paintingExperience,
    planningSteps: value?.planningSteps?.length
      ? value.planningSteps.map((step, index) => ({
          number: String(index + 1).padStart(2, "0"),
          title: step.title,
          description: step.description || "",
        }))
      : planningSteps,
    tradeEyebrow: value?.tradeEyebrow || "Travel trade presence",
    tradeTitle: value?.tradeTitle || "In the room where China travel is discussed.",
    tradeCopy:
      value?.tradeCopy ||
      "Recent face-to-face conversations in Kuala Lumpur, focused on practical inbound China travel and clearer local delivery.",
    tradeImages: value?.tradeImages?.length
      ? value.tradeImages
      : [
          homeEditorialImages.tradeConsultation,
          homeEditorialImages.tradeBuyerMeeting,
          homeEditorialImages.tradeMuslimBuyers,
        ],
    journalEyebrow: value?.journalEyebrow || "Travel journal",
    journalTitle: value?.journalTitle || "Useful thinking before you choose a route.",
    journalCopy:
      value?.journalCopy ||
      "Practical planning notes for the questions travelers ask before the journey feels real.",
    ctaEyebrow: value?.ctaEyebrow || "Start the conversation",
    ctaTitle:
      value?.ctaTitle ||
      "Tell us who is traveling. We will suggest the first shape of the journey.",
    ctaCopy:
      value?.ctaCopy ||
      "Start with dates, travelers, pace, comfort level, and the questions you are not sure how to ask yet.",
    ctaImage: value?.ctaImage || homeEditorialImages.guilinLandscape,
    fallbackExploreChina: exploreChina,
  };
}

function normalizeDestination(value: SanityDestination) {
  return {
    ...value,
    id: value.id || `destination-${value.slug}`,
    name: value.name || value.slug,
    headline: value.headline || `${value.name || value.slug}, designed around your pace.`,
    summary: value.summary || "A private China destination shaped around your interests and pace.",
    kicker: value.kicker || "Destination",
    bestFor: value.bestFor || "Private travelers",
    recommendedStay: value.recommendedStay || "Tailored to your route",
    bestTime: value.bestTime || "Timing is tailored to your dates and preferred travel rhythm.",
    orientation:
      value.orientation ||
      "This destination can stand alone or connect naturally with a wider private journey through China.",
    seoTitle: value.seoTitle || `${value.name || value.slug} Private Travel Guide | AVIORA`,
    seoDescription:
      value.seoDescription ||
      value.summary ||
      `Plan a private journey to ${value.name || value.slug} with AVIORA.`,
    region: normalizeRegion(value.region),
    interests: value.interests || [],
    highlights: value.highlights || [],
    planningNotes: value.planningNotes || [],
  };
}

function normalizeRegion(value: string) {
  const normalized = value.toLowerCase();
  if (normalized.includes("east")) return "east";
  if (normalized.includes("southwest")) return "southwest";
  if (normalized.includes("northwest")) return "northwest";
  if (normalized.includes("south")) return "south";
  return "north";
}

async function safeContent<T>(operation: () => Promise<T>) {
  try {
    return await operation();
  } catch (error) {
    console.error("Sanity public content read failed.", error);
    return null;
  }
}
