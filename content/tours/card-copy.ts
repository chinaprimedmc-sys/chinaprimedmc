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
  "beijing-xian-chengdu-shanghai-private-11-day-tour": "Beijing to Shanghai",
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
    "Travel from the Great Wall to warriors, pandas and Shanghai with every handover already connected.",
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

export function getJourneyCardTitle(item: JourneyCatalogItem) {
  const location = journeyLocations[item.slug] ?? item.destinationFilters.join(" · ");
  const days = item.durationLabel.match(/^(\d+)(?:[–-](\d+))?\s*(?:private\s+)?day/i);
  if (!days) return item.title;
  return `${location} · ${days[1]}${days[2] ? `–${days[2]}` : ""} ${days[1] === "1" && !days[2] ? "Day" : "Days"}`;
}

export function getJourneyCardDescription(item: JourneyCatalogItem) {
  return sensoryDescriptions[item.slug] ?? item.hook;
}
