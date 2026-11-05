/**
 * 本模块职责：评论页的筛选、排序、主题统计与 URL 状态。
 * 输入：评价列表与 URL 查询参数。
 * 输出：筛选后的评价、评分分布、语言与“提到最多”的主题计数。
 * 不负责：界面（见 components/reviews/reviews-board.tsx）与评价数据本身。
 * 关键规则：不显示评价日期（数据里没有逐条记录的日期，全部相同的日期会误导）；
 * 不生成“已验证”标记或结构化数据，因为数据里没有逐条的来源凭证；URL 是唯一状态来源。
 */

import type { TravelerReview, TravelerReviewLanguage } from "@/content/home/traveler-reviews";

export type RatingBucket = "5" | "4.8" | "4.6";
export type ReviewSort = "top" | "high" | "low" | "long";
export type TopicId = "hotels" | "guides" | "transport" | "pace" | "value";

export type BoardState = {
  rating: RatingBucket | null;
  lang: TravelerReviewLanguage | null;
  topic: TopicId | null;
  q: string;
  sort: ReviewSort;
  /** 从页面里的引用点进来时，只显示这一条评论的完整原文。 */
  review: number | null;
};

export const emptyBoardState: BoardState = {
  rating: null,
  lang: null,
  topic: null,
  q: "",
  sort: "top",
  review: null,
};

export const ratingBuckets: ReadonlyArray<{
  id: RatingBucket;
  label: string;
  test: (rating: number) => boolean;
}> = [
  { id: "5", label: "5.0", test: (rating) => rating >= 5 },
  { id: "4.8", label: "4.8 – 4.9", test: (rating) => rating >= 4.8 && rating < 5 },
  { id: "4.6", label: "4.6 – 4.7", test: (rating) => rating >= 4.6 && rating < 4.8 },
];

export const languageNames: Record<TravelerReviewLanguage, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
};

/** 主题词覆盖五种语言，只用于“提到”筛选，不做任何语义承诺。 */
export const topics: ReadonlyArray<{ id: TopicId; label: string; pattern: RegExp }> = [
  {
    id: "hotels",
    label: "Hotels",
    pattern: /hotel|hôtel|alojamiento|unterkunft|albergo|habitaci|zimmer|chambre|camera/i,
  },
  { id: "guides", label: "Guides", pattern: /\bguide|guía|guias|führer|reiseleit|guida\b/i },
  {
    id: "transport",
    label: "Private transport",
    pattern:
      /driver|vehicle|chauffeur|conductor|vehículo|fahrer|fahrzeug|voiture|autista|transfer|traslado|transport/i,
  },
  {
    id: "pace",
    label: "Pace & comfort",
    pattern: /pace|rushed|unhurried|ritmo|prisa|tempo|rythme|hetze|stress|fretta|relax/i,
  },
  {
    id: "value",
    label: "Value",
    pattern: /price|cost|expens|worth|value|precio|merece|preis|prix|prezzo/i,
  },
];

const fullText = (review: TravelerReview) => review.paragraphs.join(" ");

const normalize = (text: string) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function mentions(review: TravelerReview, topic: TopicId) {
  return topics.find((entry) => entry.id === topic)!.pattern.test(fullText(review));
}

export function bucketOf(rating: number): RatingBucket {
  return ratingBuckets.find((bucket) => bucket.test(rating))?.id ?? "4.6";
}

export function filterReviews(reviews: readonly TravelerReview[], state: BoardState) {
  const query = normalize(state.q.trim());
  if (state.review !== null) return reviews.filter((review) => review.id === state.review);
  const result = reviews.filter((review) => {
    if (state.rating && bucketOf(review.rating) !== state.rating) return false;
    if (state.lang && review.language !== state.lang) return false;
    if (state.topic && !mentions(review, state.topic)) return false;
    if (query) {
      const haystack = normalize(`${fullText(review)} ${review.author} ${review.location}`);
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
  if (state.sort === "high") return [...result].sort((a, b) => b.rating - a.rating);
  if (state.sort === "low") return [...result].sort((a, b) => a.rating - b.rating);
  if (state.sort === "long")
    return [...result].sort((a, b) => fullText(b).length - fullText(a).length);
  return result;
}

export function summarize(reviews: readonly TravelerReview[]) {
  const total = reviews.length;
  const average = total ? reviews.reduce((sum, review) => sum + review.rating, 0) / total : 0;
  const distribution = ratingBuckets.map((bucket) => ({
    ...bucket,
    count: reviews.filter((review) => bucket.test(review.rating)).length,
  }));
  const languages = (Object.keys(languageNames) as TravelerReviewLanguage[])
    .map((id) => ({
      id,
      label: languageNames[id],
      count: reviews.filter((review) => review.language === id).length,
    }))
    .filter((entry) => entry.count > 0)
    .sort((a, b) => b.count - a.count);
  const mentioned = topics
    .map((topic) => ({
      id: topic.id,
      label: topic.label,
      count: reviews.filter((review) => mentions(review, topic.id)).length,
    }))
    .sort((a, b) => b.count - a.count);
  return { total, average, distribution, languages, mentioned };
}

const sortIds: readonly ReviewSort[] = ["top", "high", "low", "long"];

export function readBoardState(params: URLSearchParams): BoardState {
  const rating = params.get("rating");
  const lang = params.get("lang");
  const topic = params.get("mentions");
  const sort = params.get("sort");
  return {
    rating: ratingBuckets.some((bucket) => bucket.id === rating) ? (rating as RatingBucket) : null,
    lang: lang && lang in languageNames ? (lang as TravelerReviewLanguage) : null,
    topic: topics.some((entry) => entry.id === topic) ? (topic as TopicId) : null,
    q: (params.get("q") ?? "").trim().slice(0, 80),
    sort: sortIds.includes(sort as ReviewSort) ? (sort as ReviewSort) : "top",
    review: /^\d{1,4}$/.test(params.get("review") ?? "") ? Number(params.get("review")) : null,
  };
}

export function writeBoardState(state: BoardState) {
  const params = new URLSearchParams();
  if (state.rating) params.set("rating", state.rating);
  if (state.lang) params.set("lang", state.lang);
  if (state.topic) params.set("mentions", state.topic);
  if (state.q.trim()) params.set("q", state.q.trim());
  if (state.sort !== "top") params.set("sort", state.sort);
  if (state.review !== null) params.set("review", String(state.review));
  return params;
}

export function activeBoardFilters(state: BoardState) {
  return (
    (state.rating ? 1 : 0) + (state.lang ? 1 : 0) + (state.topic ? 1 : 0) + (state.q.trim() ? 1 : 0)
  );
}
