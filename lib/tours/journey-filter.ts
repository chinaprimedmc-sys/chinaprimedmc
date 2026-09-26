import type { JourneyCatalogItem, JourneyPlanningNeedId } from "@/content/tours/catalog";
import { getJourneyCardDescription, getJourneyCardTitle } from "@/content/tours/card-copy";
import {
  isDayTour,
  matchesJourneyCollection,
  matchesJourneyDuration,
  matchesJourneyExperience,
  matchesJourneyRegion,
  matchesJourneyScope,
  matchesJourneyStyle,
  type JourneyCollectionFilter,
  type JourneyDurationFilter,
  type JourneyExperienceFilter,
  type JourneyRegionFilter,
  type JourneyScopeFilter,
  type JourneyStyleFilter,
} from "@/lib/tours/journey-groups";

export type JourneyFilterState = {
  format: "all" | "day-tour" | "multi-day";
  scope: JourneyScopeFilter;
  destination: JourneyRegionFilter[];
  duration: JourneyDurationFilter[];
  travelStyle: JourneyStyleFilter[];
  need: JourneyPlanningNeedId | null;
  query: string;
  sort: "recommended" | "price-low" | "duration-low" | "duration-high";
  collection: JourneyCollectionFilter;
  experience: JourneyExperienceFilter;
  pace: Array<JourneyCatalogItem["discovery"]["pace"]>;
};

export const defaultJourneyFilters: JourneyFilterState = {
  format: "all",
  scope: "all",
  destination: [],
  duration: [],
  travelStyle: [],
  need: null,
  query: "",
  sort: "recommended",
  collection: "all",
  experience: "all",
  pace: [],
};

const destinations = ["north", "east", "southwest", "south", "northwest"] as const;
const durations = [
  "one-day",
  "two-three",
  "four-seven",
  "eight-eleven",
  "twelve-plus",
  "1-7",
  "8-12",
  "13+",
] as const;
const styles = [
  "first-trip",
  "culture",
  "nature",
  "family",
  "food",
  "wellness",
  "wildlife",
  "business",
  "photography",
  "slow-travel",
] as const;
const needs = [
  "muslim-friendly",
  "women-traveler-support",
  "vegetarian-friendly",
  "slower-pacing",
  "child-friendly",
  "mobility-aware",
  "quiet-luxury",
  "food-focused",
  "photography-led",
] as const;
const experiences = [
  "pandas",
  "great-wall",
  "ancient-china",
  "food",
  "scenery",
  "modern-cities",
  "local-life",
  "wellness",
  "photography",
  "silk-road",
] as const;

function list<T extends string>(
  params: URLSearchParams,
  key: string,
  legacy: string,
  allowed: readonly T[],
): T[] {
  const raw = params.get(key) ?? params.get(legacy) ?? "";
  return raw.split(",").filter((value): value is T => allowed.includes(value as T));
}

export function readJourneyFilters(params: URLSearchParams): JourneyFilterState {
  params = new URLSearchParams(params);
  const aliases: Record<string, string> = {
    "North China": "north",
    "Northern China": "north",
    "East China": "east",
    "Eastern China": "east",
    "Southwest China": "southwest",
    "Southern China": "south",
    "Northwest China": "northwest",
    "First-time China": "first-trip",
    Family: "family",
    Culture: "culture",
    "one-day": "day-tour",
    "one-city": "single-city",
    "across-china": "multi-city",
  };
  for (const key of ["region", "destination", "style", "travelStyle", "type"]) {
    const value = params.get(key);
    if (value)
      params.set(
        key,
        value
          .split(",")
          .map((part) => aliases[part] ?? part)
          .join(","),
      );
  }
  if (!params.has("need") && params.has("needs")) params.set("need", params.get("needs")!);
  if (params.get("travellers") === "families" && !params.has("need"))
    params.set("need", "child-friendly");
  if (params.get("sort") === "relaxed" && !params.has("pace")) params.set("pace", "easy");
  if (params.get("family") === "true" && !params.has("need")) params.set("need", "child-friendly");
  if (params.get("style") === "Luxury") params.set("collection", "luxury");
  const oldType = params.get("type");
  const oldScope = params.get("scope");
  const format =
    params.get("format") ??
    (oldType === "day-tour"
      ? "day-tour"
      : oldType === "multi-city" ||
          oldType === "single-city" ||
          oldType === "multi-day" ||
          oldScope === "single-city"
        ? "multi-day"
        : "all");
  const sort = params.get("sort");
  const requestedStyle =
    params.get("travelStyle") ?? params.get("style") ?? params.get("focus") ?? "";
  return {
    format: format === "day-tour" || format === "multi-day" ? format : "all",
    scope:
      oldScope === "single-city" || oldScope === "multi-city"
        ? oldScope
        : oldType === "multi-city" || oldType === "single-city"
          ? oldType
          : "all",
    destination: list(params, "destination", "destinations", destinations).length
      ? list(params, "destination", "destinations", destinations)
      : list(params, "region", "region", destinations),
    duration: list(params, "duration", "days", durations),
    travelStyle: requestedStyle
      .split(",")
      .filter((value): value is Exclude<JourneyStyleFilter, "all"> =>
        styles.includes(value as Exclude<JourneyStyleFilter, "all">),
      ),
    need: needs.includes(params.get("need") as (typeof needs)[number])
      ? (params.get("need") as JourneyPlanningNeedId)
      : null,
    query: params.get("query") ?? params.get("q") ?? "",
    sort:
      sort === "price-low" || sort === "duration-low" || sort === "duration-high"
        ? sort
        : sort === "shortest"
          ? "duration-low"
          : sort === "longest"
            ? "duration-high"
            : "recommended",
    collection: params.get("collection") === "luxury" ? "luxury" : "all",
    experience: experiences.includes(params.get("experience") as (typeof experiences)[number])
      ? (params.get("experience") as JourneyExperienceFilter)
      : "all",
    pace: list(params, "pace", "pace", ["easy", "balanced", "active"] as const),
  };
}

export function writeJourneyFilters(filters: JourneyFilterState): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.format !== "all") params.set("format", filters.format);
  if (filters.scope !== "all") params.set("scope", filters.scope);
  if (filters.destination.length) params.set("destination", filters.destination.join(","));
  if (filters.duration.length) params.set("duration", filters.duration.join(","));
  if (filters.travelStyle.length) params.set("travelStyle", filters.travelStyle.join(","));
  if (filters.need) params.set("need", filters.need);
  if (filters.query.trim()) params.set("query", filters.query.trim());
  if (filters.sort !== "recommended") params.set("sort", filters.sort);
  if (filters.collection !== "all") params.set("collection", filters.collection);
  if (filters.experience !== "all") params.set("experience", filters.experience);
  if (filters.pace.length) params.set("pace", filters.pace.join(","));
  return params;
}

export function matchesJourneyFilters(
  item: JourneyCatalogItem,
  filters: JourneyFilterState,
): boolean {
  const query = filters.query.trim().toLowerCase();
  return (
    (filters.format === "all" || (filters.format === "day-tour") === isDayTour(item)) &&
    matchesJourneyScope(item, filters.scope) &&
    (!filters.destination.length ||
      filters.destination.some((value) => matchesJourneyRegion(item, value))) &&
    (!filters.duration.length ||
      filters.duration.some((value) => matchesJourneyDuration(item, value))) &&
    (!filters.travelStyle.length ||
      filters.travelStyle.some((value) => matchesJourneyStyle(item, value))) &&
    (!filters.need || item.planningNeedFilters.includes(filters.need)) &&
    matchesJourneyCollection(item, filters.collection) &&
    matchesJourneyExperience(item, filters.experience) &&
    (!filters.pace.length || filters.pace.includes(item.discovery.pace)) &&
    (!query ||
      [
        getJourneyCardTitle(item),
        getJourneyCardDescription(item),
        item.routeLabel,
        item.bestForSummary,
        item.discovery.searchableText,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query))
  );
}

export function filterJourneys(items: JourneyCatalogItem[], filters: JourneyFilterState) {
  const perPerson = (item: JourneyCatalogItem) =>
    item.pricing.fromUsd /
    (item.pricing.pricingUnit === "private-group" ? item.pricing.basePartySize : 1);
  return items
    .filter((item) => matchesJourneyFilters(item, filters))
    .sort((a, b) => {
      if (filters.sort === "price-low") return perPerson(a) - perPerson(b);
      if (filters.sort === "duration-low") return a.recommendedDaysMin - b.recommendedDaysMin;
      if (filters.sort === "duration-high") return b.recommendedDaysMax - a.recommendedDaysMax;
      return b.commercialPriority - a.commercialPriority || a.title.localeCompare(b.title);
    });
}

export function journeyFilterUrl(filters: JourneyFilterState, current: URL) {
  const url = new URL(current);
  const keys = [
    "format",
    "scope",
    "destination",
    "destinations",
    "duration",
    "days",
    "travelStyle",
    "need",
    "needs",
    "travellers",
    "query",
    "sort",
    "collection",
    "experience",
    "pace",
    "type",
    "region",
    "style",
    "focus",
    "q",
    "family",
    "private",
  ];
  const discoveryType =
    url.pathname === "/search" &&
    ["tour", "article", "destination", "experience"].includes(url.searchParams.get("type") ?? "")
      ? url.searchParams.get("type")
      : null;
  keys.forEach((key) => url.searchParams.delete(key));
  writeJourneyFilters(filters).forEach((value, key) => url.searchParams.set(key, value));
  if (discoveryType) url.searchParams.set("type", discoveryType);
  return `${url.pathname}${url.search}${url.hash}`;
}
