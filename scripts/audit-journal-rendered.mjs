import { readFile } from "node:fs/promises";
import { chromium } from "@playwright/test";

const baseUrl = new URL(process.env.AUDIT_BASE_URL || "http://127.0.0.1:3165");
const manifest = await readFile("content/journal/public-manifest.ts", "utf8");
const expectedArticles = [...manifest.matchAll(/^\s{2}"([^\"]+)",$/gm)].length;
const sitemap = await fetch(new URL("/sitemap.xml", baseUrl)).then((response) => response.text());
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((pathname) => /^\/journal\/[^/]+$/.test(pathname));

const rows = [];
const browser = await chromium.launch();
const context = await browser.newContext();
await context.route("**/*", (route) =>
  new URL(route.request().url()).origin === baseUrl.origin ? route.continue() : route.abort(),
);
try {
  for (let index = 0; index < paths.length; index += 8) {
    const batch = paths.slice(index, index + 8);
    rows.push(
      ...(await Promise.all(
        batch.map(async (pathname) => {
          const page = await context.newPage();
          try {
            const response = await page.goto(new URL(pathname, baseUrl).href, {
              waitUntil: "domcontentloaded",
            });
            // React can stream the end marker into a later chunk after related cards.
            // Inspect the composed DOM, not raw source positions across those chunks.
            await page.locator("#article #article-content-end").waitFor({ state: "attached" });
            const html = await page.content();
            const articleHtml = await page.locator("#article").innerHTML();
            const text = stripHtml(articleHtml);
            const images = [...articleHtml.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
            const schemaNodes = [
              ...html.matchAll(
                /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
              ),
            ].flatMap((match) => {
              const schema = JSON.parse(match[1]);
              return schema["@graph"] ?? [schema];
            });
            const schemaTypes = new Set(schemaNodes.flatMap((node) => [node["@type"]].flat()));
            return {
              pathname,
              status: response.status(),
              articleImages: images.length,
              invalidImages: images.filter(
                (image) =>
                  !/\balt="[^"]*"/i.test(image) ||
                  (!/\bdata-nimg="fill"/i.test(image) &&
                    (!/\bwidth="\d+"/i.test(image) || !/\bheight="\d+"/i.test(image))),
              ).length,
              hasAnswer: /The Answer, Briefly/i.test(articleHtml),
              hasJourney: /data-journey-slug="[^"]+"/.test(html),
              hasJourneyLink: /href="\/tours\/[^"?#]+/.test(html),
              hasPlanningLink: /href="\/start-planning\?[^"#]+journey=/.test(html),
              hasTrustState: /Sources Checked|Published Record/.test(html),
              hasArticleSchema: schemaTypes.has("BlogPosting"),
              hasBreadcrumbs: schemaTypes.has("BreadcrumbList"),
              words: text.split(/\s+/).filter(Boolean).length,
            };
          } finally {
            await page.close();
          }
        }),
      )),
    );
  }
} finally {
  await browser.close();
}

const failures = rows.filter(
  (row) =>
    row.status !== 200 ||
    row.invalidImages !== 0 ||
    !row.hasAnswer ||
    !row.hasJourney ||
    !row.hasJourneyLink ||
    !row.hasPlanningLink ||
    !row.hasTrustState ||
    !row.hasArticleSchema ||
    !row.hasBreadcrumbs ||
    row.words < 450,
);

console.log(
  JSON.stringify(
    {
      total: rows.length,
      averageArticleWords: Math.round(
        rows.reduce((sum, row) => sum + row.words, 0) / Math.max(rows.length, 1),
      ),
      articleImages: rows.reduce((sum, row) => sum + row.articleImages, 0),
      failures,
    },
    null,
    2,
  ),
);

if (rows.length !== expectedArticles || failures.length) process.exit(1);

function stripHtml(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}
