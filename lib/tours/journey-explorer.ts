/**
 * 本模块职责：Journeys 页浏览器的状态——层级、三个筛选、两个开关、搜索词、排序，以及它们与 URL 的互转。
 * 输入：URLSearchParams 与页面传来的行程条目。
 * 输出：筛选后的行程、可写回地址栏的参数。
 * 不负责：搜索打分（见 journey-search.ts）、标签数据（见 content/tours/journey-tags.ts）与界面。
 * 关键规则：URL 是唯一状态来源；旧版参数（style、needs、travellers、duration、scope…）继续可用，
 * 因为 next.config.ts 的重定向与已分享的链接仍在使用它们；服务端与客户端用同一函数得到同一初始状态。
 */

import type { InterestTag, WhoTag } from "@/content/tours/journey-tags";
import { interestTags, whoTags } from "@/content/tours/journey-tags";
import { JourneySearchIndex, parseQuery, type SearchableJourney } from "@/lib/tours/journey-search";

export type JourneyTier = "day" | "signature" | "tailor-made-example";
export type TierFilter = "all" | JourneyTier;
export type LengthId = "1" | "3-7" | "8-12" | "13+";
export type SortId = "rec" | "short" | "long";

export type ExplorerItem = SearchableJourney & {
  slug: string;
  tier: JourneyTier;
  tierLabel: string;
  href: string;
  /** 卡片上显示的一句话（desc 另含亮点，仅供搜索）。 */
  summary: string;
  /** 卡片上的短时长，例如“9 days”或“7–9 hours”。 */
  duration: string;
  /** 仅城市，用逗号式展示。 */
  destinations: string;
  image: { src: string; alt: string; position?: string } | null;
  who: readonly WhoTag[];
  interest: readonly InterestTag[];
  easierPace: boolean;
  muslimFriendly: boolean;
  /** 卡片上展示的前三个亮点。 */
  highlights: string[];
  /** 卡片底部价格行：只有已核实的起价才写金额，其余写“按日期和人数报价”。 */
  priceLabel: string;
  priceNote: string;
};

export type ExplorerState = {
  tier: TierFilter;
  length: LengthId[];
  who: WhoTag[];
  interest: InterestTag[];
  easierPace: boolean;
  muslimFriendly: boolean;
  q: string;
  sort: SortId;
};

export const tierOptions: ReadonlyArray<{
  id: TierFilter;
  label: string;
  explain: string;
  link?: { label: string; href: string };
}> = [
  {
    id: "all",
    label: "All",
    explain: "Private journeys across China, from a single day to nearly two weeks.",
  },
  {
    id: "day",
    label: "Day Experiences",
    explain:
      "One day with your own guide and driver. A low-commitment way to meet China, and easy to add to a longer trip.",
    link: { label: "See all Day Experiences", href: "/private-china-day-tours" },
  },
  {
    id: "signature",
    label: "Signature Journeys",
    explain: "Defined multi-day routes, adjusted to your dates, party and pace.",
    link: { label: "See all Signature Journeys", href: "/fixed-itinerary-china-tours" },
  },
  {
    id: "tailor-made-example",
    label: "Tailor-Made",
    explain:
      "Designed from a blank page. These show the kind of journey we build around a specific need.",
    link: { label: "How tailor-made works", href: "/tailor-made-china-tours" },
  },
];

export const lengthOptions: ReadonlyArray<{
  id: LengthId;
  label: string;
  test: (days: number) => boolean;
}> = [
  { id: "1", label: "1 day", test: (days) => days <= 1 },
  { id: "3-7", label: "3–7 days", test: (days) => days >= 3 && days <= 7 },
  { id: "8-12", label: "8–12 days", test: (days) => days >= 8 && days <= 12 },
  { id: "13+", label: "13+ days", test: (days) => days >= 13 },
];

export const sortOptions: ReadonlyArray<{ id: SortId; label: string }> = [
  { id: "rec", label: "Recommended" },
  { id: "short", label: "Shortest first" },
  { id: "long", label: "Longest first" },
];

export const emptyState: ExplorerState = {
  tier: "all",
  length: [],
  who: [],
  interest: [],
  easierPace: false,
  muslimFriendly: false,
  q: "",
  sort: "rec",
};

const oneOf = <T extends string>(value: string | null, allowed: readonly T[]) =>
  allowed.includes(value as T) ? (value as T) : null;

const listOf = <T extends string>(value: string | null, allowed: readonly T[]) =>
  (value ?? "")
    .split(",")
    .map((part) => part.trim())
    .filter((part): part is T => allowed.includes(part as T));

const lengthIds = lengthOptions.map((option) => option.id);
const tierIds = tierOptions.map((option) => option.id);
const sortIds = sortOptions.map((option) => option.id);

/** 旧版参数到新筛选的映射；无法表达的旧筛选（区域、场景等）被忽略，页面仍显示全部。 */
const legacyStyle: Record<string, { who?: WhoTag; interest?: InterestTag }> = {
  "first-trip": { who: "First-time" },
  "first-time-china": { who: "First-time" },
  family: { who: "Family" },
  culture: { interest: "Culture & heritage" },
  nature: { interest: "Nature & landscapes" },
  food: { interest: "Food & local life" },
  wildlife: { interest: "Pandas & wildlife" },
  photography: { interest: "Photography" },
  "slow-travel": { interest: "Slow travel" },
  wellness: { interest: "Slow travel" },
};
const legacyDuration: Record<string, LengthId> = {
  "one-day": "1",
  "two-three": "3-7",
  "four-seven": "3-7",
  "1-7": "3-7",
  "eight-eleven": "8-12",
  "8-12": "8-12",
  "twelve-plus": "13+",
  "13+": "13+",
};

export function readExplorerState(params: URLSearchParams): ExplorerState {
  const state: ExplorerState = {
    ...emptyState,
    length: [],
    who: [],
    interest: [],
  };

  state.tier = oneOf(params.get("tier"), tierIds) ?? "all";
  state.length = listOf(params.get("length"), lengthIds);
  state.who = listOf(params.get("who"), whoTags);
  state.interest = listOf(params.get("interest"), interestTags);
  state.easierPace = params.get("easy") === "1";
  state.muslimFriendly = params.get("halal") === "1";
  state.q = (params.get("q") ?? params.get("query") ?? "").trim().slice(0, 80);
  state.sort = oneOf(params.get("sort"), sortIds) ?? "rec";

  // 旧版参数：只在新参数没有设置同一维度时才采用。
  const type = params.get("type") ?? params.get("format");
  if (state.tier === "all" && type === "day-tour") state.tier = "day";

  for (const raw of (params.get("travelStyle") ?? params.get("style") ?? params.get("focus") ?? "")
    .split(",")
    .map((part) => part.trim())) {
    const mapped = legacyStyle[raw];
    if (mapped?.who && !state.who.includes(mapped.who)) state.who.push(mapped.who);
    if (mapped?.interest && !state.interest.includes(mapped.interest)) {
      state.interest.push(mapped.interest);
    }
  }
  if (!state.length.length) {
    for (const raw of (params.get("duration") ?? params.get("days") ?? "").split(",")) {
      const mapped = legacyDuration[raw.trim()];
      if (mapped && !state.length.includes(mapped)) state.length.push(mapped);
    }
  }
  if (!state.length.length && params.get("scope") === "multi-city") {
    state.length = ["3-7", "8-12", "13+"];
  }

  const need = params.get("need") ?? params.get("needs");
  if (need === "muslim-friendly") state.muslimFriendly = true;
  if (need === "slower-pacing") state.easierPace = true;
  if (need === "child-friendly" && !state.who.includes("Family")) state.who.push("Family");
  if (params.get("travellers") === "families" && !state.who.includes("Family")) {
    state.who.push("Family");
  }
  if (params.get("family") === "true" && !state.who.includes("Family")) state.who.push("Family");
  if (params.get("pace") === "easy" || params.get("sort") === "relaxed") state.easierPace = true;

  return state;
}

export function writeExplorerState(state: ExplorerState) {
  const params = new URLSearchParams();
  if (state.tier !== "all") params.set("tier", state.tier);
  if (state.length.length) params.set("length", state.length.join(","));
  if (state.who.length) params.set("who", state.who.join(","));
  if (state.interest.length) params.set("interest", state.interest.join(","));
  if (state.easierPace) params.set("easy", "1");
  if (state.muslimFriendly) params.set("halal", "1");
  if (state.q.trim()) params.set("q", state.q.trim());
  if (state.sort !== "rec") params.set("sort", state.sort);
  return params;
}

export function activeFilterCount(state: ExplorerState) {
  return (
    state.length.length +
    state.who.length +
    state.interest.length +
    (state.easierPace ? 1 : 0) +
    (state.muslimFriendly ? 1 : 0)
  );
}

type MatchOptions = { anyTier?: boolean };

function matchesFilters(item: ExplorerItem, state: ExplorerState, options: MatchOptions) {
  if (!options.anyTier && state.tier !== "all" && item.tier !== state.tier) return false;
  if (
    state.length.length &&
    !state.length.some((id) => lengthOptions.find((option) => option.id === id)?.test(item.days))
  ) {
    return false;
  }
  if (state.who.length && !state.who.some((tag) => item.who.includes(tag))) return false;
  if (state.interest.length && !state.interest.some((tag) => item.interest.includes(tag))) {
    return false;
  }
  if (state.easierPace && !item.easierPace) return false;
  if (state.muslimFriendly && !item.muslimFriendly) return false;
  return true;
}

export type ExplorerResult = { item: ExplorerItem; score: number };

export function runExplorer(
  index: JourneySearchIndex<ExplorerItem>,
  state: ExplorerState,
  options: MatchOptions = {},
): ExplorerResult[] {
  const query = parseQuery(state.q);
  const results: ExplorerResult[] = [];
  for (const item of index.items) {
    if (!matchesFilters(item, state, options)) continue;
    const score = index.score(item, query);
    if (score > 0) results.push({ item, score });
  }
  if (state.sort === "short") return results.sort((a, b) => a.item.days - b.item.days);
  if (state.sort === "long") return results.sort((a, b) => b.item.days - a.item.days);
  return state.q.trim() ? results.sort((a, b) => b.score - a.score) : results;
}

/** 如果只改变某一个筛选组，会剩下几条（用于弹出菜单里的数量）。 */
export function countWith(
  index: JourneySearchIndex<ExplorerItem>,
  state: ExplorerState,
  patch: Partial<ExplorerState>,
) {
  return runExplorer(index, { ...state, ...patch }).length;
}

export function itemsToIndex(items: readonly ExplorerItem[]) {
  return new JourneySearchIndex(items);
}
