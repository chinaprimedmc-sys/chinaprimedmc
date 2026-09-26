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
    else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:")) path = fileURLToPath(new URL(specifier, context.parentURL));
    if (path) {
      for (const candidate of [path + ".ts", path + "/index.ts"]) {
        if (existsSync(candidate)) return { url: pathToFileURL(candidate).href, shortCircuit: true };
      }
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url.endsWith(".ts")) return { format: "module", source: stripTypeScriptTypes(readFileSync(fileURLToPath(url), "utf8")), shortCircuit: true };
    return next(url, context);
  },
});

const { journeyCatalog } = await import("../content/tours/catalog.ts");
const { getJourneyCardTitle } = await import("../content/tours/card-copy.ts");
const { readJourneyFilters, writeJourneyFilters, filterJourneys, journeyFilterUrl } = await import("../lib/tours/journey-filter.ts");
const select = (query) => filterJourneys(journeyCatalog, readJourneyFilters(new URLSearchParams(query))).map((item) => item.slug);

test("legacy links and canonical filters select the same journeys", () => {
  assert.deepEqual(select("type=day-tour"), select("format=day-tour"));
  assert.deepEqual(select("travellers=families"), select("need=child-friendly"));
  assert.deepEqual(select("needs=muslim-friendly"), select("need=muslim-friendly"));
  assert.deepEqual(select("focus=wildlife"), select("travelStyle=wildlife"));
  assert.deepEqual(select("region=North+China&style=Family"), select("destination=north&travelStyle=family"));
  assert.deepEqual(select("days=8-12"), select("duration=8-12"));
});

test("public journeys remain discoverable through the available format filters", () => {
  const days = select("format=day-tour");
  const single = select("format=multi-day&scope=single-city");
  const multi = select("format=multi-day&scope=multi-city");
  assert.equal(days.length, 5);
  assert.equal(new Set([...days, ...single, ...multi]).size, journeyCatalog.length);
});

test("serialization retains multi-select, need, focus and sort", () => {
  const state = readJourneyFilters(new URLSearchParams("destination=north,east&focus=family,culture&need=child-friendly&sort=longest&pace=easy,balanced"));
  assert.deepEqual(readJourneyFilters(writeJourneyFilters(state)), state);
  assert.equal(state.sort, "duration-high");
  assert.equal(state.need, "child-friendly");
});

test("URL migration preserves attribution and search result category", () => {
  const url = new URL("https://example.com/search?type=tour&region=north&utm_source=test#journey-catalog");
  const result = journeyFilterUrl(readJourneyFilters(url.searchParams), url);
  assert.equal(result, "/search?utm_source=test&destination=north&type=tour#journey-catalog");
});

test("price sorting compares consistent per-person units", () => {
  const results = filterJourneys(journeyCatalog, readJourneyFilters(new URLSearchParams("sort=price-low")));
  const prices = results.map((item) => item.pricing.fromUsd / (item.pricing.pricingUnit === "private-group" ? item.pricing.basePartySize : 1));
  assert.deepEqual(prices, [...prices].sort((a, b) => a - b));
});

test("every journey display title is location plus its published day count", () => {
  assert.equal(journeyCatalog.length, 19);
  for (const item of journeyCatalog) {
    const match = item.durationLabel.match(/^(\d+)(?:[–-](\d+))?\s*(?:private\s+)?day/i);
    assert.ok(match, `Missing published day count: ${item.slug}`);
    const duration = `${match[1]}${match[2] ? `–${match[2]}` : ""} ${match[1] === "1" && !match[2] ? "Day" : "Days"}`;
    assert.ok(getJourneyCardTitle(item).endsWith(` · ${duration}`), item.slug);
  }
  assert.equal(getJourneyCardTitle(journeyCatalog[0]), "Beijing · Xi'an · Shanghai · 9 Days");
});

test("recommended ordering follows commercial priority", () => {
  const results = filterJourneys(journeyCatalog, readJourneyFilters(new URLSearchParams()));
  assert.deepEqual(
    results.map((item) => item.slug),
    [
      "first-china-beautifully-paced",
      "china-family-tour-with-pandas-12-day-private-tour",
      "luxury-yunnan-private-tour",
      "china-at-an-easier-pace-12-day-private-tour",
      "beijing-xian-chengdu-shanghai-private-11-day-tour",
      "muslim-friendly-china-tour-great-wall-desert-stars",
      "qingcheng-mountain-private-wellness-retreat-10-day",
      "chengdu-chongqing-zhangjiajie-private-11-day-tour",
      "shanghai-zhangjiajie-floating-peaks",
      "chengdu-pandas-jiuzhaigou-private-7-day-tour",
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      "beijing-great-wall-private-5-day-tour",
      "chengdu-pandas-sichuan-table",
      "guangzhou-shenzhen-tailor-made-business-tour-4-day",
      "private-mutianyu-great-wall-day-tour",
      "private-shanghai-day-tour-guide-driver",
      "private-xian-terracotta-warriors-day-tour",
      "private-chengdu-panda-day-tour-early-morning",
      "guilin-yangshuo-li-river-cruise-private-day-tour",
    ],
  );
  assert.ok(results.every((item, index) => index === 0 || results[index - 1].commercialPriority >= item.commercialPriority));
});
