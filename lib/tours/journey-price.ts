export type JourneyPriceSelection = {
  pace: "essential" | "considered";
  freeDayService: "open" | "local-culture" | "food-journey";
  guests: string;
};

export function readJourneyConfiguration(params: URLSearchParams): JourneyPriceSelection {
  const pace = params.get("pace");
  const freeDay = params.get("freeDay") ?? params.get("freeDayOption");
  const guests = params.get("guests");
  return {
    pace: pace === "essential" ? "essential" : "considered",
    freeDayService: freeDay === "local-culture" || freeDay === "food-journey" ? freeDay : "open",
    guests:
      guests && ["1", "2", "3", "4", "3-4", "5-6", "7+", "Not sure yet"].includes(guests)
        ? guests
        : "4",
  };
}

export function calculateJourneyPrice(
  basePrice: number | undefined,
  selection: JourneyPriceSelection,
) {
  if (basePrice === undefined || selection.guests !== "4") return undefined;
  const freeDay = { open: 0, "local-culture": 65, "food-journey": 75 }[selection.freeDayService];
  return basePrice + (selection.pace === "considered" ? 300 : 0) + freeDay;
}
