import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem, journeyCatalog } from "@/content/tours/catalog";
import { getJourneyHeadline, getJourneySeoTitle } from "@/content/tours/card-copy";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSchema } from "@/components/seo/faq-schema";
import { ItineraryProductSchema } from "@/components/seo/itinerary-product-schema";
import {
  createFrameworkTourDetailModel,
  createTourDetailModel,
} from "@/features/tours/detail/tour-detail-model";
import { TourDetailLanding } from "@/features/tours/detail/tour-detail-landing";
import { bookingPolicyFaqs, frameworkTourFaqs } from "@/features/tours/detail/tour-detail-model";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { getJourneyReadingArticles } from "@/lib/content/journey-journal-links";
import { readJourneyConfiguration } from "@/lib/tours/journey-price";

type TourPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  assertPublicRouteSlugs(
    "tours",
    journeyCatalog.map(({ slug }) => slug),
  );
  return journeyCatalog.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const staticTour = getTourBySlug(slug);

  if (staticTour) {
    const seoItem = getJourneyCatalogItem(staticTour.slug);
    return createMetadata({
      title: seoItem ? getJourneySeoTitle(seoItem) : staticTour.seo.title,
      description: staticTour.seo.description,
      path: `/tours/${staticTour.slug}`,
      image: staticTour.visualStatus === "pending" ? undefined : staticTour.hero.image.src,
      keywords: staticTour.seo.keywords,
      titleYear: Number((staticTour.updatedAt ?? staticTour.publishedAt)?.slice(0, 4)),
      callToAction: "View the itinerary and request a tailored proposal",
    });
  }

  const journey = getJourneyCatalogItem(slug);

  if (!journey) {
    notFound();
  }

  return createMetadata({
    title: journey.title,
    description: journey.summary,
    path: `/tours/${journey.slug}`,
    image: journey.image.src,
    titleYear: new Date().getUTCFullYear(),
    callToAction: "Review the itinerary and request a tailored proposal",
    keywords: [
      `${journey.routeLabel} private tour`,
      `${journey.durationLabel} China itinerary`,
      "private China tour",
      ...journey.destinations.map((destination) => `${destination.label} private tour`),
    ],
  });
}

export default async function TourPage({ params, searchParams }: TourPageProps) {
  const { slug } = await params;
  const search = await searchParams;
  const initialSelection = readJourneyConfiguration(
    new URLSearchParams(
      Object.entries(search).filter(
        (entry): entry is [string, string] => typeof entry[1] === "string",
      ),
    ),
  );
  const staticTour = getTourBySlug(slug);

  if (staticTour) {
    const catalogItem = getJourneyCatalogItem(staticTour.slug);
    const isFixedFourCityRoute = slug === "beijing-xian-chengdu-shanghai-private-11-day-tour";
    const selectedPrice = isFixedFourCityRoute
      ? undefined
      : initialSelection.guests === "4"
        ? catalogItem?.pricing.fromUsd
        : undefined;
    const reading = getJourneyReadingArticles(staticTour.slug);
    const tourUrl = new URL(`/tours/${staticTour.slug}`, siteConfig.url).toString();
    const isChinaConsidered = staticTour.slug === "china-at-an-easier-pace-12-day-private-tour";
    const isChinaFamily = staticTour.slug === "china-family-tour-with-pandas-12-day-private-tour";
    const isYunnan = staticTour.slug === "luxury-yunnan-private-tour";
    const isPrivateShanghaiDayTour = staticTour.slug === "private-shanghai-day-tour-guide-driver";
    const isPrivateXianTerracottaDayTour =
      staticTour.slug === "private-xian-terracotta-warriors-day-tour";
    const isPrivateChengduPandaDayTour =
      staticTour.slug === "private-chengdu-panda-day-tour-early-morning";
    const isGuilinLiRiverDayTour =
      staticTour.slug === "guilin-yangshuo-li-river-cruise-private-day-tour";
    const isMuslimFriendly =
      staticTour.slug === "muslim-friendly-china-tour-great-wall-desert-stars";
    const tourProperties = isMuslimFriendly
      ? [
          ["Duration", "13 days / 12 nights"],
          ["Route", "Beijing, Xi'an, Yinchuan, Zhongwei and Shanghai"],
          [
            "Accommodation standard",
            "Premium city hotels plus best-available Ningxia and desert accommodation",
          ],
          ["Pricing", "Priced individually for your dates, group size, hotel standard and pace"],
          [
            "Muslim-friendly service",
            "AVIORA Muslim Journey Standard: dietary profile, meal verification, prayer-aware timing and China-based backup support",
          ],
          [
            "Signature experiences",
            "Great Wall private halal picnic, Xi'an Silk Road and halal kitchen chapter, Ningxia Hui table, desert sunset dinner and stargazing",
          ],
          [
            "Transport",
            "Private vehicles, first-class Beijing–Xi'an rail and date-specific domestic connections",
          ],
          ["Shopping policy", "No compulsory shopping stops"],
          ["International flights", "Not included"],
        ]
      : isChinaFamily
        ? [
            ["Duration", "12 days / 11 nights"],
            ["Accommodation standard", "Premium five-star family hotels"],
            ["Accommodation duration", "11 nights"],
            ["Planning basis", "Two adults and two children aged 6–11 sharing two rooms"],
            ["Family pacing", "Age-aware private pacing with protected family downtime"],
            ["Age bands", "6–9, 10–13 and 14–17"],
            ["Beijing to Xi'an", "First-class high-speed rail"],
            ["Xi'an to Chengdu", "First-class high-speed rail"],
            ["Chengdu to Shanghai", "Nonstop economy-class domestic flight"],
            [
              "Signature experiences",
              "Private tai chi, Junior Curator Mission, Great Wall family challenge, clay-warrior studio, giant pandas and private Shanghai kitchen",
            ],
            ["Touring service", "Private family-ready multilingual guides and private vehicles"],
            ["Shopping policy", "No compulsory shopping stops"],
            ["International flights", "Not included"],
          ]
        : isYunnan
          ? [
              ["Duration", "10 days / 9 nights"],
              ["Route", "Dali, Shaxi, Lijiang and Shangri-La"],
              ["Accommodation standard", "Luxury boutique, heritage and highland hotels"],
              ["Accommodation duration", "9 nights"],
              ["Planning basis", "Four guests sharing two rooms outside peak periods"],
              ["Pace", "Balanced, private and altitude-aware"],
              ["Altitude progression", "Dali about 1,970 m to Shangri-La about 3,200 m"],
              ["Intercity transport", "Dedicated premium private vehicle"],
              [
                "Signature experiences",
                "Bai three-course tea, tie-dye artisan session, Tea Horse Road salon, Dongba culture, Tiger Leaping Gorge and Songzanlin Monastery",
              ],
              ["Shopping policy", "No compulsory shopping stops"],
              ["International and domestic flights", "Not included"],
            ]
          : isChinaConsidered
            ? [
                ["Duration", "12 days / 11 nights"],
                ["Accommodation standard", "Premium five-star hotels"],
                ["Accommodation duration", "11 nights"],
                ["Planning basis", "Four guests sharing two rooms outside peak periods"],
                ["Pace", "Easy to moderate, with protected recovery time"],
                ["Hotel changes", "Two"],
                ["Beijing to Xi'an", "First-class high-speed rail"],
                ["Xi'an to Shanghai", "Nonstop economy-class domestic flight"],
                ["Touring service", "Private multilingual guides and private vehicles"],
                ["Shopping policy", "No compulsory shopping stops"],
                ["International flights", "Not included"],
              ]
            : [
                ["Accommodation standard", "Selected four- and five-star hotels"],
                ["Tour format", "Private, tailor-made journey"],
              ];
    return (
      <>
        <ItineraryProductSchema
          id={`${staticTour.slug}-tour-schema`}
          itinerary={{
            id: `${tourUrl}#tour`,
            identifier: staticTour.slug,
            name: (catalogItem && getJourneyHeadline(catalogItem)) || staticTour.title,
            alternateName: staticTour.title,
            description: staticTour.seo.description,
            url: tourUrl,
            mainEntityOfPage: `${tourUrl}#webpage`,
            category: catalogItem?.commercialRoleLabel ?? "Premium private China tour",
            duration: `P${staticTour.itinerary.length}D`,
            brandName: siteConfig.name,
            audienceType: isMuslimFriendly
              ? "Muslim families, Muslim couples, multigenerational groups and private travelers seeking verified dining and prayer-aware China travel"
              : isChinaFamily
                ? "Families with children aged 6 to 17, first-time China visitors and multigenerational families"
                : isChinaConsidered
                  ? "Couples, mature travelers, families planning for parents and first-time China visitors"
                  : isYunnan
                    ? "Couples, friends, private groups and repeat China visitors interested in culture, tea, landscapes and boutique stays"
                    : undefined,
            image:
              staticTour.visualStatus === "pending"
                ? undefined
                : Array.from(
                    new Set([
                      staticTour.hero.image.src,
                      ...staticTour.itinerary.map((day) => day.image.src),
                      ...staticTour.gallery.map((image) => image.src),
                    ]),
                  ).map((image) => new URL(image, siteConfig.url).toString()),
            itinerary: staticTour.itinerary.map((day) => ({
              position: day.day,
              name: `Day ${day.day}: ${day.title}`,
              description: day.summary,
              destination: {
                name: day.destination,
                latitude: day.coordinates?.latitude,
                longitude: day.coordinates?.longitude,
              },
              activities: day.activities.map((activity) => ({
                name: activity.title,
                description: activity.description,
              })),
            })),
            touristType: catalogItem?.bestForFilters ?? staticTour.styles,
            offer:
              catalogItem && selectedPrice !== undefined
                ? {
                    price: selectedPrice,
                    priceCurrency: "USD",
                    url: tourUrl,
                    availability: "https://schema.org/LimitedAvailability",
                    category: "Private premium China tour",
                    description: catalogItem.pricing.basis,
                    unitText:
                      isPrivateShanghaiDayTour ||
                      isPrivateXianTerracottaDayTour ||
                      isPrivateChengduPandaDayTour ||
                      isGuilinLiRiverDayTour
                        ? "per private group of four guests"
                        : "per person",
                  }
                : undefined,
            additionalProperties: [
              ...(catalogItem
                ? [
                    ["Journey collection", catalogItem.commercialRoleLabel],
                    ["Best for", catalogItem.bestForSummary],
                    ["Walking level", catalogItem.discovery.walkingLevel],
                  ]
                : []),
              ...tourProperties,
            ].map(([name, value]) => ({
              name,
              value,
            })),
            subjectOf: reading.map((article) => ({
              name: article.title,
              url: new URL(article.href, siteConfig.url).toString(),
            })),
          }}
        />
        <JsonLd
          id={`${staticTour.slug}-webpage-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${tourUrl}#webpage`,
            url: tourUrl,
            name: catalogItem ? getJourneySeoTitle(catalogItem) : staticTour.seo.title,
            description: staticTour.seo.description,
            inLanguage: "en-US",
            datePublished: staticTour.publishedAt,
            dateModified: staticTour.updatedAt,
            publisher: { "@id": `${siteConfig.url}/#organization` },
            reviewedBy: { "@id": `${siteConfig.url}/#organization` },
            mainEntity: { "@id": `${tourUrl}#tour` },
            isPartOf: { "@id": `${siteConfig.url}/#website` },
          }}
        />
        <FAQSchema
          id={`${staticTour.slug}-faq-schema`}
          items={[...staticTour.faqs, ...bookingPolicyFaqs]}
          url={tourUrl}
        />
        <BreadcrumbSchema
          id={`${staticTour.slug}-breadcrumb-schema`}
          items={[
            { name: "Home", item: "/" },
            { name: "Journeys", item: "/tours" },
            {
              name: (catalogItem && getJourneyHeadline(catalogItem)) || staticTour.title,
              item: `/tours/${staticTour.slug}`,
            },
          ]}
        />
        <TourDetailLanding
          model={createTourDetailModel(staticTour)}
          initialSelection={initialSelection}
        />
      </>
    );
  }

  const journey = getJourneyCatalogItem(slug);

  if (!journey) {
    notFound();
  }

  const reading = getJourneyReadingArticles(journey.slug);

  return (
    <>
      <ItineraryProductSchema
        id={`${journey.slug}-tour-schema`}
        itinerary={{
          name: journey.title,
          description: journey.summary,
          url: new URL(`/tours/${journey.slug}`, siteConfig.url).toString(),
          image: new URL(journey.image.src, siteConfig.url).toString(),
          touristType: journey.bestForFilters,
          duration: `P${journey.recommendedDaysMin}D`,
          itinerary: journey.destinations.map((destination, index) => ({
            position: index + 1,
            name: destination.label,
            url: new URL(destination.href, siteConfig.url).toString(),
          })),
          areaServed: journey.destinations.map((destination) => destination.label),
          offer:
            initialSelection.guests === "4" && journey.pricing.fromUsd !== undefined
              ? {
                  price: journey.pricing.fromUsd,
                  priceCurrency: "USD",
                  url: new URL(`/tours/${journey.slug}`, siteConfig.url).toString(),
                  description: journey.pricing.basis,
                  unitText: "per person",
                }
              : undefined,
          additionalProperties: [
            {
              name: "Accommodation standard",
              value: "Selected four- and five-star hotels",
            },
            {
              name: "Tour format",
              value: "Private, tailor-made journey",
            },
          ],
          subjectOf: reading.map((article) => ({
            name: article.title,
            url: new URL(article.href, siteConfig.url).toString(),
          })),
        }}
      />
      <FAQSchema
        id={`${journey.slug}-faq-schema`}
        items={frameworkTourFaqs}
        url={new URL(`/tours/${journey.slug}`, siteConfig.url).toString()}
      />
      <BreadcrumbSchema
        id={`${journey.slug}-breadcrumb-schema`}
        items={[
          { name: "Home", item: "/" },
          { name: "Journeys", item: "/tours" },
          { name: journey.title, item: `/tours/${journey.slug}` },
        ]}
      />
      <TourDetailLanding
        model={createFrameworkTourDetailModel(journey)}
        initialSelection={initialSelection}
      />
    </>
  );
}
