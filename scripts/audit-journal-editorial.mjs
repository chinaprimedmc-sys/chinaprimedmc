import { readFile } from "node:fs/promises";

const articleSource = (
  await Promise.all(
    [
      "content/journal/commercial.ts",
      "content/journal/senior-cluster.ts",
      "content/journal/published.ts",
      "content/journal/audience-experience.ts",
    ].map((file) => readFile(file, "utf8")),
  )
).join("\n");
const editorialSource = await readFile("content/journal/editorial-upgrades.ts", "utf8");
const dayTourSources = await Promise.all(
  ["mutianyu", "shanghai", "xian", "chengdu", "guilin"].map((city) =>
    readFile(`content/journal/day-tours/${city}.ts`, "utf8"),
  ),
);
const manifest = await readFile("content/journal/public-manifest.ts", "utf8");
const publicSlugs = unique([...manifest.matchAll(/^\s{2}"([^"]+)",$/gm)].map((match) => match[1]));

const generatedDayTourSlugs = unique(
  dayTourSources.flatMap((source) =>
    [...source.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]),
  ),
);
const dayTourGroups = dayTourSources.map((source, index) => {
  const guides = [
    ...source.matchAll(/\{\n\s+slug: "([^"]+)",\n\s+title: "([^"]+)",\n\s+seoTitle: "([^"]+)"/g),
  ].map(([, slug, title, seoTitle]) => ({ slug, title, seoTitle }));
  return { city: ["Mutianyu", "Shanghai", "Xi'an", "Chengdu", "Guilin"][index], guides };
});
const sourceSlugs = unique([
  ...[...articleSource.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]),
  ...generatedDayTourSlugs,
]);
const articleSlugs = publicSlugs.filter((slug) => sourceSlugs.includes(slug));
const upgrades = [
  ...editorialSource.matchAll(
    /^\s{2}"([^"]+)": \{\n\s{4}title: "([^"]+)",\n\s{4}seoTitle: "([^"]+)",/gm,
  ),
].map(([, slug, title, seoTitle]) => ({ slug, title, seoTitle }));
const upgradeSlugs = upgrades.map(({ slug }) => slug);

const missing = articleSlugs.filter(
  (slug) => !upgradeSlugs.includes(slug) && !generatedDayTourSlugs.includes(slug),
);
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
const invalidDayTourCounts = dayTourGroups.filter(({ guides }) => guides.length !== 5);
const invalidDayTourTitles = dayTourGroups.flatMap(({ city, guides }) =>
  guides
    .filter(
      ({ title, seoTitle }) =>
        title.length < 28 || title.length > 88 || seoTitle.length < 28 || seoTitle.length > 65,
    )
    .map(({ slug, title, seoTitle }) => ({
      city,
      slug,
      titleLength: title.length,
      seoTitleLength: seoTitle.length,
    })),
);

if (
  missing.length ||
  unknown.length ||
  duplicateTitles.length ||
  invalidDisplayTitles.length ||
  invalidSeoTitles.length ||
  invalidDayTourCounts.length ||
  invalidDayTourTitles.length
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
  if (invalidDayTourCounts.length) {
    console.error(
      `Each day-tour cluster must contain exactly five guides: ${invalidDayTourCounts
        .map(({ city, guides }) => `${city} (${guides.length})`)
        .join(", ")}`,
    );
  }
  if (invalidDayTourTitles.length) {
    console.error(
      `Day-tour title length: ${invalidDayTourTitles
        .map(
          ({ city, slug, titleLength, seoTitleLength }) =>
            `${city}/${slug} (title ${titleLength}, SEO ${seoTitleLength})`,
        )
        .join(", ")}`,
    );
  }
  process.exit(1);
}

console.log(
  `Journal editorial audit passed: ${publicUpgrades.length} public editorial upgrades and ${dayTourGroups.length} five-article day-tour clusters.`,
);

function unique(items) {
  return [...new Set(items)];
}
