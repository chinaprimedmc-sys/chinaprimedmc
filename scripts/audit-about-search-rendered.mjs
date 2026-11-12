/** Render the production build without a listening socket; not a public HTTP or visual audit. */
import assert from "node:assert/strict";
import { mkdir, rm, writeFile } from "node:fs/promises";
import next from "next";
import { createRequestResponseMocks } from "next/dist/server/lib/mock-request.js";
import { siteConfig } from "../config/site.ts";
import { companyIdentity } from "../content/about/identity.ts";
import { aboutSearch } from "../content/about/search.ts";
import { travelGuideIds, travelGuideSearch } from "../content/travel-guides/search.ts";
import { attributes, crawlDepths, decodeHtml, inspectHtml } from "./lib/indexability.mjs";

const app = next({ dev: false, hostname: "localhost", port: 3148 });
const results = [];
const directory = "artifacts/quality/about-search";
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const corePaths = [
  "/about",
  "/company",
  "/about/founder",
  ...travelGuideIds.map((id) => travelGuideSearch[id].path),
];
const supportingPaths = [
  ...new Set([
    ...aboutSearch.reading.map((item) => item.href),
    ...travelGuideIds.flatMap((id) => travelGuideSearch[id].reading.map((item) => item.href)),
  ]),
];
const rendered = new Map();
await mkdir(directory, { recursive: true });
await rm(`${directory}/report.json`, { force: true });
try {
  await app.prepare();
  for (const path of ["/", ...corePaths, ...supportingPaths]) {
    const { req, res } = createRequestResponseMocks({
      url: path,
      headers: { host: "localhost:3148" },
    });
    // This deprecated custom-server method still supports a complete buffered App Router
    // render in the installed Next version. Used only here, with no server/socket started.
    const html = await app.renderToHTML(req, res, path, {});
    assert.equal(res.statusCode, 200, path);
    assert.ok(html, `${path}: empty render`);
    const page = inspectHtml(html);
    assert.equal(page.h1Count, 1, `${path}: H1`);
    assert.equal(page.blocked, false, `${path}: index/snippet directive`);
    assert.deepEqual(
      page.canonicals.map((url) => new URL(url).toString()),
      [new URL(path, siteConfig.url).toString()],
      `${path}: canonical`,
    );
    assert.ok(page.title && page.description, `${path}: search snippet`);
    const document = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
    const text = normalize(decodeHtml(document.replace(/<[^>]+>/g, " ")));
    const ids = new Set(
      [...document.matchAll(/<[a-z][^>]*>/gi)].map(([tag]) => attributes(tag).id).filter(Boolean),
    );
    const nodes = page.jsonLd.flatMap((node) => node["@graph"] ?? [node]);
    rendered.set(path, { anchors: page.anchors, ids });
    const includesText = (value) =>
      assert.ok(
        text.includes(normalize(value)),
        `${path}: missing visible text: ${value.slice(0, 70)}`,
      );
    for (const href of page.anchors.filter((href) => href.startsWith("#"))) {
      assert.ok(ids.has(decodeURIComponent(href.slice(1))), `${path}: missing fragment ${href}`);
    }
    if (path === "/about") {
      includesText(companyIdentity.brandSummary);
      for (const answer of aboutSearch.identityAnswers) {
        includesText(answer.question);
        includesText(answer.answer);
        assert.ok(ids.has(answer.id), answer.id);
      }
      for (const id of travelGuideIds)
        assert.ok(page.anchors.includes(travelGuideSearch[id].path), id);
      for (const link of aboutSearch.reading)
        assert.ok(page.anchors.includes(link.href), `${path}: verification guide ${link.href}`);
      const about = nodes.find((node) => node["@type"] === "AboutPage");
      assert.equal(about.mainEntity["@id"], `${siteConfig.url}/#organization`);
      for (const part of about.hasPart) {
        const target = new URL(part.url ?? part["@id"]);
        assert.ok(ids.has(target.hash.slice(1)), `${path}: schema fragment ${target.hash}`);
        if (part.text) includesText(part.text);
      }
    }
    if (supportingPaths.includes(path)) {
      for (const guideId of travelGuideIds) {
        const guide = travelGuideSearch[guideId];
        if (guide.reading.some((item) => item.href === path))
          assert.ok(
            page.anchors.includes(guide.path),
            `${path}: missing return link to ${guide.path}`,
          );
      }
      if (aboutSearch.reading.some((item) => item.href === path))
        assert.ok(
          page.anchors.includes("/about#brand-questions"),
          `${path}: missing brand verification return link`,
        );
    }
    const id = travelGuideIds.find((id) => travelGuideSearch[id].path === path);
    if (id) {
      const guide = travelGuideSearch[id];
      includesText(guide.summary);
      for (const answer of guide.answers) {
        includesText(answer.question);
        includesText(answer.answer);
        assert.ok(ids.has(answer.id), `${path}: answer fragment ${answer.id}`);
      }
      for (const target of guide.longTails)
        assert.ok(ids.has(target.anchor), `${path}: long-tail fragment ${target.anchor}`);
      for (const link of [...guide.reading, ...guide.journeys])
        assert.ok(page.anchors.includes(link.href), `${path}: link ${link.href}`);
      const article = nodes.find((node) => node["@type"] === "Article");
      assert.equal(article.abstract, guide.summary);
      assert.equal(article.publisher["@id"], `${siteConfig.url}/#organization`);
    }
    await writeFile(
      `${directory}/${path === "/" ? "home" : path.slice(1).replaceAll("/", "-")}.html`,
      html,
    );
    results.push({
      path,
      status: res.statusCode,
      title: page.title,
      canonical: page.canonicals[0],
      h1Count: page.h1Count,
      anchors: page.anchors.length,
    });
  }
  const graph = new Map();
  for (const [path, page] of rendered) {
    const edges = new Set();
    for (const href of page.anchors) {
      const target = new URL(href, new URL(path, siteConfig.url));
      if (target.origin !== siteConfig.url) continue;
      if (rendered.has(target.pathname)) {
        edges.add(target.pathname);
        if (target.hash)
          assert.ok(
            rendered.get(target.pathname).ids.has(decodeURIComponent(target.hash.slice(1))),
            `${path}: broken cross-page fragment ${href}`,
          );
      }
    }
    graph.set(path, edges);
  }
  const depths = crawlDepths(graph, "/");
  for (const path of corePaths) {
    assert.ok(depths.has(path) && depths.get(path) <= 2, `${path}: more than two links from home`);
  }
  for (const path of supportingPaths)
    assert.ok(
      depths.has(path) && depths.get(path) <= 3,
      `${path}: more than three links from home`,
    );
  for (const result of results) result.depthFromHome = depths.get(result.path);
  await writeFile(
    `${directory}/report.json`,
    JSON.stringify(
      {
        checkedAt: new Date().toISOString(),
        passed: true,
        scope:
          "In-process production render; excludes public HTTP, proxy, browser layout and Google indexing",
        pages: results,
      },
      null,
      2,
    ),
  );
  console.log(
    `About search render audit passed: ${results.length} pages; core pages within two links, supporting articles within three; visible answers, return links, fragments, canonicals and linked schema.`,
  );
} catch (error) {
  await writeFile(
    `${directory}/report.json`,
    JSON.stringify(
      {
        checkedAt: new Date().toISOString(),
        passed: false,
        error: error.message,
        pages: results,
      },
      null,
      2,
    ),
  );
  console.error(error);
  process.exitCode = 1;
} finally {
  await app.close();
}
