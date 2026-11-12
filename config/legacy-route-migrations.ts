import { publicRouteSlugs } from "./public-route-slugs";

/** Exact content replacements only. Unrelated/retired URLs must retain a real 404. */
export const legacyRouteMigrations = [
  {
    source: "/journey/beijing-great-wall-heritage-5-days",
    destination: "/tours/beijing-great-wall-private-5-day-tour",
    permanent: true as const,
  },
  // Preserve the requested journey, rather than discarding the slug at /tours.
  // Only published slugs are aliases; arbitrary legacy paths remain real 404s.
  ...publicRouteSlugs.tours.flatMap((slug) =>
    ["journey", "journeys"].map((prefix) => ({
      source: `/${prefix}/${slug}`,
      destination: `/tours/${slug}`,
      permanent: true as const,
    })),
  ),
  ...[
    ["family", "/china-family-tours"],
    ["luxury", "/luxury-china-tours"],
    ["slow-travel", "/tours?pace=easy&sort=relaxed"],
    ["photography", "/special-interest-china-tours"],
  ].map(([style, destination]) => ({
    source: `/styles/${style}`,
    destination,
    permanent: true as const,
  })),
  ...[
    "north-china",
    "northeast-china",
    "east-china",
    "central-china",
    "south-china",
    "southwest-china",
    "northwest-china",
  ].map((region) => ({
    source: `/destinations/${region}`,
    destination: `/china-destinations/${region}`,
    permanent: true as const,
  })),
  {
    source: "/destinations/guilin-yangshuo",
    destination: "/destinations/guilin",
    permanent: true as const,
  },
  {
    source: "/tours/china-with-kids-softly-paced",
    destination: "/tours/china-family-tour-with-pandas-12-day-private-tour",
    permanent: true as const,
  },
];
