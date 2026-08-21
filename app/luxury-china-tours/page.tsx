import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { getJourneyCatalogItem, type JourneyCatalogItem } from "@/content/tours/catalog";
import {
  HighIntentTourLanding,
  type HighIntentLandingContent,
} from "@/features/landing/high-intent-tour-landing";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Luxury China Tours: Private 2026 Journeys | AVIORA",
  description:
    "Compare luxury China tours by route, room, private guide, transport and support. See published 2026 land prices and design a journey with AVIORA in China.",
  path: "/luxury-china-tours",
  image: "/tours/first-china-beautifully-paced/beijing-great-wall-couple.webp",
});

const journeySlugs = [
  "china-at-an-easier-pace-12-day-private-tour",
  "beijing-xian-chengdu-shanghai-private-11-day-tour",
  "china-family-tour-with-pandas-12-day-private-tour",
] as const;

const journeys = journeySlugs
  .map((slug) => getJourneyCatalogItem(slug))
  .filter((journey): journey is JourneyCatalogItem => Boolean(journey));

const content: HighIntentLandingContent = {
  eyebrow: "PRIVATE LUXURY CHINA JOURNEYS",
  title: "The Premium Should Be Visible Before You Pay It.",
  intro:
    "Quietly operated private journeys with named room assumptions, expert guides, connected transfers and written service boundaries - designed and handled by one team in China.",
  heroImage: "/tours/first-china-beautifully-paced/beijing-great-wall-couple.webp",
  heroAlt: "A couple pausing together on the Great Wall during a private China journey",
  answerTitle: "Luxury is control over the moments that usually create friction.",
  answer: [
    "A five-star logo does not identify the room, view, bathroom, guide, transfer or response when a confirmed service changes. A high-quality proposal should name those decisions and separate confirmed arrangements from requests before asking for a deposit.",
    "AVIORA begins with route restraint. We protect the Great Wall, Forbidden City and Terracotta Army before adding another city, then choose hotels, transport and private experiences around the people traveling. Free time remains part of the product when another inclusion would weaken the day.",
  ],
  journeysTitle: "Published journeys with a visible price basis",
  journeysIntro:
    "Use these routes as commercial starting points. Exact suites, specialist guides, private access and premium transport are confirmed against your dates in a written proposal.",
  decisionTitle: "Where should the luxury budget change the trip?",
  decisionIntro:
    "Spend where the difference repeats across the journey or protects an experience that matters. Question upgrades that exist mainly to decorate the proposal.",
  decisionRows: [
    {
      label: "Hotel",
      recommendation: "Buy the right room and location",
      reason:
        "A larger room, quiet floor, useful view, bathroom fit and short daily transfers matter more than the star label alone.",
    },
    {
      label: "Guide",
      recommendation: "Match expertise and personality",
      reason:
        "The guide should fit the party's interests and rhythm, not merely meet a language requirement.",
    },
    {
      label: "Transport",
      recommendation: "Choose the complete hotel-to-hotel day",
      reason:
        "First-class rail or a well-timed nonstop flight is valuable only when both transfers, baggage and arrival time work.",
    },
    {
      label: "Private experience",
      recommendation: "Require a named host and purpose",
      reason:
        "Privacy should improve the encounter. Ask who hosts it, what is guaranteed and why it earns the time.",
    },
  ],
  proofTitle: "What AVIORA's premium proposal is expected to disclose",
  proof: [
    {
      title: "Room-level hotel detail",
      body: "Named property, exact room or suite, bedding, breakfast, requested view, bathroom needs and substitution standard.",
    },
    {
      title: "Guide selection and briefing",
      body: "Interests, conversational style, daily pace and any specialist requirement inform selection; named people remain subject to confirmation.",
    },
    {
      title: "Connected transport",
      body: "Vehicle size, luggage, guide handover, seat class, domestic-flight baggage and hotel arrival are planned as one movement.",
    },
    {
      title: "Useful private access",
      body: "The host, setting, duration, privacy and confirmation status are described without using exclusivity as a substitute for substance.",
    },
    {
      title: "Authority to adapt",
      body: "The guide knows what can shorten; the operations team knows when a change affects a contracted service and requires agreement.",
    },
    {
      title: "Commercial clarity",
      body: "Inclusions, exclusions, price assumptions, deposits, changes, cancellations and supplier-dependent elements appear in writing.",
    },
  ],
  finalTitle: "Tell us where comfort, access and time matter most.",
  finalBody:
    "Share your dates, travelers, preferred rooms and the experiences that justify the journey. We will design the route first, then confirm the premium details that make it yours.",
  planningHref:
    "/start-planning?source=luxury-china-tours&placement=commercial-landing&preference=luxury-china-journey",
  planningLabel: "Design My Luxury China Journey",
  articleHref: "/journal/luxury-china-tour-planning-guide",
  articleLabel: "Read The Luxury Buyer's Guide",
};

export default function LuxuryChinaToursPage() {
  const url = new URL("/luxury-china-tours", siteConfig.url).toString();

  return (
    <>
      <JsonLd
        id="luxury-china-tours-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${url}#page`,
          name: "Private Luxury China Tours",
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
