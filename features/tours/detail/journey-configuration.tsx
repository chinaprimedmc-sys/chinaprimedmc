"use client";
import { readJourneyConfiguration, type JourneyPriceSelection } from "@/lib/tours/journey-price";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type JourneyGuests = "1" | "2" | "3" | "4" | "3-4" | "5-6" | "7+" | "Not sure yet";

type JourneyConfiguration = {
  priceBasis: string;
  guests: JourneyGuests;
  duration: string;
  priceFromUsd?: number;
};

const JourneyConfigurationContext = createContext<JourneyConfiguration | null>(null);

export function JourneyConfigurationProvider({
  basePrice,
  initialSelection,
  duration,
  priceBasis,
  basePartySize = 2,
  children,
}: {
  basePrice?: number;
  initialSelection?: JourneyPriceSelection;
  journeySlug: string;
  duration: string;
  priceBasis: string;
  pricingUnit: "per-person" | "private-group";
  basePartySize?: number;
  children: ReactNode;
}) {
  const [guests, setGuests] = useState<JourneyGuests>(
    (initialSelection?.guests as JourneyGuests) ?? (String(basePartySize) as JourneyGuests),
  );

  useEffect(() => {
    const syncFromUrl = () => {
      const selection = readJourneyConfiguration(
        new URLSearchParams(window.location.search),
        String(basePartySize),
      );
      setGuests(selection.guests as JourneyGuests);
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [basePartySize]);

  const value = useMemo<JourneyConfiguration>(
    () => ({
      priceBasis,
      guests,
      duration,
      // A starting rate keeps its stated basis; requested party size receives a written quote.
      priceFromUsd: basePrice,
    }),
    [basePrice, duration, guests, priceBasis],
  );

  return (
    <JourneyConfigurationContext.Provider value={value}>
      {children}
    </JourneyConfigurationContext.Provider>
  );
}

export function useJourneyConfiguration() {
  const value = useContext(JourneyConfigurationContext);
  if (!value) throw new Error("Journey configuration is unavailable for this journey.");
  return value;
}

export function useOptionalJourneyConfiguration() {
  return useContext(JourneyConfigurationContext);
}
