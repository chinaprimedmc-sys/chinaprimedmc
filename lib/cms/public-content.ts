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

const destinationSeoDescriptions: Record<string, string> = {
  beijing:
    "Plan a private Beijing tour with the Great Wall, Forbidden City, hutongs, expert local guides and three to five nights in a well-located hotel.",
  xian: "Explore Xi'an on a private tour with the Terracotta Army, city walls, Silk Road history, Muslim Quarter food and a recommended two to three nights.",
  harbin:
    "Plan a winter trip to Harbin for its ice festival, snow displays, architecture and northeastern food, with seasonal dates and cold-weather logistics checked early.",
  "inner-mongolia":
    "Discover Inner Mongolia through grassland landscapes and local traditions, with realistic road times, carefully chosen stays and a route suited to the season.",
  shanghai:
    "Plan a private Shanghai tour with the Bund, Art Deco streets, local neighborhoods, skyline evenings, selected hotels and an expert local guide.",
  hangzhou:
    "Add Hangzhou to a private China trip for West Lake, Longjing tea country, refined regional food and a calm two- or three-night stay near Shanghai.",
  suzhou:
    "Explore Suzhou's classical gardens, canals, silk heritage and Jiangnan design with a private guide, ideally as an overnight stay from Shanghai.",
  huangshan:
    "Plan a Huangshan trip around mountain weather, walking ability and historic Anhui villages, with enough time for changing light and scenic viewpoints.",
  chengdu:
    "Plan a private Chengdu tour with early panda visits, teahouse culture, Sichuan food, family-friendly days and three to five nights in one comfortable base.",
  chongqing:
    "Explore Chongqing's layered river city, night views, hillside streets and hotpot with private transport planned around slopes, stairs and evening timing.",
  jiuzhaigou:
    "Visit Jiuzhaigou for clear lakes, forests and highland scenery, with altitude, seasonal access, transfers and walking comfort planned in advance.",
  dali: "Plan a slower stay in Dali around Erhai Lake, Bai villages, local food and open mountain views, with three to four nights in one comfortable base.",
  lijiang:
    "Explore Lijiang's Naxi heritage, old town and mountain setting beyond the busiest hours, with hotel access and altitude considered before booking.",
  "shangri-la":
    "Plan a Shangri-La trip with Tibetan cultural landscapes, monasteries and highland valleys, allowing time for altitude and changing weather.",
  guilin:
    "Plan a private Guilin and Yangshuo tour with Li River scenery, country roads, karst viewpoints and a stay in the landscape rather than a rushed day trip.",
  zhangjiajie:
    "Explore Zhangjiajie's sandstone peaks with private guides, crowd-aware timing, cableways and a walking plan matched to your comfort and the weather.",
  guangzhou:
    "Discover Guangzhou through dim sum, trading history, historic neighborhoods and the Pearl River, with dietary needs and meal reservations planned early.",
  dunhuang:
    "Plan a Dunhuang trip around the Mogao Caves, desert dunes and Silk Road history, with advance reservations and cooler sightseeing hours.",
  kashgar:
    "Explore Kashgar's old city, markets, crafts and Central Asian food culture with current access requirements and wider regional distances checked carefully.",
  urumqi:
    "Use Urumqi as a gateway to the Tianshan mountains, alpine lakes and Xinjiang food cultures, with realistic road times and current access checks.",
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
      featured: Boolean(destination.guideHref),
      sortOrder: 100,
      seoTitle: `Private ${destination.name} Tours and Travel Guide`,
      seoDescription:
        destinationSeoDescriptions[destination.id] ??
        `${destination.description} Plan the right stay, season and route with local China specialists.`,
      heroImage: destination.image,
    };
  });
}

export async function getPublicDestination(slug: string) {
  return (await getPublicDestinations()).find((destination) => destination.slug === slug) ?? null;
}

export async function getPublicDestinationHub() {
  return {
    heroEyebrow: "Private China travel guide",
    heroTitle: "Find the China that stays with you.",
    heroCopy:
      "Explore China's defining cities, landscapes and cultures, then see how they fit into a well-planned private route.",
    heroImage: {
      src: "/home/beijing-forbidden-city-1400.webp",
      alt: "Imperial rooftops in Beijing opening a journey across China",
    } satisfies MediaAsset,
    interestEyebrow: "01 · Follow your curiosity",
    interestTitle: "What draws you to China?",
    interestCopy: "Start with an interest. We will show you the places where it comes alive.",
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
    heroTitle: "Private China, thoughtfully designed.",
    heroCopy:
      "Distinctive journeys, carefully chosen hotels and expert local support from first idea to final departure.",
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
