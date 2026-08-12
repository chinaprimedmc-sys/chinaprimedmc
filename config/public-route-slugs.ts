export const publicRouteSlugs = {
  tours: [
    "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    "beijing-xian-chengdu-shanghai-private-11-day-tour",
    "first-china-beautifully-paced",
    "chengdu-pandas-sichuan-table",
    "chengdu-pandas-jiuzhaigou-private-7-day-tour",
    "beijing-great-wall-private-5-day-tour",
    "shanghai-zhangjiajie-floating-peaks",
    "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
  ],
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
  for (const [kind, slugs] of Object.entries(publicRouteSlugs)) {
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
