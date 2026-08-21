import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import { getDossierData, planningHref } from "@/features/tours/dossier/dossier-data";
import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

export type TourDetailDay = {
  label: string;
  title: string;
  destination: string;
  summary: string;
  transport: string;
  meals: string;
  stay: string;
  experiences: Array<{ title: string; description: string }>;
};

export type TourDetailModel = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  route: string;
  journeyRoleLabel: string;
  decisionSummary: string;
  signatureMoments: string[];
  heroImage: MediaAsset;
  hasPhotography: boolean;
  planningSupport?: Tour["planningSupport"];
  experienceChapters?: Tour["experienceChapters"];
  optionalExperiences?: Tour["optionalExperiences"];
  price?: {
    fromUsd: number;
    basis: string;
    detail: string;
    note: string;
  };
  quickFacts: Array<{ label: string; value: string }>;
  routeStops: Array<{ name: string; days?: string }>;
  days: TourDetailDay[];
  gallery: MediaAsset[];
  hotelDestinations: string[];
  hotelStandard: string;
  included: string[];
  excluded: string[];
  faqs: Array<{ question: string; answer: string }>;
  planningHref: string;
  whatsappHref: string;
  primaryActionLabel: string;
  whatsappActionLabel: string;
  lastReviewedLabel?: string;
};

export const bookingPolicyFaqs = [
  {
    question: "When is my private China tour booking confirmed?",
    answer:
      "Your booking becomes binding only after the written travel contract and booking terms are accepted, the required initial payment is received in cleared funds, and AVIORA confirms the booking and relevant supplier arrangements in writing.",
  },
  {
    question: "What payment and cancellation terms apply?",
    answer:
      "Your written proposal or booking confirmation states the currency, payment schedule, due dates, change conditions and cancellation schedule before you commit. Some hotels, transport tickets and special experiences may become non-refundable once booked or issued.",
  },
] as const;

export const frameworkTourFaqs = [
  {
    question: "Can this private journey be adjusted?",
    answer:
      "Yes. The route, pace, hotels and daily services are shaped around your dates and travellers before confirmation.",
  },
  {
    question: "What hotel standard is included?",
    answer:
      "We plan with carefully selected four- and five-star hotels. Exact properties and room categories are confirmed with your dates.",
  },
  ...bookingPolicyFaqs,
] as const;

export function createTourDetailModel(tour: Tour): TourDetailModel {
  const dossier = getDossierData(tour);
  const catalog = getJourneyCatalogItem(tour.slug);
  const isAgendaFirstBusinessJourney =
    tour.slug === "guangzhou-shenzhen-tailor-made-business-tour-4-day";
  const isMutianyuPrivateDayTour = tour.slug === "private-mutianyu-great-wall-day-tour";
  const isPrivateShanghaiDayTour = tour.slug === "private-shanghai-day-tour-guide-driver";
  const hotelStandard =
    tour.overview.facts.find((fact) => fact.label.toLowerCase() === "hotels")?.value ??
    "Selected 4- and 5-star hotels";
  return {
    slug: tour.slug,
    title: cleanDisplayTitle(tour.title),
    subtitle: tour.subtitle,
    duration: tour.duration,
    route: tour.route,
    journeyRoleLabel: catalog?.commercialRoleLabel ?? "Private China journey",
    decisionSummary: catalog?.hook ?? tour.overview.pitch,
    signatureMoments:
      catalog?.highlights.slice(0, 3) ??
      tour.highlights.slice(0, 3).map((highlight) => highlight.title),
    heroImage: tour.hero.image,
    hasPhotography: tour.visualStatus !== "pending",
    planningSupport: tour.planningSupport,
    experienceChapters: tour.experienceChapters,
    optionalExperiences: tour.optionalExperiences,
    price: catalog
      ? {
          fromUsd: catalog.pricing.fromUsd,
          basis: catalog.pricing.basis,
          detail: catalog.pricing.inclusionSummary,
          note: catalog.pricing.finalPriceNote,
        }
      : undefined,
    quickFacts: [
      { label: "Ideal for", value: dossier.bestFor },
      { label: "Pace", value: dossier.pace },
      { label: "Travel style", value: "Private guides · private transfers" },
      isMutianyuPrivateDayTour || isPrivateShanghaiDayTour
        ? {
            label: "Pickup",
            value: isPrivateShanghaiDayTour
              ? "Central Shanghai hotel or confirmed central address"
              : "Beijing hotel or confirmed central address",
          }
        : { label: "Hotels", value: hotelStandard },
    ],
    routeStops: dossier.stops.map((stop) => ({ name: stop.name, days: stop.days })),
    days: tour.itinerary.map((day) => ({
      label: `Day ${String(day.day).padStart(2, "0")}`,
      title: day.title,
      destination: day.destination,
      summary: day.summary,
      transport: day.transport ?? "Private timing confirmed with your dates",
      meals: day.meals?.join(", ") || "Confirmed in your written proposal",
      stay: compactDailyStay(day.hotel, day.destination),
      experiences: day.activities,
    })),
    gallery: tour.visualStatus === "pending" ? [] : collectTourImages(tour),
    hotelStandard,
    hotelDestinations: uniqueStrings(
      tour.accommodations.length
        ? tour.accommodations.map((hotel) => hotel.destination)
        : dossier.stops.map((stop) => stop.name),
    ),
    included: tour.included,
    excluded: tour.excluded,
    faqs: [...tour.faqs, ...bookingPolicyFaqs],
    planningHref: planningHref(tour.slug, "detail-template"),
    whatsappHref:
      (isAgendaFirstBusinessJourney || isMutianyuPrivateDayTour || isPrivateShanghaiDayTour) &&
      tour.inquiry.whatsappHref
        ? tour.inquiry.whatsappHref
        : tourWhatsAppHref(tour.title, tour.duration),
    primaryActionLabel: isAgendaFirstBusinessJourney
      ? "Build My Business Journey"
      : isMutianyuPrivateDayTour
        ? "Check My Date"
        : isPrivateShanghaiDayTour
          ? "Check My Date"
          : "Plan My Trip",
    whatsappActionLabel: isAgendaFirstBusinessJourney
      ? "Send Us My Business Plans"
      : isMutianyuPrivateDayTour
        ? "Check My Date on WhatsApp"
        : isPrivateShanghaiDayTour
          ? "Check My Date on WhatsApp"
          : "Message Our China Team",
    lastReviewedLabel: tour.updatedAt ? formatReviewDate(tour.updatedAt) : undefined,
  };
}

export function createFrameworkTourDetailModel(item: JourneyCatalogItem): TourDetailModel {
  return {
    slug: item.slug,
    title: cleanDisplayTitle(item.title),
    subtitle: item.summary,
    duration: item.durationLabel,
    route: item.routeLabel,
    journeyRoleLabel: item.commercialRoleLabel,
    decisionSummary: item.hook,
    signatureMoments: item.highlights.slice(0, 3),
    heroImage: item.image,
    hasPhotography: item.visualStatus !== "pending",
    price: {
      fromUsd: item.pricing.fromUsd,
      basis: item.pricing.basis,
      detail: item.pricing.inclusionSummary,
      note: item.pricing.finalPriceNote,
    },
    quickFacts: [
      { label: "Ideal for", value: item.bestForSummary },
      { label: "Pace", value: item.paceLabel },
      { label: "Travel style", value: "Private guides · private transfers" },
      { label: "Hotels", value: "Selected 4- and 5-star hotels" },
    ],
    routeStops: item.destinations.map((destination) => ({ name: destination.label })),
    days: item.destinations.map((destination, index) => ({
      label: `Route ${String(index + 1).padStart(2, "0")}`,
      title: destination.label,
      destination: destination.label,
      summary:
        item.highlights[index] ??
        item.planningNote ??
        "The final daily plan is shaped around your dates, interests and preferred pace.",
      transport: item.transportSummary,
      meals: "As confirmed in your written proposal",
      stay: `Selected 4- or 5-star hotel in ${destination.label}`,
      experiences: [],
    })),
    gallery: item.visualStatus === "pending" ? [] : [item.image],
    hotelStandard: "Selected 4- and 5-star hotels",
    hotelDestinations: item.destinations.map((destination) => destination.label),
    included: [item.pricing.inclusionSummary],
    excluded: ["International flights", "Items not listed in your written proposal"],
    faqs: [...frameworkTourFaqs],
    planningHref: planningHref(item.slug, "detail-template"),
    whatsappHref: tourWhatsAppHref(item.title, item.durationLabel),
    primaryActionLabel: "Plan My Trip",
    whatsappActionLabel: "Message Our China Team",
  };
}

function collectTourImages(tour: Tour) {
  return uniqueMedia([
    tour.hero.image,
    ...tour.highlights.map((highlight) => highlight.image),
    ...tour.itinerary.map((day) => day.image),
    ...tour.accommodations.map((hotel) => hotel.image),
    ...tour.optionalExperiences.map((experience) => experience.image),
    ...tour.gallery,
  ]);
}

function uniqueMedia(images: MediaAsset[]) {
  const seen = new Set<string>();
  return images.filter((image) => {
    if (!image.src || seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
}

function uniqueStrings(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function tourWhatsAppHref(title: string, duration: string) {
  const displayTitle = cleanDisplayTitle(title);
  const message = [
    `Hello AVIORA, I would like to know more about the ${displayTitle} journey (${duration}).`,
    "",
    "Travel dates or month:",
    "Number of travellers (adults / children):",
    "Preferred hotel level or room setup:",
    "Anything we should plan around:",
    "",
    "Could you advise on availability and a private quote?",
  ].join("\n");
  return `https://wa.me/447985052302?text=${encodeURIComponent(message)}`;
}

function compactDailyStay(stay: string | undefined, destination: string) {
  if (stay && !/confirm|proposal|room category|selected hotel/i.test(stay)) return stay;
  const overnightDestination = destination.split(/\s+to\s+/i).at(-1) ?? destination;
  return `Selected 4- or 5-star hotel in ${overnightDestination}`;
}

function cleanDisplayTitle(title: string) {
  return title.replace(/^\d+-Day\s+/i, "");
}

function formatReviewDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}
