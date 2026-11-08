import { publishedJournalArticles } from "@/content/journal/published";
import { applyJournalEditorialUpgrade } from "@/content/journal/editorial-upgrades";
import { assertJournalGovernance, getJournalGovernance } from "@/content/journal/governance";
import { PUBLIC_JOURNAL_SLUGS } from "@/content/journal/public-manifest";
import type { JournalArticle, JournalCategory, JournalSummary, JournalTag } from "@/types/journal";

export const journalCategories: JournalCategory[] = [
  "Destinations",
  "Travel Guides",
  "Visa",
  "Food",
  "Culture",
  "Culture & History",
  "Modern China & Innovation",
  "Luxury Hotels",
  "Festivals",
  "Adventure",
  "Family Travel",
  "Family Travel & Heritage",
  "Photography",
  "Luxury Travel",
  "Train Travel",
  "Nature",
  "Wildlife & Nature",
  "History",
  "Shopping",
  "Industry News",
];

export const journalTags: JournalTag[] = [
  { slug: "beijing", label: "Beijing", type: "city" },
  { slug: "xian", label: "Xi'an", type: "city" },
  { slug: "chengdu", label: "Chengdu", type: "city" },
  { slug: "chongqing", label: "Chongqing", type: "city" },
  { slug: "zhangjiajie", label: "Zhangjiajie", type: "city" },
  { slug: "shanghai", label: "Shanghai", type: "city" },
  { slug: "first-time-china", label: "First-time China", type: "travel-style" },
  { slug: "family-travel", label: "Family Travel", type: "audience" },
  { slug: "12-day-china-family-tour", label: "12 day China family tour", type: "theme" },
  { slug: "private-china-tour-with-kids", label: "private China tour with kids", type: "theme" },
  {
    slug: "multigenerational-travel-china",
    label: "multigenerational travel China",
    type: "audience",
  },
  { slug: "senior-travel", label: "Easier-paced Travel", type: "audience" },
  { slug: "luxury-travel", label: "Luxury Travel", type: "travel-style" },
  { slug: "private-guides", label: "Private Guides", type: "theme" },
  { slug: "train-travel", label: "Train Travel", type: "experience" },
  { slug: "pandas", label: "Pandas", type: "experience" },
  {
    slug: "chengdu-panda-base-tour-with-kids",
    label: "Chengdu panda base tour with kids",
    type: "experience",
  },
  { slug: "ethical-panda-visit-china", label: "ethical panda visit China", type: "theme" },
  {
    slug: "family-panda-trip-chengdu-private-tour",
    label: "family panda trip Chengdu private tour",
    type: "theme",
  },
  { slug: "luxury-family-holiday", label: "luxury family holiday", type: "travel-style" },
  { slug: "great-wall-with-kids-guide", label: "Great Wall with kids guide", type: "experience" },
  {
    slug: "mutianyu-great-wall-family-cable-car",
    label: "Mutianyu Great Wall family cable car",
    type: "experience",
  },
  {
    slug: "great-wall-private-tour-for-seniors",
    label: "Great Wall private tour for seniors",
    type: "audience",
  },
  {
    slug: "luxury-multi-generational-travel-china",
    label: "luxury multi-generational travel China",
    type: "travel-style",
  },
  { slug: "multigenerational-china-tour", label: "Multigenerational China tour", type: "theme" },
  {
    slug: "traveling-to-china-with-elderly-parents",
    label: "traveling to China with elderly parents",
    type: "audience",
  },
  {
    slug: "senior-friendly-china-travel",
    label: "senior-friendly China travel",
    type: "audience",
  },
  {
    slug: "luxury-family-holiday-china",
    label: "luxury family holiday China",
    type: "travel-style",
  },
  { slug: "forbidden-city-family-tour", label: "Forbidden City family tour", type: "experience" },
  {
    slug: "terracotta-warriors-with-kids",
    label: "Terracotta Warriors with kids",
    type: "experience",
  },
  {
    slug: "china-history-tour-for-teenagers",
    label: "China history tour for teenagers",
    type: "audience",
  },
  { slug: "private-china-travel-kids", label: "private China travel kids", type: "theme" },
  {
    slug: "shanghai-luxury-travel-with-teenagers",
    label: "Shanghai luxury travel with teenagers",
    type: "audience",
  },
  {
    slug: "chengdu-modern-family-tour",
    label: "Chengdu modern family tour",
    type: "experience",
  },
  {
    slug: "high-speed-train-luxury-china",
    label: "high speed train luxury China",
    type: "experience",
  },
  {
    slug: "china-tech-experience-for-kids",
    label: "China tech experience for kids",
    type: "theme",
  },
  { slug: "food", label: "Food", type: "theme" },
  { slug: "spring", label: "Spring", type: "season" },
  { slug: "autumn", label: "Autumn", type: "season" },
  { slug: "travel-trade", label: "Travel Trade", type: "theme" },
  { slug: "muslim-friendly", label: "Muslim-friendly", type: "audience" },
  { slug: "malaysia", label: "Malaysia", type: "theme" },
  { slug: "singapore", label: "Singapore", type: "theme" },
];

const publicJournalSlugs = new Set<string>(PUBLIC_JOURNAL_SLUGS);

export const journalArticles: JournalArticle[] = publishedJournalArticles
  .filter((article) => publicJournalSlugs.has(article.slug))
  .map(applyJournalEditorialUpgrade)
  .map((article) => ({ ...article, governance: getJournalGovernance(article.slug) }));

if (journalArticles.length !== PUBLIC_JOURNAL_SLUGS.length) {
  throw new Error(
    `Journal manifest mismatch: expected ${PUBLIC_JOURNAL_SLUGS.length} public articles, found ${journalArticles.length}.`,
  );
}

assertJournalGovernance();

/** 首页只使用摘要，避免把每篇文章的完整正文发送到客户端。 */
export const journalSummaries: JournalSummary[] = journalArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  category: article.category,
  tags: article.tags,
  image: undefined,
  publishedAt: article.publishedAt,
  updatedAt: article.updatedAt,
  readingTime: article.readingTime,
  featured: article.featured,
  editorPick: article.editorPick,
}));

export function getArticleBySlug(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export function getArticleSlugs() {
  return journalArticles.map((article) => article.slug);
}

export function getFeaturedArticle() {
  return journalArticles.find((article) => article.featured) ?? journalArticles[0];
}

export function getEditorPicks() {
  return journalArticles.filter((article) => article.editorPick);
}

export function getArticlesByCategory(category: JournalCategory) {
  return journalArticles.filter((article) => article.category === category);
}
