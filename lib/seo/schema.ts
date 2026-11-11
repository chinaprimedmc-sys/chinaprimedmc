import { companyIdentity } from "@/content/about/identity";
import { siteConfig } from "@/config/site";
import { serviceAchievements } from "@/content/home/service-achievements";

export type FAQItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export type ItineraryStep = {
  position: number;
  name: string;
  description?: string;
  url?: string;
  destination?: {
    name: string;
    latitude?: number;
    longitude?: number;
  };
  activities?: Array<{ name: string; description: string }>;
};

export type ItineraryOffer = {
  price: number;
  priceCurrency?: string;
  url: string;
  description: string;
  unitText?: string;
  category?: string;
  availability?: string;
};

export type ItineraryProductInput = {
  schemaType?: "TouristTrip" | "Product";
  id?: string;
  identifier?: string;
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  mainEntityOfPage?: string;
  image?: string | string[];
  category?: string;
  duration?: string;
  brandName?: string;
  audienceType?: string;
  touristType?: string[];
  areaServed?: string[];
  itinerary?: ItineraryStep[];
  offer?: ItineraryOffer;
  additionalProperties?: Array<{ name: string; value: string }>;
  subjectOf?: Array<{ name: string; url: string }>;
  providerId?: string;
};

export function organizationSchema() {
  const organizationId = `${siteConfig.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": organizationId,
    name: siteConfig.siteName,
    alternateName: [siteConfig.name, "AVIORA Travel"],
    url: siteConfig.url,
    logo: new URL(siteConfig.logo, siteConfig.url).toString(),
    image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    description: companyIdentity.brandSummary,
    parentOrganization: {
      "@type": "TravelAgency",
      "@id": `${siteConfig.url}/#operator`,
      name: siteConfig.operator.englishReferenceName,
      legalName: siteConfig.operator.legalName,
      foundingDate: siteConfig.operator.founded,
      url: new URL("/company", siteConfig.url).toString(),
      description: "The China-registered company operating the AVIORA China Travel brand.",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Unified Social Credit Code",
        value: "91440101MA5ARE270P",
      },
    },
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: companyIdentity.founderName,
      jobTitle: "Founder",
      url: new URL("/about/founder", siteConfig.url).toString(),
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.operator.address.streetAddress,
      addressLocality: siteConfig.operator.address.addressLocality,
      addressRegion: siteConfig.operator.address.addressRegion,
      addressCountry: siteConfig.operator.country,
    },
    areaServed: [
      { "@type": "Country", name: "China" },
      ...[
        "North China",
        "Northeast China",
        "East China",
        "Central China",
        "South China",
        "Southwest China",
        "Northwest China",
      ].map((name) => ({ "@type": "Place", name })),
    ],
    location: siteConfig.operator.officeCities.map((city) => ({
      "@type": "Place",
      name: `AVIORA ${city} office`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressCountry: siteConfig.operator.country,
      },
    })),
    knowsLanguage: [...siteConfig.guideLanguages],
    knowsAbout: [
      "Private China tours",
      "Tailor-made China itineraries",
      "Private guides and drivers in China",
      "Private China day tours",
      "Family travel in China",
      "Muslim-friendly travel in China",
      "Slower-paced travel in China",
      "Luxury travel in China",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "trip planning",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: siteConfig.socials,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AVIORA private China travel services",
      itemListElement: [
        "Tailor-made private multi-city journeys",
        "Private day tours",
        "Private guide and driver coordination",
        "Existing-plan support",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    additionalProperty: serviceAchievements.map((achievement) => ({
      "@type": "PropertyValue",
      name: achievement.englishLabel,
      value: achievement.display,
      description: `Company-reported service figure. ${achievement.description}`,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.siteName,
    alternateName: [siteConfig.name, "AVIORA Travel"],
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema(input: {
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage";
  about?: Record<string, unknown>;
  mainEntity?: Record<string, unknown>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    "@id": `${input.url}#webpage`,
    url: input.url,
    name: input.name,
    description: input.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    ...(input.about ? { about: input.about } : {}),
    ...(input.mainEntity ? { mainEntity: input.mainEntity } : {}),
  };
}

export function articleSchemaData(input: {
  headline: string;
  description: string;
  image?: {
    url: string;
    width?: number;
    height?: number;
  };
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorRole: string;
  articleSection?: string;
  wordCount?: number;
  keywords?: string[];
  about?: Array<{
    name: string;
    url?: string;
    type: "Place" | "Thing";
  }>;
  mentions?: Array<{
    name: string;
    url: string;
    id?: string;
    type: "TouristTrip" | "Thing";
  }>;
  citations?: Array<{
    name: string;
    url: string;
    publisher: string;
    publishedAt?: string;
  }>;
  factChecked?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    ...(input.image
      ? {
          image: {
            "@type": "ImageObject",
            url: input.image.url,
            ...(input.image.width ? { width: input.image.width } : {}),
            ...(input.image.height ? { height: input.image.height } : {}),
          },
        }
      : {}),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/editorial-policy#editorial-team`,
      name: input.authorName,
      description: input.authorRole,
      url: new URL("/editorial-policy", siteConfig.url).toString(),
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    },
    ...(input.factChecked
      ? {
          reviewedBy: {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
          },
        }
      : {}),
    publisher: { "@id": `${siteConfig.url}/#organization` },
    copyrightHolder: { "@id": `${siteConfig.url}/#organization` },
    copyrightYear: new Date(input.datePublished).getUTCFullYear(),
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    ...(input.keywords?.length ? { keywords: input.keywords } : {}),
    ...(input.about?.length
      ? {
          about: input.about.map((entity) => ({
            "@type": entity.type,
            name: entity.name,
            ...(entity.url ? { "@id": entity.url, url: entity.url } : {}),
          })),
        }
      : {}),
    ...(input.mentions?.length
      ? {
          mentions: input.mentions.map((entity) => ({
            "@type": entity.type,
            "@id": entity.id ?? entity.url,
            name: entity.name,
            url: entity.url,
          })),
        }
      : {}),
    ...(input.citations?.length
      ? {
          citation: input.citations.map((citation) => ({
            "@type": "CreativeWork",
            name: citation.name,
            url: citation.url,
            ...(citation.publishedAt ? { datePublished: citation.publishedAt } : {}),
            publisher: {
              "@type": "Organization",
              name: citation.publisher,
            },
          })),
        }
      : {}),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function faqPageSchema(items: readonly FAQItem[], url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(url ? { "@id": `${url}#faq` } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function itineraryProductSchema(input: ItineraryProductInput) {
  const schemaType = input.schemaType ?? "TouristTrip";
  const tripId = input.id ?? `${input.url}#${schemaType === "Product" ? "product" : "tour"}`;
  const offer = input.offer;

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": tripId,
    ...(input.identifier ? { identifier: input.identifier, sku: input.identifier } : {}),
    name: input.name,
    ...(input.alternateName ? { alternateName: input.alternateName } : {}),
    description: input.description,
    url: input.url,
    ...(input.mainEntityOfPage ? { mainEntityOfPage: { "@id": input.mainEntityOfPage } } : {}),
    ...(input.category ? { category: input.category } : {}),
    ...(input.duration ? { duration: input.duration } : {}),
    ...(input.brandName ? { brand: { "@type": "Brand", name: input.brandName } } : {}),
    ...(input.audienceType
      ? { audience: { "@type": "PeopleAudience", audienceType: input.audienceType } }
      : {}),
    ...(input.image
      ? { image: (Array.isArray(input.image) ? input.image : [input.image]).filter(Boolean) }
      : {}),
    ...(input.touristType?.length ? { touristType: input.touristType } : {}),
    ...(input.areaServed?.length
      ? { areaServed: input.areaServed.map((name) => ({ "@type": "Place", name })) }
      : {}),
    ...(schemaType === "TouristTrip" && input.itinerary?.length
      ? {
          itinerary: {
            "@type": "ItemList",
            numberOfItems: input.itinerary.length,
            itemListElement: input.itinerary.map((step) => ({
              "@type": "ListItem",
              position: step.position,
              name: step.name,
              ...(step.description ? { description: step.description } : {}),
              ...(step.url ? { url: step.url } : {}),
              ...(step.destination || step.activities?.length
                ? {
                    item: {
                      "@type": "TouristTrip",
                      name: step.name,
                      ...(step.description ? { description: step.description } : {}),
                      ...(step.destination || step.activities?.length
                        ? {
                            itinerary: [
                              ...(step.destination
                                ? [
                                    {
                                      "@type": "Place",
                                      name: step.destination.name,
                                      ...(step.destination.latitude !== undefined &&
                                      step.destination.longitude !== undefined
                                        ? {
                                            geo: {
                                              "@type": "GeoCoordinates",
                                              latitude: step.destination.latitude,
                                              longitude: step.destination.longitude,
                                            },
                                          }
                                        : {}),
                                    },
                                  ]
                                : []),
                              ...(step.activities?.length
                                ? [
                                    {
                                      "@type": "ItemList",
                                      name: `${step.name} experiences`,
                                      numberOfItems: step.activities.length,
                                      itemListElement: step.activities.map((activity, index) => ({
                                        "@type": "ListItem",
                                        position: index + 1,
                                        item: {
                                          "@type": "Thing",
                                          name: activity.name,
                                          description: activity.description,
                                        },
                                      })),
                                    },
                                  ]
                                : []),
                            ],
                          }
                        : {}),
                    },
                  }
                : {}),
            })),
          },
        }
      : {}),
    ...(offer
      ? {
          offers: {
            "@type": "Offer",
            "@id": `${tripId}#offer`,
            price: offer.price,
            priceCurrency: offer.priceCurrency ?? "USD",
            url: offer.url,
            description: offer.description,
            ...(offer.category ? { category: offer.category } : {}),
            ...(offer.availability ? { availability: offer.availability } : {}),
            seller: { "@id": input.providerId ?? `${siteConfig.url}/#organization` },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: offer.price,
              priceCurrency: offer.priceCurrency ?? "USD",
              ...(offer.unitText ? { unitText: offer.unitText } : {}),
              description: offer.description,
            },
          },
        }
      : {}),
    ...(input.additionalProperties?.length
      ? {
          additionalProperty: input.additionalProperties.map(({ name, value }) => ({
            "@type": "PropertyValue",
            name,
            value,
          })),
        }
      : {}),
    ...(input.subjectOf?.length
      ? {
          subjectOf: input.subjectOf.map(({ name, url }) => ({
            "@type": "Article",
            name,
            url,
          })),
        }
      : {}),
    provider: { "@id": input.providerId ?? `${siteConfig.url}/#organization` },
  };
}
