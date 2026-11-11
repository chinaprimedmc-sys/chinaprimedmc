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

const { privateShanghaiDayTour: tour } =
  await import("../content/tours/private-shanghai-day-tour.ts");
const { tours } = await import("../content/tours/index.ts");
const { getJourneyCatalogItem } = await import("../content/tours/catalog.ts");
const { getJourneySeoTitle, getJourneyHeadline } = await import("../content/tours/card-copy.ts");
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

test("commercial metadata retains the complete guide-and-driver intent and one canonical URL", () => {
  const metadata = createTourMetadata(tour);
  assert.equal(metadata.title, tour.seo.title);
  assert.equal(metadata.title, getJourneySeoTitle(catalog));
  assert.equal(model.headline, getJourneyHeadline(catalog));
  assert.match(metadata.title, /^Private Shanghai Day Tour with Guide and Driver$/);
  assert.equal(metadata.description, tour.seo.description);
  assert.ok(metadata.description.length >= 120 && metadata.description.length <= 165);
  assert.doesNotMatch(metadata.description, /…/);
  assert.equal(metadata.alternates.canonical, url);
  assert.equal(metadata.openGraph.url, url);
  assert.equal(metadata.robots.index, true);
});

test("visible Shanghai facts and TouristTrip data describe the same eight-hour published starting-price service", () => {
  const specification = tourSearchSpecification(tour);
  const schema = itineraryProductSchema({
    ...specification,
    name: model.headline,
    identifier: tour.slug,
    url,
  });
  assert.equal(schema["@type"], "TouristTrip");
  assert.equal(schema.duration, "PT8H");
  assert.equal(schema.description, model.answerSummary);
  assert.equal(schema.offers, undefined);
  assert.equal(catalog.pricing.status, "published-from");
  assert.equal(catalog.pricing.pricingUnit, "per-person");
  assert.equal(catalog.pricing.fromUsd, 239);
  assert.deepEqual(
    schema.additionalProperty.map(({ name, value }) => ({ label: name, value })),
    model.practicalities,
  );
  assert.match(JSON.stringify(model.practicalities), /No overnight accommodation/);
  assert.doesNotMatch(JSON.stringify(model.price), /US\$|room categor|hotel standard/i);
  for (const landmark of [
    "Yu Garden",
    "Yuyuan Garden",
    "Bund",
    "Huangpu",
    "former French Concession",
  ]) {
    assert.ok(model.answerSummary.includes(landmark), landmark);
  }
  assert.equal(schema.provider["@id"], `${siteConfig.url}/#organization`);
});

test("every described FAQ is visible, including all Shanghai long-tail questions and booking terms", () => {
  const faqs = getVisibleTourFaqs(tour);
  const schema = faqPageSchema(faqs, url);
  assert.equal(faqs.length, tour.faqs.length + bookingPolicyFaqs.length);
  assert.equal(faqs.length, 17);
  assert.deepEqual(
    schema.mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    })),
    model.faqs,
  );
  for (const phrase of [
    "English-speaking",
    "Yuyuan Bazaar",
    "two people",
    "shore excursion",
    "layover",
    "Shanghai Tower",
    "night cruise",
    "older travelers",
  ]) {
    assert.ok(
      faqs.some(({ question }) => question.includes(phrase)),
      phrase,
    );
  }
  for (const other of tours) {
    const otherModel = createTourDetailModel(other);
    assert.deepEqual(otherModel.faqs, getVisibleTourFaqs(other), other.slug);
    assert.ok(otherModel.faqs.length <= (other.faqLimit ?? 6), other.slug);
  }
});

test("Shanghai planning articles link back to the product and curated products are real relevant routes", () => {
  const guides = getJourneyReadingArticles(tour.slug);
  assert.equal(guides.length, 3);
  assert.equal(guides[0].slug, "shanghai-one-day-itinerary-yu-garden-bund-ferry");
  for (const guide of guides) {
    const article = journalArticles.find(({ slug }) => slug === guide.slug);
    assert.equal(getJourneyBridgeForArticle(article).journey.slug, tour.slug);
  }
  assert.equal(new Set(model.relatedTourHrefs).size, model.relatedTourHrefs.length);
  for (const href of model.relatedTourHrefs) {
    const related = getJourneyCatalogItem(href.split("/").at(-1));
    assert.ok(related && related.destinationFilters.includes("Shanghai"), href);
  }
  for (const { href } of model.planningResources.filter(({ href }) => href.startsWith("/"))) {
    assert.ok(
      existsSync(resolve(root, `app${href}/page.tsx`)) || href === "/destinations/shanghai",
    );
  }
  assert.ok(model.days[0].experiences.every(({ time }) => time));
});

test("Shanghai WhatsApp inquiry retains terminal, guide language and return-deadline questions", () => {
  const href = configuredWhatsAppHref(model.whatsappHref, model.displayTitle, {
    duration: model.duration,
    guests: "3-4",
    priceBasis: model.price.basis,
  });
  const message = new URL(href).searchParams.get("text");
  for (const text of [
    "Preferred date:",
    "Hotel / pickup address:",
    "fixed departure deadline",
    "Preferred guide language:",
    "flight / ship / terminal",
    "Walking, ferry boarding",
    "Travellers: 3-4 guests",
  ]) {
    assert.ok(message.includes(text), text);
  }
  assert.doesNotMatch(message, /US\$|undefined/);
  assert.ok(model.inquiryChecklist.length >= 4);
});

test("the actual machine-readable routes retain Shanghai summary, service facts and published pricing", async () => {
  const { GET: full } = await import("../app/llms-full.txt/route.ts");
  const { GET: short } = await import("../app/llms.txt/route.ts");
  const fullResponse = full();
  assert.match(fullResponse.headers.get("Content-Type"), /text\/plain/);
  const text = await fullResponse.text();
  const section = text.split(`# Product: ${tour.title}\n`)[1].split("\n# Product:")[0];
  assert.ok(section.includes(model.answerSummary));
  for (const fact of model.practicalities) assert.ok(section.includes(fact.value), fact.label);
  assert.match(section, /Published starting price subject to the stated basis/);
  assert.doesNotMatch(section, /US\$|room categories|Typical tailored range/);
  const shortText = await short().text();
  assert.ok(shortText.includes(url));
  assert.ok(shortText.includes(catalog.pricing.inclusionSummary));
});

test("Shanghai is discoverable in the actual sitemap and public crawler rules", async () => {
  const { default: sitemap } = await import("../app/sitemap.ts");
  const { default: robots } = await import("../app/robots.ts");
  const entries = (await sitemap()).filter((entry) => entry.url === url);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].lastModified, tour.updatedAt);
  assert.equal(new URL(entries[0].url).search, "");
  const rules = robots().rules;
  for (const agent of ["*", "Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot"]) {
    const rule = rules.find(({ userAgent }) => userAgent === agent);
    assert.ok(rule, agent);
    assert.ok(rule.allow.includes("/tours/"), agent);
    assert.ok(!rule.disallow.some((path) => new URL(url).pathname.startsWith(path)), agent);
  }
});
