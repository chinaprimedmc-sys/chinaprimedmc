import fs from "node:fs";

const linkSource = fs.readFileSync("content/journal/journey-links.ts", "utf8");
const catalogSource = fs.readFileSync("content/tours/catalog.ts", "utf8");
const publishedSource = fs.readFileSync("content/journal/published.ts", "utf8");
const commercialSource = fs.readFileSync("content/journal/commercial.ts", "utf8");
const seniorSource = fs.readFileSync("content/journal/senior-cluster.ts", "utf8");
const manifestSource = fs.readFileSync("content/journal/public-manifest.ts", "utf8");

const sourceSlugs = new Set([
  ...matches(publishedSource, /slug:\s*"([^"]+)"/g),
  ...matches(commercialSource, /slug:\s*"([^"]+)"/g),
  ...matches(seniorSource, /slug:\s*"([^"]+)"/g),
]);
const articleSlugs = matches(manifestSource, /^\s{2}"([^"]+)",$/gm).filter((slug) =>
  sourceSlugs.has(slug),
);
const linkedArticles = new Set([
  ...matches(linkSource, /^\s+"([^"]+)",?$/gm),
  ...matches(linkSource, /^\s+"([^"]+)":\s*\{/gm),
]);
const journeyReferences = unique([...matches(linkSource, /const\s+[A-Z_]+\s*=\s*"([^"]+)"/g)]);
const catalogSlugs = new Set([...matches(catalogSource, /tour\.slug\s*===\s*"([^"]+)"/g)]);

const missingArticleLinks = articleSlugs.filter((slug) => !linkedArticles.has(slug));
const missingJourneys = journeyReferences.filter((slug) => !catalogSlugs.has(slug));
const unusedJourneys = [...catalogSlugs].filter((slug) => !journeyReferences.includes(slug));

const issues = [];
if (missingArticleLinks.length) {
  issues.push(`Articles without a primary journey: ${missingArticleLinks.join(", ")}`);
}
if (missingJourneys.length) {
  issues.push(`Journey references missing from catalog: ${missingJourneys.join(", ")}`);
}
if (unusedJourneys.length) {
  issues.push(`Journeys without linked reading: ${unusedJourneys.join(", ")}`);
}

if (issues.length) {
  console.error(`Journey-journal audit failed:\n- ${issues.join("\n- ")}`);
  process.exit(1);
}

console.log(
  `Journey-journal audit passed: ${articleSlugs.length} articles connected across ${journeyReferences.length} journeys.`,
);

function matches(source, pattern) {
  return [...source.matchAll(pattern)].map((match) => match[1]);
}

function unique(items) {
  return [...new Set(items)];
}
