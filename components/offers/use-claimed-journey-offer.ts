"use client";

import { useEffect, useState } from "react";
import {
  isJourneyOfferClaimStorageKey,
  journeyOfferClaimedEvent,
  readClaimedJourneyOffer,
} from "@/lib/tours/journey-offer-client";
import type { JourneyOfferClaim } from "@/lib/tours/journey-offer";

export function useClaimedJourneyOffer() {
  const [claim, setClaim] = useState<JourneyOfferClaim | null>(null);

  useEffect(() => {
    const sync = () => {
      const stored = readClaimedJourneyOffer();
      setClaim(stored);
    };
    const onStorage = (event: StorageEvent) => {
      if (isJourneyOfferClaimStorageKey(event.key)) sync();
    };
    sync();
    window.addEventListener(journeyOfferClaimedEvent, sync);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(journeyOfferClaimedEvent, sync);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return claim;
}
