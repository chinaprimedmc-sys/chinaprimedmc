import { publishedJournalArticles } from "@/content/journal/published";
import type { JournalArticle, JournalCategory, JournalTag } from "@/types/journal";

export const journalCategories: JournalCategory[] = [
  "Destinations",
  "Travel Guides",
  "Visa",
  "Food",
  "Culture",
  "Luxury Hotels",
  "Festivals",
  "Adventure",
  "Family Travel",
  "Photography",
  "Luxury Travel",
  "Train Travel",
  "Nature",
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
  { slug: "luxury-travel", label: "Luxury Travel", type: "travel-style" },
  { slug: "private-guides", label: "Private Guides", type: "theme" },
  { slug: "train-travel", label: "Train Travel", type: "experience" },
  { slug: "pandas", label: "Pandas", type: "experience" },
  { slug: "food", label: "Food", type: "theme" },
  { slug: "spring", label: "Spring", type: "season" },
  { slug: "autumn", label: "Autumn", type: "season" },
  { slug: "travel-trade", label: "Travel Trade", type: "theme" },
  { slug: "muslim-friendly", label: "Muslim-friendly", type: "audience" },
  { slug: "malaysia", label: "Malaysia", type: "theme" },
  { slug: "singapore", label: "Singapore", type: "theme" },
];

export const journalArticles: JournalArticle[] = publishedJournalArticles;

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
