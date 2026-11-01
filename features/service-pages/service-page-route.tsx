/**
 * 本模块职责：把一个服务页的内容变成 Next 页面（metadata + 结构化数据 + 版式）。
 * 输入：服务页 slug 与要展示的行程 slug 列表。
 * 输出：{ metadata, Page }，由各个 app/<route>/page.tsx 直接导出。
 * 不负责：文案本身，见 content/services。
 */
import type { Metadata } from "next";

import { getJourneyCatalogItem, type JourneyCatalogItem } from "@/content/tours/catalog";
import { servicePages, type ServicePageContent, type ServicePageSlug } from "@/content/services";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { servicePageSchemas } from "@/lib/seo/service-page-schema";

import { ServicePage } from "./service-page";

export function createServicePageRoute(
  slug: ServicePageSlug,
  journeySlugs: readonly string[] = [],
  image?: string,
) {
  return createContentPageRoute(servicePages[slug], journeySlugs, image);
}

export function createContentPageRoute(
  content: ServicePageContent,
  journeySlugs: readonly string[] = [],
  image?: string,
) {
  const journeys = journeySlugs
    .map((journeySlug) => getJourneyCatalogItem(journeySlug))
    .filter((journey): journey is JourneyCatalogItem => Boolean(journey));

  const metadata: Metadata = createMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: content.path,
    image: image ?? content.hero.image,
    imageAlt: content.hero.alt,
  });

  function Page() {
    return (
      <>
        {servicePageSchemas(content, content.metaDescription, journeys).map((schema) => (
          <JsonLd key={schema.id} id={schema.id} data={schema.data} />
        ))}
        <ServicePage content={content} journeys={journeys} />
      </>
    );
  }

  return { metadata, Page };
}
