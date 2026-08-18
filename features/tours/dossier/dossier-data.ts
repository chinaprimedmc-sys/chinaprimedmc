import type { Tour, TourOverviewFact } from "@/types/tour";

export type DossierFitItem = {
  label: string;
  value: string;
  helper?: string;
};

const findFact = (facts: TourOverviewFact[], labels: string[]) =>
  facts.find((fact) => labels.some((label) => fact.label.toLowerCase().includes(label)))?.value;

export function planningHref(slug: string, placement: string, preference?: string) {
  const params = new URLSearchParams({
    source: "tour-page",
    journey: slug,
    placement,
  });
  if (preference) params.set("preference", preference);
  return `/start-planning?${params.toString()}`;
}

export function getDossierData(tour: Tour) {
  const facts = tour.overview.facts;
  const stops = tour.routeMap.stops.length
    ? tour.routeMap.stops
    : tour.route.split(",").map((name) => ({ name: name.trim(), days: "", description: "" }));
  const pace = findFact(facts, ["pacing", "pace"]) ?? "Adjusted around your party";
  const bestFor =
    findFact(facts, ["best for", "suitable for"]) ??
    `${tour.styles.slice(0, 3).join(", ")} travellers`;
  const hotelChanges = Math.max(0, stops.length - 1);
  const transportModes = Array.from(
    new Set(
      tour.itinerary.map((day) => day.transport).filter((value): value is string => Boolean(value)),
    ),
  );

  const fit: DossierFitItem[] = [
    { label: "Best for", value: bestFor },
    {
      label: "Not ideal for",
      value:
        stops.length > 2
          ? "Travellers wanting one base with very little intercity travel"
          : "Travellers looking for a fast-paced group departure",
    },
    {
      label: "Walking level",
      value: pace,
      helper: "Exact walking and rest stops are adjusted before confirmation.",
    },
    {
      label: "Steps and terrain",
      value: "Varies by the sites you choose",
      helper: "Tell us about mobility needs so we can review each day properly.",
    },
    {
      label: "Altitude",
      value: "Reviewed against the confirmed route",
      helper: "We will flag any relevant elevation before you book.",
    },
    {
      label: "Rest flexibility",
      value: "Private timing can be adjusted",
      helper: "Later starts and lighter days can be built into the proposal.",
    },
    {
      label: "Intercity transport",
      value: transportModes.length
        ? transportModes.slice(0, 2).join("; ")
        : tour.transportation.title,
    },
    {
      label: "Hotel changes",
      value: `${hotelChanges} ${hotelChanges === 1 ? "change" : "changes"} across the route`,
    },
  ];

  return { stops, pace, bestFor, hotelChanges, fit };
}

export const priceFactors = [
  ["Travel dates", "Season, weekday patterns and local events affect availability."],
  [
    "Number of travellers",
    "Vehicle size, guide service and room count are planned for your party.",
  ],
  ["Hotels and rooms", "Hotel category, location and room configuration are confirmed together."],
  ["Intercity transport", "Rail or flight cabin class is selected around comfort and schedule."],
  ["Seasonal availability", "Final services are checked for your exact dates before quotation."],
  [
    "Specialist requests",
    "Specialist guides, dietary research and access needs may change the scope.",
  ],
] as const;

export const customisations = [
  [
    "Choose a slower pace",
    "slower-pacing",
    "Add lighter days, later starts or more time in one city.",
  ],
  [
    "Reduce hotel changes",
    "fewer-hotels",
    "Rebalance the route around fewer bases where practical.",
  ],
  [
    "Travel with children",
    "family",
    "Shape rooms, meals, transfers and daily timing around your family.",
  ],
  [
    "Plan around dietary needs",
    "dietary-needs",
    "Research suitable meals before the services are confirmed.",
  ],
  [
    "Add a photography focus",
    "photography",
    "Review timing and locations around light, access and pace.",
  ],
  [
    "Spend more time in nature",
    "nature",
    "Add depth where scenery matters more than another city stop.",
  ],
] as const;
