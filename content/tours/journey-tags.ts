/**
 * 本模块职责：Journeys 页使用的公开标签（谁出行、兴趣、两个“需要知道”开关）与搜索同义词。
 * 输入：无运行时输入。
 * 输出：每个行程的编辑式标签，以及搜索用的隐藏关键词。
 * 不负责：筛选逻辑（见 lib/tours/journey-explorer.ts）与页面展示。
 * 关键规则：标签只在行程自己的文案能支持时才出现；每类最多 2 个；
 * Muslim-friendly 只用于确有清真与礼拜安排的行程；不做任何无障碍或医疗承诺。
 * 主分类见 classification.ts；本文件只维护辅助客群和兴趣。
 */

import type { publicJourneySlugs } from "@/content/tours/catalog";

/** 同行人是可重叠的辅助标签，不决定产品主分类。 */
export const whoTags = ["First-time", "Family", "Couples", "Multi-generational"] as const;
export type WhoTag = (typeof whoTags)[number];

export const interestTags = [
  "Culture & heritage",
  "History",
  "Nature & landscapes",
  "Food & local life",
  "Pandas & wildlife",
  "Photography",
  "Slow travel",
  "Architecture",
] as const;
export type InterestTag = (typeof interestTags)[number];

export type JourneyTagSet = {
  who: readonly WhoTag[];
  interest: readonly InterestTag[];
  /** 行程自己的节奏描述为 easy / unhurried / comfortable，且换酒店次数少。 */
  easierPace?: boolean;
  /** 仅限围绕清真餐与礼拜时间专门设计的行程。 */
  muslimFriendly?: boolean;
};

type PublicSlug = (typeof publicJourneySlugs)[number];

export const journeyTags: Record<PublicSlug, JourneyTagSet> = {
  "beijing-xian-shanghai-private-10-day-tour": {
    who: ["First-time", "Couples"],
    interest: ["Culture & heritage", "History"],
    easierPace: true,
  },
  "luxury-yunnan-private-tour": {
    who: ["Couples"],
    interest: ["Nature & landscapes", "Slow travel"],
  },
  "private-mutianyu-great-wall-day-tour": {
    who: ["First-time", "Family"],
    interest: ["History", "Nature & landscapes"],
  },
  "private-shanghai-day-tour-guide-driver": {
    who: ["First-time", "Couples"],
    interest: ["Architecture", "Food & local life"],
    easierPace: true,
  },
  "private-xian-terracotta-warriors-day-tour": {
    who: ["First-time", "Family"],
    interest: ["History"],
  },
  "private-chengdu-panda-day-tour-early-morning": {
    who: ["Family", "Couples"],
    interest: ["Pandas & wildlife", "Food & local life"],
  },
  "guilin-yangshuo-li-river-cruise-private-day-tour": {
    who: ["Couples", "Family"],
    interest: ["Nature & landscapes", "Photography"],
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    who: ["Family", "Multi-generational"],
    interest: ["Pandas & wildlife", "Culture & heritage"],
  },
  "qingcheng-mountain-private-wellness-retreat-10-day": {
    who: ["Couples"],
    interest: ["Slow travel"],
    easierPace: true,
  },
  "china-at-an-easier-pace-12-day-private-tour": {
    who: ["Couples", "Multi-generational"],
    interest: ["Slow travel", "Culture & heritage"],
    easierPace: true,
  },
  "muslim-friendly-china-tour-great-wall-desert-stars": {
    who: ["Family", "Couples"],
    interest: ["Culture & heritage", "Food & local life"],
    muslimFriendly: true,
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    who: ["First-time"],
    interest: ["Culture & heritage", "Pandas & wildlife"],
  },
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": {
    who: [],
    interest: ["Food & local life"],
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    who: [],
    interest: ["Nature & landscapes", "Food & local life"],
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    who: [],
    interest: ["Nature & landscapes", "Pandas & wildlife"],
  },
  "shanghai-zhangjiajie-floating-peaks": {
    who: [],
    interest: ["Nature & landscapes", "Photography"],
  },
  "chengdu-pandas-sichuan-table": {
    who: ["Family"],
    interest: ["Food & local life", "Pandas & wildlife"],
    easierPace: true,
  },
  "beijing-great-wall-private-5-day-tour": {
    who: ["First-time"],
    interest: ["History", "Culture & heritage"],
    easierPace: true,
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    who: [],
    interest: ["History", "Food & local life"],
  },
};
