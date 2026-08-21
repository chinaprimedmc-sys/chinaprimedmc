const baseUrl = new URL(process.env.SEO_BASE_URL || "https://www.chinaprimedmc.com");
const configuredCanonicalOrigin = process.env.SEO_SITE_ORIGIN?.replace(/\/$/, "");
const expectedSiteName = process.env.SEO_SITE_NAME || "AVIORA China Travel";

const issues = [];
const pages = [];
const sitemapResponse = await fetch(new URL("/sitemap.xml", baseUrl));
if (!sitemapResponse.ok) fail(`Sitemap returned ${sitemapResponse.status}.`);

const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (!sitemapUrls.length) fail("Sitemap contains no URLs.");
const sitemapOrigin = new URL(sitemapUrls[0]).origin;
const canonicalOrigin = configuredCanonicalOrigin || sitemapOrigin;
if (new Set(sitemapUrls).size !== sitemapUrls.length) {
  issues.push("Sitemap contains duplicate URLs.");
}

for (const canonicalUrl of sitemapUrls) {
  const canonical = new URL(canonicalUrl);
  if (canonical.search) issues.push(`${canonicalUrl}: sitemap URL contains a query string`);

  const response = await fetch(new URL(canonical.pathname, baseUrl), { redirect: "manual" });
  const html = await response.text();

  if (!response.headers.get("content-type")?.includes("text/html")) {
    if (response.status !== 200) issues.push(`${canonicalUrl}: HTTP ${response.status}`);
    continue;
  }

  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || "";
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || "";
  const siteName =
    html.match(/<meta\s+property="og:site_name"\s+content="([^"]*)"/i)?.[1]?.trim() || "";
  const imageCount = [...html.matchAll(/<img\b/gi)].length;
  const missingAltCount = [...html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/gi)].length;
  const bodyText = html
    .replace(/<script(?![^>]*self\.__next_f)[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const contentText = canonical.pathname.startsWith("/journal/")
    ? bodyText + " " + extractNextFlightText(html)
    : bodyText;
  pages.push({
    canonicalUrl,
    title,
    description,
    siteName,
    imageCount,
    missingAltCount,
    contentText,
  });

  if (response.status !== 200) issues.push(`${canonicalUrl}: HTTP ${response.status}`);
  checkTag(html, /<title>[^<]+<\/title>/i, canonicalUrl, "title");
  checkTag(html, /<meta\s+name="description"\s+content="[^"]+"/i, canonicalUrl, "description");
  if (siteName !== expectedSiteName) {
    issues.push(`${canonicalUrl}: Open Graph site name is "${siteName || "missing"}"`);
  }
  // Next.js may stream the rendered heading inside an RSC payload. Check both
  // the final HTML and the serialized element name to avoid a false negative.
  if (!hasH1(html)) issues.push(`${canonicalUrl}: missing H1`);

  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  if (!canonicalMatch?.[1] || normalizeUrl(canonicalMatch[1]) !== normalizeUrl(canonicalUrl)) {
    issues.push(`${canonicalUrl}: canonical is ${canonicalMatch?.[1] || "missing"}`);
  }
  if (/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html)) {
    issues.push(`${canonicalUrl}: sitemap URL is noindex`);
  }
  if (response.headers.get("location")) {
    issues.push(`${canonicalUrl}: sitemap URL redirects to ${response.headers.get("location")}`);
  }
  if (
    /foundation mode|not built yet|built for long-term seo|metadata and internal linking/i.test(
      html,
    )
  ) {
    issues.push(`${canonicalUrl}: developer-facing copy detected`);
  }
  if (missingAltCount) issues.push(`${canonicalUrl}: ${missingAltCount} image(s) missing alt text`);
  if (contentText.split(/\s+/).filter(Boolean).length < 120 && !isUtilityPage(canonical.pathname)) {
    issues.push(`${canonicalUrl}: body content appears thin`);
  }
}

const titles = new Map();
const descriptions = new Map();
for (const page of pages) {
  if (page.title) titles.set(page.title, [...(titles.get(page.title) || []), page.canonicalUrl]);
  if (page.description)
    descriptions.set(page.description, [
      ...(descriptions.get(page.description) || []),
      page.canonicalUrl,
    ]);
  if (page.title.length < 30 || page.title.length > 70) {
    issues.push(`${page.canonicalUrl}: title length is ${page.title.length} characters`);
  }
  if (page.description.length < 70 || page.description.length > 165) {
    issues.push(
      `${page.canonicalUrl}: description length is ${page.description.length} characters`,
    );
  }
}
for (const [title, urls] of titles) {
  if (urls.length > 1) issues.push(`Duplicate title: "${title}" on ${urls.join(", ")}`);
}
for (const [, urls] of descriptions) {
  if (urls.length > 1) issues.push(`Duplicate description on ${urls.join(", ")}`);
}

for (const pathname of [
  "/jadmin",
  "/tours/__seo-missing__",
  "/journal/__seo-missing__",
  "/destinations/__seo-missing__",
]) {
  const response = await fetch(new URL(pathname, baseUrl), { redirect: "manual" });
  if (response.status !== 404)
    issues.push(`${pathname}: expected 404, received ${response.status}`);
}

const legacyStylesResponse = await fetch(new URL("/styles/__seo-missing__", baseUrl), {
  redirect: "manual",
});
if (
  legacyStylesResponse.status !== 308 ||
  legacyStylesResponse.headers.get("location") !== "/tours"
) {
  issues.push(
    `/styles/__seo-missing__: expected permanent redirect to /tours, received ${legacyStylesResponse.status} ${legacyStylesResponse.headers.get("location") || "without location"}`,
  );
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

function hasH1(html) {
  return /<h1(?:\s|>)/i.test(html) || /\\"h1\\"/.test(html);
}

function isUtilityPage(pathname) {
  return ["/contact", "/start-planning", "/faq", "/planning/faq", "/planning/visa"].includes(
    pathname,
  );
}

function extractNextFlightText(html) {
  return [...html.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)]
    .map((match) => match[1])
    .join(" ")
    .replace(/\\n/g, " ")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, "\\");
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
