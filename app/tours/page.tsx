/**
 * 本路由职责：提供 Journeys 页 Metadata，并把 URL 筛选参数交给页面编排层。
 * 不负责：产品展示、筛选算法、价格处理或结构化数据生成。
 */

import type { Metadata } from "next";

import { journeyCatalog } from "@/content/tours/catalog";
import { JourneyDiscoveryPage } from "@/features/tours/journey-discovery-page";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours & Tailor-Made Journeys | AVIORA",
  description:
    "Explore AVIORA's private China journeys by route, pace and travel style, with clear starting-price assumptions and China-based support.",
  path: "/tours",
});

const toursDescription =
  "Explore AVIORA's private China journeys by route, pace and travel style, with clear starting-price assumptions and China-based support.";

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const initialParams = await searchParams;
  const url = new URL("/tours", siteConfig.url).toString();
  return (
    <>
      <JsonLd
        id="journeys-collection-schema"
        data={webPageSchema({
          url,
          type: "CollectionPage",
          name: "AVIORA Private China Journeys",
          description: toursDescription,
          about: { "@id": `${siteConfig.url}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: journeyCatalog.map((journey, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: journey.title,
              url: new URL(journey.href, siteConfig.url).toString(),
            })),
          },
        })}
      />
      <JsonLd
        id="journeys-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journeys", path: "/tours" },
        ])}
      />
      <JourneyDiscoveryPage initialQueryString={toQueryString(initialParams)} />
    </>
  );
}

function toQueryString(params: Record<string, string | string[] | undefined>) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === "string") query.set(key, value);
    else value?.forEach((entry) => query.append(key, entry));
  });
  return query.toString();
}
