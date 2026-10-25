/**
 * 本模块职责：组装 Journeys 路由的导航、权威结构化数据、页面正文与全站页尾。
 * 输入：URL 查询参数。
 * 输出：服务端可索引的完整 Journeys 页面。
 * 不负责：客户端筛选状态、卡片视觉或产品价格计算。
 * 关键规则：JSON-LD 与可见目录必须共享同一份公开行程数据。
 */

import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { JourneysPage } from "@/components/tours/journeys-page";
import { siteConfig } from "@/config/site";
import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyCardDescription, getJourneyCardTitle } from "@/content/tours/card-copy";
import { journeyFaqs, journeysDefinition } from "@/content/tours/journeys-page-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";

export async function JourneyDiscoveryPage({
  initialQueryString = "",
}: {
  initialQueryString?: string;
}) {
  const catalog = journeyCatalog;
  const path = "/tours";
  const pageUrl = new URL(path, siteConfig.url).toString();
  const name = "Private China Tours & Tailor-Made Journeys | AVIORA";

  const services = [
    {
      id: "multi-city-private-journeys",
      name: "Tailor-made multi-city private journeys in China",
      serviceType: "Privately operated multi-city China journeys",
      description:
        "Private China itineraries connecting several destinations with accommodation, guides, vehicles, domestic transport and local coordination.",
      url: `${pageUrl}?type=multi-city#journey-catalog`,
    },
    {
      id: "private-guide-driver-services",
      name: "Private guide and driver services in China",
      serviceType: "Private guide, vehicle and driver arrangements in China",
      description:
        "Flexible local guiding, private vehicles and driver services around flights, hotels and travel plans already arranged by the traveler.",
      url: new URL("/start-planning?source=journeys-local-support", siteConfig.url).toString(),
    },
  ] as const;

  return (
    <PageContainer tone="white">
      {/* 结构化数据只维护一份产品目录，避免机器读取到相互竞争的分类版本。 */}
      <JsonLd
        id="tours-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${pageUrl}#collection`,
              name,
              description: journeysDefinition,
              url: pageUrl,
              inLanguage: "en",
              about: { "@id": `${siteConfig.url}/#organization` },
              mainEntity: { "@id": `${pageUrl}#journeys` },
              hasPart: [
                ...services.map((service) => ({
                  "@id": `${pageUrl}#${service.id}`,
                })),
                { "@id": `${pageUrl}#questions` },
              ],
            },
            ...services.map((service) => ({
              "@type": "Service",
              "@id": `${pageUrl}#${service.id}`,
              name: service.name,
              serviceType: service.serviceType,
              description: service.description,
              url: service.url,
              areaServed: { "@type": "Country", name: "China" },
              audience: { "@type": "Audience", audienceType: "International travelers" },
              provider: { "@id": `${siteConfig.url}/#organization` },
            })),
            {
              "@type": "ItemList",
              "@id": `${pageUrl}#journeys`,
              name: "Private China journeys",
              numberOfItems: catalog.length,
              itemListElement: catalog.map((tour, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
                item: {
                  "@type": "TouristTrip",
                  name: getJourneyCardTitle(tour),
                  description: getJourneyCardDescription(tour),
                  touristType: tour.bestForSummary,
                  itinerary: tour.routeLabel,
                  url: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
                  provider: { "@id": `${siteConfig.url}/#organization` },
                  offers:
                    tour.pricing.fromUsd === undefined
                      ? undefined
                      : {
                          "@type": "Offer",
                          priceCurrency: "USD",
                          price: tour.pricing.fromUsd,
                          url: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
                          description: tour.pricing.basis,
                          seller: { "@id": `${siteConfig.url}/#organization` },
                        },
                },
              })),
            },
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#questions`,
              name: "Private China tour questions",
              inLanguage: "en",
              mainEntity: journeyFaqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ],
        }}
      />
      <JsonLd
        id="tours-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journeys", path: "/tours" },
        ])}
      />

      <SiteNavigation />

      <JourneysPage items={catalog} initialQueryString={initialQueryString} />

      <SiteFooter tone="white" />
    </PageContainer>
  );
}
