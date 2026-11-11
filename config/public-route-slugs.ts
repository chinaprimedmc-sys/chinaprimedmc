import { PUBLIC_JOURNAL_SLUGS } from "@/content/journal/public-manifest";

export const publicRouteSlugs = {
  tours: [
    "beijing-xian-shanghai-private-10-day-tour",
    "luxury-yunnan-private-tour",
    "private-mutianyu-great-wall-day-tour",
    "private-shanghai-day-tour-guide-driver",
    "private-xian-terracotta-warriors-day-tour",
    "private-chengdu-panda-day-tour-early-morning",
    "guilin-yangshuo-li-river-cruise-private-day-tour",
    "china-family-tour-with-pandas-12-day-private-tour",
    "qingcheng-mountain-private-wellness-retreat-10-day",
    "china-at-an-easier-pace-12-day-private-tour",
    "muslim-friendly-china-tour-great-wall-desert-stars",
    "beijing-xian-chengdu-shanghai-private-11-day-tour",
    "guangzhou-shenzhen-tailor-made-business-tour-4-day",
    "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    "chengdu-pandas-jiuzhaigou-private-7-day-tour",
    "shanghai-zhangjiajie-floating-peaks",
    "chengdu-pandas-sichuan-table",
    "beijing-great-wall-private-5-day-tour",
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
    "guilin",
  ],
  journal: PUBLIC_JOURNAL_SLUGS,
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
