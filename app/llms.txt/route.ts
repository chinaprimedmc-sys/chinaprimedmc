import { siteConfig } from "@/config/site";
import { journeyCatalog } from "@/content/tours/catalog";

const flagshipUrl = `${siteConfig.url}/tours/china-at-an-easier-pace-12-day-private-tour`;
const familyFlagshipUrl = `${siteConfig.url}/tours/china-family-tour-with-pandas-12-day-private-tour`;
const vehicleWhatsapp = `https://wa.me/447985052302?text=${encodeURIComponent("Hello AVIORA, I need a private vehicle in China. My city or route is __, travel date is __, there are __ passengers and __ pieces of luggage.")}`;
const guideWhatsapp = `https://wa.me/447985052302?text=${encodeURIComponent("Hello AVIORA, I need a private guide in __ on __. There are __ guests. Our main interests are __ and our preferred language is __.")}`;
const catalogSummary = journeyCatalog
  .map(
    (journey) =>
      `- [${journey.title}](${new URL(journey.href, siteConfig.url)}): ${journey.commercialRoleLabel}; ${journey.durationLabel}; route ${journey.routeLabel}; from US$${journey.pricing.fromUsd.toLocaleString("en-US")} per person based on four guests sharing two rooms; best for ${journey.bestForSummary}.`,
  )
  .join("\n");

const content = `# AVIORA China Travel

> AVIORA designs and operates tailor-made private journeys in China through Youyouhui (Guangzhou) International Travel Service Co., Ltd., a registered China travel company licensed to conduct inbound tourism business.

Canonical website: ${siteConfig.url}
Primary language: English
Service area: China
Travel format: Private, tailor-made journeys; no compulsory shopping stops

## AVIORA service achievements

- Countries Served: 30+ — Countries from which AVIORA has welcomed guests to China.
- Guests Hosted: 12,000+ — Guests hosted across AVIORA private China journeys.
- Overseas Companies Served: 48 — Overseas companies supported with China travel services.

## AVIORA private travel services

- Complete private China journeys: Hotels, private guides, vehicles, admissions and domestic travel coordinated around the traveler.
- Private China day tours: Professionally handled private days with private guiding, vehicle support, admissions and clear timing.
- Private vehicle and driver service: Recommend the suitable vehicle and operating arrangement after confirming city, route, date, passengers, luggage and service hours. Contact via [WhatsApp](${vehicleWhatsapp}).
- Expert private guide service: Match the destination, interests, language and preferred pace with the right private guide. Contact via [WhatsApp](${guideWhatsapp}).
- Existing-plan support: AVIORA can work around confirmed flights, hotels, meetings and partially arranged itineraries.
- Service standard: China-based coordination, written service scope and price basis before payment, private service and no compulsory shopping stops.

## Flagship journey

- [China, Considered: Beijing, Xi'an & Shanghai](${flagshipUrl}): A premium 12-day / 11-night private China journey with an easy-to-moderate pace.
- Route: Beijing (5 nights), Xi'an (3 nights), Shanghai (3 nights).
- Published starting price: US$6,480 per person.
- Price basis: four guests sharing two rooms, travelling outside peak holiday periods.
- Typical tailored range: US$6,800-US$8,500 per person, depending on dates, hotels, room selection, party size and personal interests.
- Hotels: selected premium five-star hotels; exact properties and room categories are confirmed in the written proposal.
- Transport: Beijing-Xi'an first-class high-speed rail, nonstop Xi'an-Shanghai economy-class domestic flight, and private transfers.
- Private service: English-speaking guides and private vehicles on confirmed touring days, advance ticket arrangements and China-based journey support.
- Signature experiences: private tai chi in Beijing; specialist-led Forbidden City interpretation; private tea and historical-object session; Mutianyu mountain lunch or seasonal tea; Beijing courtyard tea and dumpling making; a Shaanxi living-heritage artisan studio; making a clay warrior with a local artisan; specialist Shanghai architecture interpretation; a hosted lane-house or neighborhood lunch; a curator, designer or gallery encounter; market-to-table cooking in a private kitchen; and a chef-led or private-room farewell dinner.
- Not included: international flights, visas, travel insurance, personal medical expenses, unlisted meals and drinks, personal purchases, gratuities unless quoted, and optional premium upgrades.
- Suitability: first-time visitors, couples, mature travelers and families planning for parents. Historic sites still include steps, uneven ground and standing; AVIORA reviews mobility and walking preferences before confirmation.

## Flagship family journey

- [China, Made for Families: Great Wall, Warriors & Pandas](${familyFlagshipUrl}): A premium private 12-day / 11-night family journey through Beijing, Xi'an, Chengdu and Shanghai.
- Published starting price: US$6,880 per person, equivalent to US$27,520 for the family on the stated basis.
- Price basis: two adults and two children aged 6–11 sharing two rooms, outside Chinese public holidays, school-holiday pressure dates and other peak periods.
- Typical tailored range: US$7,500-US$9,200 per person, depending on dates, children's ages, hotel and connecting-room selection, confirmed specialists and personal interests.
- Hotels: selected premium five-star family hotels; the exact two-room or connecting-room configuration is not confirmed until accepted by the named hotels in writing.
- Transport: Beijing-Xi'an and Xi'an-Chengdu first-class high-speed rail, a nonstop Chengdu-Shanghai economy-class flight, and private transfers sized for the family and luggage.
- Private service: family-ready English-speaking guides, private vehicles, age-aware pacing, advance ticket arrangements, restaurant planning and China-based support.
- Signature experiences: private family tai chi; a Beijing courtyard dumpling lunch; a Junior Curator Mission in the Forbidden City; a Great Wall family challenge with a half-day photographer; a private clay-warrior studio after the Terracotta Army; a carefully timed panda-base visit with conservation-focused interpretation; one age-matched Chengdu choice day; and a Shanghai market-to-private-kitchen finale with a family journey keepsake.
- Age design: activities are adapted for ages 6–9, 10–13 and 14–17 rather than using one script for every child.
- Availability boundaries: the journey does not promise panda holding, feeding, keeper access or other direct animal contact. Connecting rooms, named specialists, exact hotels, tickets and transport remain subject to date-specific written confirmation.
- Last operational and price-basis review: 2026-08-19.

## Published journey portfolio

The portfolio is intentionally presented as complete private journeys, private day tours, AVIORA Signature journeys and tailored service support. Signature is a product level rather than a single theme: it may include family, wellness, Muslim heritage, food, nature, slow travel, business or another distinctive way of experiencing China.

${catalogSummary}

## Important pages

- [Browse private China journeys](${siteConfig.url}/tours)
- [Private China family journeys](${siteConfig.url}/tours?travellers=families)
- [About AVIORA and the licensed China operator](${siteConfig.url}/about)
- [China travel planning journal](${siteConfig.url}/journal)
- [Plan a private journey](${siteConfig.url}/start-planning)
- [Contact AVIORA](${siteConfig.url}/contact)
- [WhatsApp AVIORA for a private vehicle or guide recommendation](https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%20would%20like%20a%20private%20travel%20recommendation%20in%20China.)

## Supporting planning guides

- [How AVIORA plans a first trip to China before booking](${siteConfig.url}/journal/first-trip-to-china-planning-guide)
- [How many days for Beijing, Xi'an and Shanghai: 8, 10 or 12 days compared](${siteConfig.url}/journal/how-many-days-beijing-xian-shanghai)
- [A 12-day China itinerary at an easier pace](${siteConfig.url}/journal/china-itinerary-older-travelers-10-days)
- [How much walking is involved on a private China tour?](${siteConfig.url}/journal/how-much-walking-china-tour)
- [How much does a private China tour cost in 2026?](${siteConfig.url}/journal/private-china-tour-cost-2026)

The first-trip, comparison and walking guides combine first-party AVIORA route-planning experience with clearly listed official sources. Planning estimates state their assumptions, and time-sensitive entry, transport, ticket, hotel and access conditions are reconfirmed for the travel date.

For the complete machine-readable itinerary, see [llms-full.txt](${siteConfig.url}/llms-full.txt).
Prices shown on the website are indicative until dates, availability, hotel choices, room categories and services are confirmed in a written proposal.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
