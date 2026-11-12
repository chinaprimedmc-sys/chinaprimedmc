import assert from "node:assert/strict";
import test from "node:test";
import {
  crawlDepths,
  inspectHtml,
  normalizeUrl,
  robotsAllows,
} from "../scripts/lib/indexability.mjs";

test("indexability detects Google-only and HTTP snippet/index restrictions", () => {
  assert.equal(inspectHtml("<meta content='noindex, follow' name='googlebot'>").blocked, true);
  assert.equal(
    inspectHtml("", new Headers({ "X-Robots-Tag": "googlebot: nosnippet" })).blocked,
    true,
  );
  assert.equal(inspectHtml('<meta name="robots" content="max-snippet:0">').blocked, true);
  assert.equal(
    inspectHtml('<meta name="robots" content="max-snippet:-1, index, follow">').blocked,
    false,
  );
});

test("crawler graph uses real HTML links, excludes script payloads, and identifies orphans", () => {
  const page = inspectHtml(`<h1>Tour</h1><a href='/tours?a=1&amp;b=2'>Tours</a>
    <a href='/hidden' rel='nofollow'>Hidden</a>
    <script>const fake = '<h1>Fake</h1><a href="/fake">Fake</a>';</script>
    <script type='application/ld+json'>{"@type":"WebPage"}</script>`);
  assert.equal(page.h1Count, 1);
  assert.deepEqual(page.anchors, ["/tours?a=1&b=2"]);
  assert.equal(page.jsonLd[0]["@type"], "WebPage");
  const depths = crawlDepths(
    new Map([
      ["/", ["/tours"]],
      ["/tours", ["/tour"]],
      ["/tour", []],
      ["/orphan", []],
    ]),
    "/",
  );
  assert.equal(depths.get("/tour"), 2);
  assert.equal(depths.has("/orphan"), false);
  assert.equal(
    normalizeUrl("/tours/?a=1#day-1", "https://example.com"),
    "https://example.com/tours",
  );
});

test("malformed structured data cannot silently pass the indexability gate", () => {
  assert.throws(
    () => inspectHtml('<script type="application/ld+json">{"broken":}</script>'),
    SyntaxError,
  );
});

test("robots uses specific agent groups, longest path matches and Allow on ties", () => {
  const text = `User-agent: *
Disallow: /
User-agent: Googlebot
User-agent: Bingbot
Allow: /
Disallow: /private/
Allow: /private/public/
Disallow: /*?preview=*
Disallow: /tie
Allow: /tie
User-agent: OAI-SearchBot
Allow: /journal/
Disallow: /`;
  assert.equal(robotsAllows(text, "Googlebot", "/tours/example"), true);
  assert.equal(robotsAllows(text, "Bingbot", "/private/secret"), false);
  assert.equal(robotsAllows(text, "Googlebot", "/private/public/guide"), true);
  assert.equal(robotsAllows(text, "Googlebot", "/tour?preview=true"), false);
  assert.equal(robotsAllows(text, "Googlebot", "/tie"), true);
  assert.equal(robotsAllows(text, "OAI-SearchBot", "/journal/guide"), true);
  assert.equal(robotsAllows(text, "OAI-SearchBot", "/tours/guide"), false);
  assert.equal(robotsAllows(text, "OtherBot", "/tours/example"), false);
  assert.equal(robotsAllows("User-agent: OtherBot\nDisallow: /", "Googlebot", "/guide"), true);
  assert.equal(robotsAllows("User-agent: *\nDisallow: /exact$", "Googlebot", "/exactly"), true);
});
