/**
 * 本模块职责：把行程目录整理成 Journeys 页浏览器使用的轻量条目（仅在服务端运行）。
 * 输入：journeyCatalog、层级映射、标签数据、卡片文案与精选照片。
 * 输出：可序列化的 ExplorerItem 数组，按层级、再按天数排序。
 * 不负责：筛选与搜索（见 journey-explorer.ts、journey-search.ts）与界面。
 * 关键规则：不把整份目录送到浏览器，只送卡片与搜索需要的字段；价格只输出已核实的起价文案，其余为“按日期和人数报价”。
 */

import { pricingBlock, slowPacedSlug } from "@/content/tours/slow-paced-golden-triangle";
import {
  getJourneyCardDescription,
  getJourneyCardTitle,
  getJourneyHeadline,
} from "@/content/tours/card-copy";
import { journeyCatalogByPriority, type JourneyCatalogItem } from "@/content/tours/catalog";
import { journeyPhotos } from "@/content/tours/journeys-curation";
import { journeyTags } from "@/content/tours/journey-tags";
import { journeyTiers } from "@/content/tours/tiers";
import type { ExplorerItem, JourneyTier } from "@/lib/tours/journey-explorer";

const tierLabels: Record<JourneyTier, string> = {
  day: "Day Experience",
  signature: "Signature Journey",
  "tailor-made-example": "Tailor-Made example",
};
export function shortDuration(label: string) {
  const hours = label.match(/(\d+(?:[–-]\d+)?)\s*hours?/i);
  if (hours) return `${/about/i.test(label) ? "~" : ""}${hours[1]} hours`;
  const days = label.match(/^(\d+(?:[–-]\d+)?)\s*days?/i);
  return days ? `${days[1]} days` : label.split(" / ")[0];
}

/** 搜索用的隐藏关键词：真实亮点，加上欧美常见说法对应的标签词。 */
function keywordsFor(
  item: JourneyCatalogItem,
  tier: JourneyTier,
  tags = journeyTags[item.slug as keyof typeof journeyTags],
) {
  const extra: string[] = [];
  if (tier === "day") extra.push("day trip one day");
  if (tags.easierPace) extra.push("senior seniors older retired gentle relaxed");
  if (tags.who.includes("Family")) extra.push("kids children child");
  if (tags.who.includes("Couples")) extra.push("honeymoon romantic");
  if (tags.muslimFriendly) extra.push("halal muslim prayer");
  return extra.join(" ");
}

/** 目前只有旗舰 10 天行程有核实价；其余行程不在卡片上写金额。 */
function cardPrice(slug: string) {
  if (slug === slowPacedSlug) {
    return { priceLabel: pricingBlock.from, priceNote: `from, ${pricingBlock.unit}` };
  }
  return { priceLabel: "Priced for your dates", priceNote: "" };
}

export function buildExplorerItem(item: JourneyCatalogItem): ExplorerItem {
  const slug = item.slug as keyof typeof journeyTags;
  const tier: JourneyTier = journeyTiers[slug];
  const tags = journeyTags[slug];
  const photo = journeyPhotos[item.slug];
  const title = getJourneyHeadline(item) ?? getJourneyCardTitle(item);
  return {
    slug: item.slug,
    tier,
    tierLabel: tierLabels[tier],
    href: item.href,
    title,
    desc: `${getJourneyCardDescription(item)} ${item.highlights.join(" ")}`,
    summary: getJourneyCardDescription(item),
    duration: shortDuration(item.durationLabel),
    days: item.recommendedDaysMax,
    destinations: item.destinationFilters.join(" · "),
    places: `${item.routeLabel} ${item.destinationFilters.join(" ")}`,
    image:
      item.visualStatus === "pending"
        ? null
        : {
            src: photo?.src ?? item.image.src,
            alt: photo?.alt ?? item.image.alt,
            position: photo?.position ?? item.image.objectPosition,
          },
    who: tags.who,
    interest: tags.interest,
    easierPace: Boolean(tags.easierPace),
    muslimFriendly: Boolean(tags.muslimFriendly),
    highlights: item.highlights.slice(0, 3),
    ...cardPrice(item.slug),
    tags: [
      ...tags.who,
      ...tags.interest,
      tags.easierPace ? "easier pace" : "",
      tags.muslimFriendly ? "muslim friendly halal" : "",
    ].join(" "),
    keywords: keywordsFor(item, tier, tags),
  };
}

export function buildExplorerItems(): ExplorerItem[] {
  return journeyCatalogByPriority.map(buildExplorerItem);
}
