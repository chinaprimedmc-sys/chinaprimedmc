const baseUrl = new URL(process.env.SEO_BASE_URL || "https://www.chinaprimedmc.com");
const canonicalOrigin = (process.env.SEO_SITE_ORIGIN || baseUrl.origin).replace(
  /\/$/,
  "",
);

const issues = [];
const sitemapResponse = await fetch(new URL("/sitemap.xml", baseUrl));
if (!sitemapResponse.ok) fail(`Sitemap returned ${sitemapResponse.status}.`);

const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (!sitemapUrls.length) fail("Sitemap contains no URLs.");

for (const canonicalUrl of sitemapUrls) {
  const canonical = new URL(canonicalUrl);
  const response = await fetch(new URL(`${canonical.pathname}${canonical.search}`, baseUrl));
  const html = await response.text();

  if (response.status !== 200) issues.push(`${canonicalUrl}: HTTP ${response.status}`);
  checkTag(html, /<title>[^<]+<\/title>/i, canonicalUrl, "title");
  checkTag(html, /<meta\s+name="description"\s+content="[^"]+"/i, canonicalUrl, "description");
  checkTag(html, /<h1(?:\s|>)/i, canonicalUrl, "H1");

  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonicalMatch?.[1] || normalizeUrl(canonicalMatch[1]) !== normalizeUrl(canonicalUrl)) {
    issues.push(`${canonicalUrl}: canonical is ${canonicalMatch?.[1] || "missing"}`);
  }
  if (/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html)) {
    issues.push(`${canonicalUrl}: sitemap URL is noindex`);
  }
  if (/foundation mode|not built yet|built for long-term seo|metadata and internal linking/i.test(html)) {
    issues.push(`${canonicalUrl}: developer-facing copy detected`);
  }
}

for (const pathname of [
  "/jadmin",
  "/tours/__seo-missing__",
  "/journal/__seo-missing__",
  "/styles/__seo-missing__",
  "/destinations/__seo-missing__",
]) {
  const response = await fetch(new URL(pathname, baseUrl), { redirect: "manual" });
  if (response.status !== 404) issues.push(`${pathname}: expected 404, received ${response.status}`);
}

const searchResponse = await fetch(new URL("/search?q=china", baseUrl));
const searchHtml = await searchResponse.text();
if (!/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(searchHtml)) {
  issues.push("/search: missing noindex");
}

for (const pathname of [
  "/og/aviora-private-china-journeys.jpg",
  "/icon.png",
  "/apple-icon.png",
  "/manifest.webmanifest",
]) {
  const response = await fetch(new URL(pathname, baseUrl));
  if (!response.ok) issues.push(`${pathname}: HTTP ${response.status}`);
}

if (!sitemapUrls.every((url) => url === canonicalOrigin || url.startsWith(`${canonicalOrigin}/`))) {
  issues.push(`Sitemap contains URLs outside ${canonicalOrigin}.`);
}

if (issues.length) {
  console.error(`SEO audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(`SEO audit passed: ${sitemapUrls.length} indexable URLs checked.`);

function checkTag(html, pattern, url, label) {
  if (!pattern.test(html)) issues.push(`${url}: missing ${label}`);
}

function normalizeUrl(value) {
  const url = new URL(value);
  const pathname = url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "");
  return `${url.origin}${pathname}${url.search}`;
}

function fail(message) {
  console.error(`SEO audit failed: ${message}`);
  process.exit(1);
}
