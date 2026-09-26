const baseUrl = new URL(process.env.SEO_BASE_URL || "https://www.chinaprimedmc.com");
const canonicalOrigin = (process.env.SEO_SITE_ORIGIN || "https://www.chinaprimedmc.com").replace(
  /\/$/,
  "",
);
const issues = [];

const pages = [
  { path: "/", required: ["TravelAgency", "WebSite", "WebPage", "FAQPage"] },
  { path: "/tours", required: ["CollectionPage", "BreadcrumbList"] },
  {
    path: "/tours/first-china-beautifully-paced",
    required: ["TouristTrip", "Offer", "BreadcrumbList"],
  },
  {
    path: "/journal/how-far-in-advance-book-private-china-tour",
    required: ["BlogPosting", "BreadcrumbList"],
    requiresCitation: true,
  },
  { path: "/destinations/beijing", required: ["TouristDestination", "WebPage", "BreadcrumbList"] },
  { path: "/about", required: ["AboutPage"] },
  ...[
    "beijing-xian-shanghai-private-tour-9-days",
    "what-private-support-changes-first-china-trip",
    "china-family-tour-with-pandas-12-days",
    "best-age-for-china-family-tour",
    "china-family-tour-cost-four",
    "luxury-yunnan-private-tour-10-days",
    "yunnan-altitude-private-tour",
    "where-to-stay-yunnan-private-tour",
  ].map((slug) => ({
    path: `/journal/${slug}`,
    required: ["BlogPosting", "BreadcrumbList"],
    requiresCitation: true,
  })),
];

for (const page of pages) {
  const response = await fetch(new URL(page.path, baseUrl));
  const html = await response.text();
  if (!response.ok) {
    issues.push(`${page.path}: HTTP ${response.status}`);
    continue;
  }

  const nodes = parseJsonLd(html, page.path);
  const graph = flattenGraph(nodes);
  const types = new Set(graph.flatMap((node) => toArray(node["@type"])));
  for (const type of page.required) {
    if (!types.has(type)) issues.push(`${page.path}: missing ${type} JSON-LD`);
  }

  for (const node of nodes) {
    const type = toArray(node["@type"]);
    if ((type.includes("WebPage") || type.includes("CollectionPage")) && !node.isPartOf) {
      issues.push(`${page.path}: ${type.join("/")} is missing isPartOf`);
    }
    if ((type.includes("WebPage") || type.includes("CollectionPage")) && !node.publisher) {
      issues.push(`${page.path}: ${type.join("/")} is missing publisher`);
    }
    if (type.includes("TouristTrip") && String(node["@id"] || "").endsWith("#tour")) {
      if (node.provider?.["@id"] !== `${canonicalOrigin}/#organization`) {
        issues.push(`${page.path}: TouristTrip provider does not reference the organization`);
      }
      if (!node.offers && !node.offeredBy) {
        issues.push(`${page.path}: TouristTrip is missing published offer information`);
      }
    }
    if (type.includes("BlogPosting")) {
      for (const field of ["author", "publisher", "dateModified", "mainEntityOfPage"]) {
        if (!node[field]) issues.push(`${page.path}: BlogPosting is missing ${field}`);
      }
      if (page.requiresCitation && !node.citation) {
        issues.push(`${page.path}: source-backed BlogPosting is missing citation`);
      }
    }
  }
}

for (const path of ["/llms.txt", "/llms-full.txt"]) {
  const response = await fetch(new URL(path, baseUrl));
  const body = await response.text();
  if (!response.ok || !body.includes("Citation and verification guidance")) {
    issues.push(`${path}: missing or incomplete machine-readable guidance`);
  }
  if (!/public/i.test(response.headers.get("cache-control") || "")) {
    issues.push(`${path}: should be cacheable for reliable crawler retrieval`);
  }
}

if (issues.length) {
  console.error(`Structured-data audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`Structured-data audit passed: ${pages.length} key pages and AI-readable files checked.`);

function parseJsonLd(html, path) {
  const scripts = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const nodes = [];
  for (const script of scripts) {
    try {
      const parsed = JSON.parse(script[1]);
      nodes.push(...(Array.isArray(parsed) ? parsed : [parsed]));
    } catch (error) {
      issues.push(`${path}: invalid JSON-LD (${error instanceof Error ? error.message : "unknown error"})`);
    }
  }
  return nodes;
}

function toArray(value) {
  return Array.isArray(value) ? value : value ? [value] : [];
}

function flattenGraph(nodes) {
  const graph = [];
  const visit = (value) => {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    graph.push(value);
    Object.values(value).forEach(visit);
  };
  nodes.forEach(visit);
  return graph;
}
