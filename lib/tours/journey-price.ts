export type JourneyPriceSelection = {
  guests: string;
};

export function readJourneyConfiguration(params: URLSearchParams): JourneyPriceSelection {
  const guests = params.get("guests");
  return {
    guests:
      guests && ["1", "2", "3", "4", "3-4", "5-6", "7+", "Not sure yet"].includes(guests)
        ? guests
        : "4",
  };
}
