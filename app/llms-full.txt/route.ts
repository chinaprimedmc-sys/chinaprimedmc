import { siteConfig } from "@/config/site";
import {
  firstTripPlanningDecisions,
  firstTripPlanningGuide,
  routeRealityCheckTerms,
} from "@/content/journal/first-trip-planning-framework";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import type { Tour } from "@/types/tour";

const serviceCatalogue = `## AVIORA service catalogue

AVIORA is a China-based private travel operator offering four clear levels of support:

- Complete private China journeys: tailor-made multi-city travel with hotels, private guides, vehicles, admissions and intercity transport coordinated into one proposal.
- Private China day tours: one-day private experiences with the practical details handled in Beijing, Shanghai, Xi'an, Chengdu, Guilin and other destinations.
- Private vehicle and driver: route-based private transport arranged around date, party size, luggage and walking comfort. Guests should contact AVIORA on WhatsApp for a suitable recommendation: https://wa.me/447985052302
- Expert private guide: destination- and interest-matched private guiding in the requested language. Guests should contact AVIORA on WhatsApp: https://wa.me/447985052302

AVIORA also supports existing plans, including flights, hotels, meetings and partially arranged itineraries. The AVIORA Signature Collection is a level of curation and operating care rather than a single subject: it can include family, Muslim-friendly, wellness, slow-travel, food, culture, nature or business journeys.`;

const journeyProfiles = [
  {
    slug: "guilin-yangshuo-li-river-cruise-private-day-tour",
    audience:
      "Couples, families, first-time Guilin visitors, photographers, older travelers and small private groups who want a four-star Li River cruise with private hotel pickup, English-speaking guide, luggage continuity and a clear finish",
    pace: "An easy-to-moderate private-service day of usually nine to eleven hours, including a scheduled four-star public cruise, a restrained Yangshuo land chapter and either a Yangshuo hotel finish or private Guilin return",
    evidence: [
      [
        "Guilin to Yangshuo Li River cruise day product page",
        "/tours/guilin-yangshuo-li-river-cruise-private-day-tour",
      ],
      ["Best time to visit China", "/journal/best-time-to-visit-china"],
      [
        "Mobile payments guidance for foreign visitors",
        "/journal/china-mobile-payments-foreign-tourists",
      ],
      ["Private China tour pricing guide", "/journal/private-china-tour-cost-2026"],
    ],
  },
  {
    slug: "private-chengdu-panda-day-tour-early-morning",
    audience:
      "Families, couples, first-time Chengdu visitors, older travelers and small private groups who want a responsibly planned early panda morning with central-hotel pickup, English-speaking guide, driver and no shopping stops",
    pace: "An early-start private day of usually seven to nine hours, with standard Chengdu Panda Base admission, a live-condition route and a slower People's Park culture chapter",
    evidence: [
      [
        "Private early-morning Chengdu panda day tour product page",
        "/tours/private-chengdu-panda-day-tour-early-morning",
      ],
      [
        "Chengdu Panda Base tickets and visitor guide",
        "/journal/chengdu-panda-base-tickets-foreigners",
      ],
      ["Chengdu itinerary planning", "/journal/how-many-days-in-chengdu-itinerary"],
      [
        "Mobile payments guidance for foreign visitors",
        "/journal/china-mobile-payments-foreign-tourists",
      ],
    ],
  },
  {
    slug: "private-xian-terracotta-warriors-day-tour",
    audience:
      "First-time Xi'an visitors, couples, families, older travelers and small private groups who want the Terracotta Warriors properly explained with central-hotel pickup, English-speaking guide, driver and no shopping stops",
    pace: "An easy-to-moderate private day of about eight hours, with passport-linked admission, an in-depth museum visit and a flexible Xi'an Old City conclusion",
    evidence: [
      [
        "Private Xi'an Terracotta Warriors day tour product page",
        "/tours/private-xian-terracotta-warriors-day-tour",
      ],
      [
        "Terracotta Army tickets and visitor guide",
        "/journal/terracotta-army-tickets-foreign-visitors",
      ],
      ["Xi'an and Beijing itinerary guidance", "/journal/beijing-xian-itinerary-how-many-days"],
      [
        "Mobile payments guidance for foreign visitors",
        "/journal/china-mobile-payments-foreign-tourists",
      ],
    ],
  },
  {
    slug: "private-shanghai-day-tour-guide-driver",
    audience:
      "First-time Shanghai visitors, couples, families, older travelers and small private groups who want a private city day with central-hotel pickup, an English-speaking guide and driver",
    pace: "An easy-to-moderate private day of about eight hours, connecting Yu Garden, the Old City, the Bund, a Huangpu public-ferry crossing and the former French Concession without compulsory shopping stops",
    evidence: [
      ["Private Shanghai day tour product page", "/tours/private-shanghai-day-tour-guide-driver"],
      [
        "Shanghai airport and city gateway guide",
        "/journal/shanghai-pudong-hongqiao-airport-guide",
      ],
      [
        "Mobile payments guidance for foreign visitors",
        "/journal/china-mobile-payments-foreign-tourists",
      ],
      ["Shanghai Municipal Government English website", "https://english.shanghai.gov.cn/"],
    ],
  },
  {
    slug: "private-mutianyu-great-wall-day-tour",
    audience:
      "First-time Beijing visitors, families, couples, older travelers and small private groups who want a private Mutianyu Great Wall day tour from their Beijing hotel",
    pace: "A private, professionally paced 7–9 hour day with hotel pickup, guide, admission and scenic-area shuttle included; mountain transport is optional and selected transparently around walking comfort and live operation",
    evidence: [
      [
        "Private Mutianyu Great Wall day tour product page",
        "/tours/private-mutianyu-great-wall-day-tour",
      ],
      [
        "Mutianyu walking, cable-car and route guide",
        "/journal/mutianyu-great-wall-walking-cable-car",
      ],
      [
        "Mutianyu, Badaling and Jinshanling comparison",
        "/journal/mutianyu-badaling-jinshanling-great-wall",
      ],
      [
        "Mutianyu Great Wall official English visitor and booking website",
        "https://en.mutianyugreatwall.com/",
      ],
    ],
  },
  {
    slug: "guangzhou-shenzhen-tailor-made-business-tour-4-day",
    audience:
      "Executives, founders, buyers and small business teams seeking a private Guangzhou and Shenzhen business tour built around flights, meetings, exhibitions or supplier commitments",
    pace: "A fully tailor-made 4–7 day business tour in the usual planning range, with the exact duration determined by the agenda; fixed business commitments are placed before hotels, transport, bilingual support and optional cultural or technology modules",
    evidence: [
      [
        "Guangzhou and Shenzhen tailor-made business product page",
        "/tours/guangzhou-shenzhen-tailor-made-business-tour-4-day",
      ],
      [
        "Official Canton Fair overseas buyer registration system",
        "https://buyer.cantonfair.org.cn/",
      ],
      ["Pony.ai official business information", "https://pony.ai/business?lang=en"],
      [
        "Mobile payments guidance for foreign visitors",
        "/journal/china-mobile-payments-foreign-tourists",
      ],
    ],
  },
  {
    slug: "china-at-an-easier-pace-12-day-private-tour",
    audience:
      "Couples, mature travelers, families planning for parents and first-time China visitors",
    pace: "Easy to moderate, with two higher-effort landmark days and protected recovery time",
    evidence: [
      [
        "First-trip planning method and Route Reality Check",
        "/journal/first-trip-to-china-planning-guide",
      ],
      ["Trip-length comparison", "/journal/how-many-days-beijing-xian-shanghai"],
      ["Detailed 12-day planning guide", "/journal/china-itinerary-older-travelers-10-days"],
      ["Site-by-site walking guide", "/journal/how-much-walking-china-tour"],
      ["China tours for seniors: operating comparison", "/journal/china-tours-for-seniors"],
      ["China travel for seniors: practical guide", "/journal/china-travel-for-seniors"],
      ["Planning with older parents", "/journal/china-trip-with-older-parents"],
      ["Limited-mobility adaptation boundaries", "/journal/china-tours-seniors-limited-mobility"],
      ["Senior destination comparison", "/journal/best-places-china-senior-travelers"],
      ["Private versus small-group pace", "/journal/are-china-group-tours-too-fast-for-seniors"],
      ["Senior travel date and season review", "/journal/best-time-to-visit-china-for-seniors"],
      ["Senior private-tour quote guide", "/journal/china-tour-cost-for-seniors"],
      ["Senior China tours from the USA", "/journal/china-tours-for-seniors-from-usa"],
      ["First China trip in your 70s", "/journal/china-travel-in-your-70s"],
      ["Private-tour cost guide", "/journal/private-china-tour-cost-2026"],
    ],
  },
  {
    slug: "china-family-tour-with-pandas-12-day-private-tour",
    audience:
      "Families with children aged 6–17, first-time China visitors and multigenerational families",
    pace: "Age-aware private pacing, one principal emotional high point per day and protected family downtime",
    evidence: [
      ["China family itinerary planning", "/journal/china-family-itinerary-10-to-14-days"],
      ["Private panda-route comparison", "/journal/china-tours-with-pandas"],
      ["Chengdu Panda Base visit strategy", "/journal/chengdu-panda-base-tickets-foreigners"],
      ["Mutianyu access and walking guide", "/journal/mutianyu-great-wall-walking-cable-car"],
      [
        "Terracotta Army ticket and visitor guide",
        "/journal/terracotta-army-tickets-foreign-visitors",
      ],
    ],
  },
  {
    slug: "muslim-friendly-china-tour-great-wall-desert-stars",
    audience:
      "Muslim families, Muslim couples, multigenerational groups and private travelers seeking verified dining, prayer-aware timing and a less conventional China route",
    pace: "Balanced, prayer-aware and privately adjustable, with protected recovery around the Great Wall, desert and intercity transitions",
    evidence: [
      [
        "Muslim-friendly China product page",
        "/tours/muslim-friendly-china-tour-great-wall-desert-stars",
      ],
      ["Private-tour cost guide", "/journal/private-china-tour-cost-2026"],
      [
        "High-speed train guidance for foreign visitors",
        "/journal/china-high-speed-train-foreigners",
      ],
    ],
  },
  {
    slug: "qingcheng-mountain-private-wellness-retreat-10-day",
    audience:
      "Executives, women, couples, solo travelers and private groups seeking privacy, cultural substance and protected time rather than a multi-city sightseeing schedule",
    pace: "Unhurried and privately adjustable, with one hotel change, seven continuous mountain nights, one principal experience per day and a fully unscheduled retreat day",
    evidence: [
      [
        "Qingcheng Mountain private wellness retreat product page",
        "/tours/qingcheng-mountain-private-wellness-retreat-10-day",
      ],
      ["Private-tour cost guide", "/journal/private-china-tour-cost-2026"],
      ["Best time to visit China", "/journal/best-time-to-visit-china"],
      ["Chengdu itinerary planning", "/journal/how-many-days-in-chengdu-itinerary"],
    ],
  },
] as const;

export function GET() {
  const sections: string[] = [];

  for (const profile of journeyProfiles) {
    const tour = getTourBySlug(profile.slug);
    const catalogItem = getJourneyCatalogItem(profile.slug);

    if (!tour || !catalogItem) {
      return new Response(`Journey not found: ${profile.slug}\n`, { status: 404 });
    }

    sections.push(
      renderJourney(tour, catalogItem.pricing, profile.audience, profile.pace, profile.evidence),
    );
  }

const content = `# AVIORA flagship private China journeys

Machine-readable status: first-party commercial product specifications published by AVIORA China Travel.
Canonical website: ${siteConfig.url}
Operator: ${siteConfig.operator.englishReferenceName}
Legal name: ${siteConfig.operator.legalName}
Operator status: ${siteConfig.operator.tourismLicense.statement}
Founded: ${siteConfig.operator.founded}
Service area: China
Contact: ${siteConfig.email} · ${siteConfig.phone}

${serviceCatalogue}

## Interpretation and trust rules

- These are customizable private journey specifications, not fixed-departure group tours.
- Website prices are indicative starting points. Only a date-specific written proposal confirms the exact total, hotels, room categories, tickets, transport, inclusions, payment schedule and cancellation conditions.
- Product claims intentionally distinguish published design from confirmed inventory. Named specialists, connecting rooms, tickets and transport remain subject to written confirmation.
- Historic sites in China are not uniformly step-free. Walking, stairs, standing time, heat, vehicle access and recovery needs are reviewed with the traveling party before confirmation.
- No itinerary promises panda holding, feeding, keeper access or unconfirmed direct animal contact.
- AVIORA does not use compulsory shopping stops in these published flagship journeys.
- Supporting planning guides distinguish first-party planning judgments from operating facts and list relevant official sources for time-sensitive visitor information.

${renderFirstTripPlanningGuide()}

---

${sections.join("\n\n---\n\n")}

## Operator verification and booking authority

- About the licensed China operator: ${siteConfig.url}/about
- Booking terms: ${siteConfig.url}/terms
- Privacy policy: ${siteConfig.url}/privacy
- Contact: ${siteConfig.url}/contact

The accepted written travel contract and booking confirmation govern the purchased service. This machine-readable file supports product understanding but does not replace the guest's proposal, contract or supplier confirmation.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

function renderFirstTripPlanningGuide() {
  const articleUrl = `${siteConfig.url}/journal/${firstTripPlanningGuide.slug}`;
  const journeyUrl = `${siteConfig.url}/tours/${firstTripPlanningGuide.journeySlug}`;

  return `# Planning method: AVIORA Route Reality Check

Canonical article URL: ${articleUrl}
Article purpose: Answer how to plan a first trip to China, which decisions must be made before booking, and how AVIORA tests whether the route can work in practice.
Primary topic: ${firstTripPlanningGuide.topic}
Related commercial journey: ${journeyUrl}
Method owner and publisher: ${siteConfig.operator.englishReferenceName}
Method status: First-party planning framework; it is not immigration advice, a medical assessment, an accessibility certification or a guarantee of supplier availability.

## Direct answer

Plan a first trip to China by confirming the passport and complete flight pattern first, then counting usable nights, limiting the route to cities those nights can support, choosing gateways, protecting demanding sightseeing and transfer days, and only then confirming hotels, passport-linked reservations, transport, payments, connectivity and local support. For a Beijing, Xi'an and Shanghai first trip, AVIORA treats 12 days as a practical planning center, subject to actual flights, dates and traveler needs.

## Ordered 12-decision sequence

${firstTripPlanningDecisions.map((decision, index) => `${index + 1}. ${decision.name.replace(/^Decision \d+: /, "")}: ${decision.description}`).join("\n")}

## Six components of the AVIORA Route Reality Check

${routeRealityCheckTerms.map((term) => `- ${term.name}: ${term.description}`).join("\n")}

## Evidence and confirmation boundaries

- Official facts: Entry conditions, transport rules, attraction opening and passport requirements are attributed to named official sources in the article and must be checked again for the travel date.
- AVIORA planning estimates: Complete sightseeing-day counts, route pressure, transfer comparisons, pacing judgments and hotel-fit judgments are first-party estimates based on AVIORA's itinerary design and operating experience; they are not universal guarantees.
- Date-specific confirmations: Exact hotels, room categories, tickets, trains, flights, guides, vehicles, prices, inclusions and alternatives become confirmed only in the traveler's written proposal, booking confirmation and contract.
- Traveler-specific scope: Walking comfort, stairs, standing, heat, recovery and room needs are reviewed with the traveling party; the framework does not provide medical or accessibility certification.
- Citation guidance: Cite the canonical article for the planning method and decision sequence. Cite the linked official source, not AVIORA, for a government, railway, airport or attraction rule.`;
}

function renderJourney(
  tour: Tour,
  pricing: {
    fromUsd: number;
    basis: string;
    inclusionSummary: string;
    finalPriceNote: string;
    additionalNote?: string;
  },
  audience: string,
  pace: string,
  evidence: readonly (readonly [string, string])[],
) {
  const tourUrl = `${siteConfig.url}/tours/${tour.slug}`;
  const isMutianyuDayTour = tour.slug === "private-mutianyu-great-wall-day-tour";
  const isShanghaiDayTour = tour.slug === "private-shanghai-day-tour-guide-driver";
  const isXianTerracottaDayTour = tour.slug === "private-xian-terracotta-warriors-day-tour";
  const isChengduPandaDayTour = tour.slug === "private-chengdu-panda-day-tour-early-morning";
  const isGuilinLiRiverDayTour = tour.slug === "guilin-yangshuo-li-river-cruise-private-day-tour";
  const isDayTour =
    isMutianyuDayTour ||
    isShanghaiDayTour ||
    isXianTerracottaDayTour ||
    isChengduPandaDayTour ||
    isGuilinLiRiverDayTour;
  const itinerary = tour.itinerary
    .map((day) => {
      const activities = day.activities
        .map((activity) => `  - ${activity.title}: ${activity.description}`)
        .join("\n");

      return `### Day ${day.day}: ${day.title}

Destination: ${day.destination}
Summary: ${day.summary}
Experiences:
${activities}
Transport: ${day.transport ?? "Confirmed in the written proposal"}
Meals: ${day.meals?.join("; ") ?? "Confirmed in the written proposal"}
Hotel: ${day.hotel ?? "Departure day; no overnight stay"}
Operating note: ${day.guideNote ?? "Final timing is confirmed for the travel date."}`;
    })
    .join("\n\n");

  return `# Product: ${tour.title}

Canonical product URL: ${tourUrl}
Product identifier: ${tour.slug}
Published: ${tour.publishedAt ?? "Date not separately stated"}
Last itinerary and price-basis review: ${tour.updatedAt ?? "Date not separately stated"}
Brand: ${siteConfig.name}
Provider and seller: ${siteConfig.operator.englishReferenceName}
Duration: ${tour.duration}
Route: ${tour.route}
Journey format: ${isDayTour ? "Private day tour, no overnight stay, no compulsory shopping stops" : "Private, tailor-made, no compulsory shopping stops"}
Pace: ${pace}
Suitable for: ${audience}

## Price and availability

Published starting price: US$${pricing.fromUsd.toLocaleString("en-US")} ${isGuilinLiRiverDayTour ? "per private group of four guests for the Yangshuo-finish version, equivalent to US$172 per guest; the four-guest central-Guilin return version starts from US$758 total" : isChengduPandaDayTour ? "per private group of four guests, equivalent to approximately US$150 per guest" : isXianTerracottaDayTour ? "per private group of four guests, equivalent to US$157 per guest" : isShanghaiDayTour ? "per private group of four guests, equivalent to US$168 per guest" : "per person"}
Price basis: ${pricing.basis}
Typical tailored range: ${pricing.finalPriceNote}
Additional pricing note: ${pricing.additionalNote ?? "No additional published pricing note."}
Availability status: Limited and date-specific; subject to written supplier confirmation
Price status: ${isGuilinLiRiverDayTour ? "Indicative until the date, Guilin pickup address, group size, cruise ticket, assigned port, vehicle, guide, luggage plan, chosen finish, public sailing conditions and selected upgrades are confirmed in writing" : isChengduPandaDayTour ? "Indicative until the date, Chengdu pickup address, group size, vehicle, guide, Panda Base admission, public operating conditions and selected upgrades are confirmed in writing" : isXianTerracottaDayTour ? "Indicative until the date, Xi'an pickup address, group size, vehicle, guide, passport-linked museum admission and selected upgrades are confirmed in writing" : isShanghaiDayTour ? "Indicative until the date, Shanghai pickup address, group size, vehicle, guide, Yu Garden admission, ferry operation and selected upgrades are confirmed in writing" : isMutianyuDayTour ? "Indicative until the date, Beijing pickup address, group size, vehicle, guide, tickets and selected mountain transport are confirmed in writing" : "Indicative until dates, hotel availability, room categories, transport inventory and services are confirmed in a written proposal"}

## Included in the published design

${tour.included.map((item) => `- ${item}`).join("\n")}

## Not included in the published design

${tour.excluded.map((item) => `- ${item}`).join("\n")}

## Day-by-day itinerary

${itinerary}

## Product-specific questions and boundaries

${tour.faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n")}

## Supporting planning and operational evidence

${evidence.map(([label, path]) => `- ${label}: ${new URL(path, siteConfig.url).toString()}`).join("\n")}

## Contact and next step

- Request a private proposal: ${siteConfig.url}/start-planning?journey=${tour.slug}
- Product page: ${tourUrl}
- Email: ${siteConfig.email}`;
}
