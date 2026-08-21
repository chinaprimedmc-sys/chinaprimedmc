import type { Metadata } from "next";

import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { getJourneyCatalogItem, type JourneyCatalogItem } from "@/content/tours/catalog";
import {
  HighIntentTourLanding,
  type HighIntentLandingContent,
} from "@/features/landing/high-intent-tour-landing";

export const metadata: Metadata = createMetadata({
  title: "China Tours From USA: Private Routes & 2026 Prices",
  description:
    "Compare private China tours from the USA by usable nights, gateway, route and published land price. Plan Beijing, Xi'an, Chengdu and Shanghai with local support.",
  path: "/china-tours-from-usa",
  image: "/tours/first-china-beautifully-paced/shanghai-waterfront-group.webp",
});

const journeySlugs = [
  "first-china-beautifully-paced",
  "beijing-xian-chengdu-shanghai-private-11-day-tour",
  "china-at-an-easier-pace-12-day-private-tour",
] as const;

const journeys = journeySlugs
  .map((slug) => getJourneyCatalogItem(slug))
  .filter((journey): journey is JourneyCatalogItem => Boolean(journey));

const content: HighIntentLandingContent = {
  eyebrow: "PRIVATE CHINA TOURS FROM THE USA",
  title: "Count The Nights In China Before You Compare The Tour.",
  intro:
    "Private land journeys designed around your actual US flights, with published price assumptions and one China-based team coordinating the route from arrival to departure.",
  heroImage: "/tours/first-china-beautifully-paced/shanghai-waterfront-group.webp",
  heroAlt: "Travelers together on Shanghai's waterfront during a private China journey",
  answerTitle: "The best US-China itinerary usually moves in one direction.",
  answer: [
    "For many first-time travelers, Beijing in and Shanghai out removes unnecessary backtracking. Beijing and the Great Wall open the historical story, Xi'an adds the Terracotta Army, and Shanghai creates a natural international departure point. Chengdu belongs when pandas and Sichuan food justify a fourth city.",
    "International airfare is not included in the published land prices below. We first compare your US departure airport, arrival time, connection pattern and usable nights in China. The land route is then designed around those flights rather than forcing a purchased ticket into a generic package.",
  ],
  journeysTitle: "Three published starting points - not one package for everyone",
  journeysIntro:
    "Each route has a different job. Compare the nights, city changes and published price basis before deciding which journey is closest to your trip.",
  decisionTitle: "Which China route fits the time you actually have?",
  decisionIntro:
    "The advertised calendar length can include long-haul travel and date-line effects. Use hotel nights in China and full sightseeing days to choose the route.",
  decisionRows: [
    {
      label: "8-9 nights in China",
      recommendation: "Beijing, Xi'an and Shanghai",
      reason:
        "The classic first route at its firmest workable pace, with only two intercity handovers.",
    },
    {
      label: "10-11 nights in China",
      recommendation: "Add Chengdu only when it is a priority",
      reason:
        "Pandas and Sichuan food create a distinct fourth chapter; otherwise protect more time in the three core cities.",
    },
    {
      label: "11-13 nights in China",
      recommendation: "Use the easier-paced three-city structure",
      reason:
        "Five Beijing nights and protected landmark days create more recovery and weather flexibility without adding another hotel.",
    },
    {
      label: "Flights not yet purchased",
      recommendation: "Test Beijing-in and Shanghai-out first",
      reason:
        "An open-jaw ticket may cost more but can remove a domestic flight, airport transfer and lost day at the end.",
    },
  ],
  proofTitle: "A US-origin proposal should answer these points before payment",
  proof: [
    {
      title: "The complete flight pattern",
      body: "Arrival airport, terminal, landing time, onward route and final departure are tested together. Entry eligibility remains the traveler's responsibility.",
    },
    {
      title: "The first 48 hours",
      body: "Airport meeting, luggage, hotel readiness and recovery are planned before the Great Wall or another fixed highlight is scheduled.",
    },
    {
      title: "Every domestic handover",
      body: "Rail or air class, baggage assumption, station or airport transfers and the next hotel arrival are stated as one complete movement.",
    },
    {
      title: "The exact room basis",
      body: "Hotel, room category, bedding, breakfast and requested arrangements are separated from what has already been confirmed.",
    },
    {
      title: "China-based responsibility",
      body: "The proposal identifies who coordinates guides, vehicles, tickets and changes to services while you are in China.",
    },
    {
      title: "Price and exclusions",
      body: "The land price, party-size assumption, international-flight exclusion and date-sensitive supplier conditions are visible before comparison.",
    },
  ],
  finalTitle: "Send the flights before they decide the wrong route.",
  finalBody:
    "Share your US departure airport, date window, travelers and the experiences that matter most. We will compare gateways and usable nights before recommending a private land journey.",
  planningHref:
    "/start-planning?source=china-tours-from-usa&placement=commercial-landing&preference=usa-china-planning",
  planningLabel: "Plan From My US Gateway",
  articleHref: "/journal/china-tours-from-usa",
  articleLabel: "Read The Flight And Route Guide",
};

export default function ChinaToursFromUsaPage() {
  const url = new URL("/china-tours-from-usa", siteConfig.url).toString();

  return (
    <>
      <JsonLd
        id="china-tours-from-usa-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${url}#page`,
          name: "Private China Tours From the USA",
          url,
          description: metadata.description,
          isPartOf: { "@id": `${siteConfig.url}/#website` },
          about: { "@id": `${siteConfig.url}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: journeys.map((journey, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: new URL(journey.href, siteConfig.url).toString(),
              name: journey.title,
            })),
          },
        }}
      />
      <HighIntentTourLanding content={content} journeys={journeys} />
    </>
  );
}
