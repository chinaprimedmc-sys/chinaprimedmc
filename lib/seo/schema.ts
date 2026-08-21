import { siteConfig } from "@/config/site";
import { serviceAchievements } from "@/content/home/service-achievements";

export function organizationSchema() {
  const organizationId = `${siteConfig.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": organizationId,
    name: siteConfig.siteName,
    alternateName: [siteConfig.name, "China Prime DMC", siteConfig.operator.englishReferenceName],
    legalName: siteConfig.operator.legalName,
    url: siteConfig.url,
    logo: new URL(siteConfig.logo, siteConfig.url).toString(),
    image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
    description: siteConfig.description,
    foundingDate: siteConfig.operator.founded,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.operator.locality,
      addressCountry: siteConfig.operator.country,
    },
    areaServed: {
      "@type": "Country",
      name: "China",
    },
    knowsAbout: [
      "Private China tours",
      "Inbound tourism in China",
      "Custom China itineraries",
      "China destination management services",
      "China ground handling for travel trade partners",
      "Family travel in China",
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
    additionalProperty: serviceAchievements.map((achievement) => ({
      "@type": "PropertyValue",
      name: achievement.englishLabel,
      value: achievement.display,
      description: achievement.description,
    })),
    subjectOf: {
      "@type": "NewsArticle",
      headline: "MATTA Connect gains traction as B2B platform",
      url: "https://www.ttgasia.com/2026/07/30/matta-connect-gains-traction-as-b2b-platform/",
      datePublished: "2026-07-30",
      publisher: {
        "@type": "Organization",
        name: "TTG Asia",
        url: "https://www.ttgasia.com/",
      },
      about: { "@id": organizationId },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.siteName,
    alternateName: [siteConfig.name, "China Prime DMC"],
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function articleSchemaData(input: {
  headline: string;
  description: string;
  image: {
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    image: {
      "@type": "ImageObject",
      url: input.image.url,
      ...(input.image.width ? { width: input.image.width } : {}),
      ...(input.image.height ? { height: input.image.height } : {}),
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    ...(input.articleSection ? { articleSection: input.articleSection } : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/about#editorial-team`,
      name: input.authorName,
      description: input.authorRole,
      url: new URL("/about", siteConfig.url).toString(),
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    },
    reviewedBy: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
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
