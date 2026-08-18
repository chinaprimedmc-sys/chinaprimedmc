const baseUrl = new URL(process.env.AUDIT_BASE_URL || "https://www.chinaprimedmc.com");
const sitemap = await fetch(new URL("/sitemap.xml", baseUrl)).then((response) => response.text());
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => new URL(url).pathname.startsWith("/journal/"));

const rows = [];
for (const canonicalUrl of urls) {
  const pathname = new URL(canonicalUrl).pathname;
  const response = await fetch(new URL(pathname, baseUrl));
  const html = await response.text();
  const text = decodeHtml(stripHtml(html));
  const links = [...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)].map(
    ([, href, label]) => ({ href, label: decodeHtml(stripHtml(label)).trim() }),
  );
  const title = decodeHtml(html.match(/<title>([^<]*)<\/title>/i)?.[1] || "");
  const description = decodeHtml(
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || "",
  );
  const hasBridge = /data-journey-slug="[^"]+"/.test(html);
  const journeySlug = html.match(/data-journey-slug="([^"]+)"/)?.[1] || "";
  const hasMidPrompt = links.some((link) => link.href === "#related-tours");
  const planningLinks = links.filter((link) => link.href.startsWith("/start-planning"));
  const contextualPlanningLink = planningLinks.find(
    (link) => link.href.includes("journey=") && link.href.includes("placement="),
  );
  const journeyLinks = links.filter((link) => /^\/tours\/[^?#]+/.test(link.href));
  const internalJournalLinks = unique(
    links.filter((link) => /^\/journal\/[^?#]+/.test(link.href)).map((link) => link.href),
  );
  const destinationLinks = unique(
    links.filter((link) => /^\/destinations\/[^?#]+/.test(link.href)).map((link) => link.href),
  );
  const hasTrust = /china-based|licensed inbound|no forced shopping|registered team/i.test(text);
  const hasFaq = /FAQPage/.test(html) || /Questions this guide helps answer/i.test(text);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const intent = classifyIntent(pathname);
  const score = Math.min(
    100,
    (response.ok ? 5 : 0) +
      (title.length >= 30 && title.length <= 70 ? 5 : 2) +
      (description.length >= 70 && description.length <= 165 ? 5 : 2) +
      (wordCount >= 900 ? 10 : wordCount >= 600 ? 7 : 3) +
      (hasBridge ? 15 : 0) +
      (hasMidPrompt ? 10 : 0) +
      (contextualPlanningLink ? 15 : planningLinks.length ? 7 : 0) +
      (journeyLinks.length ? 10 : 0) +
      (internalJournalLinks.length >= 2 ? 8 : internalJournalLinks.length ? 4 : 0) +
      (destinationLinks.length ? 5 : 0) +
      (hasTrust ? 5 : 0) +
      (hasFaq ? 5 : 0) +
      (intent === "decision" ? 7 : intent === "planning" ? 4 : 2),
  );

  rows.push({
    slug: pathname.split("/").pop(),
    intent,
    score,
    wordCount,
    journeySlug,
    planningLinks: planningLinks.length,
    journeyLinks: journeyLinks.length,
    journalLinks: internalJournalLinks.length,
    destinationLinks: destinationLinks.length,
    hasBridge,
    hasMidPrompt,
    hasContextualInquiry: Boolean(contextualPlanningLink),
    hasTrust,
    hasFaq,
    titleLength: title.length,
    descriptionLength: description.length,
  });
}

rows.sort((a, b) => a.score - b.score || a.slug.localeCompare(b.slug));
const summary = {
  total: rows.length,
  averageScore: Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length),
  byIntent: Object.fromEntries(
    ["decision", "planning", "utility", "trust"].map((intent) => [
      intent,
      rows.filter((row) => row.intent === intent).length,
    ]),
  ),
  missingBridge: rows.filter((row) => !row.hasBridge).map((row) => row.slug),
  missingContextualInquiry: rows.filter((row) => !row.hasContextualInquiry).map((row) => row.slug),
  missingTrust: rows.filter((row) => !row.hasTrust).map((row) => row.slug),
  lowInternalLinks: rows.filter((row) => row.journalLinks < 2).map((row) => row.slug),
};

console.log(JSON.stringify({ summary, rows }, null, 2));

function classifyIntent(pathname) {
  if (/itinerary|tour-cost|tour-vs|worth-it|choose-private|what-is-included|tours-with|days-or|how-many-days/.test(pathname)) {
    return "decision";
  }
  if (/transport|where-to-stay|best-time|airport|great-wall|terracotta|forbidden-city|panda|jiuzhaigou|zhangjiajie|leshan|family|older|honeymoon|singapore/.test(pathname)) {
    return "planning";
  }
  if (/ttg-asia/.test(pathname)) return "trust";
  return "utility";
}

function stripHtml(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function unique(items) {
  return [...new Set(items)];
}
