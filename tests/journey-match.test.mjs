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
    if (path) for (const candidate of [path + ".ts", path + "/index.ts"]) {
      if (existsSync(candidate)) return { url: pathToFileURL(candidate).href, shortCircuit: true };
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url.endsWith(".ts")) return { format: "module", source: stripTypeScriptTypes(readFileSync(fileURLToPath(url), "utf8")), shortCircuit: true };
    return next(url, context);
  },
});

const { journeyCatalog } = await import("../content/tours/catalog.ts");
const { describeMatchAnswers, matchJourneys, readMatchAnswers, writeMatchAnswers } = await import("../lib/tours/journey-match.ts");

test("matching favors a first journey for an eight-to-twelve-day couple trip", () => {
  const results = matchJourneys(journeyCatalog, { time: "eight-twelve", company: "couple", interests: ["icons"], pace: "easy" });
  assert.equal(results[0].item.slug, "first-china-beautifully-paced");
  assert.equal(results[0].exact, true);
});

test("one-day iconic request surfaces a private day tour", () => {
  const results = matchJourneys(journeyCatalog, { time: "one-day", company: "couple", interests: ["icons"], pace: "balanced" });
  assert.ok(results[0].item.recommendedDaysMax <= 1);
  assert.equal(results[0].exact, true);
});

test("four-to-seven-day family request can surface a regional family route", () => {
  const results = matchJourneys(journeyCatalog, { time: "four-seven", company: "family", interests: ["together", "nature"], pace: "balanced" });
  assert.ok(results[0].item.recommendedDaysMin <= 7 && results[0].item.recommendedDaysMax >= 4);
});

test("Yunnan scenery with flexible dates surfaces the appropriate published journey", () => {
  const results = matchJourneys(journeyCatalog, { time: "flexible", company: "couple", interests: ["nature"], pace: "balanced" });
  assert.equal(results[0].item.slug, "luxury-yunnan-private-tour");
});

test("a different pace or interest is not presented as an exact match", () => {
  const results = matchJourneys(journeyCatalog, { time: "eight-twelve", company: "couple", interests: ["icons", "nature"], pace: "active" });
  const first = results.find((result) => result.item.slug === "first-china-beautifully-paced");
  assert.equal(first.exact, false);
  assert.ok(first.differences.some((line) => line.includes("pace")));
  assert.ok(first.differences.some((line) => line.includes("Landscapes")));
});

test("shared answers round-trip and reject malformed URL state", () => {
  const answers = { time: "eight-twelve", company: "family", interests: ["together", "culture"], pace: "easy" };
  assert.deepEqual(readMatchAnswers(writeMatchAnswers(answers)), answers);
  assert.match(describeMatchAnswers(answers), /8–12 days; traveling as a family; interested in family time and local culture; room to linger/);
  assert.equal(readMatchAnswers("one-day.family.nature,nature.easy"), null);
  assert.equal(readMatchAnswers("one-day.family.nature.easy.extra"), null);
});
