/**
 * 本模块职责：Journeys 页的站内搜索——规范化、同义词、拼写容错、天数解析、打分与“你是不是想找”。
 * 输入：用户输入的查询字符串与可搜索的行程。
 * 输出：解析后的查询、每个行程的得分、联想用的话题列表。
 * 不负责：界面、URL 同步、标签筛选（见 lib/tours/journey-explorer.ts）。
 * 关键规则：不做任何无障碍或医疗相关的同义词映射（没有可核实依据）；
 * 同义词只把常见的欧美说法映射到真实存在的标签或地名。
 */

export type SearchableJourney = {
  tier: string;
  days: number;
  title: string;
  desc: string;
  places: string;
  tags: string;
  keywords: string;
};

type Prepared = {
  title: string;
  places: string;
  tags: string;
  desc: string;
  keywords: string;
  words: Set<string>;
};

export type ParsedQuery = { tokens: string[]; days: number | null; dayTour: boolean };

/** 话题联想：显示名与触发词。 */
export const searchTopics: ReadonlyArray<readonly [string, string]> = [
  ["Beijing", "beijing peking"],
  ["Shanghai", "shanghai"],
  ["Xi'an", "xian sian"],
  ["Chengdu", "chengdu"],
  ["Chongqing", "chongqing"],
  ["Zhangjiajie", "zhangjiajie avatar"],
  ["Guilin & Yangshuo", "guilin yangshuo li river"],
  ["Yunnan", "yunnan dali lijiang shaxi shangri"],
  ["Great Wall", "great wall mutianyu badaling jinshanling"],
  ["Terracotta Army", "terracotta army warriors qin"],
  ["Pandas", "panda pandas"],
  ["Forbidden City", "forbidden city"],
  ["Sichuan food", "sichuan food hotpot"],
  ["Tea houses", "tea house tea"],
];

export const popularSearches = [
  "Great Wall",
  "Pandas",
  "Xi'an",
  "Family",
  "10 days",
  "Easier pace",
] as const;

const stopWords = new Set(
  "a an the in on of for to and or with from at by my our me we i trip trips tour tours travel vacation holiday itinerary itineraries private china chinese journey journeys".split(
    " ",
  ),
);

const synonyms: Record<string, string> = {
  families: "family",
  couple: "couples",
  kids: "family",
  kid: "family",
  children: "family",
  child: "family",
  toddlers: "family",
  teens: "family",
  honeymoon: "couples",
  romantic: "couples",
  anniversary: "couples",
  senior: "easier",
  seniors: "easier",
  elderly: "easier",
  older: "easier",
  retired: "easier",
  grandparents: "easier",
  grandparent: "easier",
  grandma: "easier",
  grandpa: "easier",
  parents: "easier",
  parent: "easier",
  gentle: "easier",
  relaxed: "easier",
  halal: "muslim",
  traveller: "",
  traveler: "",
  vegetarian: "food",
  foodie: "food",
  eat: "food",
  hike: "nature",
  hiking: "nature",
  scenery: "nature",
  landscape: "nature",
  landscapes: "nature",
  peking: "beijing",
  sian: "xian",
  avatar: "zhangjiajie",
  bamboo: "panda",
};

/** 这些词来自标签同义词，只匹配标签与标签派生的关键词，不匹配描述文字，避免“family culture”之类的巧合。 */
const tagOnlyTokens = new Set(["family", "couples", "easier", "muslim"]);

const numberWords: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
};

export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, "")
    .replace(/xi an/g, "xian")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const stem = (word: string) =>
  word.length > 3 && word.endsWith("s") && !word.endsWith("ss") ? word.slice(0, -1) : word;

export function parseQuery(raw: string): ParsedQuery {
  let text = normalize(raw);
  let days: number | null = null;
  let dayTour = false;
  text = text.replace(/\b(a|one)\s+day\b|\bday\s*trips?\b|\bday\s*tours?\b|\b1\s*day\b/g, () => {
    dayTour = true;
    return " ";
  });
  text = text.replace(
    /\b(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\s*(day|days|d|night|nights|week|weeks|wk|wks)\b/g,
    (_match, amount: string, unit: string) => {
      let value = numberWords[amount] ?? Number(amount);
      if (unit.startsWith("w")) value *= 7;
      days = value;
      return " ";
    },
  );
  const tokens = text
    .split(" ")
    .filter(Boolean)
    .filter((word) => !stopWords.has(word))
    .map((word) => {
      if (synonyms[word] !== undefined) return synonyms[word];
      const stemmed = stem(word);
      return synonyms[stemmed] !== undefined ? synonyms[stemmed] : stemmed;
    })
    .filter(Boolean);
  return { tokens, days, dayTour };
}

function levenshtein(a: string, b: string) {
  if (Math.abs(a.length - b.length) > 2) return 9;
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const held = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = held;
    }
  }
  return row[b.length];
}

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export class JourneySearchIndex<T extends SearchableJourney> {
  readonly items: readonly T[];
  private readonly prepared: Map<T, Prepared>;
  private readonly vocabulary: string[];

  constructor(items: readonly T[]) {
    this.items = items;
    this.prepared = new Map(
      items.map((item) => {
        const parts = {
          title: normalize(item.title),
          places: normalize(item.places),
          tags: normalize(item.tags),
          desc: normalize(item.desc),
          keywords: normalize(item.keywords),
        };
        const words = new Set(Object.values(parts).join(" ").split(" ").map(stem).filter(Boolean));
        return [item, { ...parts, words }];
      }),
    );
    const topicWords = searchTopics.flatMap(([, trigger]) =>
      normalize(trigger).split(" ").map(stem),
    );
    this.vocabulary = [
      ...new Set(
        [...this.prepared.values()].flatMap((entry) => [...entry.words]).concat(topicWords),
      ),
    ].filter((word) => word.length > 3);
  }

  private tokenScore(entry: Prepared, token: string) {
    if (token.length < 4) {
      const start = new RegExp(`(^| )${escapeRegExp(token)}`);
      if (start.test(entry.title)) return 6;
      if (start.test(entry.places)) return 5;
      if (start.test(entry.tags)) return 4;
      return start.test(entry.desc) || start.test(entry.keywords) ? 2 : 0;
    }
    if (entry.title.includes(token)) return 6;
    if (entry.places.includes(token)) return 5;
    if (entry.tags.includes(token)) return 4;
    if (entry.keywords.includes(token)) return 2;
    if (tagOnlyTokens.has(token)) return 0;
    if (entry.desc.includes(token)) return 2;
    for (const word of entry.words) if (word.startsWith(token)) return 1.5;
    const tolerance = token.length >= 7 ? 2 : 1;
    for (const word of entry.words) {
      if (word.length >= 4 && levenshtein(token, word) <= tolerance) return 1;
    }
    return 0;
  }

  /** 0 表示不匹配；空查询返回 1（全部匹配）。 */
  score(item: T, query: ParsedQuery) {
    const entry = this.prepared.get(item);
    if (!entry) return 0;
    if (query.dayTour && item.tier !== "day") return 0;
    let total = 0;
    if (query.days !== null) {
      if (query.days === 1) {
        if (item.tier !== "day") return 0;
      } else {
        if (item.days < query.days - 2 || item.days > query.days + 2) return 0;
        total += 3 - Math.abs(item.days - query.days) * 0.5;
      }
    }
    if (query.dayTour) total += 3;
    for (const token of query.tokens) {
      const value = this.tokenScore(entry, token);
      if (!value) return 0;
      total += value;
    }
    if (total) return total;
    return query.tokens.length || query.days !== null || query.dayTour ? 0 : 1;
  }

  /** 查询里有明显拼错的词时，返回纠正后的查询；否则返回 null。 */
  didYouMean(raw: string) {
    const { tokens } = parseQuery(raw);
    let changed = false;
    const fixed = tokens.map((token) => {
      if (
        token.length < 4 ||
        this.vocabulary.includes(token) ||
        this.vocabulary.some((word) => word.startsWith(token))
      ) {
        return token;
      }
      let best: string | null = null;
      let distance = 9;
      for (const word of this.vocabulary) {
        const d = levenshtein(token, word);
        if (d < distance) {
          distance = d;
          best = word;
        }
      }
      if (best && distance <= 2) {
        changed = true;
        return best;
      }
      return token;
    });
    return changed ? fixed.join(" ") : null;
  }

  /** 联想里的“地点与话题”：触发词前缀或轻微拼错命中，并附带行程数量。 */
  topicSuggestions(raw: string, limit = 4) {
    const typed = normalize(raw);
    if (typed.length < 2) return [];
    return searchTopics
      .map(([label, trigger]) => {
        const words = normalize(trigger).split(" ");
        const hit =
          words.some(
            (word) =>
              word.startsWith(typed) || (typed.length >= 4 && levenshtein(typed, word) <= 1),
          ) || normalize(label).startsWith(typed);
        if (!hit) return null;
        const parsed = parseQuery(label);
        return { label, count: this.items.filter((item) => this.score(item, parsed) > 0).length };
      })
      .filter((topic): topic is { label: string; count: number } => topic !== null)
      .slice(0, limit);
  }
}

/** 为搜索结果高亮匹配的词（返回片段数组，由界面渲染，避免拼 HTML）。 */
export function highlightParts(text: string, raw: string) {
  const words = normalize(raw)
    .split(" ")
    .filter((word) => word.length > 1 && !stopWords.has(word));
  if (!words.length) return [{ text, match: false }];
  const pattern = new RegExp(`(${words.map(escapeRegExp).join("|")})`, "ig");
  return text
    .split(pattern)
    .filter(Boolean)
    .map((part, index) => ({ text: part, match: index % 2 === 1 }));
}
