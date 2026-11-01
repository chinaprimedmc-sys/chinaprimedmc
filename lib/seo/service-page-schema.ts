/**
 * 本模块职责：为服务落地页生成结构化数据（WebPage/CollectionPage、面包屑、FAQPage、ItemList、Service）。
 * 输入：页面文案 content 与页面里展示的行程 journeys。
 * 输出：一组可直接交给 JsonLd 的对象，每个带稳定 id。
 * 不负责：页面渲染与 metadata。
 */
import { siteConfig } from "@/config/site";
import type { ServicePageContent } from "@/content/services";
import type { JourneyCatalogItem } from "@/content/tours/catalog";

import { breadcrumbSchema, webPageSchema } from "./schema";

export function servicePageSchemas(
  content: ServicePageContent,
  description: string,
  journeys: JourneyCatalogItem[],
) {
  const url = new URL(content.path, siteConfig.url).toString();
  const organization = { "@id": `${siteConfig.url}/#organization` };
  const hasList = journeys.length > 0;
  const placeLinks = (content.places ?? [])
    .flatMap((group) => group.items)
    .filter((item): item is typeof item & { href: string } => Boolean(item.href));

  const schemas: Array<{ id: string; data: Record<string, unknown> }> = [
    {
      id: `${content.slug}-webpage-schema`,
      data: webPageSchema({
        url,
        name: content.metaTitle,
        description,
        type: hasList || placeLinks.length ? "CollectionPage" : "WebPage",
        about: organization,
        ...(!hasList && placeLinks.length
          ? {
              mainEntity: {
                "@type": "ItemList",
                itemListElement: placeLinks.map((place, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  url: new URL(place.href, siteConfig.url).toString(),
                  name: place.title,
                })),
              },
            }
          : {}),
        ...(hasList
          ? {
              mainEntity: {
                "@type": "ItemList",
                itemListElement: journeys.map((journey, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  url: new URL(journey.href, siteConfig.url).toString(),
                  name: journey.title,
                })),
              },
            }
          : {}),
      }),
    },
    {
      id: `${content.slug}-breadcrumb-schema`,
      data: breadcrumbSchema([
        { name: "Home", path: "/" },
        ...(content.breadcrumbParents ?? []),
        { name: content.breadcrumbName, path: content.path },
      ]),
    },
    {
      id: `${content.slug}-faq-schema`,
      data: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    },
  ];

  if (content.service) {
    schemas.push({
      id: `${content.slug}-service-schema`,
      data: {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        name: content.service.name,
        serviceType: content.service.serviceType,
        description,
        url,
        provider: organization,
        areaServed: content.service.areaServed.map((name) => ({
          "@type": name === "China" ? "Country" : "City",
          name,
        })),
        audience: { "@type": "Audience", audienceType: "International travelers" },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: url,
          availableLanguage: [...siteConfig.guideLanguages],
        },
      },
    });
  }

  return schemas;
}
