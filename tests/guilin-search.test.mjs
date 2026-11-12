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

const { guilinYangshuoLiRiverDayTour: tour } =
  await import("../content/tours/guilin-yangshuo-li-river-day-tour.ts");
const { getJourneyCatalogItem } = await import("../content/tours/catalog.ts");
const { getJourneySeoTitle } = await import("../content/tours/card-copy.ts");
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
const url = siteConfig.url + "/tours/" + tour.slug;
const answerFor = (pattern) =>
  model.faqs.find(({ question }) => pattern.test(question))?.answer ?? "";

test("Li River metadata and H1 identify the same bookable service and stable canonical", () => {
  const metadata = createTourMetadata(tour);
  assert.equal(metadata.title, "Guilin to Yangshuo Li River Cruise with Guide");
  assert.equal(metadata.title, getJourneySeoTitle(catalog));
  assert.equal(model.headline, metadata.title);
  assert.equal(metadata.description, tour.seo.description);
  assert.ok(metadata.description.length >= 120 && metadata.description.length <= 165);
  assert.equal(metadata.alternates.canonical, url);
  assert.equal(metadata.openGraph.url, url);
  assert.equal(metadata.robots.index, true);
  assert.equal(tour.hero.primary.href, "#enquiry");
  assert.equal(tour.hero.secondary.href, "#included");
});

test("visible facts, cruise-service limits and published price units survive schema projection", () => {
  const schema = itineraryProductSchema({
    ...tourSearchSpecification(tour),
    name: model.headline,
    identifier: tour.slug,
    url,
  });
  assert.equal(
    schema.subjectOf[0].mainEntity.find(({ name }) => name === "ISO 8601 duration").value,
    "PT10H",
  );
  assert.match(model.answerSummary, /usually 9–11 hours/);
  assert.equal(schema.description, model.answerSummary);
  assert.equal(schema.offers, undefined);
  assert.equal(schema.provider["@id"], siteConfig.url + "/#organization");
  assert.deepEqual(
    schema.subjectOf[0].mainEntity
      .filter(({ name }) => model.practicalities.some((fact) => fact.label === name))
      .map(({ name, value }) => ({ label: name, value })),
    model.practicalities,
  );
  assert.equal(catalog.pricing.status, "published-from");
  assert.equal(model.price.pricingUnit, "per-person");
  assert.equal(model.price.fromUsd, 499);
  assert.doesNotMatch(JSON.stringify(model.price), /US\$|room categor|hotel standard/i);
  assert.ok(!catalog.planningNeedFilters.includes("mobility-aware"));
  assert.ok(!catalog.planningNeedFilters.includes("slower-pacing"));
});

test("all purchase and access answers are visible and FAQPage has exact parity", () => {
  const faqs = getVisibleTourFaqs(tour);
  assert.equal(faqs.length, tour.faqs.length + bookingPolicyFaqs.length);
  assert.equal(faqs.length, 19);
  const schema = faqPageSchema(faqs, url);
  assert.deepEqual(
    schema.mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    })),
    model.faqs,
  );
  for (const query of [
    /private or shared/,
    /two people/,
    /finish in Yangshuo/,
    /return from Yangshuo/,
    /luggage/,
    /Which port/,
    /How long/,
    /English-speaking/,
    /upper deck/,
    /passport/,
    /lunch/,
    /wheelchair/,
    /bamboo rafting/,
    /Ruyi Peak/,
    /low water/,
    /railway station/,
  ]) {
    assert.ok(
      faqs.some(({ question }) => query.test(question)),
      String(query),
    );
  }
});

test("cruise answers distinguish shared sailing, road return, luggage and optional river activities", () => {
  assert.match(answerFor(/private or shared/), /not a private boat charter/);
  assert.match(answerFor(/return from Yangshuo/), /^No\./);
  assert.match(answerFor(/return from Yangshuo/), /private road vehicle, not a return cruise/);
  assert.match(answerFor(/luggage/), /Keep passports, medication, money and valuables with you/);
  assert.match(answerFor(/lunch/), /Only the onboard meal attached to the confirmed ticket/);
  assert.match(answerFor(/upper deck/), /not a promise of a specific vessel/);
  assert.match(answerFor(/bamboo rafting/), /^No\./);
  assert.match(
    answerFor(/bamboo rafting/),
    /may replace the short countryside chapter or require extra service hours/,
  );
  assert.match(answerFor(/low water/), /not treated as an identical cruise/);
  assert.match(answerFor(/railway station/), /KWL/);
  assert.match(
    answerFor(/railway station/),
    /same-day flight or train connection is not guaranteed/,
  );
  assert.ok(model.days[0].experiences.every(({ time }) => time));
  assert.ok(!catalog.styleFilters.includes("Senior-friendly"));
});

test("inquiry keeps language, family, access and connection details without requesting passport numbers", () => {
  const href = configuredWhatsAppHref(model.whatsappHref, model.displayTitle, {
    duration: model.duration,
    guests: "2",
    priceBasis: model.price.basis,
  });
  const message = new URL(href).searchParams.get("text");
  for (const text of [
    "Preferred date",
    "child ages",
    "pickup address",
    "Preferred guide language",
    "stairs",
    "fixed departure deadline",
    "Travellers: 2 guests",
  ]) {
    assert.ok(message.includes(text), text);
  }
  assert.doesNotMatch(message, /passport (?:number|details)\s*:|US\$|undefined/i);
  assert.match(message, /ticket-booking documents after checking availability/);
  assert.ok(model.inquiryChecklist.length >= 5);
});

test("existing cruise guides return to this product and destination resources replace unrelated recommendations", () => {
  const guides = getJourneyReadingArticles(tour.slug);
  assert.equal(guides.length, 3);
  assert.equal(guides[0].slug, "guilin-yangshuo-li-river-cruise-day-trip-logistics");
  for (const guide of guides) {
    const article = journalArticles.find(({ slug }) => slug === guide.slug);
    assert.equal(getJourneyBridgeForArticle(article).journey.slug, tour.slug);
  }
  assert.deepEqual(model.relatedTourHrefs, []);
  assert.ok(catalog.destinations.some(({ href }) => href === "/destinations/guilin"));
  for (const { href } of model.planningResources.filter(({ href }) =>
    href.startsWith("/journal/"),
  )) {
    assert.ok(
      journalArticles.some(({ slug }) => href === "/journal/" + slug),
      href,
    );
  }
  assert.ok(model.planningResources.some(({ href }) => href === "https://www.guilin.gov.cn/"));
  assert.doesNotMatch(JSON.stringify(tour.related), /great-wall-private-china-travel/);
});

test("AI text routes and sitemap expose the same base, scope and published starting-price product", async () => {
  const { GET: full } = await import("../app/llms-full.txt/route.ts");
  const { GET: short } = await import("../app/llms.txt/route.ts");
  const text = await full().text();
  const section = text.split("# Product: " + tour.title + "\n")[1].split("\n# Product:")[0];
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
