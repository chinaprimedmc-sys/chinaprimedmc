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

const { privateXianTerracottaDayTour: tour } =
  await import("../content/tours/private-xian-terracotta-day-tour.ts");
const { getJourneyCatalogItem } = await import("../content/tours/catalog.ts");
const { getJourneySeoTitle } = await import("../content/tours/card-copy.ts");
const { buildExplorerItem } = await import("../lib/tours/journey-explorer-item.ts");
const { createTourMetadata } = await import("../lib/seo/tour-metadata.ts");
const { tourSearchSpecification } = await import("../lib/seo/tour-specification.ts");
const { itineraryProductSchema, faqPageSchema } = await import("../lib/seo/schema.ts");
const { createTourDetailModel, getVisibleTourFaqs, bookingPolicyFaqs } =
  await import("../features/tours/detail/tour-detail-model.ts");
const { getJourneyReadingArticles, getJourneyBridgeForArticle } =
  await import("../lib/content/journey-journal-links.ts");
const { journalArticles } = await import("../content/journal/index.ts");
const { configuredWhatsAppHref } = await import("../lib/tours/journey-whatsapp.ts");
const { siteConfig } = await import("../config/site.ts");
const catalog = getJourneyCatalogItem(tour.slug);
const model = createTourDetailModel(tour);
const url = `${siteConfig.url}/tours/${tour.slug}`;
const answerFor = (pattern) =>
  model.faqs.find(({ question }) => pattern.test(question))?.answer ?? "";

test("Xi'an metadata preserves the actual product intent, place and canonical URL", () => {
  const metadata = createTourMetadata(tour);
  assert.equal(metadata.title, "Private Terracotta Warriors Tour from Xi'an");
  assert.equal(metadata.title, getJourneySeoTitle(catalog));
  assert.equal(model.headline, metadata.title);
  assert.equal(metadata.description, tour.seo.description);
  assert.ok(metadata.description.length >= 120 && metadata.description.length <= 165);
  assert.doesNotMatch(metadata.description, /…/);
  assert.equal(metadata.alternates.canonical, url);
  assert.equal(metadata.openGraph.url, url);
  assert.equal(metadata.robots.index, true);
});

test("museum duration, visible service boundaries and quote-only group units survive schema projection", () => {
  const schema = itineraryProductSchema({
    ...tourSearchSpecification(tour),
    name: model.headline,
    identifier: tour.slug,
    url,
  });
  assert.equal(
    schema.subjectOf[0].mainEntity.find(({ name }) => name === "ISO 8601 duration").value,
    "PT8H",
  );
  assert.equal(schema.description, model.answerSummary);
  assert.equal(schema.offers, undefined);
  assert.equal(schema.provider["@id"], `${siteConfig.url}/#organization`);
  assert.deepEqual(
    schema.subjectOf[0].mainEntity
      .filter(({ name }) => model.practicalities.some((fact) => fact.label === name))
      .map(({ name, value }) => ({ label: name, value })),
    model.practicalities,
  );
  assert.equal(catalog.pricing.status, "published-from");
  assert.equal(model.price.pricingUnit, "per-person");
  assert.equal(model.price.fromUsd, 299);
  assert.doesNotMatch(JSON.stringify(model.price), /US\$|room categor|hotel standard/i);
  assert.match(model.answerSummary, /Pits 1, 2 and 3 when open/);
  assert.match(model.answerSummary, /Lintong, outside central Xi'an/);
  assert.match(catalog.planningNote, /includes .*standard museum admission/);
  assert.ok(!buildExplorerItem(catalog).easierPace);
  assert.ok(!catalog.styleFilters.includes("Senior-friendly"));
  assert.ok(!catalog.planningNeedFilters.includes("mobility-aware"));
});

test("all Xi'an FAQs and booking conditions are visible and match FAQPage exactly", () => {
  const faqs = getVisibleTourFaqs(tour);
  const schema = faqPageSchema(faqs, url);
  assert.equal(faqs.length, tour.faqs.length + bookingPolicyFaqs.length);
  assert.equal(faqs.length, 18);
  assert.deepEqual(
    schema.mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    })),
    model.faqs,
  );
  for (const query of [
    /English-speaking/,
    /passport/,
    /all three/,
    /skip-the-line/,
    /two people/,
    /North Railway Station/,
    /Beijing or Shanghai/,
    /City Wall admission/,
    /Lishan Garden/,
    /clay warrior/,
    /children/,
  ]) {
    assert.ok(
      faqs.some(({ question }) => query.test(question)),
      String(query),
    );
  }
});

test("answers distinguish ordinary access, paid upgrades and actual site visits", () => {
  assert.match(answerFor(/skip-the-line/), /^No\./);
  assert.match(answerFor(/skip-the-line/), /do not bypass security/);
  assert.match(answerFor(/City Wall admission/), /^No\./);
  assert.match(answerFor(/City Wall admission/), /replaces the walk or needs extra time/);
  assert.match(
    answerFor(/Lishan Garden/),
    /ticket coverage and the sites physically visited are different/i,
  );
  assert.match(answerFor(/Lishan Garden/), /does not offer access to the emperor's burial chamber/);
  assert.match(answerFor(/clay warrior/), /may replace the Old City walk or require additional/);
  assert.match(answerFor(/halal/), /not a halal meal guarantee/);
  assert.ok(model.days[0].experiences.every(({ time }) => time));
  assert.equal(tour.hero.primary.href, "#enquiry");
  assert.equal(tour.hero.secondary.href, "#included");
});

test("Xi'an inquiry carries actual group, terminal, language and deadline details without asking for passport numbers", () => {
  const href = configuredWhatsAppHref(model.whatsappHref, model.displayTitle, {
    duration: model.duration,
    guests: "2",
    priceBasis: model.price.basis,
  });
  const message = new URL(href).searchParams.get("text");
  for (const text of [
    "Preferred date:",
    "Xi'an hotel / pickup address:",
    "fixed train or flight deadline",
    "Preferred guide language:",
    "flight / train",
    "hearing",
    "Travellers: 2 guests",
  ]) {
    assert.ok(message.includes(text), text);
  }
  assert.doesNotMatch(message, /passport (?:number|details)\s*:|US\$|undefined/i);
  assert.match(message, /ticket-booking documents after checking availability/);
  assert.ok(model.inquiryChecklist.length >= 4);
});

test("existing Xi'an guides return to this product and curated alternatives genuinely include Xi'an", () => {
  const guides = getJourneyReadingArticles(tour.slug);
  assert.equal(guides.length, 3);
  assert.equal(guides[0].slug, "terracotta-warriors-one-day-visit-pits-guide");
  for (const guide of guides) {
    const article = journalArticles.find(({ slug }) => slug === guide.slug);
    assert.equal(getJourneyBridgeForArticle(article).journey.slug, tour.slug);
  }
  for (const href of model.relatedTourHrefs) {
    assert.ok(getJourneyCatalogItem(href.split("/").at(-1)).destinationFilters.includes("Xi'an"));
  }
  assert.ok(
    journalArticles.some(({ slug }) => slug === "terracotta-army-tickets-foreign-visitors"),
  );
  assert.ok(model.planningResources.some(({ href }) => href === "https://www.bmy.com.cn/"));
});

test("the actual AI text routes and sitemap publish the same Xi'an facts and stable URL", async () => {
  const { GET: full } = await import("../app/llms-full.txt/route.ts");
  const { GET: short } = await import("../app/llms.txt/route.ts");
  const text = await full().text();
  const section = text.split(`# Product: ${tour.title}\n`)[1].split("\n# Product:")[0];
  assert.ok(section.includes(model.answerSummary));
  for (const { value } of model.practicalities) assert.ok(section.includes(value));
  assert.match(section, /Published starting price subject to the stated basis/);
  assert.doesNotMatch(section, /US\$|room categories/);
  const shortText = await short().text();
  assert.ok(shortText.includes(url));
  assert.ok(shortText.includes(catalog.pricing.inclusionSummary));
  const { default: sitemap } = await import("../app/sitemap.ts");
  const entries = (await sitemap()).filter((entry) => entry.url === url);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].lastModified, tour.updatedAt);
});
