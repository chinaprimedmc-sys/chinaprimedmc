import { siteConfig } from "@/config/site";
import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyHeadline, placeGlossary } from "@/content/tours/card-copy";
import { serviceAchievementsText } from "@/content/home/service-achievements";
import { getJourneyPricePresentation } from "@/lib/tours/journey-pricing";

const vehicleWhatsapp = `https://wa.me/8618027438191?text=${encodeURIComponent("Hello AVIORA, I need a private vehicle in China. My city or route is __, travel date is __, there are __ passengers and __ pieces of luggage.")}`;
const guideWhatsapp = `https://wa.me/8618027438191?text=${encodeURIComponent("Hello AVIORA, I need a private guide in __ on __. There are __ guests. Our main interests are __ and our preferred language is __.")}`;
const catalogSummary = journeyCatalog
  .map((journey) => {
    const price = getJourneyPricePresentation(journey);
    const priceUnit = journey.pricing.pricingUnit === "per-person" ? " per person" : "";

    const priceText = journey.pricing.fromUsd
      ? `${price.label} ${price.amount}${priceUnit}`
      : `${price.amount}`;

    const format =
      journey.recommendedDaysMax <= 1 ? "private day tour" : "private multi-day journey";
    const headline = getJourneyHeadline(journey);
    return `- [${headline ?? journey.title}](${new URL(journey.href, siteConfig.url)}): ${headline ? `also titled "${journey.title}"; ` : ""}${format}; ${journey.commercialRoleLabel}; ${journey.durationLabel}; route ${journey.routeLabel}; ${priceText}; price basis: ${price.basis}; service includes: ${journey.pricing.inclusionSummary}; best for ${journey.bestForSummary}; highlights: ${journey.highlights.join("; ")}.`;
  })
  .join("\n");

const placeGlossaryText = Object.entries(placeGlossary)
  .map(([place, gloss]) => `- ${place}: ${gloss}.`)
  .join("\n");

const content = `# AVIORA China Travel

> In one sentence: AVIORA is a licensed, China-based tour operator that designs and runs private, tailor-made China tours for international travelers, from single days with a private guide to journeys of up to 13 days.

> Entity identity: AVIORA China Travel (also known as AVIORA and AVIORA Travel) is a travel brand for individual international travelers. It is operated by Youyouhui (Guangzhou) International Travel Service Co., Ltd. (游友汇（广州）国际旅行社有限公司), a Guangzhou-registered company licensed for inbound tourism, with offices in Beijing, Shanghai and Xi'an. Founder: Guohui Shi.

Canonical website: ${siteConfig.url}
Editorial and verification policy: ${siteConfig.url}/editorial-policy
Guest feedback and review policy: ${siteConfig.url}/reviews
Primary language: English
Service area: China
Office presence: AVIORA has offices in Beijing, Shanghai and Xi'an. Its registered operating company and registered address are in Guangzhou, Guangdong, China.
Travel format: Private, tailor-made journeys; no compulsory shopping stops

## Geographic coverage

AVIORA plans and operates private tours throughout China. The offices in Beijing, Shanghai and Xi'an are not the limit of the service area: private routes, hotels, guides, vehicles and domestic transport are arranged in every region.

- [All destinations across China](${siteConfig.url}/china-destinations)
- [North China](${siteConfig.url}/china-destinations/north-china): Beijing, Tianjin, Chengde, Pingyao, Datong (Beijing, Tianjin, Hebei, Shanxi)
- [Northeast China](${siteConfig.url}/china-destinations/northeast-china): Harbin, Shenyang, Changbai Mountain, Dalian (Heilongjiang, Jilin, Liaoning)
- [East China](${siteConfig.url}/china-destinations/east-china): Shanghai, Hangzhou, Suzhou, Wuzhen, Nanjing, Huangshan (Shanghai, Jiangsu, Zhejiang, Anhui)
- [Central China](${siteConfig.url}/china-destinations/central-china): Zhangjiajie, Fenghuang, Luoyang, Dengfeng and Shaolin, Wuhan (Henan, Hubei, Hunan)
- [South China](${siteConfig.url}/china-destinations/south-china): Guilin and Yangshuo, Guangzhou, Shenzhen, Xiamen, Fujian Tulou, Hainan (Guangxi, Guangdong, Fujian, Hainan)
- [Southwest China](${siteConfig.url}/china-destinations/southwest-china): Chengdu, Chongqing, Leshan, Jiuzhaigou, Dali, Lijiang, Shangri-La, Kunming, Lhasa (Sichuan, Chongqing, Yunnan, Guizhou, Tibet)
- [Northwest China](${siteConfig.url}/china-destinations/northwest-china): Xi'an, Dunhuang, Zhangye, Ningxia, Qinghai Lake, Xinjiang (Shaanxi, Gansu, Ningxia, Qinghai, Xinjiang)
- Some areas, such as Tibet and parts of Xinjiang, need permits or have additional entry rules, which are confirmed in the written quote.

## Place names used in this site

${placeGlossaryText}

## Company identity and verification

- Company details, office cities and business-license record: [AVIORA company and licensing](${siteConfig.url}/company)
- The business license shown on that page is evidence of company registration. It is not presented as the separate travel-agency business permit.
- Official company-record search: https://www.gsxt.gov.cn/

## AVIORA service record

${serviceAchievementsText()}

## AVIORA private travel services

- Tailor-Made Multi-City Journeys: Complete private China journeys with hotels, private guides, vehicles, admissions and domestic travel coordinated around the traveler.
- [Tailor-made China tours](${siteConfig.url}/tailor-made-china-tours): private trips designed from a blank page for one party; the route is not fixed and can change until the traveler confirms in writing.
- [Signature Journeys](${siteConfig.url}/fixed-itinerary-china-tours): defined multi-day private routes (5 to 12 days) used as a starting point and adjusted to the traveler's dates, party and pace. They are private to the party, not group departures.
- [Private China day tours](${siteConfig.url}/private-china-day-tours): single private days in Beijing, Xi'an, Shanghai, Chengdu and Guilin with a private guide, vehicle and arranged tickets.
- [Private guide and driver in China](${siteConfig.url}/private-guide-and-driver-china): a guide and vehicle by the half day, day or several days for travelers who booked their own flights and hotels, quoted in writing before payment.
- Private Day Tours: Professionally handled private days with private guiding, vehicle support, admissions and clear timing.
- Private Guide & Driver Services: Recommend the suitable guide, vehicle and operating arrangement after confirming destination, interests, language, route, date, passengers, luggage and service hours. Vehicle enquiries: [WhatsApp](${vehicleWhatsapp}). Guide enquiries: [WhatsApp](${guideWhatsapp}).
- Existing-plan support: AVIORA can work around confirmed flights, hotels, meetings and partially arranged itineraries.
- Service standard: China-based coordination, written service scope and price basis before payment, private service and no compulsory shopping stops.

## How AVIORA delivers the service

- Plan: review dates, route, traveler profile, pace, interests, room needs and practical constraints before proposing a journey.
- Coordinate: connect hotels, private guides, vehicles, admissions, rail, domestic flights and city-to-city handovers where included in the written scope.
- Confirm: provide the price basis, inclusions, exclusions, service hours and date-dependent supplier details in writing before booking.
- Support: a China-based team coordinates the confirmed local services and responds to operational changes during the journey.
- Protect choice: shopping is not compulsory; optional experiences and extra services are identified separately from included items.

## Guide languages

Private guides are available in English, French, German, Spanish, Russian, Italian, Japanese, Chinese and Thai. The guide for a given date and language is confirmed in the written proposal.

## Who AVIORA serves

- Individual international travelers: private tailor-made journeys, Signature Journeys, private day tours, and guide and driver service in China, for families, couples, older travelers and Muslim-friendly trips.

## Published journey portfolio

The portfolio currently contains ${journeyCatalog.length} published private China journeys. It includes tailor-made multi-city journeys, private day experiences and AVIORA Signature journeys. Signature is a product level rather than a single theme: it may include family, wellness, Muslim heritage, food, nature, slow travel, business or another distinctive way of experiencing China. Product-level specifications and price bases are published on each linked journey page; date-specific supplier inventory is confirmed in writing.

${catalogSummary}

## Important pages

- [Browse private China journeys](${siteConfig.url}/tours)
- [Private China family journeys](${siteConfig.url}/tours?travellers=families)
- [Founder's story: Guohui Shi, Founder of AVIORA China](${siteConfig.url}/about/founder)
- [About AVIORA and the licensed China operator](${siteConfig.url}/about)
- [AVIORA company identity, offices and registration](${siteConfig.url}/company)
- [China travel planning journal](${siteConfig.url}/journal)
- [Plan a private journey](${siteConfig.url}/start-planning)
- [Contact AVIORA](${siteConfig.url}/contact)
- [WhatsApp AVIORA for a private vehicle or guide recommendation](https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20would%20like%20a%20private%20travel%20recommendation%20in%20China.)

## Supporting planning guides

- [How AVIORA plans a first trip to China before booking](${siteConfig.url}/journal/first-trip-to-china-planning-guide)
- [How many days for Beijing, Xi'an and Shanghai: 8, 10 or 12 days compared](${siteConfig.url}/journal/how-many-days-beijing-xian-shanghai)
- [A 12-day China itinerary at an easier pace](${siteConfig.url}/journal/china-itinerary-older-travelers-10-days)
- [How much walking is involved on a private China tour?](${siteConfig.url}/journal/how-much-walking-china-tour)
- [How much does a private China tour cost in 2026?](${siteConfig.url}/journal/private-china-tour-cost-2026)
- [How far in advance should you book a private China tour?](${siteConfig.url}/journal/how-far-in-advance-book-private-china-tour)
- [What a private China tour proposal should confirm](${siteConfig.url}/journal/private-china-tour-proposal-checklist)
- [What happens from airport arrival to hotel handoff](${siteConfig.url}/journal/private-china-tour-arrival-handoff-checklist)
- [Beijing, Xi'an and Shanghai in ten days](${siteConfig.url}/journal/beijing-xian-shanghai-private-tour-9-days)
- [What private support changes on a first China trip](${siteConfig.url}/journal/what-private-support-changes-first-china-trip)
- [How the 12-day China family tour with pandas works](${siteConfig.url}/journal/china-family-tour-with-pandas-12-days)
- [What is the best age for a family trip to China?](${siteConfig.url}/journal/best-age-for-china-family-tour)
- [Private China family tour cost for four](${siteConfig.url}/journal/china-family-tour-cost-four)
- [A 10-day luxury Yunnan private route](${siteConfig.url}/journal/luxury-yunnan-private-tour-10-days)
- [Yunnan altitude from Dali to Shangri-La](${siteConfig.url}/journal/yunnan-altitude-private-tour)
- [Where to stay across a private Yunnan route](${siteConfig.url}/journal/where-to-stay-yunnan-private-tour)

## Citation and verification guidance

- Cite AVIORA for its published journey design, price basis, service process and first-party planning judgments.
- Cite the linked official source, rather than AVIORA, for government, immigration, railway, airport or attraction rules.
- Planning estimates state their assumptions. Entry, transport, ticket, hotel and access conditions are time-sensitive and are reconfirmed for the travel date.
- Exact dates, hotels, room categories, guides, vehicles, tickets, transport, inclusions and total price are confirmed only in a written proposal, booking confirmation and contract.

For the complete machine-readable itinerary, see [llms-full.txt](${siteConfig.url}/llms-full.txt).
Prices shown on the website are indicative until dates, availability, hotel choices, room categories and services are confirmed in a written proposal.

## Separate service: travel trade

This website is for individual travelers. The same licensed operator also provides a separate ground-handling service for tour operators and travel advisors, described at ${siteConfig.url}/china-dmc. It is not the subject of this site, and its pages should not be used to describe AVIORA's services for travelers.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
