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
  "beijing-xian-shanghai-private-10-day-tour": "Beijing · Xi'an · Shanghai",
  "chengdu-pandas-sichuan-table": "Chengdu · Leshan",
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": "Chengdu · Jiuzhaigou",
  "shanghai-zhangjiajie-floating-peaks": "Shanghai · Zhangjiajie",
  "beijing-great-wall-private-5-day-tour": "Beijing",
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": "Xi'an · Beijing",
};

const sensoryDescriptions: Record<string, string> = {
  "private-mutianyu-great-wall-day-tour":
    "Your own guide and driver, hotel pickup and admission, with a cable-car or walking route agreed before the day.",
  "private-shanghai-day-tour-guide-driver":
    "Yu Garden, the Bund and the former French Concession, with your own guide, driver and central-hotel pickup.",
  "private-xian-terracotta-warriors-day-tour":
    "The Terracotta Army with your own guide, driver, museum tickets and hotel pickup, followed by one Old City walk.",
  "private-chengdu-panda-day-tour-early-morning":
    "An early Panda Base visit with your own guide, driver, admission and hotel pickup, followed by a People's Park walk. Tea is optional.",
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
  "beijing-xian-shanghai-private-10-day-tour":
    "Beijing, Xi'an and Shanghai in ten days, with local private guides, nine hotel nights and two planned city moves.",
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
  "beijing-xian-shanghai-private-10-day-tour": "10-Day Private Tour of Beijing, Xi'an and Shanghai",
  "china-family-tour-with-pandas-12-day-private-tour":
    "Pandas, Warriors & the Great Wall, Made for Families",
  "luxury-yunnan-private-tour": "Yunnan's Tea Horse Road: Snow Mountains & Old Towns",
  "china-at-an-easier-pace-12-day-private-tour": "12-Day Private China Tour at an Easier Pace",
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
  "private-shanghai-day-tour-guide-driver": "Private Shanghai Day Tour with Guide and Driver",
  "private-xian-terracotta-warriors-day-tour": "Private Terracotta Warriors Tour from Xi'an",
  "private-chengdu-panda-day-tour-early-morning": "Private Chengdu Panda Tour with Hotel Pickup",
  "guilin-yangshuo-li-river-cruise-private-day-tour":
    "Guilin to Yangshuo Li River Cruise with Guide",
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
  Leshan: "home of the Giant Buddha carved into a cliff above the river",
  Tianjin: "a port city of European-style architecture near Beijing",
  Chengde: "the Qing emperors' summer mountain retreat, a UNESCO World Heritage site",
  Pingyao: "a walled Ming-dynasty town in Shanxi, a UNESCO World Heritage site",
  Datong: "home of the Yungang Grottoes and the Hanging Temple",
  Harbin: "the city of winter ice festivals and Russian-influenced architecture",
  Shenyang: "the former Qing capital, with an imperial palace complex",
  Dalian: "a relaxed coastal city in the northeast",
  Hangzhou: "the city of West Lake and tea villages",
  Suzhou: "the city of classical gardens and canals",
  Nanjing: "a former capital with a Ming-dynasty city wall",
  Huangshan: "the Yellow Mountains of granite peaks and sea-of-cloud views",
  Luoyang: "an ancient capital and home of the Longmen Grottoes",
  Wuhan: "a major Yangtze river city with a renowned food culture",
  Xiamen: "a coastal city beside the car-free island of Gulangyu",
  Hainan: "China's tropical island province of beaches and resorts",
  Dali: "an old town beside Erhai Lake in Yunnan",
  Lijiang: "an old town beneath Jade Dragon Snow Mountain in Yunnan",
  "Shangri-La": "a Tibetan-culture town at high altitude in northwest Yunnan",
  Kunming: "the mild-climate capital of Yunnan",
  Lhasa: "the Tibetan capital and home of the Potala Palace",
  Dunhuang: "the oasis town beside the Mogao Caves on the Silk Road",
  Zhangye: "the Gansu city beside the colored Danxia landforms",
  Yinchuan: "the capital of Ningxia, with desert landscapes and Hui Muslim culture",
  Kashgar: "a Silk Road oasis city in western Xinjiang",
  Turpan: "an oasis town in Xinjiang's desert basin",
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
/**
 * 搜索主词页：标题必须直接包含目标搜索词（Private / 城市名 / 天数），
 * 不能再用"看点优先"的写法，否则与"private Beijing Xi'an Shanghai tour"类查询失去匹配。
 */
const journeySeoTitleOverrides: Record<string, string> = {
  "china-at-an-easier-pace-12-day-private-tour": "12-Day Private China Tour at an Easier Pace",
  "private-xian-terracotta-warriors-day-tour": "Private Terracotta Warriors Tour from Xi'an",
  "private-shanghai-day-tour-guide-driver": "Private Shanghai Day Tour with Guide and Driver",
  "beijing-xian-shanghai-private-10-day-tour": "10-Day Private Tour of Beijing, Xi'an and Shanghai",
  // 站点审计按 HTML 转义后的长度计数（& 会变成 &amp;），含 & 的标题要留出余量。
  "chengdu-chongqing-zhangjiajie-private-11-day-tour":
    "Chengdu, Chongqing & Zhangjiajie 11-Day Private Tour",
  "shanghai-zhangjiajie-floating-peaks": "Shanghai & Zhangjiajie Floating Mountains 8-Day Tour",
};

export function getJourneySeoTitle(item: JourneyCatalogItem) {
  const override = journeySeoTitleOverrides[item.slug];
  if (override) return override;
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
