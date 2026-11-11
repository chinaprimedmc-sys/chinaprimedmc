import assert from "node:assert/strict";
import test from "node:test";
import { registerHooks, stripTypeScriptTypes } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
registerHooks({
  resolve(specifier, context, next) {
    if (specifier === "server-only")
      return { url: "data:text/javascript,export%20%7B%7D", shortCircuit: true };
    let path;
    if (specifier.startsWith("@/")) path = resolve(root, specifier.slice(2));
    else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:"))
      path = fileURLToPath(new URL(specifier, context.parentURL));
    if (path?.endsWith(".md") && existsSync(path))
      return { url: pathToFileURL(path).href, shortCircuit: true };
    if (path) {
      for (const candidate of [path + ".ts", path + "/index.ts"]) {
        if (existsSync(candidate))
          return { url: pathToFileURL(candidate).href, shortCircuit: true };
      }
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url.endsWith(".md"))
      return {
        format: "module",
        source: "export default " + JSON.stringify(readFileSync(fileURLToPath(url), "utf8")),
        shortCircuit: true,
      };
    if (url.endsWith(".ts"))
      return {
        format: "module",
        source: stripTypeScriptTypes(readFileSync(fileURLToPath(url), "utf8")),
        shortCircuit: true,
      };
    return next(url, context);
  },
});

const { getTourBySlug } = await import("../content/tours/index.ts");
const { chinaConsidered12DayTour: authored } =
  await import("../content/tours/china-considered-12-day.ts");
const { getJourneyCatalogItem } = await import("../content/tours/catalog.ts");
const { getJourneySeoTitle } = await import("../content/tours/card-copy.ts");
const { createTourMetadata } = await import("../lib/seo/tour-metadata.ts");
const { tourSearchSpecification } = await import("../lib/seo/tour-specification.ts");
const { itineraryProductSchema, faqPageSchema } = await import("../lib/seo/schema.ts");
const { createTourDetailModel, getVisibleTourFaqs, bookingPolicyFaqs } =
  await import("../features/tours/detail/tour-detail-model.ts");
const { buildExplorerItem } = await import("../lib/tours/journey-explorer-item.ts");
const { tourOfficialCitations } = await import("../lib/seo/tour-sources.ts");
const { journalArticles } = await import("../content/journal/index.ts");
const { hydrateJournalArticle } = await import("../lib/content/journal-markdown.ts");
const { getJourneyReadingArticles, getJourneyBridgeForArticle } =
  await import("../lib/content/journey-journal-links.ts");
const { siteConfig } = await import("../config/site.ts");
const { getCoreJourneyFallback, normalizeCoreJourneyTitle } =
  await import("../lib/cms/core-journey-fallbacks.ts");
const tour = getTourBySlug(authored.slug);
const catalog = getJourneyCatalogItem(tour.slug);
const model = createTourDetailModel(tour);
const url = siteConfig.url + "/tours/" + tour.slug;
const answerFor = (pattern) =>
  model.faqs.find(({ question }) => pattern.test(question))?.answer ?? "";

test("twelve-day title, source, metadata and canonical remain identical across detail and discovery", () => {
  assert.equal(tour, authored);
  const metadata = createTourMetadata(tour);
  assert.equal(metadata.title, "12-Day Private China Tour at an Easier Pace");
  assert.equal(metadata.title, model.headline);
  assert.equal(metadata.title, getJourneySeoTitle(catalog));
  assert.equal(metadata.description, tour.seo.description);
  assert.ok(metadata.description.length >= 120 && metadata.description.length <= 165);
  assert.equal(metadata.alternates.canonical, url);
  assert.equal(metadata.openGraph.url, url);
  assert.equal(getCoreJourneyFallback(tour.slug).title, tour.title);
  assert.equal(
    normalizeCoreJourneyTitle({ slug: tour.slug, title: "Legacy title" }).title,
    tour.title,
  );
  assert.equal(tour.seniorStandard, undefined);
  assert.equal(tour.pricingBlock, undefined);
});

test("actual twelve days, eleven nights and first-class rail/economy flight match city stays and map", () => {
  assert.deepEqual(
    tour.itinerary.map(({ day }) => day),
    Array.from({ length: 12 }, (_, i) => i + 1),
  );
  const nights = tour.itinerary
    .filter(({ hotel }) => hotel)
    .reduce((counts, { destination }) => {
      counts[destination] = (counts[destination] ?? 0) + 1;
      return counts;
    }, {});
  assert.deepEqual(nights, { Beijing: 5, "Xi'an": 3, Shanghai: 3 });
  assert.equal(tour.itinerary[11].hotel, undefined);
  for (const stay of tour.accommodations)
    assert.ok(stay.name.includes(nights[stay.destination] + " nights"));
  for (const [index, count] of [5, 3, 3].entries())
    assert.ok(tour.routeMap.stops[index].days.includes(count + " nights"));
  assert.match(tour.itinerary[5].transport, /first-class high-speed rail/);
  assert.match(tour.itinerary[8].transport, /economy domestic flight/);
  assert.match(tour.itinerary[6].title, /City Wall/);
  assert.match(tour.itinerary[7].title, /Terracotta/);
  assert.ok(tour.itinerary.every((day) => day.steps === undefined));
  for (const day of tour.itinerary.slice(1)) assert.deepEqual(day.meals, ["Hotel breakfast"]);
});

test("published per-person basis persists through catalog, cards and TouristTrip specification", () => {
  const schema = itineraryProductSchema({
    ...tourSearchSpecification(tour),
    name: model.headline,
    identifier: tour.slug,
    url,
  });
  assert.equal(schema.duration, "P12D");
  assert.equal(schema.description, model.answerSummary);
  assert.deepEqual(
    schema.additionalProperty.map(({ name, value }) => ({ label: name, value })),
    model.practicalities,
  );
  assert.equal(schema.offers, undefined);
  assert.equal(catalog.pricing.status, "published-from");
  assert.equal(model.price.pricingUnit, "per-person");
  assert.equal(model.price.fromUsd, 4690);
  assert.doesNotMatch(
    JSON.stringify([catalog.pricing, model.price]),
    /6480|6,480|6,800|8,500|Peninsula|selected meals/,
  );
  const card = buildExplorerItem(catalog);
  assert.equal(card.priceLabel, "From USD 4,690");
  assert.equal(card.easierPace, true);
  assert.equal(catalog.discovery.pace, "easy");
  assert.equal(catalog.discovery.walkingLevel, "moderate");
});

test("all eighteen authored questions and two policies are visible with exact schema parity", () => {
  const faqs = getVisibleTourFaqs(tour);
  assert.equal(tour.faqs.length, 18);
  assert.equal(faqs.length, tour.faqs.length + bookingPolicyFaqs.length);
  assert.equal(faqs.length, 20);
  assert.deepEqual(
    faqPageSchema(faqs, url).mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    })),
    model.faqs,
  );
  assert.match(answerFor(/choice days/), /no scheduled private guide, vehicle or paid activity/);
  assert.match(answerFor(/carry our luggage/), /^Not automatically/);
  assert.match(answerFor(/cable car/), /^No\./);
  assert.match(answerFor(/tai chi/), /^No\./);
  assert.match(answerFor(/visa-free/), /^Not by itself/);
  for (const index of [4, 10])
    assert.match(tour.itinerary[index].transport, /No scheduled private guide or vehicle/);
  for (const index of [1, 2, 3, 6, 7, 9])
    assert.match(tour.itinerary[index].transport, /Private vehicle and local guide/);
  assert.ok(
    tour.included.every(
      (text) =>
        !/VIP|porter|medical channel|Peninsula|selected meals|private cultural encounters/i.test(
          text,
        ),
    ),
  );
  assert.equal(tour.hero.secondary.href, "#enquiry");
});

test("comparison, related routes and inquiry preserve real differences and assistance decisions", () => {
  assert.deepEqual(model.comparison, tour.comparison);
  const row = tour.comparison.rows.find(([label]) => label === "Hotel nights");
  assert.match(row[1], /Beijing 5.*Xi'an 3.*Shanghai 3/);
  assert.match(row[2], /Beijing 4.*Xi'an 2.*Shanghai 3/);
  const shorter = getTourBySlug(tour.comparison.href.split("/").at(-1));
  assert.match(shorter.routeMap.stops[0].days, /4 nights/);
  assert.match(shorter.routeMap.stops[1].days, /2 nights/);
  for (const href of model.relatedTourHrefs)
    assert.ok(getJourneyCatalogItem(href.split("/").at(-1)));
  const message = new URL(model.whatsappHref).searchParams.get("text");
  for (const pattern of [
    /language/i,
    /bed/i,
    /walking/i,
    /standing/i,
    /wheelchair/i,
    /lifting/i,
    /Day 5 and Day 11/,
    /dietary/i,
  ])
    assert.match(message, pattern);
  assert.doesNotMatch(message, /passport number|US\$|undefined/i);
});

test("official source publishers and scope agree in visible resources, citations and generated AI text", async () => {
  const { GET } = await import("../app/llms-full.txt/route.ts");
  const section = (await GET().text())
    .split("# Product: " + tour.title + "\n")[1]
    .split("\n# Product:")[0];
  assert.ok(section.includes(model.answerSummary));
  for (const { value } of model.practicalities) assert.ok(section.includes(value));
  for (const row of tour.comparison.rows)
    for (const value of row) assert.ok(section.includes(value));
  assert.match(section, /Published starting price subject to the stated basis/);
  assert.doesNotMatch(section, /two higher-effort|6480|6,480|Peninsula/);
  const resources = tour.planningResources.filter((item) => item.officialPublisher);
  const citations = tourOfficialCitations(tour);
  assert.equal(resources.length, 5);
  assert.equal(citations.length, resources.length);
  assert.deepEqual(model.planningResources, tour.planningResources);
  resources.forEach((item, index) => {
    assert.equal(citations[index].url, item.href);
    assert.equal(citations[index].publisher.name, item.officialPublisher);
    assert.equal(citations[index].description, item.description);
    assert.ok(section.includes(item.description));
    assert.ok(section.includes("(Official publisher: " + item.officialPublisher + ")"));
  });
  const { GET: short } = await import("../app/llms.txt/route.ts");
  assert.ok((await short().text()).includes(catalog.pricing.inclusionSummary));
  const { default: sitemap } = await import("../app/sitemap.ts");
  const entries = (await sitemap()).filter((item) => item.url === url);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].lastModified, "2026-11-11");
});

test("actual twelve-day guide renders the matching route, eight FAQs, practical limits and official references", async () => {
  const article = await hydrateJournalArticle(
    journalArticles.find((item) => item.slug === "china-itinerary-older-travelers-10-days"),
  );
  assert.equal(article.updatedAt, "2026-11-11");
  assert.equal(article.lastFactCheckedAt, "2026-08-18");
  const table = article.content.find((block) => block.type === "table");
  assert.equal(table.rows.length, 12);
  assert.match(table.rows[6][1], /City Wall/);
  assert.match(table.rows[7][1], /Terracotta/);
  for (const index of [4, 10])
    assert.match(table.rows[index][3], /No scheduled private guide or vehicle/);
  const faqs = article.content.filter((block) => block.type === "faq");
  assert.equal(faqs.length, 8);
  assert.deepEqual(
    faqPageSchema(faqs).mainEntity.map((item) => item.acceptedAnswer.text),
    faqs.map((item) => item.answer),
  );
  const content = JSON.stringify(article.content);
  assert.match(content, /duration alone does not establish eligibility/);
  assert.match(content, /Request your twelve-day private China proposal/);
  assert.doesNotMatch(
    content,
    /Journey Rhythm|Suggested structured data|Review Notes|Verified 2026-11-11/,
  );
  for (const host of [
    "intl.dpm.org.cn",
    "www.mutianyugreatwall.com",
    "www.bmy.com.cn",
    "www.12306.cn",
    "en.nia.gov.cn",
  ]) {
    assert.ok(article.citations.some((item) => new URL(item.url).hostname === host));
    assert.ok(content.includes(host));
  }
  const reading = getJourneyReadingArticles(tour.slug, 7);
  assert.equal(reading[0].slug, article.slug);
  assert.equal(getJourneyBridgeForArticle(article).journey.slug, tour.slug);
  const markdown = readFileSync(resolve(root, article.sourcePath), "utf8");
  for (const [, slug] of markdown.matchAll(/\]\(\/journal\/([^)?#]+)/g))
    assert.ok(
      journalArticles.some((item) => item.slug === slug),
      slug,
    );
  for (const [, slug] of markdown.matchAll(/\]\(\/tours\/([^)?#]+)/g))
    assert.ok(getJourneyCatalogItem(slug), slug);
});

test("comparison and commercial supporting guides no longer bundle optional meals or hosts", async () => {
  for (const slug of [
    "china-tours-for-seniors",
    "how-much-does-a-trip-to-china-cost",
    "luxury-china-tour-planning-guide",
    "how-many-days-beijing-xian-shanghai",
  ]) {
    const article = await hydrateJournalArticle(journalArticles.find((item) => item.slug === slug));
    const content = JSON.stringify(article.content);
    assert.match(content, /Days 5 and 11|Beijing Day 5/);
    assert.doesNotMatch(
      content,
      /Peninsula-level|selected meals, private cultural encounters|selected meals, listed private cultural encounters|first-class rail, named experiences/,
    );
    assert.equal(article.updatedAt, "2026-11-11");
  }
});
