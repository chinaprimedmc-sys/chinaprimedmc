"use client";

import { useEffect, useState } from "react";
import {
  isJourneyOfferClaimStorageKey,
  journeyOfferClaimedEvent,
  readClaimedJourneyOffer,
} from "@/lib/tours/journey-offer-client";
import { privateJourneyOffer, type JourneyOfferClaim } from "@/lib/tours/journey-offer";

export function useClaimedJourneyOffer() {
  const [claim, setClaim] = useState<JourneyOfferClaim | null>(null);

  useEffect(() => {
    const sync = () => {
      // 活动关闭后，访客浏览器里遗留的领取记录不再改变展示价格。
      setClaim(privateJourneyOffer.active ? readClaimedJourneyOffer() : null);
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
