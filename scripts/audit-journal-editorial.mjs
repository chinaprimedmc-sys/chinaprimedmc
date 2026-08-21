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

const articleSlugs = unique(
  [...articleSource.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]),
);
const upgrades = [
  ...editorialSource.matchAll(
    /^\s{2}"([^"]+)": \{\n\s{4}title: "([^"]+)",\n\s{4}seoTitle: "([^"]+)",/gm,
  ),
].map(([, slug, title, seoTitle]) => ({ slug, title, seoTitle }));
const upgradeSlugs = upgrades.map(({ slug }) => slug);

const missing = articleSlugs.filter((slug) => !upgradeSlugs.includes(slug));
const unknown = upgradeSlugs.filter((slug) => !articleSlugs.includes(slug));
const duplicateTitles = upgrades
  .map(({ title }) => title.toLowerCase())
  .filter((title, index, titles) => titles.indexOf(title) !== index);
const invalidDisplayTitles = upgrades.filter(({ title }) => title.length < 28 || title.length > 88);
const invalidSeoTitles = upgrades.filter(
  ({ seoTitle }) => seoTitle.length < 28 || seoTitle.length > 65,
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
  `Journal editorial audit passed: ${upgrades.length} distinct high-value titles with complete coverage.`,
);

function unique(items) {
  return [...new Set(items)];
}
