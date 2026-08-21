export const publicRouteSlugs = {
  tours: [
    "guangzhou-shenzhen-tailor-made-business-tour-4-day",
    "qingcheng-mountain-private-wellness-retreat-10-day",
    "muslim-friendly-china-tour-great-wall-desert-stars",
    "china-at-an-easier-pace-12-day-private-tour",
    "china-family-tour-with-pandas-12-day-private-tour",
    "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    "beijing-xian-chengdu-shanghai-private-11-day-tour",
    "first-china-beautifully-paced",
    "chengdu-pandas-sichuan-table",
    "chengdu-pandas-jiuzhaigou-private-7-day-tour",
    "beijing-great-wall-private-5-day-tour",
    "shanghai-zhangjiajie-floating-peaks",
    "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
  ],
  tourDiscovery: [],
  destinations: [
    "beijing",
    "xian",
    "shanghai",
    "chengdu",
    "chongqing",
    "leshan",
    "jiuzhaigou",
    "zhangjiajie",
  ],
  journal: [
    "first-trip-to-china-planning-guide",
    "how-many-days-beijing-xian-shanghai",
    "how-much-walking-china-tour",
    "terracotta-warriors-day-trip-from-beijing",
    "mutianyu-great-wall-walking-cable-car",
    "tianmen-mountain-vs-zhangjiajie-national-forest-park",
    "chengdu-to-jiuzhaigou-transport",
    "jiuzhaigou-altitude-walking-accessibility",
    "how-difficult-is-zhangjiajie",
    "jiuzhaigou-or-zhangjiajie",
    "china-tours-with-pandas",
    "private-china-tour-vs-group-tour",
    "11-day-beijing-xian-chengdu-shanghai-itinerary",
    "chengdu-jiuzhaigou-7-day-itinerary",
    "shanghai-zhangjiajie-8-day-itinerary",
    "beijing-xian-itinerary-how-many-days",
    "best-time-to-visit-china",
    "how-to-choose-private-china-tour-company",
    "china-family-itinerary-10-to-14-days",
    "china-itinerary-older-travelers-10-days",
    "china-tours-for-seniors",
    "china-travel-for-seniors",
    "china-trip-with-older-parents",
    "china-tours-seniors-limited-mobility",
    "best-places-china-senior-travelers",
    "are-china-group-tours-too-fast-for-seniors",
    "best-time-to-visit-china-for-seniors",
    "china-tour-cost-for-seniors",
    "china-tours-for-seniors-from-usa",
    "china-travel-in-your-70s",
    "how-many-days-in-china-7-10-14-day-itineraries",
    "what-is-included-private-china-tour",
    "how-to-travel-between-beijing-xian-chengdu-shanghai",
    "9-day-beijing-xian-shanghai-itinerary",
    "5-day-chengdu-leshan-itinerary",
    "5-day-beijing-great-wall-itinerary",
    "6-day-xian-beijing-itinerary",
    "leshan-giant-buddha-day-trip-guide",
    "how-many-days-in-chengdu-itinerary",
    "3-day-chongqing-itinerary",
    "where-to-stay-in-zhangjiajie",
    "chengdu-chongqing-zhangjiajie-itinerary",
    "private-china-tour-cost-2026",
    "10-day-china-itinerary-first-time-visitors",
    "private-china-tour-from-singapore",
    "china-240-hour-visa-free-transit-guide",
    "china-accommodation-registration-foreigners",
    "china-high-speed-train-foreigners",
    "china-mobile-payments-foreign-tourists",
    "forbidden-city-tickets-foreigners",
    "chengdu-panda-base-tickets-foreigners",
    "china-sim-card-esim-internet-foreign-tourists",
    "shanghai-pudong-hongqiao-airport-guide",
    "china-golden-week-travel-2026",
    "mutianyu-badaling-jinshanling-great-wall",
    "terracotta-army-tickets-foreign-visitors",
    "china-domestic-flight-power-bank-rules",
    "bringing-prescription-medicine-to-china",
    "aviora-ttg-asia-matta-connect-2026",
  ],
  styles: ["family", "luxury", "slow-travel", "photography"],
} as const;

export type PublicRouteKind = keyof typeof publicRouteSlugs;

const publicSlugSets = Object.fromEntries(
  Object.entries(publicRouteSlugs).map(([kind, slugs]) => [kind, new Set(slugs)]),
) as Record<PublicRouteKind, Set<string>>;

for (const [kind, slugs] of Object.entries(publicRouteSlugs) as [
  PublicRouteKind,
  readonly string[],
][]) {
  if (publicSlugSets[kind].size !== slugs.length) {
    throw new Error(`Duplicate public ${kind} slug detected.`);
  }
}

export function isKnownPublicDetailPath(pathname: string) {
  const discoveryPrefix = "/tours/discover/";
  if (pathname.startsWith(discoveryPrefix)) {
    const slug = pathname.slice(discoveryPrefix.length);
    return !slug.includes("/") && publicSlugSets.tourDiscovery.has(slug);
  }

  for (const [kind, slugs] of Object.entries(publicRouteSlugs)) {
    if (kind === "tourDiscovery") continue;
    const prefix = `/${kind}/`;
    if (!pathname.startsWith(prefix)) continue;

    const slug = pathname.slice(prefix.length);
    return !slug.includes("/") && (slugs as readonly string[]).includes(slug);
  }

  return true;
}

export function assertPublicRouteSlugs(kind: PublicRouteKind, contentSlugs: string[]) {
  const configured = [...publicRouteSlugs[kind]].sort();
  const content = [...contentSlugs].sort();

  if (configured.join("\n") !== content.join("\n")) {
    throw new Error(
      `Public ${kind} slug configuration is out of sync. Update config/public-route-slugs.ts.`,
    );
  }
}
