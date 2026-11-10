/** Pure card projection: safe in client components; never imports the complete catalog. */

import { pricingBlock, slowPacedSlug } from "@/content/tours/slow-paced-golden-triangle";
import { getJourneyClassification } from "@/content/tours/classification";
import {
  getJourneyCardDescription,
  getJourneyCardTitle,
  getJourneyHeadline,
} from "@/content/tours/card-copy";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneyCardPhoto } from "@/lib/tours/journey-card-media";
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

/** Preserve the existing flagship publication exception; other catalog prices stay private. */
function cardPrice(item: JourneyCatalogItem) {
  if (item.slug === slowPacedSlug) {
    return {
      priceLabel: `From ${pricingBlock.from} ${pricingBlock.unit}`,
      priceNote: item.pricing.cardBasis,
    };
  }
  return {
    priceLabel: "Priced for your dates",
    priceNote:
      journeyTiers[item.slug as keyof typeof journeyTiers] === "day"
        ? "Private-party quote · pickup and route confirmed"
        : "Quoted for your party and room choices",
  };
}

export function buildExplorerItem(item: JourneyCatalogItem): ExplorerItem {
  const slug = item.slug as keyof typeof journeyTags;
  const tier: JourneyTier = journeyTiers[slug];
  const classification = getJourneyClassification(slug);
  const tags = journeyTags[slug];
  const photo = getJourneyCardPhoto(item.slug);
  const title = getJourneyHeadline(item) ?? getJourneyCardTitle(item);
  return {
    slug: item.slug,
    tier,
    tierLabel: tierLabels[tier],
    category: classification.category,
    categoryLabel: classification.categoryLabel,
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
    ...cardPrice(item),
    tags: [
      classification.categoryLabel,
      ...tags.who,
      ...tags.interest,
      tags.easierPace ? "easier pace" : "",
      tags.muslimFriendly ? "muslim friendly halal" : "",
    ].join(" "),
    keywords: keywordsFor(item, tier, tags),
  };
}
