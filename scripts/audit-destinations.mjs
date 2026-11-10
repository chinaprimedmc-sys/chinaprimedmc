/** Audit actual destination data, discoverability, redirects, media and source links. */
import assert from "node:assert/strict";
import { registerHooks, stripTypeScriptTypes } from "node:module";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve, relative } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
registerHooks({
  resolve(specifier, context, next) {
    let path;
    if (specifier.startsWith("@/")) path = resolve(root, specifier.slice(2));
    else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:"))
      path = fileURLToPath(new URL(specifier, context.parentURL));
    if (path) {
      for (const candidate of [path + ".ts", path + "/index.ts"])
        if (existsSync(candidate))
          return { url: pathToFileURL(candidate).href, shortCircuit: true };
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url.endsWith(".ts"))
      return {
        format: "module",
        source: stripTypeScriptTypes(readFileSync(fileURLToPath(url), "utf8")),
        shortCircuit: true,
      };
    return next(url, context);
  },
});

const {
  explorerDestinations,
  destinationRegions,
  destinationInterests,
  journeyIncludesDestination,
} = await import("../content/destinations/explorer.ts");
const { destinationEditorial } = await import("../content/destinations/editorial.ts");
const { destinationGuideAssets } = await import("../content/destinations/guide-assets.ts");
const { destinationPlanningGuides } = await import("../content/destinations/planning-guides.ts");
const { journalArticles } = await import("../content/journal/index.ts");
const { destinations } = await import("../content/destinations/index.ts");
const { discoveryIndex } = await import("../content/discovery/index.ts");
const { publicRouteSlugs } = await import("../config/public-route-slugs.ts");
const { journeyCatalog } = await import("../content/tours/catalog.ts");
const { default: sitemap } = await import("../app/sitemap.ts");
const slugs = explorerDestinations.map((item) => item.id);
const same = (actual, message) => assert.deepEqual([...actual].sort(), [...slugs].sort(), message);
assert.equal(new Set(slugs).size, slugs.length, "Duplicate destination slug");
same(Object.keys(destinationEditorial), "Editorial coverage differs");
same(Object.keys(destinationGuideAssets), "Media coverage differs");
same(publicRouteSlugs.destinations, "Public route manifest differs");
same(
  destinations.map((item) => item.slug),
  "Search adapter differs",
);
same(
  discoveryIndex
    .filter((item) => item.type === "destination")
    .map((item) => item.href.split("/").at(-1)),
  "Search index differs",
);
same(
  (await sitemap()).flatMap((item) => {
    const match = new URL(item.url).pathname.match(/^\/destinations\/([^/]+)$/);
    return match ? [match[1]] : [];
  }),
  "Sitemap differs",
);

const redirects = new Map(
  [
    ...readFileSync(resolve(root, "next.config.ts"), "utf8").matchAll(
      /source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"/g,
    ),
  ].map((match) => [match[1], match[2]]),
);
const media = new Set();
for (const destination of explorerDestinations) {
  const { id } = destination;
  assert.ok(/^[a-z0-9-]+$/.test(id), `Invalid slug: ${id}`);
  assert.ok(
    destinationRegions.some((item) => item.id === destination.region),
    `Unknown region: ${id}`,
  );
  assert.ok(destination.interests.length, `Missing interests: ${id}`);
  assert.ok(
    destination.interests.every((interest) =>
      destinationInterests.some((item) => item.id === interest),
    ),
    `Unknown interest: ${id}`,
  );
  assert.equal(destination.guideHref, `/destinations/${id}`);
  assert.ok(!redirects.has(`/destinations/${id}`), `Published destination is redirected: ${id}`);
  assert.ok(destination.relatedDestinationIds.length, `Missing route combinations: ${id}`);
  assert.equal(
    new Set(destination.relatedDestinationIds).size,
    destination.relatedDestinationIds.length,
    `Duplicate route combination: ${id}`,
  );
  assert.ok(
    destination.relatedDestinationIds.every((slug) => slugs.includes(slug) && slug !== id),
    `Invalid route combination: ${id}`,
  );
  const editorial = destinationEditorial[id];
  for (const key of [
    "bestTime",
    "orientation",
    "arrival",
    "gettingAround",
    "stayStrategy",
    "firstTimerNote",
  ])
    assert.ok(editorial[key]?.trim(), `Missing ${key}: ${id}`);
  assert.equal(editorial.experiences.length, 3, `Missing experiences: ${id}`);
  assert.equal(editorial.planningNotes.length, 3, `Missing planning notes: ${id}`);
  assert.ok(
    editorial.faqs.length >= 3 && editorial.faqs.every((item) => item.question && item.answer),
    `Missing FAQ: ${id}`,
  );
  assert.ok(
    editorial.itinerary.length &&
      editorial.itinerary.every((item) => item.day && item.title && item.description),
    `Missing itinerary: ${id}`,
  );
  for (const key of ["culturalStory", "foodStory"])
    assert.ok(
      editorial[key].title &&
        editorial[key].paragraphs.length === 2 &&
        editorial[key].paragraphs.every(Boolean),
      `Missing story: ${id}`,
    );
  assert.ok(
    journeyCatalog.some((journey) => journeyIncludesDestination(destination, journey)),
    `No real journey or day tour: ${id}`,
  );
  const assets = destinationGuideAssets[id];
  assert.deepEqual(destination.image, assets.hero, `Hero source mismatch: ${id}`);
  assert.ok(assets.gallery.length >= 2, `Insufficient gallery: ${id}`);
  for (const asset of [assets.hero, ...assets.gallery]) {
    assert.ok(asset.alt && asset.width > 0 && asset.height > 0, `Incomplete media: ${asset.src}`);
    assert.ok(
      asset.src.startsWith("/") && existsSync(resolve(root, "public", asset.src.slice(1))),
      `Missing media: ${asset.src}`,
    );
    media.add(asset.src);
  }
}

for (const [slug, guide] of Object.entries(destinationPlanningGuides)) {
  const destination = explorerDestinations.find((item) => item.id === slug);
  assert.ok(destination, `Planning guide without destination: ${slug}`);
  assert.ok(guide.answer && guide.serviceScope && guide.seoTitle && guide.seoDescription);
  assert.ok(guide.stays.length >= 3 && guide.hotelAreas.length >= 2 && guide.tradeoffs.length >= 3);
  assert.ok(guide.products.length >= 1, `No relevant published product: ${slug}`);
  for (const product of guide.products) {
    const journey = journeyCatalog.find((item) => item.slug === product.slug);
    assert.ok(
      journey && journeyIncludesDestination(destination, journey),
      `Unrelated product: ${slug}/${product.slug}`,
    );
    assert.ok(product.label && product.reason, `Missing product rationale: ${slug}`);
  }
  for (const choice of guide.tradeoffs) {
    if (choice.articleSlug) {
      assert.ok(choice.articleLabel, `Missing contextual link label: ${choice.articleSlug}`);
      assert.ok(
        guide.articles.some((article) => article.slug === choice.articleSlug),
        `Contextual article must belong to the curated reading list: ${choice.articleSlug}`,
      );
    }
  }
  for (const article of guide.articles)
    assert.ok(
      journalArticles.some((item) => item.slug === article.slug),
      `Unpublished article: ${article.slug}`,
    );
  for (const connection of guide.connections)
    assert.ok(
      destination.relatedDestinationIds.includes(connection.slug) && connection.advice,
      `Invalid onward advice: ${slug}`,
    );
  assert.ok(guide.attractions.every((name) => name.trim().length > 0));
}

let checkedLinks = 0;
const legacyLinks = [];
function scan(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) scan(path);
    else if (/\.(tsx?|md)$/.test(entry.name)) {
      for (const match of readFileSync(path, "utf8").matchAll(
        /["'`(]\/destinations\/([a-z][a-z0-9-]*)(?=["'`\s)#?])/g,
      )) {
        const slug = match[1];
        if (slugs.includes(slug)) checkedLinks++;
        else if (redirects.has(`/destinations/${slug}`))
          legacyLinks.push(`${relative(root, path)}: ${slug}`);
        else assert.fail(`Unpublished destination link: ${relative(root, path)} -> ${slug}`);
      }
    }
  }
}
for (const directory of ["app", "components", "content", "features", "lib"])
  scan(resolve(root, directory));
assert.equal(
  legacyLinks.length,
  0,
  `Replace links relying on fallback redirects:\n${legacyLinks.join("\n")}`,
);
console.log(
  `Destination audit passed: ${slugs.length} guides, ${media.size} media assets, ${checkedLinks} source links; routes, search and sitemap agree.`,
);
