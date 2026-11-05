/**
 * 本模块职责：把文章摘要整理成杂志首页使用的轻量条目（仅在服务端运行）。
 * 输入：journalSummaries 与每篇文章的精选首图。
 * 输出：可序列化的 MagazineItem 数组，按发布日期从新到旧。
 * 不负责：筛选与界面（见 lib/journal/magazine.ts 与 features/journal/journal-magazine.tsx）。
 * 关键规则：只发送卡片需要的字段，不带正文。
 */

import { getArticlePhoto } from "@/content/journal/article-photos";
import { formatJournalTitle } from "@/content/journal/presentation";
import type { MagazineItem } from "@/lib/journal/magazine";
import type { JournalSummary } from "@/types/journal";

export function buildMagazineItems(summaries: JournalSummary[]): MagazineItem[] {
  return [...summaries]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title))
    .map((article) => {
      const photo = getArticlePhoto(article.slug);
      return {
        slug: article.slug,
        title: formatJournalTitle(article.title),
        excerpt: article.excerpt,
        category: article.category,
        tags: article.tags,
        readingTime: article.readingTime,
        publishedAt: article.publishedAt,
        image: { src: photo.src, alt: photo.alt, objectPosition: photo.objectPosition },
      };
    });
}
