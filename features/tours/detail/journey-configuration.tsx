"use client";
import {
  calculateJourneyPrice,
  readJourneyConfiguration,
  type JourneyPriceSelection,
} from "@/lib/tours/journey-price";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type JourneyPaceId = "essential" | "considered";
export type FreeDayServiceId = "open" | "local-culture" | "food-journey";
export type JourneyGuests = "1" | "2" | "3" | "4" | "3-4" | "5-6" | "7+" | "Not sure yet";

export const freeDayServices = [
  {
    id: "open" as const,
    title: "Keep the day open",
    shortTitle: "Open day",
    description:
      "No fixed programme. Explore independently, rest, or use our local recommendations on the day.",
    priceLabel: "Included",
    priceFromUsd: 0,
  },
  {
    id: "local-culture" as const,
    title: "Local life + culture",
    shortTitle: "Local life + culture",
    description:
      "A relaxed guided day through neighbourhood life and cultural places, especially suited to families.",
    priceLabel: "+US$65 / person",
    priceFromUsd: 65,
  },
  {
    id: "food-journey" as const,
    title: "A food journey",
    shortTitle: "Food journey",
    description:
      "Markets, trusted local places and regional flavours, planned around your tastes and dietary needs.",
    priceLabel: "+US$75 / person",
    priceFromUsd: 75,
  },
] as const;

type JourneyConfiguration = {
  hasPaceOptions: boolean;
  priceBasis: string;
  pace: JourneyPaceId;
  setPace: (pace: JourneyPaceId) => void;
  freeDayService: FreeDayServiceId;
  setFreeDayService: (service: FreeDayServiceId) => void;
  guests: JourneyGuests;
  setGuests: (guests: JourneyGuests) => void;
  paceLabel: string;
  duration: string;
  freeDayLocation: string;
  freeDayLabel: string;
  priceFromUsd?: number;
};

const JourneyConfigurationContext = createContext<JourneyConfiguration | null>(null);

export function JourneyConfigurationProvider({
  active,
  basePrice,
  initialSelection,
  journeySlug,
  duration: defaultDuration,
  priceBasis,
  pricingUnit,
  children,
}: {
  active: boolean;
  basePrice?: number;
  initialSelection?: JourneyPriceSelection;
  journeySlug: string;
  duration: string;
  priceBasis: string;
  pricingUnit: "per-person" | "private-group";
  children: ReactNode;
}) {
  const [pace, setPaceState] = useState<JourneyPaceId>(initialSelection?.pace ?? "considered");
  const [freeDayService, setFreeDayServiceState] = useState<FreeDayServiceId>(
    initialSelection?.freeDayService ?? "open",
  );
  const [guests, setGuestsState] = useState<JourneyGuests>(
    (initialSelection?.guests as JourneyGuests) ?? "4",
  );

  useEffect(() => {
    const syncFromUrl = () => {
      const selection = readJourneyConfiguration(new URLSearchParams(window.location.search));
      setPaceState(selection.pace);
      setFreeDayServiceState(selection.freeDayService);
      setGuestsState(selection.guests as JourneyGuests);
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [active]);

  const updateUrl = useCallback((key: "pace" | "freeDay" | "guests", value: string) => {
    const url = new URL(window.location.href);
    if (key === "freeDay" && value === "open") {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
    if (url.toString() !== window.location.href) window.history.pushState({}, "", url);
  }, []);

  const setPace = useCallback(
    (nextPace: JourneyPaceId) => {
      setPaceState(nextPace);
      updateUrl("pace", nextPace);
    },
    [updateUrl],
  );

  const setFreeDayService = useCallback(
    (nextService: FreeDayServiceId) => {
      setFreeDayServiceState(nextService);
      updateUrl("freeDay", nextService);
    },
    [updateUrl],
  );

  const setGuests = useCallback(
    (nextGuests: JourneyGuests) => {
      setGuestsState(nextGuests);
      updateUrl("guests", nextGuests);
    },
    [updateUrl],
  );

  const selectedService = freeDayServices.find((service) => service.id === freeDayService)!;
  const selectedPriceBasis = active
    ? `Indicative starting price per person for the ${pace === "considered" ? "13-day Considered Pace" : "12-day Essential Pace"}, based on four guests sharing two rooms outside peak periods. ${selectedService.priceFromUsd ? `${selectedService.shortTitle} adds US$${selectedService.priceFromUsd} per person.` : "The free day remains open at no additional charge."}`
    : priceBasis;
  const value = useMemo<JourneyConfiguration>(
    () => ({
      hasPaceOptions: active,
      priceBasis: selectedPriceBasis,
      pace,
      setPace,
      freeDayService,
      setFreeDayService,
      guests,
      setGuests,
      paceLabel: pace === "considered" ? "Considered Pace" : "Essential Pace",
      duration: active
        ? pace === "considered"
          ? "13 days / 12 nights"
          : "12 days / 11 nights"
        : defaultDuration,
      freeDayLocation: pace === "considered" ? "Chengdu" : "Xi'an",
      freeDayLabel: selectedService.shortTitle,
      priceFromUsd: active
        ? calculateJourneyPrice(basePrice, { pace, freeDayService, guests })
        : guests === "4"
          ? basePrice
          : undefined,
    }),
    [
      active,
      defaultDuration,
      selectedPriceBasis,
      basePrice,
      freeDayService,
      guests,
      pace,
      selectedService,
      setFreeDayService,
      setGuests,
      setPace,
    ],
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
    if (active) schema.duration = pace === "considered" ? "P13D" : "P12D";
    script.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");
  }, [active, journeySlug, pace, pricingUnit, value.priceBasis, value.priceFromUsd]);

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
