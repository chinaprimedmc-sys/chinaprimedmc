/** Owner-approved starting rates, 2026-11-11. Supplier verification is tracked separately. */
import type { PublicJourneySlug } from "@/content/tours/classification";

export const publishedJourneyPrices = {
  "private-mutianyu-great-wall-day-tour": {
    fromUsd: 349,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults traveling together for the listed private Mutianyu day tour, including guide, separate driver, vehicle, admission and scenic-area shuttle. Cable car, chairlift, toboggan and lunch are extra unless added to your written proposal. Date, pickup address, guide language and final party total are confirmed before booking.",
  },
  "private-shanghai-day-tour-guide-driver": {
    fromUsd: 349,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person for two adults traveling together, including a private guide, separate driver, vehicle, central Shanghai hotel pickup and return, Yu Garden admission and one shared public-ferry crossing. Lunch, Shanghai Tower, evening cruises and airport or port transfers are separate unless added to your written proposal. The date, pickup address, guide language and final party total are confirmed before booking.",
  },
  "private-xian-terracotta-warriors-day-tour": {
    fromUsd: 299,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person for two adults traveling together, including a private guide, separate driver, vehicle, central Xi'an hotel pickup and return, standard Terracotta Warriors museum admission and one selected Old City walk. Lunch, City Wall or tower entry, clay-making and airport or station transfers are separate unless added to your written proposal. The date, guide language and final party total are confirmed before booking.",
  },
  "private-chengdu-panda-day-tour-early-morning": {
    fromUsd: 279,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person for two adults traveling together, including a private guide, separate driver, vehicle, central Chengdu hotel pickup and return, standard Chengdu Panda Base admission and the People's Park walk. Lunch, tea, internal electric carts and airport or station transfers are separate unless added to your written proposal. The date, guide language and final party total are confirmed before booking.",
  },
  "guilin-yangshuo-li-river-cruise-private-day-tour": {
    fromUsd: 499,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person for two adults traveling together, including a private guide, separate driver, agreed road transfers, standard four-star shared Li River cruise tickets, a short Yangshuo countryside visit and pre-confirmed normal luggage delivery to your Yangshuo hotel. This version ends in Yangshuo; a road return to Guilin costs extra. Onboard food is included only as specified by the confirmed cruise ticket. Accommodation, rafting and airport or station transfers are separate. The sailing, pickup address, service window and final party total are confirmed before booking.",
  },
  "beijing-xian-shanghai-private-10-day-tour": {
    fromUsd: 3290,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "china-at-an-easier-pace-12-day-private-tour": {
    fromUsd: 4690,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    fromUsd: 4790,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    fromUsd: 5290,
    basePartySize: 4,
    cardBasis: "Per person · family of four",
    basis:
      "Starting price per person, based on two adults and two children aged 6–11 sharing two rooms outside peak periods. Your written proposal confirms dates, rooms, included experiences and the total for your family.",
  },
  "beijing-great-wall-private-5-day-tour": {
    fromUsd: 1690,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "chengdu-pandas-sichuan-table": {
    fromUsd: 1490,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    fromUsd: 1890,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "luxury-yunnan-private-tour": {
    fromUsd: 6490,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    fromUsd: 2690,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "shanghai-zhangjiajie-floating-peaks": {
    fromUsd: 3090,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    fromUsd: 3290,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "muslim-friendly-china-tour-great-wall-desert-stars": {
    fromUsd: 8490,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "qingcheng-mountain-private-wellness-retreat-10-day": {
    fromUsd: 5990,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers",
    basis:
      "Starting price per person, based on two adults sharing one double or twin room outside peak periods. Your written proposal confirms the travel dates, named hotels, transport, included services and total for your party.",
  },
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": {
    fromUsd: 2490,
    basePartySize: 2,
    cardBasis: "Per person · 2 travelers · 4-day example",
    basis:
      "Starting price per person for the 4-day / 3-night Guangzhou–Shenzhen example, based on two adults sharing one double or twin room outside peak exhibition periods. This does not price every 4–7-day agenda. Your written proposal names the hotels, working hours, vehicle service, bilingual support role and total for your party. Exhibition credentials, specialist interpreting and Hong Kong services are separate unless expressly contracted.",
  },
} as const satisfies Partial<
  Record<
    PublicJourneySlug,
    {
      fromUsd: number;
      basePartySize: number;
      cardBasis: string;
      basis: string;
    }
  >
>;

export function getPublishedJourneyPrice(slug: string) {
  return publishedJourneyPrices[slug as keyof typeof publishedJourneyPrices];
}
