import { check } from "linkinator";
import { mkdir, writeFile } from "node:fs/promises";
const base = new URL(process.env.PREVIEW_URL || "http://127.0.0.1:3148");
if (!["localhost", "127.0.0.1", "[::1]"].includes(base.hostname))
  throw new Error(
    "Link audit requires a local preview; production is never crawled by this script.",
  );
const rewrite = (url) =>
  url.replace(/^https?:\/\/(?:www\.)?chinaprimedmc\.com(?=\/|$)/, base.origin);
const result = await check({
  path: base.href,
  sitemap: true,
  recurse: true,
  concurrency: 6,
  timeout: 30_000,
  urlRewriteExpressions: [
    { pattern: /^https?:\/\/(?:www\.)?chinaprimedmc\.com(?=\/|$)/, replacement: base.origin },
  ],
  linksToSkip: async (url) => new URL(rewrite(url), base).origin !== base.origin,
});
await mkdir("artifacts/quality", { recursive: true });
await writeFile("artifacts/quality/links.json", JSON.stringify(result, null, 2));
const broken = result.links.filter((link) => link.state === "BROKEN");
for (const link of broken) console.error(`${link.status}: ${link.url}`);
console.log(`Local link audit: ${result.links.length} URLs, ${broken.length} broken.`);
if (broken.length) process.exitCode = 1;
