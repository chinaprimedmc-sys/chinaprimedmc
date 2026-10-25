import { readFile } from "node:fs/promises";

const baseUrl = new URL(process.env.AUDIT_BASE_URL || "http://127.0.0.1:3165");
const manifest = await readFile("content/journal/public-manifest.ts", "utf8");
const expectedArticles = [...manifest.matchAll(/^\s{2}"([^\"]+)",$/gm)].length;
const sitemap = await fetch(new URL("/sitemap.xml", baseUrl)).then((response) => response.text());
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((pathname) => /^\/journal\/[^/]+$/.test(pathname));

const rows = [];
for (let index = 0; index < paths.length; index += 8) {
  const batch = paths.slice(index, index + 8);
  rows.push(
    ...(await Promise.all(
      batch.map(async (pathname) => {
        const response = await fetch(new URL(pathname, baseUrl));
        const html = await response.text();
        const articleStart = html.search(/<section[^>]*id="article"/i);
        const articleEnd = html.search(/<span[^>]*id="article-content-end"/i);
        const articleHtml =
          articleStart !== -1
            ? html.slice(articleStart, articleEnd > articleStart ? articleEnd : html.length)
            : "";
        const text = stripHtml(articleHtml);
        return {
          pathname,
          status: response.status,
          articleImages: (articleHtml.match(/<img\b/gi) ?? []).length,
          hasAnswer: /The Answer, Briefly/i.test(articleHtml),
          hasJourney: /data-journey-slug="[^"]+"/.test(html),
          hasJourneyLink: /href="\/tours\/[^"?#]+/.test(html),
          hasPlanningLink: /href="\/start-planning\?[^"#]+journey=/.test(html),
          hasTrustState: /Sources Checked|Published Record/.test(html),
          hasArticleSchema: /"@type":"BlogPosting"/.test(html),
          hasBreadcrumbs: /"@type":"BreadcrumbList"/.test(html),
          words: text.split(/\s+/).filter(Boolean).length,
        };
      }),
    )),
  );
}

const failures = rows.filter(
  (row) =>
    row.status !== 200 ||
    row.articleImages !== 0 ||
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
