export const publicRouteSlugs = {
  tours: [
    "first-china-beautifully-paced",
    "chengdu-pandas-sichuan-table",
    "chengdu-pandas-jiuzhaigou-private-7-day-tour",
    "beijing-great-wall-private-5-day-tour",
    "shanghai-zhangjiajie-floating-peaks",
  ],
  destinations: [
    "beijing",
    "xian",
    "harbin",
    "inner-mongolia",
    "shanghai",
    "hangzhou",
    "suzhou",
    "huangshan",
    "chengdu",
    "chongqing",
    "jiuzhaigou",
    "dali",
    "lijiang",
    "shangri-la",
    "guilin",
    "zhangjiajie",
    "guangzhou",
    "dunhuang",
    "kashgar",
    "urumqi",
  ],
  journal: [
    "china-240-hour-visa-free-transit-guide",
    "china-accommodation-registration-foreigners",
    "china-high-speed-train-foreigners",
    "china-mobile-payments-foreign-tourists",
    "forbidden-city-tickets-foreigners",
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
