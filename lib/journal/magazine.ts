/**
 * 本模块职责：Journal 杂志式首页的主题分类、筛选与搜索。
 * 输入：文章摘要（slug、分类、标签、标题、摘要）与访客选择的主题、搜索词。
 * 输出：每篇文章所属的主题（可同属多个）、各主题数量、筛选后的列表。
 * 不负责：界面（features/journal/journal-magazine.tsx）与图片（服务端 magazine-items.ts）。
 * 关键规则：分类只用文章已有的标签、分类与 slug 关键词，不凭空贴标签；一篇文章可以同时属于多个主题；
 * URL 是唯一状态来源（?topic= 与 ?q=），非法值一律回退为“全部”。
 */

export type TopicId = "all" | "family" | "senior" | "private" | "logistics";

export const topics: ReadonlyArray<{ id: TopicId; label: string }> = [
  { id: "all", label: "All" },
  { id: "family", label: "Family Travel" },
  { id: "senior", label: "Senior-Friendly" },
  { id: "private", label: "Custom & Private" },
  { id: "logistics", label: "Logistics" },
];

export type MagazineItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: string;
  publishedAt: string;
  image: { src: string; alt: string; objectPosition?: string };
};

/**
 * 注意：不使用 family-travel / private-guides 标签——它们在全站挂得太宽（分别约 43 篇与 80 篇），
 * 用来筛选会让一个主题占去大半文章。这里只看文章分类和标题关键词。
 */
const logisticsWords =
  /visa|transit|registration|high-speed-train|payment|sim-card|esim|internet|airport|packing|apps|power-bank|medicine|luggage|tickets|weather|emergency|arrival|handoff|golden-week|where-to-stay/;
const privateWords =
  /tailor|luxury|proposal|guide-vs-driver|how-to-plan|how-far-in-advance|how-to-choose|no-forced-shopping|what-is-included|what-private|private-china-tour|transfers-handoffs|private-china-family|women-private/;
const seniorWords = /senior|older|elderly|slow-paced|easier|70s|limited-mobility/;
const familyWords = /family|families|kids|children|age-for|multi-generational/;

export function topicsFor(item: Pick<MagazineItem, "slug" | "category" | "tags">): TopicId[] {
  const found = new Set<TopicId>();
  if (item.category === "Family Travel" || familyWords.test(item.slug)) found.add("family");
  if (item.tags.includes("senior-travel") || seniorWords.test(item.slug)) found.add("senior");
  if (
    item.category === "Luxury Travel" ||
    item.category === "Luxury Hotels" ||
    privateWords.test(item.slug)
  ) {
    found.add("private");
  }
  if (
    item.category === "Visa" ||
    item.category === "Train Travel" ||
    logisticsWords.test(item.slug)
  ) {
    found.add("logistics");
  }
  return [...found];
}

/** 卡片上的小标签：优先显示最具体的主题，没有就显示文章分类。 */
export function tagFor(item: Pick<MagazineItem, "slug" | "category" | "tags">) {
  const found = topicsFor(item);
  const order: TopicId[] = ["senior", "family", "logistics", "private"];
  const first = order.find((id) => found.includes(id));
  return first
    ? (topics.find((topic) => topic.id === first)?.label ?? item.category)
    : item.category;
}

const normalize = (text: string) =>
  text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, "");

export function filterMagazine(items: readonly MagazineItem[], topic: TopicId, query: string) {
  const q = normalize(query.trim());
  return items.filter((item) => {
    if (topic !== "all" && !topicsFor(item).includes(topic)) return false;
    if (!q) return true;
    return normalize(`${item.title} ${item.excerpt} ${item.category}`).includes(q);
  });
}

export function topicCounts(items: readonly MagazineItem[]) {
  const counts: Record<TopicId, number> = {
    all: items.length,
    family: 0,
    senior: 0,
    private: 0,
    logistics: 0,
  };
  for (const item of items) for (const id of topicsFor(item)) counts[id]++;
  return counts;
}

export function readMagazineState(params: URLSearchParams): { topic: TopicId; q: string } {
  const topic = params.get("topic");
  return {
    topic: topics.some((entry) => entry.id === topic) ? (topic as TopicId) : "all",
    q: (params.get("q") ?? "").trim().slice(0, 80),
  };
}
