import { privateJourneyOffer, type JourneyOfferClaim } from "@/lib/tours/journey-offer";

const seenKey = "aviora-journey-offer-seen-v1";
const elapsedKey = "aviora-journey-offer-visible-ms-v1";
const claimKey = "aviora-journey-offer-claim-v1";
export const journeyOfferClaimedEvent = "aviora:offer-claimed";

export function readOfferSeen() {
  try {
    return window.localStorage.getItem(seenKey) === "1";
  } catch {
    return false;
  }
}

export function markOfferSeen() {
  try {
    window.localStorage.setItem(seenKey, "1");
  } catch {
    /* Persistence is optional. */
  }
}

export function readOfferVisibleMs() {
  try {
    const value = Number(window.localStorage.getItem(elapsedKey));
    return Number.isFinite(value) && value > 0 ? value : 0;
  } catch {
    return 0;
  }
}

export function writeOfferVisibleMs(value: number) {
  try {
    window.localStorage.setItem(elapsedKey, String(Math.max(0, Math.floor(value))));
  } catch {
    /* Persistence is optional. */
  }
}

export function readClaimedJourneyOffer(): JourneyOfferClaim | null {
  if (!privateJourneyOffer.active) return null;
  try {
    const stored = window.localStorage.getItem(claimKey);
    if (!stored) return null;
    const value = JSON.parse(stored) as JourneyOfferClaim;
    if (
      value?.campaignId !== privateJourneyOffer.id ||
      typeof value.journey?.slug !== "string" ||
      typeof value.journey?.title !== "string" ||
      value.discountPercent !== privateJourneyOffer.discountPercent
    )
      return null;
    return value;
  } catch {
    return null;
  }
}

export function saveClaimedJourneyOffer(claim: JourneyOfferClaim) {
  try {
    window.localStorage.setItem(claimKey, JSON.stringify(claim));
    window.dispatchEvent(new Event(journeyOfferClaimedEvent));
  } catch {
    /* The successful request still displays its receipt if storage is unavailable. */
  }
}

export function isJourneyOfferClaimStorageKey(key: string | null) {
  return key === claimKey;
}
