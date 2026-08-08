import { siteConfig } from "@/config/site";

export function organizationSchema() {
  const organizationId = `${siteConfig.url}/#organization`;

  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": organizationId,
    name: siteConfig.name,
    alternateName: ["China Prime DMC", siteConfig.operator.englishReferenceName],
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
    name: siteConfig.name,
    alternateName: "China Prime DMC",
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
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
