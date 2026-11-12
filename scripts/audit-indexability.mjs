import { mkdir, writeFile } from "node:fs/promises";
import nextConfig from "../next.config.ts";
import { siteConfig } from "../config/site.ts";
import { publicRouteSlugs } from "../config/public-route-slugs.ts";
import {
  crawlDepths,
  decodeHtml,
  inspectHtml,
  normalizeUrl,
  robotsAllows,
} from "./lib/indexability.mjs";

const base = new URL(process.env.SEO_BASE_URL || siteConfig.url);
const origin = siteConfig.url;
const issues = [];
const warnings = [];
const graph = new Map();
const pages = [];
const exclusions = [];
const request = (path) =>
  fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(30_000),
  });
const sitemapResponse = await request("/sitemap.xml");
if (sitemapResponse.status !== 200) throw new Error(`Sitemap HTTP ${sitemapResponse.status}`);
const xml = await sitemapResponse.text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => decodeHtml(url));
if (!urls.length) throw new Error("Sitemap is empty");
const robotsResponse = await request("/robots.txt");
const robotsText = await robotsResponse.text();
if (robotsResponse.status !== 200 || !robotsText.includes(`${origin}/sitemap.xml`)) {
  issues.push("robots.txt is unavailable or does not advertise the canonical sitemap");
}
const expected = new Set(urls.map((url) => normalizeUrl(url, origin)));
if (expected.size !== urls.length) issues.push("Duplicate canonical sitemap entries");

// These responses must stay outside the index: a 200 fallback for an unknown
// content slug creates soft 404s, while search queries create an unlimited URL set.
for (const path of [
  "/__aviora-indexability-missing__",
  "/tours/__aviora-indexability-missing__",
  "/journal/__aviora-indexability-missing__",
  "/destinations/__aviora-indexability-missing__",
  "/styles/__aviora-indexability-missing__",
  "/journey/__aviora-indexability-missing__",
  "/journeys/__aviora-indexability-missing__",
  "/search?q=beijing",
]) {
  try {
    const response = await request(path);
    const page = inspectHtml(await response.text(), response.headers);
    const expectedStatus = path.startsWith("/search?") ? 200 : 404;
    if (response.status !== expectedStatus)
      issues.push(`${path}: expected HTTP ${expectedStatus}, got ${response.status}`);
    if (!/\b(?:noindex|none)\b/.test(page.directives))
      issues.push(`${path}: missing explicit noindex directive`);
    if (expected.has(normalizeUrl(path, origin)))
      issues.push(`${path}: excluded route must not appear in sitemap`);
    exclusions.push({ path, status: response.status, directives: page.directives });
  } catch (error) {
    issues.push(`${path}: ${error.message}`);
  }
}

// Check the actual public registry as well as the sitemap, so omissions cannot pass silently.
for (const kind of ["tours", "journal", "destinations"]) {
  for (const slug of publicRouteSlugs[kind]) {
    if (!expected.has(`${origin}/${kind}/${slug}`)) issues.push(`Sitemap omits /${kind}/${slug}`);
  }
}

let cursor = 0;
await Promise.all(
  Array.from({ length: 5 }, async () => {
    while (cursor < urls.length) {
      const canonical = urls[cursor++];
      try {
        const url = new URL(canonical);
        if (url.origin !== origin || url.search || url.hash) {
          issues.push(`Non-canonical sitemap URL: ${canonical}`);
          continue;
        }
        for (const agent of ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot"]) {
          if (!robotsAllows(robotsText, agent, url.pathname))
            issues.push(`${url.pathname}: robots.txt blocks ${agent}`);
        }
        const response = await request(url.pathname);
        if (response.status !== 200) issues.push(`${url.pathname}: HTTP ${response.status}`);
        if (!response.headers.get("content-type")?.includes("text/html")) {
          issues.push(`${url.pathname}: expected HTML`);
          continue;
        }
        const page = inspectHtml(await response.text(), response.headers);
        if (page.blocked)
          issues.push(`${url.pathname}: indexing/snippet blocked (${page.directives})`);
        if (
          page.canonicals.length !== 1 ||
          normalizeUrl(page.canonicals[0], origin) !== normalizeUrl(canonical, origin)
        ) {
          issues.push(`${url.pathname}: invalid canonical ${page.canonicals.join(", ")}`);
        }
        if (!page.title || !page.description)
          issues.push(`${url.pathname}: missing search snippet`);
        if (page.h1Count !== 1)
          issues.push(`${url.pathname}: expected one server-rendered H1, got ${page.h1Count}`);
        const nodes = page.jsonLd.flatMap((node) => node["@graph"] ?? [node]);
        const hasType = (node, type) => [node["@type"]].flat().includes(type);
        for (const type of ["TravelAgency", "WebSite"]) {
          if (!nodes.some((node) => hasType(node, type)))
            issues.push(`${url.pathname}: missing ${type}`);
        }
        if (url.pathname.startsWith("/tours/")) {
          const trip = nodes.find(
            (node) => hasType(node, "TouristTrip") && node["@id"] === `${canonical}#tour`,
          );
          if (
            !trip?.subjectOf?.some((document) =>
              document.mainEntity?.some(
                (fact) => fact.name === "ISO 8601 duration" && /^P/.test(fact.value),
              ),
            ) ||
            !trip.itinerary?.itemListElement?.length
          ) {
            issues.push(`${url.pathname}: missing trip duration/itinerary`);
          }
          if (trip?.provider?.["@id"] !== `${origin}/#organization`)
            issues.push(`${url.pathname}: wrong trip provider`);
          for (const field of [
            "duration",
            "sku",
            "brand",
            "category",
            "additionalProperty",
            "areaServed",
            "audience",
          ]) {
            if (trip && field in trip)
              issues.push(`${url.pathname}: ${field} is not a TouristTrip property`);
          }
        }
        if (url.pathname.startsWith("/journal/")) {
          const article = nodes.find((node) => hasType(node, "BlogPosting"));
          for (const field of [
            "headline",
            "image",
            "datePublished",
            "dateModified",
            "author",
            "publisher",
            "mainEntityOfPage",
          ]) {
            if (!article?.[field]) issues.push(`${url.pathname}: article missing ${field}`);
          }
          if (article && new Date(article.dateModified) < new Date(article.datePublished)) {
            issues.push(`${url.pathname}: modified before published`);
          }
          for (const field of ["additionalProperty", "reviewedBy"]) {
            if (article && field in article)
              issues.push(`${url.pathname}: ${field} is not a BlogPosting property`);
          }
        }
        const edges = new Set();
        for (const href of page.anchors) {
          const target = new URL(href, canonical);
          if (target.origin === origin || target.origin === base.origin) {
            edges.add(normalizeUrl(target.pathname, origin));
          }
        }
        const path = normalizeUrl(canonical, origin);
        graph.set(path, edges);
        pages.push({
          url: canonical,
          title: page.title,
          schemaTypes: nodes.map((node) => node["@type"]).flat(),
        });
      } catch (error) {
        issues.push(`${canonical}: ${error.message}`);
      }
    }
  }),
);

const depths = crawlDepths(graph, `${origin}/`);
for (const url of expected) {
  if (!depths.has(url))
    issues.push(`${url}: unreachable from homepage through server-rendered sitemap-page links`);
  else if (depths.get(url) > 4) warnings.push(`${url}: ${depths.get(url)} clicks from homepage`);
}

// Every explicit legacy redirect must reach its canonical target in one hop.
// Pattern redirects are covered separately by the existing route/link audits.
const redirects = await nextConfig.redirects();
const migrations = redirects.filter(
  ({ source, destination }) => !/[\:*()]/.test(source) && destination.startsWith("/"),
);
for (const migration of migrations) {
  try {
    const response = await request(migration.source);
    const location = response.headers.get("location");
    const target = new URL(location ?? "/__missing-location__", base);
    const intended = new URL(migration.destination, base);
    if (
      ![301, 308].includes(response.status) ||
      target.pathname + target.search !== intended.pathname + intended.search
    ) {
      issues.push(
        `${migration.source}: expected permanent redirect to ${migration.destination}, got ${response.status} ${location}`,
      );
      continue;
    }
    const destination = await request(target.pathname + target.search);
    if (destination.status !== 200)
      issues.push(`${migration.source}: target is HTTP ${destination.status} (chain or broken)`);
  } catch (error) {
    issues.push(`${migration.source}: ${error.message}`);
  }
}

await mkdir("artifacts/quality", { recursive: true });
const report = {
  checkedAt: new Date().toISOString(),
  base: base.origin,
  sitemapPages: urls.length,
  reachablePages: depths.size,
  legacyRedirects: migrations.length,
  exclusions,
  pages: pages
    .sort((a, b) => a.url.localeCompare(b.url))
    .map((page) => ({ ...page, depth: depths.get(normalizeUrl(page.url, origin)) ?? null })),
  issues,
  warnings,
};
await writeFile("artifacts/quality/indexability.json", JSON.stringify(report, null, 2));
issues.forEach((issue) => console.error(`- ${issue}`));
warnings.forEach((warning) => console.warn(`- ${warning}`));
console.log(
  `Indexability: ${urls.length} sitemap pages, ${depths.size} reachable, ${migrations.length} legacy redirects, ${issues.length} issues.`,
);
if (issues.length) process.exitCode = 1;
