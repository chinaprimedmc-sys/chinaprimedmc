/**
 * 本模块职责：提供目录卡片与 JSON-LD 共用的精简英文标题和体验描述。
 * 输入：一条标准化 JourneyCatalogItem。
 * 输出：适合两行卡片展示、同时保留目的地与产品类型的可信文案。
 * 不负责：产品正式名称、价格、筛选分类或视觉样式。
 * 关键规则：可见卡片标题与目录 JSON-LD 名称必须使用同一函数。
 */

import type { JourneyCatalogItem } from "@/content/tours/catalog";

const journeyLocations: Record<string, string> = {
  "private-mutianyu-great-wall-day-tour": "Mutianyu Great Wall",
  "private-shanghai-day-tour-guide-driver": "Shanghai",
  "private-xian-terracotta-warriors-day-tour": "Xi'an",
  "private-chengdu-panda-day-tour-early-morning": "Chengdu",
  "guilin-yangshuo-li-river-cruise-private-day-tour": "Guilin · Yangshuo",
  "qingcheng-mountain-private-wellness-retreat-10-day": "Chengdu · Qingcheng Mountain",
  "china-family-tour-with-pandas-12-day-private-tour": "Beijing to Shanghai",
  "muslim-friendly-china-tour-great-wall-desert-stars": "Beijing · Ningxia · Shanghai",
  "china-at-an-easier-pace-12-day-private-tour": "Beijing · Xi'an · Shanghai",
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": "Guangzhou · Shenzhen",
  "luxury-yunnan-private-tour": "Yunnan",
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": "Chengdu · Chongqing · Zhangjiajie",
  "beijing-xian-chengdu-shanghai-private-11-day-tour": "Shanghai · Chengdu · Xi'an · Beijing",
  "first-china-beautifully-paced": "Beijing · Xi'an · Shanghai",
  "chengdu-pandas-sichuan-table": "Chengdu · Leshan",
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": "Chengdu · Jiuzhaigou",
  "shanghai-zhangjiajie-floating-peaks": "Shanghai · Zhangjiajie",
  "beijing-great-wall-private-5-day-tour": "Beijing",
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": "Xi'an · Beijing",
};

const sensoryDescriptions: Record<string, string> = {
  "private-mutianyu-great-wall-day-tour":
    "Private pickup, guiding and pre-arranged tickets leave more time to walk the Wall at your pace.",
  "private-shanghai-day-tour-guide-driver":
    "Yu Garden, the Bund and leafy lanes, connected by your private guide and a local ferry crossing.",
  "private-xian-terracotta-warriors-day-tour":
    "See the Terracotta Army with context, then explore Xi'an's old city at your pace.",
  "private-chengdu-panda-day-tour-early-morning":
    "See pandas early, then slow down over tea in People's Park with private transfers handled.",
  "guilin-yangshuo-li-river-cruise-private-day-tour":
    "A shared Li River cruise with private pickup, luggage coordination and your chosen finish.",
  "qingcheng-mountain-private-wellness-retreat-10-day":
    "Wake beneath forested peaks to tea, quiet movement and days with enough room to feel like your own.",
  "china-family-tour-with-pandas-12-day-private-tour":
    "The Wall, warriors and pandas with child-aware days and room to rest.",
  "muslim-friendly-china-tour-great-wall-desert-stars":
    "From imperial courtyards to Hui kitchens and desert dusk, faith-aware details travel with you.",
  "china-at-an-easier-pace-12-day-private-tour":
    "Beijing, Xi'an and Shanghai with time to rest between landmark days.",
  "guangzhou-shenzhen-tailor-made-business-tour-4-day":
    "Let the fixed agenda lead, then discover South China's food and city life in the hours between.",
  "luxury-yunnan-private-tour":
    "Follow old trading paths through Dali, Shaxi, Lijiang and Shangri-La with every day designed only for you.",
  "chengdu-chongqing-zhangjiajie-private-11-day-tour":
    "Taste Sichuan after dark, meet pandas early and rise into Zhangjiajie's sandstone landscape.",
  "beijing-xian-chengdu-shanghai-private-11-day-tour":
    "One clear 12-day route through four distinct cities, with the connections planned around your dates.",
  "first-china-beautifully-paced":
    "A thoughtful first China journey with private context, key logistics handled, and fewer rushed departures.",
  "chengdu-pandas-sichuan-table":
    "Begin with pandas, linger over tea and understand Chengdu one generous meal at a time.",
  "chengdu-pandas-jiuzhaigou-private-7-day-tour":
    "Pair Chengdu's gentle local rhythm with the clear lakes and forest paths of Jiuzhaigou.",
  "shanghai-zhangjiajie-floating-peaks":
    "Leave the riverfront glow behind and wake among pillars of stone, cloud and mountain light.",
  "beijing-great-wall-private-5-day-tour":
    "Stay in one city base while imperial Beijing and a mountain Wall day unfold around your pace.",
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour":
    "Cross between two imperial capitals, from silent clay ranks to watchtowers over the mountains.",
};

/**
 * 面向海外读者的"看点优先"标题：先说看什么，再说去哪。
 * 城市名只作为副标题出现，避免读者与搜索引擎自行推断路线含义。
 */
const journeyHeadlines: Record<string, string> = {
  "first-china-beautifully-paced": "The Great Wall, Terracotta Army & Shanghai",
  "china-family-tour-with-pandas-12-day-private-tour":
    "Pandas, Warriors & the Great Wall, Made for Families",
  "luxury-yunnan-private-tour": "Yunnan's Tea Horse Road: Snow Mountains & Old Towns",
  "china-at-an-easier-pace-12-day-private-tour": "Imperial China at an Unhurried Pace",
  "beijing-xian-chengdu-shanghai-private-11-day-tour": "Four Cities, One Clear Route Through China",
  "chengdu-chongqing-zhangjiajie-private-11-day-tour":
    "Pandas, Sichuan Food & Zhangjiajie's Floating Mountains",
  "shanghai-zhangjiajie-floating-peaks": "Shanghai's Skyline & Zhangjiajie's Floating Mountains",
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": "Pandas & the Turquoise Lakes of Jiuzhaigou",
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour":
    "Terracotta Warriors & the Great Wall",
  "beijing-great-wall-private-5-day-tour": "Beijing's Forbidden City & the Great Wall",
  "chengdu-pandas-sichuan-table": "Pandas, Tea Houses & the Sichuan Table",
  "muslim-friendly-china-tour-great-wall-desert-stars":
    "Muslim-Friendly China: Great Wall to Ningxia Desert",
  "qingcheng-mountain-private-wellness-retreat-10-day":
    "A Private Wellness Retreat at Mount Qingcheng",
  "guangzhou-shenzhen-tailor-made-business-tour-4-day":
    "A Tailor-Made Business Trip to Guangzhou & Shenzhen",
  "private-mutianyu-great-wall-day-tour": "Private Great Wall Day Tour at Mutianyu, from Beijing",
  "private-shanghai-day-tour-guide-driver": "Private Shanghai Day Tour: Old City, Bund & Skyline",
  "private-xian-terracotta-warriors-day-tour": "Private Terracotta Warriors Day Tour in Xi'an",
  "private-chengdu-panda-day-tour-early-morning": "Private Giant Panda Day Tour in Chengdu",
  "guilin-yangshuo-li-river-cruise-private-day-tour":
    "Private Li River Cruise Day: Guilin to Yangshuo",
};

/** 每个城市第一次出现时的一句话定位，供摘要、llms.txt 与目的地页共用。 */
export const placeGlossary: Record<string, string> = {
  Beijing: "China's capital, home to the Forbidden City and the Great Wall",
  "Xi'an": "the ancient capital, home to the Terracotta Army",
  Shanghai: "China's largest and most modern city",
  Chengdu: "the home of giant pandas and Sichuan cuisine",
  Chongqing: "a hill city of river views and hotpot",
  Zhangjiajie: "the national park of sandstone pillars that look like floating mountains",
  Jiuzhaigou: "a valley of turquoise lakes in northern Sichuan",
  Yunnan: "a mountain province of old towns and tea-trading history",
  Ningxia: "a region of Hui Muslim culture and desert landscapes",
  Guilin: "the river-and-limestone landscape of southern China",
  Guangzhou: "the southern trade capital known for Cantonese food",
  Shenzhen: "China's technology and innovation hub",
};

export function getJourneyRouteLabel(item: JourneyCatalogItem) {
  return journeyLocations[item.slug] ?? item.destinationFilters.join(" · ");
}

export function getJourneyHeadline(item: JourneyCatalogItem) {
  return journeyHeadlines[item.slug];
}

/**
 * 搜索结果标题：看点 + 天数。站点审计要求最终标题 30–70 字符（含品牌后缀），
 * 因此按"信息量从多到少"依次尝试，取第一个不超过 64 字符的写法（留出品牌后缀空间）。
 */
export function getJourneySeoTitle(item: JourneyCatalogItem) {
  const headline = journeyHeadlines[item.slug] ?? getJourneyCardTitle(item);
  if (item.recommendedDaysMax <= 1) return headline;
  // 天数必须读行程自己的时长标签（如 "11 days / 10 nights"），推荐天数区间会写错。
  const match = item.durationLabel.match(/^(\d+)(?:[–-](\d+))?\s*days?/i);
  if (!match) return headline;
  const days = `${match[1]}${match[2] ? `–${match[2]}` : ""}`;
  const candidates = [
    `${headline}: ${days}-Day Private China Tour`,
    `${headline} | ${days}-Day China Tour`,
    `${headline} | ${days} Days`,
    headline,
  ];
  return candidates.find((title) => title.length <= 64) ?? candidates.at(-1)!;
}

export function getJourneyCardTitle(item: JourneyCatalogItem) {
  const location = journeyLocations[item.slug] ?? item.destinationFilters.join(" · ");
  const days = item.durationLabel.match(/^(\d+)(?:[–-](\d+))?\s*(?:private\s+)?day/i);
  if (!days) return item.title;
  return `${location} · ${days[1]}${days[2] ? `–${days[2]}` : ""} ${days[1] === "1" && !days[2] ? "Day" : "Days"}`;
}

export function getJourneyCardDescription(item: JourneyCatalogItem) {
  return sensoryDescriptions[item.slug] ?? item.hook;
}
