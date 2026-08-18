import { siteConfig } from "@/config/site";

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
      name: input.authorName,
      description: input.authorRole,
      url: new URL("/about", siteConfig.url).toString(),
      "@id": `${siteConfig.url}/#organization`,
    },
    reviewedBy: {
      "@type": "Organization",
      name: "AVIORA China Travel Team",
      url: new URL("/about", siteConfig.url).toString(),
      "@id": `${siteConfig.url}/#organization`,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    ...(input.keywords?.length ? { keywords: input.keywords } : {}),
    ...(input.citations?.length
      ? {
          citation: input.citations.map((citation) => ({
            "@type": "NewsArticle",
            headline: citation.name,
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
