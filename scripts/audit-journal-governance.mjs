import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const TODAY = new Date().toISOString().slice(0, 10);
const journalDirectory = "content/journal";
const manifest = await readFile(`${journalDirectory}/public-manifest.ts`, "utf8");
const strategy = await readFile(`${journalDirectory}/search-strategy.ts`, "utf8");
const links = await readFile(`${journalDirectory}/journey-links.ts`, "utf8");
const governance = await readFile(`${journalDirectory}/governance.ts`, "utf8");
const catalog = await readFile("content/tours/catalog.ts", "utf8");
const journalFiles = await listFiles(journalDirectory, ".ts");
const journalSources = await Promise.all(journalFiles.map((file) => readFile(file, "utf8")));
const source = journalSources.join("\n");
const markdownFiles = await listFiles(`${journalDirectory}/articles`, ".md");
const markdown = new Map(
  await Promise.all(
    markdownFiles.map(async (file) => [file, await readFile(file, "utf8")]),
  ),
);

const publicSlugs = unique([...manifest.matchAll(/^\s{2}"([^"]+)",$/gm)].map((match) => match[1]));
const strategyRows = [...strategy.matchAll(
  /\[\s*"([^"]+)",\s*"(?:answer|compare|plan|evaluate|trust)",\s*"([^"]+)",\s*[123],?\s*\]/g,
)].map(([, slug, intent]) => ({ slug, intent }));
const journeyConstants = new Map(
  [...links.matchAll(/const\s+([A-Z_]+)\s*=\s*"([^"]+)"/g)].map(([, name, slug]) => [name, slug]),
);
const primaryJourneys = new Map();
const alternativeCounts = new Map();
for (const match of links.matchAll(
  /\{\s*journey:\s*([A-Z_]+),\s*(?:alternatives:\s*\[([^\]]*)\],\s*)?articles:\s*\[([\s\S]*?)\],\s*\},/g,
)) {
  const [, journeyConstant, alternatives = "", articles] = match;
  const journey = journeyConstants.get(journeyConstant);
  const alternativeCount = alternatives.match(/[A-Z_]+/g)?.length ?? 0;
  for (const slug of articles.match(/"([^"]+)"/g)?.map((value) => value.slice(1, -1)) ?? []) {
    if (journey) primaryJourneys.set(slug, journey);
    alternativeCounts.set(slug, alternativeCount);
  }
}
for (const match of links.matchAll(
  /"([^"]+)":\s*\{\s*primaryJourney:\s*([A-Z_]+)([\s\S]*?)\},/g,
)) {
  const [, slug, journeyConstant, rule] = match;
  const journey = journeyConstants.get(journeyConstant);
  if (journey) primaryJourneys.set(slug, journey);
  const alternatives = rule.match(/alternativeJourneys:\s*\[([^\]]*)\]/)?.[1] ?? "";
  alternativeCounts.set(slug, alternatives.match(/[A-Z_]+/g)?.length ?? 0);
}
const sourceSlugs = new Set([...source.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]));
const catalogSlugs = new Set(
  [...catalog.matchAll(/^\s{2}"([^"]+)",$/gm)].map((match) => match[1]),
);
const officialRuleSlugs = new Set(
  [...governance.matchAll(/^\s+"([^"]+)",$/gm)].map((match) => match[1]).slice(0, 10),
);
const reviewedOn = governance.match(/const REVIEWED_ON = "(\d{4}-\d{2}-\d{2})"/)?.[1];
const nextReview = governance.match(/const NEXT_REVIEW = "(\d{4}-\d{2}-\d{2})"/)?.[1];
const strategyBySlug = new Map(strategyRows.map((row) => [row.slug, row.intent]));
const failures = [];

for (const slug of publicSlugs) {
  if (!sourceSlugs.has(slug)) failures.push(`${slug}: no TypeScript article source`);
  if (!strategyBySlug.has(slug)) failures.push(`${slug}: missing primary intent`);
  if (!primaryJourneys.has(slug)) failures.push(`${slug}: missing primary journey`);
  if (primaryJourneys.has(slug) && !catalogSlugs.has(primaryJourneys.get(slug))) {
    failures.push(`${slug}: primary journey is not in the published catalog`);
  }
  if (officialRuleSlugs.has(slug) && !hasOfficialEvidence(slug)) {
    failures.push(`${slug}: official-required article lacks a primary-source record`);
  }
}

const intents = strategyRows.filter((row) => publicSlugs.includes(row.slug)).map((row) => row.intent);
const duplicateIntents = intents.filter((intent, index) => intents.indexOf(intent) !== index);
if (duplicateIntents.length) failures.push(`duplicate primary intents: ${unique(duplicateIntents).join(", ")}`);
if (strategyRows.filter((row) => publicSlugs.includes(row.slug)).length !== publicSlugs.length) {
  failures.push("search strategy does not cover every public article");
}
if (!isDate(reviewedOn)) failures.push("governance review date is invalid");
if (!isDate(nextReview) || nextReview < TODAY) failures.push("governance next review date is expired or invalid");

console.log(
  JSON.stringify(
    {
      publishedArticles: publicSlugs.length,
      typeScriptArticleSources: publicSlugs.filter((slug) => sourceSlugs.has(slug)).length,
      markdownSourceFiles: markdown.size,
      reviewedOn,
      nextReview,
      officialRequiredArticles: officialRuleSlugs.size,
      failures,
    },
    null,
    2,
  ),
);

if (failures.length) process.exit(1);
console.log(`Journal governance audit passed: ${publicSlugs.length} published articles are governed.`);

function hasOfficialEvidence(slug) {
  const content = [...markdown.values()].find((value) => value.includes(`slug: "${slug}"`));
  return Boolean(
    content &&
      /https?:\/\/(?:[\w.-]+\.)?(?:nia\.gov\.cn|gov\.cn|panda\.org\.cn|dpm\.org\.cn|bcia\.com\.cn|customs\.gov\.cn|bmy\.com\.cn)/i.test(
        content,
      ),
  );
}

function isDate(value) {
  return Boolean(value && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`)));
}

async function listFiles(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? listFiles(fullPath, extension) : entry.name.endsWith(extension) ? [fullPath] : [];
    }),
  );
  return files.flat();
}

function unique(items) {
  return [...new Set(items)];
}
