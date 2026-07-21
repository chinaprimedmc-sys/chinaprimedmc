import { createClient } from "next-sanity";

import {
  destinationInterestImages,
  destinationInterests,
  destinationRegions,
  explorerDestinations,
} from "@/content/destinations/explorer";
import { getDestinationEditorial } from "@/content/destinations/editorial";
import {
  heroImage,
  homeEditorialImages,
  homeNavItems,
  journeys,
  planningSteps,
  proofPoints,
} from "@/content/home/homepage";
import { journalArticles } from "@/content/journal";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) throw new Error("Set SANITY_WRITE_TOKEN before running this script.");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yycku2v3",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-02-19",
  token,
  useCdn: false,
  perspective: "raw",
});

const siteUrl = "https://www.chinaprimedmc.com";
const image = (asset: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  objectPosition?: string;
}) => ({
  _type: "r2Image",
  url: asset.src.startsWith("http") ? asset.src : `${siteUrl}${asset.src}`,
  alt: asset.alt,
  width: asset.width,
  height: asset.height,
  objectPosition: asset.objectPosition || "50% 50%",
});
const destinationDocs = explorerDestinations.map((destination, index) => {
  const editorial = getDestinationEditorial(destination);
  return {
    _id: `destination-${destination.id}`,
    _type: "destination",
    name: destination.name,
    slug: { _type: "slug", current: destination.id },
    region: destination.region,
    headline: `${destination.name}, designed around your pace.`,
    summary: destination.description,
    kicker: destination.kicker,
    bestFor: destination.bestFor,
    recommendedStay: destination.stay,
    bestTime: editorial.bestTime,
    orientation: editorial.orientation,
    interests: destination.interests,
    highlights: editorial.experiences,
    planningNotes: editorial.planningNotes,
    heroImage: image(destination.image),
    featured: index < 6,
    sortOrder: index + 1,
    seoTitle: `${destination.name} Private Travel Guide | AVIORA`,
    seoDescription: destination.description,
    noIndex: false,
  };
});

const journeyReferences = (ids: Set<string>) =>
  journeys
    .map((journey) => `journey-${journey.href.split("/").pop()}`)
    .filter((id) => ids.has(id))
    .map((id, index) => ({ _key: `journey-${index}`, _type: "reference", _ref: id }));

const homeDocument = (journeyIds: Set<string>) => ({
  _id: "homePage",
  _type: "homePage",
  heroEyebrow: "AVIORA · Private China journeys",
  heroTitle: "China, beautifully within reach.",
  heroCopy:
    "Private China journeys with the wonder kept in, and the friction quietly designed out.",
  heroImage: image(heroImage),
  heroTrustItems: [
    "Licensed inbound tourism operator",
    "China-registered operating company",
    "Private, no-shopping travel",
  ],
  featuredJourneys: journeyReferences(journeyIds),
  featuredDestinations: ["beijing", "shanghai", "chengdu"].map((slug, index) => ({
    _key: `destination-${index}`,
    _type: "reference",
    _ref: `destination-${slug}`,
  })),
  featuredPosts: journalArticles.map((article, index) => ({
    _key: `post-${index}`,
    _type: "reference",
    _ref: `blog-${article.slug}`,
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
    { _key: "licensed", title: "Licensed", description: "Inbound tourism operator" },
    { _key: "private", title: "Private", description: "Daily rhythm" },
    { _key: "shopping", title: "0", description: "Shopping-tour pressure" },
  ],
  whyPoints: proofPoints.map((point, index) => ({
    _key: `point-${index}`,
    title: point.title,
    description: point.description,
  })),
  planningEyebrow: "How planning works",
  planningTitle: "Start with your reality, not a fixed package.",
  planningCopy:
    "The first conversation gives us enough context to suggest a route direction without asking you to solve the whole trip before we begin.",
  planningImage: image(homeEditorialImages.paintingExperience),
  planningSteps: planningSteps.map((step, index) => ({
    _key: `step-${index}`,
    title: step.title,
    description: step.description,
  })),
  tradeEyebrow: "Travel trade presence",
  tradeTitle: "In the room where China travel is discussed.",
  tradeCopy:
    "Recent face-to-face conversations in Kuala Lumpur, focused on practical inbound China travel and clearer local delivery.",
  tradeImages: [
    homeEditorialImages.tradeConsultation,
    homeEditorialImages.tradeBuyerMeeting,
    homeEditorialImages.tradeMuslimBuyers,
  ].map((asset, index) => ({ ...image(asset), _key: `trade-${index}` })),
  journalEyebrow: "Travel journal",
  journalTitle: "Useful thinking before you choose a route.",
  journalCopy:
    "Practical planning notes for the questions travelers ask before the journey feels real.",
  ctaEyebrow: "Start the conversation",
  ctaTitle: "Tell us who is traveling. We will suggest the first shape of the journey.",
  ctaCopy:
    "Start with dates, travelers, pace, comfort level, and the questions you are not sure how to ask yet.",
  ctaImage: image(homeEditorialImages.guilinLandscape),
});

const hubDocument = (journeyIds: Set<string>) => ({
  _id: "destinationHub",
  _type: "destinationHub",
  heroEyebrow: "Explore China by feeling",
  heroTitle: "Where in China would you like to begin?",
  heroCopy:
    "Start with what moves you. Discover the landscapes, cities and living cultures that can shape a private journey through China.",
  heroImage: image({
    src: "/home/beijing-forbidden-city-1400.webp",
    alt: "Imperial rooftops in Beijing opening a journey across China",
  }),
  interestEyebrow: "01 · Follow your curiosity",
  interestTitle: "What draws you to China?",
  interestCopy:
    "Choose an instinct, not a place name. We will reveal the destinations that express it best.",
  interests: destinationInterests.map((interest, index) => ({
    _key: `interest-${index}`,
    ...interest,
    image: image(destinationInterestImages[interest.id]),
  })),
  featuredEyebrow: "02 · The cinematic edit",
  featuredTitle: "China, one chapter at a time.",
  featuredCopy: "Scroll through the edit. Every frame opens a real destination guide.",
  featuredDestinations: explorerDestinations
    .slice(0, 8)
    .map((destination, index) => ({
      _key: `featured-${index}`,
      _type: "reference",
      _ref: `destination-${destination.id}`,
    })),
  regionsEyebrow: "03 · Read the country",
  regionsTitle: "Five regions. Twenty ways into China.",
  regionsCopy:
    "Explore every destination by region. Each card links to practical guidance on character, pacing, timing and signature experiences.",
  regions: destinationRegions.map((region, index) => ({ _key: `region-${index}`, ...region })),
  journeysEyebrow: "04 · Journeys that connect",
  journeysTitle: "See how places become a journey.",
  journeysCopy:
    "These private routes show how different chapters of China can connect without forcing the pace.",
  featuredJourneys: journeyReferences(journeyIds),
  ctaEyebrow: "05 · A route made personal",
  ctaTitle: "Not sure where to begin?",
  ctaCopy:
    "A China specialist can connect the destinations, dates and pace into one coherent private journey.",
  ctaLabel: "Shape my China journey",
});

const settingsDocument = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteTitle: "AVIORA",
  brandDescriptor: "Private China journeys by China Prime DMC",
  defaultSeoDescription:
    "Private China journeys designed by AVIORA and delivered in China by a licensed inbound tourism operator.",
  footerDescription:
    "Private China journeys by China Prime DMC, operated in China by a licensed inbound tourism operator.",
  email: "chinaprimedmc@gmail.com",
  whatsapp: "+447985052302",
  whatsappLabel: "WhatsApp",
  whatsappHref: "https://wa.me/447985052302",
  primaryCtaLabel: "Plan My Trip",
  primaryCtaHref: "/start-planning",
  navigation: homeNavItems.map((item, index) => ({
    _key: `nav-${index}`,
    label: item.label,
    href: item.href,
  })),
  socialLinks: [
    {
      _key: "facebook",
      label: "Facebook",
      href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr",
    },
    { _key: "instagram", label: "Instagram", href: "https://www.instagram.com/chinaprimedmc" },
  ],
};

const blogDocs = journalArticles.map((article) => ({
  _id: `blog-${article.slug}`,
  _type: "blogPost",
  title: article.title,
  slug: { _type: "slug", current: article.slug },
  subtitle: article.dek,
  summary: article.excerpt,
  category: article.category,
  author: article.author.name,
  readingTime: article.readingTime,
  body: article.content
    .filter((block) => block.type === "heading" || block.type === "paragraph")
    .map((block, index) => ({
      _key: `block-${index}`,
      _type: "block",
      style: block.type === "heading" ? "h2" : "normal",
      children: [
        {
          _key: `span-${index}`,
          _type: "span",
          text: block.type === "heading" ? block.title : block.body,
        },
      ],
      markDefs: [],
    })),
  heroImage: image(article.hero.image),
  gallery: article.gallery.map((asset, index) => ({ ...image(asset), _key: `gallery-${index}` })),
  tags: article.tags,
  featured: Boolean(article.featured),
  publishedAt: article.publishedAt,
  sortOrder: article.featured ? 1 : 100,
  seoTitle: article.seo.title,
  seoDescription: article.seo.description,
  noIndex: false,
}));

const journeyVersions = await client.fetch<Array<{ _id: string; _rev: string }>>(
  `*[_type == "journey" && defined(slug.current)][0...100]{_id, _rev}`,
);
const draftJourneys = journeyVersions.filter((journey) => journey._id.startsWith("drafts."));

const draftHome = await client.fetch<{
  _id: string;
  _rev: string;
  featuredJourneys?: Array<{ _key?: string; _type: "reference"; _ref: string }>;
} | null>(`*[_id == "drafts.homePage"][0]{_id, _rev, featuredJourneys}`);

if (draftHome?.featuredJourneys?.some((reference) => reference._ref.startsWith("drafts."))) {
  await client
    .patch(draftHome._id)
    .ifRevisionId(draftHome._rev)
    .unset(["featuredJourneys"])
    .commit({ visibility: "sync" });
}

for (const draft of draftJourneys) {
  await client.action(
    {
      actionType: "sanity.action.document.publish",
      draftId: draft._id,
      publishedId: draft._id.replace(/^drafts\./, ""),
      ifDraftRevisionId: draft._rev,
    },
    { tag: "seed-public-content" },
  );
}

if (draftHome?.featuredJourneys?.length) {
  await client
    .patch(draftHome._id)
    .set({
      featuredJourneys: draftHome.featuredJourneys.map((reference) => ({
        ...reference,
        _ref: reference._ref.replace(/^drafts\./, ""),
      })),
    })
    .commit({ visibility: "sync" });
}

const publishedJourneyIds = new Set(
  journeyVersions.map((journey) => journey._id.replace(/^drafts\./, "")),
);

for (const document of destinationDocs) {
  await client.createOrReplace(document, { visibility: "sync" });
}
for (const document of blogDocs) {
  await client.createOrReplace(document, { visibility: "sync" });
}
for (const document of [
  homeDocument(publishedJourneyIds),
  hubDocument(publishedJourneyIds),
  settingsDocument,
]) {
  await client.createOrReplace(document as { _id: string; _type: string }, { visibility: "sync" });
}

console.log(
  `Seeded ${destinationDocs.length} destinations, ${blogDocs.length} posts, ${publishedJourneyIds.size} journeys and 3 singleton documents.`,
);
