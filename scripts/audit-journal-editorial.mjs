import { readFile } from "node:fs/promises";

const articleSource = (
  await Promise.all(
    [
      "content/journal/commercial.ts",
      "content/journal/senior-cluster.ts",
      "content/journal/published.ts",
    ].map((file) => readFile(file, "utf8")),
  )
).join("\n");
const editorialSource = await readFile("content/journal/editorial-upgrades.ts", "utf8");
const manifest = await readFile("content/journal/public-manifest.ts", "utf8");
const publicSlugs = unique([...manifest.matchAll(/^\s{2}"([^"]+)",$/gm)].map((match) => match[1]));

const sourceSlugs = unique(
  [...articleSource.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]),
);
const articleSlugs = publicSlugs.filter((slug) => sourceSlugs.includes(slug));
const upgrades = [
  ...editorialSource.matchAll(
    /^\s{2}"([^"]+)": \{\n\s{4}title: "([^"]+)",\n\s{4}seoTitle: "([^"]+)",/gm,
  ),
].map(([, slug, title, seoTitle]) => ({ slug, title, seoTitle }));
const upgradeSlugs = upgrades.map(({ slug }) => slug);

const missing = articleSlugs.filter((slug) => !upgradeSlugs.includes(slug));
const unknown = publicSlugs.filter((slug) => !sourceSlugs.includes(slug));
const duplicateTitles = upgrades
  .map(({ title }) => title.toLowerCase())
  .filter((title, index, titles) => titles.indexOf(title) !== index);
const publicUpgrades = upgrades.filter(({ slug }) => publicSlugs.includes(slug));
const invalidDisplayTitles = publicUpgrades.filter(
  ({ title }) => title.length < 28 || title.length > 88,
);
const invalidSeoTitles = upgrades.filter(
  ({ slug, seoTitle }) =>
    publicSlugs.includes(slug) && (seoTitle.length < 28 || seoTitle.length > 65),
);

if (
  missing.length ||
  unknown.length ||
  duplicateTitles.length ||
  invalidDisplayTitles.length ||
  invalidSeoTitles.length
) {
  console.error("Journal editorial audit failed.");
  if (missing.length) console.error(`Missing editorial upgrades: ${missing.join(", ")}`);
  if (unknown.length) console.error(`Unknown editorial upgrades: ${unknown.join(", ")}`);
  if (duplicateTitles.length)
    console.error(`Duplicate titles: ${unique(duplicateTitles).join(", ")}`);
  if (invalidDisplayTitles.length) {
    console.error(
      `Display title length: ${invalidDisplayTitles
        .map(({ slug, title }) => `${slug} (${title.length})`)
        .join(", ")}`,
    );
  }
  if (invalidSeoTitles.length) {
    console.error(
      `SEO title length: ${invalidSeoTitles
        .map(({ slug, seoTitle }) => `${slug} (${seoTitle.length})`)
        .join(", ")}`,
    );
  }
  process.exit(1);
}

console.log(
  `Journal editorial audit passed: ${publicUpgrades.length} public articles with complete editorial coverage.`,
);

function unique(items) {
  return [...new Set(items)];
}
