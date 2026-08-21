import { siteConfig } from "@/config/site";
import {
  firstTripPlanningDecisions,
  firstTripPlanningGuide,
  routeRealityCheckTerms,
} from "@/content/journal/first-trip-planning-framework";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import type { Tour } from "@/types/tour";

const journeyProfiles = [
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
      ["Planning with older parents", "/journal/china-trip-with-older-parents"],
      ["Limited-mobility adaptation boundaries", "/journal/china-tours-seniors-limited-mobility"],
      ["First-trip destination comparison", "/journal/best-places-to-visit-china-first-time"],
      ["Complete China trip budget guide", "/journal/how-much-does-a-trip-to-china-cost"],
      ["Private tour versus self-guided travel", "/journal/private-china-tour-vs-self-guided"],
      ["China tours from the USA", "/journal/china-tours-from-usa"],
      ["Luxury China tour buyer's guide", "/journal/luxury-china-tour-planning-guide"],
      ["Beijing versus Shanghai for a first trip", "/journal/beijing-or-shanghai-first-time"],
      ["Two-week first China itinerary", "/journal/two-week-china-itinerary-first-time"],
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
    slug: "luxury-yunnan-private-tour",
    audience:
      "Couples, friends, private groups and repeat China visitors drawn to culture, tea, landscapes and boutique stays",
    pace: "Balanced private pacing with three overland sectors, gradual altitude gain and a protected first evening in Shangri-La",
    evidence: [
      ["Best time to visit China", "/journal/best-time-to-visit-china"],
      ["Luxury China tour buyer's guide", "/journal/luxury-china-tour-planning-guide"],
      ["Complete China trip budget guide", "/journal/how-much-does-a-trip-to-china-cost"],
      ["Private tour versus self-guided travel", "/journal/private-china-tour-vs-self-guided"],
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
      ["China trip budget guide", "/journal/how-much-does-a-trip-to-china-cost"],
      ["Private China tour planning guide", "/journal/luxury-china-tour-planning-guide"],
      [
        "High-speed train guidance for foreign visitors",
        "/journal/china-high-speed-train-foreigners",
      ],
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

## AVIORA service achievements

- Countries Served: 30+ — Countries from which AVIORA has welcomed guests to China.
- Guests Hosted: 12,000+ — Guests hosted across AVIORA private China journeys.
- Overseas Companies Served: 48 — Overseas companies supported with China travel services.

## AVIORA service catalogue

- Complete private China journeys: tailor-made multi-city travel with hotels, private guides, vehicles, admissions, domestic transport and China-based coordination.
- Private China day tours: professionally handled private days with private guide, vehicle, tickets and timing coordinated.
- Private vehicle and driver: a tailored recommendation based on city, route, date, passenger count, luggage, vehicle level and service hours. Direct contact: https://wa.me/447985052302
- Expert private guide: destination- and interest-matched private guides with language and pace considered. Direct contact: https://wa.me/447985052302
- Existing-plan support: AVIORA can work around confirmed flights, hotels, meetings and partially arranged itineraries.
- Positioning: all published travel products are private, mid-to-high-end services. Signature is a product level, not a single theme.

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
      "Cache-Control": "no-store, max-age=0",
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
Journey format: Private, tailor-made, no compulsory shopping stops
Pace: ${pace}
Suitable for: ${audience}

## Price and availability

Published starting price: US$${pricing.fromUsd.toLocaleString("en-US")} per person
Price basis: ${pricing.basis}
Typical tailored range: ${pricing.finalPriceNote}
Additional pricing note: ${pricing.additionalNote ?? "No additional published pricing note."}
Availability status: Limited and date-specific; subject to written supplier confirmation
Price status: Indicative until dates, hotel availability, room categories, transport inventory and services are confirmed in a written proposal

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
