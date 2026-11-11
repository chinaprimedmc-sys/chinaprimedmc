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

const { buildExplorerItems } = await import("../lib/tours/journey-explorer-items.ts");
const { itemsToIndex, readExplorerState, writeExplorerState, runExplorer, emptyState } =
  await import("../lib/tours/journey-explorer.ts");
const { journeyTags } = await import("../content/tours/journey-tags.ts");
const { journeyCatalog } = await import("../content/tours/catalog.ts");

const items = buildExplorerItems();
const index = itemsToIndex(items);
const find = (q, extra = {}) =>
  runExplorer(index, { ...emptyState, q, ...extra }).map((r) => r.item.slug);
const state = (query) => readExplorerState(new URLSearchParams(query));

test("every public journey has tags and a tier; all approved starting prices appear without raw catalog data", () => {
  assert.equal(items.length, journeyCatalog.length);
  assert.equal(Object.keys(journeyTags).length, journeyCatalog.length);
  assert.ok(!JSON.stringify(items).includes('"fromUsd"'), "Do not expose raw catalog prices");
  for (const item of items) {
    const catalog = journeyCatalog.find((journey) => journey.slug === item.slug);
    assert.equal(item.priceLabel, `From USD ${catalog.pricing.fromUsd.toLocaleString("en-US")}`);
    assert.equal(item.priceNote, "");
    assert.ok(item.priceAccessibleText.includes(catalog.pricing.cardBasis));
  }
  for (const item of items) {
    assert.ok(
      item.who.length <= 2 && item.interest.length <= 2 && item.interest.length >= 1,
      item.slug,
    );
  }
});

test("only the purpose-built journey carries the Muslim-friendly tag", () => {
  const halal = items.filter((item) => item.muslimFriendly).map((item) => item.slug);
  assert.deepEqual(halal, ["muslim-friendly-china-tour-great-wall-desert-stars"]);
});

test("Western search habits: spelling, synonyms, typos", () => {
  assert.deepEqual(find("xian").sort(), find("Xi'an").sort());
  assert.deepEqual(find("xian").sort(), find("xi an").sort());
  assert.deepEqual(find("peking").sort(), find("beijing").sort());
  assert.deepEqual(find("pandass").sort(), find("pandas").sort());
  assert.ok(find("terracota").length > 0);
  assert.ok(find("great wal").length > 0);
  assert.ok(find("avatar mountains").some((slug) => /zhangjiajie/.test(slug)));
  assert.deepEqual(
    find("kids").sort(),
    items
      .filter((i) => i.who.includes("Family"))
      .map((i) => i.slug)
      .sort(),
  );
  assert.ok(
    find("honeymoon").every((slug) => items.find((i) => i.slug === slug).who.includes("Couples")),
  );
  assert.deepEqual(
    find("grandparents").sort(),
    items
      .filter((i) => i.easierPace)
      .map((i) => i.slug)
      .sort(),
  );
});

test("trip length and day trips", () => {
  const tenDay = find("10 days").map((slug) => items.find((i) => i.slug === slug).days);
  assert.ok(tenDay.length > 0 && tenDay.every((d) => d >= 8 && d <= 12));
  assert.deepEqual(
    find("two weeks")
      .map((slug) => items.find((i) => i.slug === slug).days)
      .every((d) => d >= 12 && d <= 16),
    true,
  );
  assert.ok(find("day trip").every((slug) => items.find((i) => i.slug === slug).tier === "day"));
  assert.equal(find("day trip").length, 5);
});

test("no accessibility or medical claims through search", () => {
  for (const word of ["wheelchair", "mobility", "accessible", "disabled"]) {
    assert.deepEqual(find(word), [], word);
  }
});

test("suggests a correction, never matches nonsense", () => {
  assert.equal(find("xyzzy").length, 0);
  assert.equal(index.didYouMean("pandass"), "panda");
  assert.equal(index.didYouMean("xyzzy"), null);
  assert.ok(index.topicSuggestions("pan").some((topic) => topic.label === "Pandas"));
});

test("short fragments only match the start of words", () => {
  const results = find("xi");
  assert.ok(
    !results.includes("muslim-friendly-china-tour-great-wall-desert-stars") ||
      /xi/.test(
        JSON.stringify(
          items.find((i) => i.slug === "muslim-friendly-china-tour-great-wall-desert-stars"),
        )
          .toLowerCase()
          .replace(/ningxia/g, ""),
      ),
  );
});

test("tier tabs, filters and sorting", () => {
  assert.equal(find("", { tier: "day" }).length, 5);
  assert.equal(find("", { tier: "signature" }).length, 11);
  assert.equal(find("", { tier: "tailor-made-example" }).length, 3);
  const short = find("", { sort: "short" }).map((slug) => items.find((i) => i.slug === slug).days);
  assert.deepEqual(
    short,
    [...short].sort((a, b) => a - b),
  );
  assert.equal(find("", { muslimFriendly: true }).length, 1);
  assert.equal(find("", { easierPace: true }).length, items.filter((i) => i.easierPace).length);
});

test("legacy links and redirect targets still select sensible journeys", () => {
  assert.deepEqual(state("travellers=families").who, ["Family"]);
  assert.equal(state("needs=muslim-friendly").muslimFriendly, true);
  assert.equal(state("needs=slower-pacing&pace=easy&sort=relaxed").easierPace, true);
  assert.deepEqual(state("style=first-trip").who, ["First-time"]);
  assert.deepEqual(state("style=culture").interest, ["Culture & heritage"]);
  assert.equal(state("type=day-tour").tier, "day");
  assert.deepEqual(state("duration=8-12").length, ["8-12"]);
  assert.deepEqual(state("scope=multi-city").length, ["3-7", "8-12", "13+"]);
  assert.equal(state("needs=women-traveler-support").tier, "all");
  assert.equal(state("q=pandas").q, "pandas");
});

test("state round-trips through the URL and rejects junk", () => {
  const original = {
    ...emptyState,
    tier: "signature",
    length: ["8-12"],
    who: ["Family"],
    interest: ["Slow travel"],
    easierPace: true,
    q: "xian",
    sort: "short",
  };
  assert.deepEqual(readExplorerState(writeExplorerState(original)), original);
  const junk = state("tier=nope&length=99&who=<script>&interest=x&sort=hack&q=" + "a".repeat(200));
  assert.equal(junk.tier, "all");
  assert.deepEqual(junk.length, []);
  assert.deepEqual(junk.who, []);
  assert.equal(junk.sort, "rec");
  assert.equal(junk.q.length, 80);
});

test("every offered 'who' tag is backed by at least one journey", () => {
  for (const tag of ["First-time", "Family", "Couples"]) {
    assert.ok(
      items.some((item) => item.who.includes(tag)),
      tag,
    );
  }
});

test("classic first-visit route is not advertised as a senior or medical-support product", () => {
  assert.deepEqual(find("medical"), []);
  assert.equal(find("seniors").includes("beijing-xian-shanghai-private-10-day-tour"), false);
  assert.ok(find("seniors").includes("china-at-an-easier-pace-12-day-private-tour"));
});
