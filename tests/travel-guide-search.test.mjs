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
    if (path)
      for (const candidate of [path + ".ts", path + "/index.ts"])
        if (existsSync(candidate))
          return { url: pathToFileURL(candidate).href, shortCircuit: true };
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

const { travelGuideSearch, travelGuideIds } = await import("../content/travel-guides/search.ts");
const {
  createTravelGuideMetadata,
  travelGuideBreadcrumb,
  travelGuideSchema,
  renderTravelerPlanningGuides,
} = await import("../lib/seo/travel-guide.ts");
const { publicRouteSlugs } = await import("../config/public-route-slugs.ts");
const { siteConfig } = await import("../config/site.ts");
const source = (path) => readFileSync(resolve(root, path), "utf8");
const support = source("components/travel-guides/search-support.tsx");

test("six audience hubs have distinct intent and focused metadata without title truncation", () => {
  assert.equal(travelGuideIds.length, 6);
  assert.equal(
    new Set(Object.values(travelGuideSearch).map((guide) => guide.primaryQuery)).size,
    6,
  );
  assert.equal(new Set(Object.values(travelGuideSearch).map((guide) => guide.path)).size, 6);
  for (const id of travelGuideIds) {
    const guide = travelGuideSearch[id];
    const metadata = createTravelGuideMetadata(id);
    assert.equal(metadata.title, guide.title, `${id}: title must fit the shared formatter`);
    assert.equal(metadata.alternates.canonical, siteConfig.url + guide.path);
    assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
    assert.equal(metadata.description, guide.description);
    assert.ok(
      guide.description.length >= 120 && guide.description.length <= 165,
      `${id}: description length`,
    );
    assert.equal(metadata.robots.index, true);
    assert.equal(metadata.robots.googleBot["max-snippet"], -1);
    assert.deepEqual(metadata.keywords, []);
  }
});

test("every long-tail target resolves to a visible passage in its assigned page", () => {
  const queries = new Set();
  for (const id of travelGuideIds) {
    const guide = travelGuideSearch[id];
    const page = source(`app${guide.path}/page.tsx`);
    assert.ok(page.includes(`createTravelGuideMetadata("${id}")`));
    for (const component of ["TravelGuideOverview", "TravelGuideAnswers", "TravelGuideReading"])
      assert.ok(page.includes(`<${component} id="${id}"`), `${id}: ${component}`);
    const ids = new Set([...page.matchAll(/\bid="([\w-]+)"/g)].map((match) => match[1]));
    for (const answer of guide.answers) {
      ids.add(answer.id);
      if (answer.reading) {
        assert.ok(
          guide.reading.some((link) => link.href === answer.reading.href),
          `${id}: answer reading must belong to the verified public reading set`,
        );
      }
    }
    for (const target of guide.longTails) {
      assert.ok(ids.has(target.anchor), `${id}: missing #${target.anchor}`);
      assert.ok(!queries.has(target.query.toLowerCase()), `duplicate ownership: ${target.query}`);
      queries.add(target.query.toLowerCase());
    }
    const contents = page.split("const contents = [")[1].split("] as const;")[0];
    for (const match of contents.matchAll(/\["([\w-]+)",/g)) {
      assert.ok(
        ids.has(match[1]) || support.includes(`id="${match[1]}"`),
        `${id}: contents #${match[1]}`,
      );
    }
  }
  assert.equal(queries.size, 54);
});

test("hub links lead to public guides, published products or real static routes", () => {
  for (const id of travelGuideIds) {
    const guide = travelGuideSearch[id];
    assert.ok(guide.related.every((other) => other !== id && travelGuideSearch[other]));
    for (const link of [...guide.reading, ...guide.journeys]) {
      const [kind, slug] = link.href.slice(1).split("/");
      if (["journal", "tours"].includes(kind) && slug) {
        assert.ok(publicRouteSlugs[kind].includes(slug), `${id}: unpublished ${link.href}`);
      } else assert.ok(existsSync(resolve(root, `app${link.href}/page.tsx`)), link.href);
    }
    assert.ok(source("app/about/page.tsx").includes(`href: "${guide.path}"`));
    assert.ok(source("app/sitemap.ts").includes(`"${guide.path}"`));
  }
});

test("schema links the page, article, breadcrumb and visible editorial team consistently", () => {
  for (const id of travelGuideIds) {
    const guide = travelGuideSearch[id];
    const headline = source(`app${guide.path}/page.tsx`).match(/const title = "([^"]+)"/)[1];
    const graph = travelGuideSchema(id, headline)["@graph"];
    const page = graph.find((node) => node["@type"] === "WebPage");
    const article = graph.find((node) => node["@type"] === "Article");
    assert.equal(page.mainEntity["@id"], article["@id"]);
    assert.equal(article.mainEntityOfPage["@id"], page["@id"]);
    assert.equal(page.breadcrumb["@id"], travelGuideBreadcrumb(id)["@id"]);
    assert.equal(article.headline, headline);
    assert.equal(article.abstract, guide.summary);
    assert.equal(article.author.name, "AVIORA China Travel Team");
    assert.equal(article.author["@id"], `${siteConfig.url}/editorial-policy#editorial-team`);
    assert.equal(article.publisher["@id"], `${siteConfig.url}/#organization`);
    assert.deepEqual(
      article.hasPart.map((part) => part.text),
      guide.answers.map((answer) => answer.answer),
    );
    assert.deepEqual(
      article.citation,
      guide.sources.map((link) => new URL(link.href, siteConfig.url).href),
    );
    assert.ok(existsSync(resolve(root, "public", new URL(article.image).pathname.slice(1))));
    assert.equal(article.datePublished, undefined);
    assert.equal(article.dateModified, undefined);
    assert.ok(
      !graph.some((node) => ["Product", "FAQPage", "AggregateRating"].includes(node["@type"])),
    );
  }
});

test("text discovery aids reuse visible passages and journal pages can link back to hubs", () => {
  const text = renderTravelerPlanningGuides();
  for (const id of travelGuideIds) {
    const guide = travelGuideSearch[id];
    assert.ok(text.includes(siteConfig.url + guide.path));
    assert.ok(text.includes(guide.summary));
    for (const answer of guide.answers) assert.ok(text.includes(answer.answer));
  }
  assert.ok(source("features/journal/article-template.tsx").includes("<TravelGuideArticleLinks"));
  for (const path of ["app/llms.txt/route.ts", "app/llms-full.txt/route.ts"])
    assert.ok(source(path).includes("${renderTravelerPlanningGuides()}"));
});
