import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem, journeyCatalog } from "@/content/tours/catalog";
import { TourFrameworkTemplate } from "@/features/tours/tour-framework-template";
import { bookingPolicyFaqs, frameworkTourFaqs } from "@/features/tours/detail/tour-detail-model";
import { TourTemplate } from "@/features/tours/tour-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getJourneyReadingArticles } from "@/lib/content/journey-journal-links";

type TourPageProps = {
  params: Promise<{ slug: string }>;
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
    return createMetadata({
      title: staticTour.seo.title,
      description: staticTour.seo.description,
      path: `/tours/${staticTour.slug}`,
      image: staticTour.visualStatus === "pending" ? undefined : staticTour.hero.image.src,
      keywords: staticTour.seo.keywords,
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
    keywords: [
      `${journey.routeLabel} private tour`,
      `${journey.durationLabel} China itinerary`,
      "private China tour",
      ...journey.destinations.map((destination) => `${destination.label} private tour`),
    ],
  });
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const staticTour = getTourBySlug(slug);

  if (staticTour) {
    const catalogItem = getJourneyCatalogItem(staticTour.slug);
    const reading = getJourneyReadingArticles(staticTour.slug);
    const tourUrl = new URL(`/tours/${staticTour.slug}`, siteConfig.url).toString();
    const isChinaConsidered = staticTour.slug === "china-at-an-easier-pace-12-day-private-tour";
    const isChinaFamily = staticTour.slug === "china-family-tour-with-pandas-12-day-private-tour";
    const isYunnan = staticTour.slug === "luxury-yunnan-private-tour";
    const isMuslimFriendly =
      staticTour.slug === "muslim-friendly-china-tour-great-wall-desert-stars";
    const isQingchengWellness =
      staticTour.slug === "qingcheng-mountain-private-wellness-retreat-10-day";
    const isMutianyuPrivateDayTour = staticTour.slug === "private-mutianyu-great-wall-day-tour";
    const isPrivateShanghaiDayTour = staticTour.slug === "private-shanghai-day-tour-guide-driver";
    const tourProperties = isPrivateShanghaiDayTour
      ? [
          ["Duration", "One private day, about eight hours door to door"],
          [
            "Route",
            "Central Shanghai hotel, Yu Garden and Old City, the Bund, Huangpu ferry, former French Concession and hotel return",
          ],
          ["Overnight accommodation", "Not included or required"],
          [
            "Published price basis",
            "US$672 per private group of four, equivalent to US$168 per guest; two guests from US$558 total",
          ],
          [
            "Included private service",
            "Central Shanghai hotel pickup and return, private vehicle, English-speaking guide, Yu Garden admission and one ordinary Huangpu public-ferry crossing",
          ],
          [
            "Optional upgrades",
            "Shanghai Tower from US$35 per guest, curated Shanghainese lunch from US$38 per guest, snack making from US$88 per guest and a night-cruise service extension from US$328 per group of up to four",
          ],
          ["Shopping policy", "No compulsory shopping stops"],
          [
            "Operating boundary",
            "Yu Garden, ferries, observation decks and cruises remain subject to live operating, reservation, weather, capacity and safety conditions",
          ],
        ]
      : isMutianyuPrivateDayTour
        ? [
            ["Duration", "One private day, usually 7–9 hours door to door"],
            ["Route", "Beijing hotel, Mutianyu Great Wall and Beijing return"],
            ["Overnight accommodation", "Not included or required"],
            ["Published price basis", "Four guests traveling privately; US$792 group total from"],
            [
              "Included private service",
              "Beijing hotel pickup and return in main urban districts, private vehicle, English-speaking guide, Mutianyu admission and scenic-area shuttle",
            ],
            [
              "Optional mountain transport",
              "Round-trip cable car or chairlift-up and toboggan-down from approximately US$22 per person; one-way option from approximately US$15 per person, subject to live operator rates and operation",
            ],
            ["Shopping policy", "No compulsory shopping stops"],
            [
              "Operating boundary",
              "Historic steps and slopes remain; mountain transport and site access follow live weather, maintenance, safety and scenic-area rules",
            ],
          ]
        : isQingchengWellness
          ? [
              ["Duration", "10 days / 9 nights"],
              ["Route", "Chengdu and Qingcheng Mountain"],
              ["Accommodation duration", "2 Chengdu nights and 7 Qingcheng Mountain nights"],
              ["Hotel changes", "One"],
              [
                "Published price basis",
                "Four guests sharing two rooms outside peak periods; US$47,200 group total from",
              ],
              [
                "Private service standard",
                "AVIORA Quiet Journey Standard with a pre-trip rhythm profile and protected unscheduled time",
              ],
              [
                "Signature experiences",
                "Private tai chi, Daoist cultural interpretation, tea, Dujiangyan, Qingcheng Mountain and two resort treatments per guest",
              ],
              [
                "Protected retreat time",
                "One full day without scheduled touring or guide obligations",
              ],
              ["Medical boundary", "Cultural and wellbeing journey; no medical outcome promised"],
              ["International and domestic flights", "Not included"],
            ]
          : isMuslimFriendly
            ? [
                ["Duration", "13 days / 12 nights"],
                ["Route", "Beijing, Xi'an, Yinchuan, Zhongwei and Shanghai"],
                [
                  "Accommodation standard",
                  "Premium city hotels plus best-available Ningxia and desert accommodation",
                ],
                [
                  "Published price basis",
                  "Four guests sharing two rooms outside peak periods; US$30,720 group total from",
                ],
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
                  [
                    "Published price basis",
                    "Two adults and two children aged 6–11 sharing two rooms",
                  ],
                  ["Family pacing", "Age-aware private pacing with protected family downtime"],
                  ["Age bands", "6–9, 10–13 and 14–17"],
                  ["Beijing to Xi'an", "First-class high-speed rail"],
                  ["Xi'an to Chengdu", "First-class high-speed rail"],
                  ["Chengdu to Shanghai", "Nonstop economy-class domestic flight"],
                  [
                    "Signature experiences",
                    "Private tai chi, Junior Curator Mission, Great Wall family challenge, clay-warrior studio, giant pandas and private Shanghai kitchen",
                  ],
                  [
                    "Touring service",
                    "Private family-ready English-speaking guides and private vehicles",
                  ],
                  ["Shopping policy", "No compulsory shopping stops"],
                  ["International flights", "Not included"],
                ]
              : isYunnan
                ? [
                    ["Duration", "10 days / 9 nights"],
                    ["Route", "Dali, Shaxi, Lijiang and Shangri-La"],
                    ["Accommodation standard", "Luxury boutique, heritage and highland hotels"],
                    ["Accommodation duration", "9 nights"],
                    ["Published price basis", "Four guests sharing two rooms outside peak periods"],
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
                      [
                        "Published price basis",
                        "Four guests sharing two rooms outside peak periods",
                      ],
                      ["Pace", "Easy to moderate, with protected recovery time"],
                      ["Hotel changes", "Two"],
                      ["Beijing to Xi'an", "First-class high-speed rail"],
                      ["Xi'an to Shanghai", "Nonstop economy-class domestic flight"],
                      ["Touring service", "Private English-speaking guides and private vehicles"],
                      ["Shopping policy", "No compulsory shopping stops"],
                      ["International flights", "Not included"],
                    ]
                  : [
                      ["Accommodation standard", "Selected four- and five-star hotels"],
                      ["Tour format", "Private, tailor-made journey"],
                    ];
    return (
      <>
        <JsonLd
          id={`${staticTour.slug}-tour-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "@id": `${tourUrl}#tour`,
            identifier: staticTour.slug,
            sku: staticTour.slug,
            name: staticTour.title,
            description: staticTour.seo.description,
            url: tourUrl,
            mainEntityOfPage: { "@id": `${tourUrl}#webpage` },
            category: catalogItem?.commercialRoleLabel ?? "Premium private China tour",
            duration: `P${staticTour.itinerary.length}D`,
            brand: {
              "@type": "Brand",
              name: siteConfig.name,
            },
            audience: isQingchengWellness
              ? {
                  "@type": "PeopleAudience",
                  audienceType:
                    "Executives, women, couples, solo travelers and private groups seeking a private luxury wellness retreat with cultural depth and protected unscheduled time",
                }
              : isMutianyuPrivateDayTour
                ? {
                    "@type": "PeopleAudience",
                    audienceType:
                      "First-time Beijing visitors, families, couples, older travelers and small private groups seeking a professionally handled private Mutianyu Great Wall day tour from their Beijing hotel",
                  }
                : isMuslimFriendly
                  ? {
                      "@type": "PeopleAudience",
                      audienceType:
                        "Muslim families, Muslim couples, multigenerational groups and private travelers seeking verified dining and prayer-aware China travel",
                    }
                  : isChinaFamily
                    ? {
                        "@type": "PeopleAudience",
                        audienceType:
                          "Families with children aged 6 to 17, first-time China visitors and multigenerational families",
                      }
                    : isChinaConsidered
                      ? {
                          "@type": "PeopleAudience",
                          audienceType:
                            "Couples, mature travelers, families planning for parents and first-time China visitors",
                        }
                      : isYunnan
                        ? {
                            "@type": "PeopleAudience",
                            audienceType:
                              "Couples, friends, private groups and repeat China visitors interested in culture, tea, landscapes and boutique stays",
                          }
                        : undefined,
            ...(staticTour.visualStatus === "pending"
              ? {}
              : {
                  image: Array.from(
                    new Set([
                      staticTour.hero.image.src,
                      ...staticTour.itinerary.map((day) => day.image.src),
                      ...staticTour.gallery.map((image) => image.src),
                    ]),
                  ).map((image) => new URL(image, siteConfig.url).toString()),
                }),
            itinerary: {
              "@type": "ItemList",
              numberOfItems: staticTour.itinerary.length,
              itemListElement: staticTour.itinerary.map((day) => ({
                "@type": "ListItem",
                position: day.day,
                name: `Day ${day.day}: ${day.title}`,
                description: day.summary,
                item: {
                  "@type": "TouristTrip",
                  name: `Day ${day.day}: ${day.title}`,
                  description: day.summary,
                  itinerary: [
                    {
                      "@type": "Place",
                      name: day.destination,
                      geo: day.coordinates
                        ? {
                            "@type": "GeoCoordinates",
                            latitude: day.coordinates.latitude,
                            longitude: day.coordinates.longitude,
                          }
                        : undefined,
                    },
                    {
                      "@type": "ItemList",
                      name: `Day ${day.day} experiences`,
                      numberOfItems: day.activities.length,
                      itemListElement: day.activities.map((activity, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        item: {
                          "@type": "Thing",
                          name: activity.title,
                          description: activity.description,
                        },
                      })),
                    },
                  ],
                },
              })),
            },
            touristType: catalogItem?.bestForFilters ?? staticTour.styles,
            offers: catalogItem
              ? {
                  "@type": "Offer",
                  price: catalogItem.pricing.fromUsd,
                  priceCurrency: "USD",
                  url: tourUrl,
                  availability: "https://schema.org/LimitedAvailability",
                  category: isMutianyuPrivateDayTour
                    ? "Private Mutianyu Great Wall day tour"
                    : isPrivateShanghaiDayTour
                      ? "Private Shanghai day tour with guide and driver"
                      : "Private premium China tour",
                  description: catalogItem.pricing.basis,
                  seller: { "@id": `${siteConfig.url}/#organization` },
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: catalogItem.pricing.fromUsd,
                    priceCurrency: "USD",
                    unitText: isPrivateShanghaiDayTour
                      ? "per private group of four guests"
                      : "per person",
                    description: catalogItem.pricing.basis,
                  },
                }
              : undefined,
            additionalProperty: [
              ...(catalogItem
                ? [
                    ["Journey collection", catalogItem.commercialRoleLabel],
                    ["Best for", catalogItem.bestForSummary],
                    ["Walking level", catalogItem.discovery.walkingLevel],
                  ]
                : []),
              ...tourProperties,
            ].map(([name, value]) => ({
              "@type": "PropertyValue",
              name,
              value,
            })),
            subjectOf: reading.map((article) => ({
              "@type": "Article",
              name: article.title,
              url: new URL(article.href, siteConfig.url).toString(),
            })),
            provider: { "@id": `${siteConfig.url}/#organization` },
          }}
        />
        <JsonLd
          id={`${staticTour.slug}-webpage-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${tourUrl}#webpage`,
            url: tourUrl,
            name: staticTour.seo.title,
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
        <JsonLd
          id={`${staticTour.slug}-faq-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [...staticTour.faqs, ...bookingPolicyFaqs].map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
        <JsonLd
          id={`${staticTour.slug}-breadcrumb-schema`}
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journeys", path: "/tours" },
            { name: staticTour.title, path: `/tours/${staticTour.slug}` },
          ])}
        />
        <TourTemplate tour={staticTour} />
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
      <JsonLd
        id={`${journey.slug}-tour-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: journey.title,
          description: journey.summary,
          url: new URL(`/tours/${journey.slug}`, siteConfig.url).toString(),
          image: new URL(journey.image.src, siteConfig.url).toString(),
          touristType: journey.bestForFilters,
          duration: `P${journey.recommendedDaysMin}D`,
          itinerary: {
            "@type": "ItemList",
            numberOfItems: journey.destinations.length,
            itemListElement: journey.destinations.map((destination, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: destination.label,
              url: new URL(destination.href, siteConfig.url).toString(),
            })),
          },
          areaServed: journey.destinations.map((destination) => ({
            "@type": "Place",
            name: destination.label,
          })),
          offers: {
            "@type": "Offer",
            price: journey.pricing.fromUsd,
            priceCurrency: "USD",
            url: new URL(`/tours/${journey.slug}`, siteConfig.url).toString(),
            description: journey.pricing.basis,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: journey.pricing.fromUsd,
              priceCurrency: "USD",
              unitText: "per person",
              description: journey.pricing.basis,
            },
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Accommodation standard",
              value: "Selected four- and five-star hotels",
            },
            {
              "@type": "PropertyValue",
              name: "Tour format",
              value: "Private, tailor-made journey",
            },
          ],
          subjectOf: reading.map((article) => ({
            "@type": "Article",
            name: article.title,
            url: new URL(article.href, siteConfig.url).toString(),
          })),
          provider: { "@id": `${siteConfig.url}/#organization` },
        }}
      />
      <JsonLd
        id={`${journey.slug}-faq-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: frameworkTourFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <JsonLd
        id={`${journey.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journeys", path: "/tours" },
          { name: journey.title, path: `/tours/${journey.slug}` },
        ])}
      />
      <TourFrameworkTemplate item={journey} />
    </>
  );
}
