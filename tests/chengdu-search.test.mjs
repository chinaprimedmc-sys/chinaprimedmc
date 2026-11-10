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

const { privateChengduPandaDayTour: tour } =
  await import("../content/tours/private-chengdu-panda-day-tour.ts");
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

test("Chengdu metadata and H1 identify the same bookable service and stable canonical", () => {
  const metadata = createTourMetadata(tour);
  assert.equal(metadata.title, "Private Chengdu Panda Tour with Hotel Pickup");
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

test("visible facts, animal-access limits and quote-only units survive schema projection", () => {
  const schema = itineraryProductSchema({
    ...tourSearchSpecification(tour),
    name: model.headline,
    identifier: tour.slug,
    url,
  });
  assert.equal(schema.duration, "PT8H");
  assert.match(model.answerSummary, /usually 7–9 hours/);
  assert.equal(schema.description, model.answerSummary);
  assert.equal(schema.offers, undefined);
  assert.equal(schema.provider["@id"], siteConfig.url + "/#organization");
  assert.deepEqual(
    schema.additionalProperty.map(({ name, value }) => ({ label: name, value })),
    model.practicalities,
  );
  assert.equal(catalog.pricing.status, "quote-only");
  assert.equal(model.price.pricingUnit, "private-group");
  assert.equal(model.price.fromUsd, undefined);
  assert.doesNotMatch(JSON.stringify(model.price), /US\$|room categor|hotel standard/i);
  assert.ok(!catalog.planningNeedFilters.includes("mobility-aware"));
  assert.ok(!catalog.planningNeedFilters.includes("slower-pacing"));
});

test("all purchase and access answers are visible and FAQPage has exact parity", () => {
  const faqs = getVisibleTourFaqs(tour);
  assert.equal(faqs.length, tour.faqs.length + bookingPolicyFaqs.length);
  assert.equal(faqs.length, 18);
  const schema = faqPageSchema(faqs, url);
  assert.deepEqual(
    schema.mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    })),
    model.faqs,
  );
  for (const query of [
    /Which panda base/,
    /two people/,
    /skip-the-line/,
    /cubs/,
    /volunteer/,
    /English-speaking/,
    /passport/,
    /electric cart/,
    /children/,
    /tea included/,
    /opera/,
    /Tianfu/,
    /summer heat/,
    /only a panda-base morning/,
  ]) {
    assert.ok(
      faqs.some(({ question }) => query.test(question)),
      String(query),
    );
  }
});

test("answers separate public observation from VIP entry, volunteering and paid add-ons", () => {
  assert.match(answerFor(/Which panda base/), /does not visit Dujiangyan, Wolong or Bifengxia/);
  assert.match(answerFor(/hold, touch/), /^No\./);
  assert.match(answerFor(/volunteer/), /no volunteer place is promised/);
  assert.match(answerFor(/skip-the-line/), /do not bypass security/);
  assert.match(answerFor(/electric cart/), /not included/);
  assert.match(answerFor(/electric cart/), /some walking remains/);
  assert.match(answerFor(/tea included/), /lunch, tea and other drinks are not/);
  assert.match(answerFor(/opera/), /may replace .*Park walk or require extra hours/);
  assert.match(answerFor(/Tianfu/), /TFU/);
  assert.match(answerFor(/Tianfu/), /CTU/);
  assert.match(answerFor(/Tianfu/), /separate timing review/);
  assert.ok(model.days[0].experiences.every(({ time }) => time));
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
    "standing",
    "fixed return deadline",
    "Travellers: 2 guests",
  ]) {
    assert.ok(message.includes(text), text);
  }
  assert.doesNotMatch(message, /passport (?:number|details)\s*:|US\$|undefined/i);
  assert.match(message, /ticket-booking documents after checking availability/);
  assert.ok(model.inquiryChecklist.length >= 5);
});

test("existing guides return to the product and related routes genuinely include Chengdu", () => {
  const guides = getJourneyReadingArticles(tour.slug);
  assert.equal(guides.length, 3);
  assert.equal(guides[0].slug, "chengdu-panda-base-morning-visit-itinerary");
  for (const guide of guides) {
    const article = journalArticles.find(({ slug }) => slug === guide.slug);
    assert.equal(getJourneyBridgeForArticle(article).journey.slug, tour.slug);
  }
  assert.equal(model.relatedTourHrefs.length, 2);
  for (const href of model.relatedTourHrefs) {
    assert.ok(getJourneyCatalogItem(href.split("/").at(-1)).destinationFilters.includes("Chengdu"));
  }
  assert.ok(journalArticles.some(({ slug }) => slug === "chengdu-panda-base-tickets-foreigners"));
  assert.ok(
    model.planningResources.some(
      ({ href }) => href === "https://www.panda.org.cn/en/service/notice",
    ),
  );
  const fourCity = tour.related.tours[1];
  assert.equal(fourCity.duration, "12 days / 11 nights");
  assert.equal(fourCity.route, "Shanghai · Chengdu · Xi'an · Beijing");
  assert.doesNotMatch(JSON.stringify(tour.related), /great-wall-private-china-travel/);
});

test("AI text routes and sitemap expose the same base, scope and quote-only product", async () => {
  const { GET: full } = await import("../app/llms-full.txt/route.ts");
  const { GET: short } = await import("../app/llms.txt/route.ts");
  const text = await full().text();
  const section = text.split("# Product: " + tour.title + "\n")[1].split("\n# Product:")[0];
  assert.ok(section.includes(model.answerSummary));
  for (const { value } of model.practicalities) assert.ok(section.includes(value));
  assert.match(section, /Quote only; no public numerical starting price/);
  assert.doesNotMatch(section, /US\$|room categories/);
  const shortText = await short().text();
  assert.ok(shortText.includes(url));
  assert.ok(shortText.includes(catalog.pricing.inclusionSummary));
  const { default: sitemap } = await import("../app/sitemap.ts");
  const entries = (await sitemap()).filter((entry) => entry.url === url);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].lastModified, tour.updatedAt);
});
