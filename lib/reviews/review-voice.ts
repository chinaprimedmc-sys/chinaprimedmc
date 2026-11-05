/**
 * 本模块职责：为页面的具体位置挑选“就地信任”评论——酒店旁边放酒店评价、导游旁边放导游评价。
 * 输入：主题、数量、可选的页面标识（用于让不同页面选到不同评论）。
 * 输出：评论中与该主题直接相关的那一整段原文，加署名与地点。
 * 不负责：评论数据、评论页（见 lib/reviews/review-board.ts）与展示（components/trust）。
 * 关键规则：只引用一整段原文，不截断句子、不改写；只选英文评论（网站是英文站），其他语言留在评论页；
 * 同一页面的选择是确定的，不同页面通过种子错开，避免全站反复出现同一句话；不声称这是“关于这个行程”的评价。
 */

import { getPublicTravelerReviews, type TravelerReview } from "@/content/home/traveler-reviews";
import { topics, type TopicId } from "@/lib/reviews/review-board";

export type VoiceItem = {
  id: number;
  passage: string;
  author: string;
  location: string;
};

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;

function hash(seed: string) {
  let value = 0;
  for (const char of seed) value = (value * 31 + char.charCodeAt(0)) >>> 0;
  return value;
}

/** 以指代词开头、或提到“those/these problems”的段落脱离上文读不通，不用于就地引用。 */
const dependsOnContext =
  /^(those|these|that|this|it|they|he|she|there|so|but|and|also|however|still)\b|\b(those|these) (problems|issues|concerns|worries)\b/i;

/** 与主题相关、长度适中（25–75 词）的一整段，且读得通。 */
function passageFor(review: TravelerReview, topic: TopicId) {
  const pattern = topics.find((entry) => entry.id === topic)!.pattern;
  return review.paragraphs.find((paragraph) => {
    const count = words(paragraph);
    return (
      count >= 25 &&
      count <= 75 &&
      pattern.test(paragraph) &&
      !dependsOnContext.test(paragraph.trim())
    );
  });
}

export function pickVoices(topic: TopicId, count: number, seed = ""): VoiceItem[] {
  const candidates = getPublicTravelerReviews()
    .filter((review) => review.language === "en")
    .map((review) => ({ review, passage: passageFor(review, topic) }))
    .filter((entry): entry is { review: TravelerReview; passage: string } =>
      Boolean(entry.passage),
    );
  if (!candidates.length) return [];
  const start = hash(`${topic}:${seed}`) % candidates.length;
  // 间隔取样：同一页的几条评论分散在整个候选池里，不同页面也就不容易选到同一批。
  const stride = Math.max(1, Math.floor(candidates.length / (count + 1)));
  const picked: VoiceItem[] = [];
  const usedAuthors = new Set<string>();
  for (let offset = 0; offset < candidates.length && picked.length < count; offset++) {
    const index =
      offset < count
        ? (start + offset * stride) % candidates.length
        : (start + offset) % candidates.length;
    const { review, passage } = candidates[index];
    if (usedAuthors.has(review.author)) continue;
    usedAuthors.add(review.author);
    picked.push({ id: review.id, passage, author: review.author, location: review.location });
  }
  return picked;
}

export function reviewStats() {
  const reviews = getPublicTravelerReviews();
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / (reviews.length || 1);
  return { count: reviews.length, average: average.toFixed(1) };
}
