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
  journeySlug,
  duration,
  priceBasis,
  pricingUnit,
  children,
}: {
  basePrice?: number;
  initialSelection?: JourneyPriceSelection;
  journeySlug: string;
  duration: string;
  priceBasis: string;
  pricingUnit: "per-person" | "private-group";
  children: ReactNode;
}) {
  const [guests, setGuests] = useState<JourneyGuests>(
    (initialSelection?.guests as JourneyGuests) ?? "4",
  );

  useEffect(() => {
    const syncFromUrl = () => {
      const selection = readJourneyConfiguration(new URLSearchParams(window.location.search));
      setGuests(selection.guests as JourneyGuests);
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const value = useMemo<JourneyConfiguration>(
    () => ({
      priceBasis,
      guests,
      duration,
      priceFromUsd: guests === "4" ? basePrice : undefined,
    }),
    [basePrice, duration, guests, priceBasis],
  );

  useEffect(() => {
    const script = document.getElementById(`${journeySlug}-tour-schema`);
    if (!script?.textContent) return;
    const schema = JSON.parse(script.textContent);
    if (value.priceFromUsd === undefined) delete schema.offers;
    else
      schema.offers = {
        ...schema.offers,
        "@type": "Offer",
        price: value.priceFromUsd,
        priceCurrency: "USD",
        description: value.priceBasis,
        url: window.location.href,
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: value.priceFromUsd,
          priceCurrency: "USD",
          unitText:
            pricingUnit === "private-group" ? "per private group of four guests" : "per person",
          description: value.priceBasis,
        },
      };
    script.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");
  }, [journeySlug, pricingUnit, value.priceBasis, value.priceFromUsd]);

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
