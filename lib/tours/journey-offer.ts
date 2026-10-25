export const privateJourneyOffer = {
  id: "private-china-25",
  code: "AVIORA25",
  active: true,
  discountPercent: 25,
  terms:
    "25% off the published base journey price. The same group size, rooms and included services apply. Optional upgrades and separately quoted extras are excluded. Cannot be combined with other offers. Your specialist will confirm dates, availability and the final price in writing before booking.",
} as const;

export type JourneyOfferOption = {
  slug: string;
  title: string;
  href: string;
  fromUsd?: number;
  pricingUnit: "per-person" | "private-group";
  basePartySize: number;
  cardBasis: string;
};

export type JourneyOfferClaim = {
  campaignId: string;
  code: string;
  discountPercent: number;
  journey: JourneyOfferOption;
  regularFromUsd: number | null;
  discountedFromUsd: number | null;
  savingsUsd: number | null;
};

export function calculateOfferPrice(fromUsd: number | undefined, discountPercent: number) {
  if (
    fromUsd === undefined ||
    !Number.isFinite(fromUsd) ||
    fromUsd <= 0 ||
    !Number.isFinite(discountPercent) ||
    discountPercent <= 0 ||
    discountPercent >= 100
  )
    return null;

  const regularCents = Math.round(fromUsd * 100);
  const discountedCents = Math.round((regularCents * (100 - discountPercent)) / 100);
  return {
    regularFromUsd: regularCents / 100,
    discountedFromUsd: discountedCents / 100,
    savingsUsd: (regularCents - discountedCents) / 100,
  };
}

export function createJourneyOfferClaim(journey: JourneyOfferOption): JourneyOfferClaim {
  const price = calculateOfferPrice(journey.fromUsd, privateJourneyOffer.discountPercent);
  return {
    campaignId: privateJourneyOffer.id,
    code: privateJourneyOffer.code,
    discountPercent: privateJourneyOffer.discountPercent,
    journey,
    regularFromUsd: price?.regularFromUsd ?? null,
    discountedFromUsd: price?.discountedFromUsd ?? null,
    savingsUsd: price?.savingsUsd ?? null,
  };
}

export function formatOfferUsd(amount: number) {
  return `US$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function journeyOfferSummary(claim: JourneyOfferClaim) {
  const unit = claim.journey.pricingUnit === "private-group" ? "per private group" : "per person";
  return [
    `Offer claimed: ${claim.code} (${claim.discountPercent}% off)`,
    `Journey: ${claim.journey.title}`,
    claim.regularFromUsd === null
      ? "Price on request. Apply the offer to the written base journey quote."
      : `Published starting price: ${formatOfferUsd(claim.regularFromUsd)} ${unit}\nOffer starting price: ${formatOfferUsd(claim.discountedFromUsd!)} ${unit}\nSavings: ${formatOfferUsd(claim.savingsUsd!)} ${unit}`,
    `Price basis: ${claim.journey.cardBasis}`,
    privateJourneyOffer.terms,
  ].join("\n");
}
