import { readFile } from "node:fs/promises";

const files = [
  "content/journal/commercial.ts",
  "content/journal/senior-cluster.ts",
  "content/journal/published.ts",
];
const source = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");
const strategy = await readFile("content/journal/search-strategy.ts", "utf8");
const articleSlugs = unique([...source.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]));
const strategySlugs = unique(
  [
    ...strategy.matchAll(
      /\[\s*"([^"]+)",\s*"(?:answer|compare|plan|evaluate|trust)",\s*"[^"]+",\s*[123],?\s*\]/g,
    ),
  ].map((match) => match[1]),
);
const keywords = [
  ...strategy.matchAll(
    /\[\s*"[^"]+",\s*"(?:answer|compare|plan|evaluate|trust)",\s*"([^"]+)",\s*[123],?\s*\]/g,
  ),
].map((match) => match[1].toLowerCase());

const missing = articleSlugs.filter((slug) => !strategySlugs.includes(slug));
const unknown = strategySlugs.filter((slug) => !articleSlugs.includes(slug));
const duplicateKeywords = keywords.filter((keyword, index) => keywords.indexOf(keyword) !== index);

if (missing.length || unknown.length || duplicateKeywords.length) {
  console.error("Journal search strategy audit failed.");
  if (missing.length) console.error(`Missing roles: ${missing.join(", ")}`);
  if (unknown.length) console.error(`Unknown articles: ${unknown.join(", ")}`);
  if (duplicateKeywords.length)
    console.error(`Duplicate keywords: ${unique(duplicateKeywords).join(", ")}`);
  process.exit(1);
}

console.log(
  `Journal search strategy passed: ${articleSlugs.length} articles, ${keywords.length} unique primary keywords.`,
);

function unique(items) {
  return [...new Set(items)];
}
