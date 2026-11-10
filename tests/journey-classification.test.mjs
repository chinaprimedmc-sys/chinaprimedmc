import assert from "node:assert/strict";
import test from "node:test";
import { registerHooks, stripTypeScriptTypes } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
registerHooks({
  resolve(specifier, context, next) {
    let path;
    if (specifier.startsWith("@/")) path = resolve(root, specifier.slice(2));
    else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:"))
      path = fileURLToPath(new URL(specifier, context.parentURL));
    if (path) {
      for (const candidate of [path + ".ts", path + "/index.ts"]) {
        if (existsSync(candidate))
          return { url: pathToFileURL(candidate).href, shortCircuit: true };
      }
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

const { publicJourneySlugs, journeyCatalog } = await import("../content/tours/catalog.ts");
const { journeyClassification, journeyCategories, getJourneyClassification } =
  await import("../content/tours/classification.ts");
const { journeyTiers } = await import("../content/tours/tiers.ts");
const { buildExplorerItems } = await import("../lib/tours/journey-explorer-items.ts");
const { itemsToIndex, readExplorerState, writeExplorerState, runExplorer, activeFilterCount } =
  await import("../lib/tours/journey-explorer.ts");

const items = buildExplorerItems();
const index = itemsToIndex(items);

test("all public products have one complete primary assignment shared by cards, tiers and detail labels", () => {
  assert.deepEqual(Object.keys(journeyClassification).sort(), [...publicJourneySlugs].sort());
  for (const slug of publicJourneySlugs) {
    const assignment = getJourneyClassification(slug);
    const card = items.find((item) => item.slug === slug);
    const catalog = journeyCatalog.find((item) => item.slug === slug);
    assert.ok(
      assignment.purposeZh.trim() && assignment.audienceZh.trim() && assignment.boundaryZh.trim(),
      slug,
    );
    assert.equal(journeyTiers[slug], assignment.tier, slug);
    assert.equal(card.categoryLabel, assignment.categoryLabel, slug);
    assert.equal(catalog.commercialRoleLabel, assignment.categoryLabel, slug);
  }
});

test("primary categories keep dedicated family and slower journeys distinct from first-visit routes", () => {
  const select = (category) =>
    runExplorer(index, readExplorerState(new URLSearchParams({ category })))
      .map(({ item }) => item.slug)
      .sort();
  assert.deepEqual(select("family"), ["china-family-tour-with-pandas-12-day-private-tour"]);
  assert.deepEqual(select("unhurried-china"), ["china-at-an-easier-pace-12-day-private-tour"]);
  assert.deepEqual(select("first-china"), [
    "beijing-xian-chengdu-shanghai-private-11-day-tour",
    "beijing-xian-shanghai-private-10-day-tour",
  ]);
  for (const category of Object.keys(journeyCategories)) {
    assert.ok(select(category).length > 0, category);
  }
});

test("category selections compose with tiers, survive shared URLs and discard unknown IDs", () => {
  const state = readExplorerState(
    new URLSearchParams("category=wellness,business,unknown&tier=tailor-made-example"),
  );
  assert.deepEqual(state.category, ["wellness", "business"]);
  assert.deepEqual(readExplorerState(writeExplorerState(state)), state);
  assert.equal(activeFilterCount(state), 2);
  assert.deepEqual(
    runExplorer(index, state)
      .map(({ item }) => item.slug)
      .sort(),
    [
      "guangzhou-shenzhen-tailor-made-business-tour-4-day",
      "qingcheng-mountain-private-wellness-retreat-10-day",
    ],
  );
  assert.equal(runExplorer(index, { ...state, tier: "day" }).length, 0);
  assert.equal(
    runExplorer(index, readExplorerState(new URLSearchParams())).length,
    publicJourneySlugs.length,
  );
});
