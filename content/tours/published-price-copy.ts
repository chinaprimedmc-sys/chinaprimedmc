import { getPublishedJourneyPrice } from "@/content/tours/published-prices";

/** First-party price explanation derived from the same rate as cards and offers. */
export function getPublishedPriceDisclosure(slug: string) {
  const price = getPublishedJourneyPrice(slug);
  if (!price) return "Request a written price for your dates, travelers and agreed services.";
  const amount = price.fromUsd.toLocaleString("en-US");
  const total = (price.fromUsd * price.basePartySize).toLocaleString("en-US");
  return `The published starting rate is USD ${amount} per person. ${price.basis} On that stated basis, the starting total is USD ${total} for ${price.basePartySize} travelers. Changes to the party, travel dates or selected services require a revised written quote.`;
}
