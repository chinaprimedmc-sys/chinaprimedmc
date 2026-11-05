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
    if (path) for (const c of [path + ".ts", path + "/index.ts"]) if (existsSync(c)) return { url: pathToFileURL(c).href, shortCircuit: true };
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url.endsWith(".ts")) return { format: "module", source: stripTypeScriptTypes(readFileSync(fileURLToPath(url), "utf8")), shortCircuit: true };
    return next(url, context);
  },
});

const { getInterleavedTravelerReviews } = await import("../content/home/traveler-reviews.ts");
const { filterReviews, summarize, readBoardState, writeBoardState, emptyBoardState, bucketOf } = await import("../lib/reviews/review-board.ts");

const reviews = getInterleavedTravelerReviews();
const run = (patch) => filterReviews(reviews, { ...emptyBoardState, ...patch });

test("summary matches the data and the rating buckets add up", () => {
  const s = summarize(reviews);
  assert.equal(s.total, reviews.length);
  assert.equal(s.distribution.reduce((n, b) => n + b.count, 0), s.total);
  assert.equal(s.languages.reduce((n, l) => n + l.count, 0), s.total);
  assert.ok(s.average > 4.5 && s.average <= 5);
});

test("filters narrow results and never add reviews", () => {
  assert.equal(run({}).length, reviews.length);
  const five = run({ rating: "5" });
  assert.ok(five.length > 0 && five.every((r) => r.rating === 5));
  const es = run({ lang: "es" });
  assert.ok(es.length > 0 && es.every((r) => r.language === "es"));
  const both = run({ rating: "5", lang: "es" });
  assert.ok(both.length <= Math.min(five.length, es.length));
  assert.ok(run({ topic: "hotels" }).length > run({ topic: "value" }).length);
});

test("search matches text, author and location, ignoring accents and case", () => {
  assert.ok(run({ q: "maria" }).length >= 1);
  assert.deepEqual(run({ q: "MARÍA" }).map((r) => r.id), run({ q: "maria" }).map((r) => r.id));
  assert.equal(run({ q: "zzzzqqqq" }).length, 0);
});

test("sorting is consistent", () => {
  const high = run({ sort: "high" }).map((r) => r.rating);
  assert.deepEqual(high, [...high].sort((a, b) => b - a));
  const low = run({ sort: "low" }).map((r) => r.rating);
  assert.deepEqual(low, [...low].sort((a, b) => a - b));
  assert.equal(run({ sort: "top" })[0].id, reviews[0].id);
});

test("every rating falls in exactly one bucket", () => {
  for (const r of reviews) assert.ok(["5", "4.8", "4.6"].includes(bucketOf(r.rating)), String(r.rating));
});

test("state round-trips through the URL and rejects junk", () => {
  const s = { rating: "4.8", lang: "de", topic: "guides", q: "hotel", sort: "high", review: null };
  assert.deepEqual(readBoardState(writeBoardState(s)), s);
  const junk = readBoardState(new URLSearchParams("rating=9&lang=xx&mentions=bad&sort=hack&q=" + "a".repeat(200)));
  assert.deepEqual({ ...junk, q: junk.q.length }, { rating: null, lang: null, topic: null, q: 80, sort: "top", review: null });
  assert.equal(readBoardState(new URLSearchParams("review=12")).review, 12);
  assert.equal(readBoardState(new URLSearchParams("review=abc")).review, null);
  assert.deepEqual(run({ review: 12 }).map((r) => r.id), [12]);
});

test("no per-review date is shown, and Verified appears only behind verifiedOn", async () => {
  const src = readFileSync(new URL("../components/reviews/reviews-board.tsx", import.meta.url), "utf8");
  assert.ok(!/publishedAt/.test(src));
  assert.ok(/review\.verifiedOn \? <span[^>]*>Verified/.test(src));
  assert.ok(reviews.every((r) => r.verifiedOn === undefined), "existing reviews must not be marked verified");
});

test("the quote beside the forms is a verbatim sentence from a public review", async () => {
  const { formQuote } = await import("../content/home/form-quote.ts");
  const source = reviews.find((r) => r.author === formQuote.author && r.location === formQuote.location);
  assert.ok(source, "quote author must exist in the reviews");
  assert.ok(source.paragraphs.join(" ").includes(formQuote.text));
});

test("the rating line beside the forms matches the real data", async () => {
  const { formStats } = await import("../content/home/form-quote.ts");
  const s = summarize(reviews);
  assert.equal(formStats.average, s.average.toFixed(1));
});

test("in-context voices are verbatim whole paragraphs, vary by page and never repeat an author", async () => {
  const { pickVoices } = await import("../lib/reviews/review-voice.ts");
  const all = new Map(reviews.map((r) => [r.id, r]));
  for (const topic of ["hotels", "guides", "transport", "pace", "value"]) {
    const a = pickVoices(topic, 3, "page-a");
    assert.ok(a.length > 0, topic);
    assert.equal(new Set(a.map((v) => v.author)).size, a.length);
    for (const v of a) assert.ok(all.get(v.id).paragraphs.includes(v.passage), "passage must be an unaltered paragraph");
  }
  const pages = ["a", "b", "c", "d", "e", "f"].map((p) => pickVoices("hotels", 1, p)[0].id);
  assert.ok(new Set(pages).size > 1, "different pages should not all show the same review");
});

test("in-context passages stand on their own", async () => {
  const { pickVoices } = await import("../lib/reviews/review-voice.ts");
  for (const topic of ["hotels", "guides", "transport", "pace", "value"]) {
    for (const v of pickVoices(topic, 999, "x")) {
      assert.ok(!/^(those|these|that|this|it|they|he|she|there|so|but|and|also|however|still)\b/i.test(v.passage), v.passage.slice(0, 50));
      assert.ok(!/\b(those|these) (problems|issues|concerns|worries)\b/i.test(v.passage), v.passage.slice(0, 50));
    }
  }
});
