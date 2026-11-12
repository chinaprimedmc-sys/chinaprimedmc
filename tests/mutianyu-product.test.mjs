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

const { mutianyuPrivateDayTour: tour } =
  await import("../content/tours/mutianyu-private-day-tour.ts");
const { createTourDetailModel, bookingPolicyFaqs } =
  await import("../features/tours/detail/tour-detail-model.ts");
const { getJourneyCatalogItem } = await import("../content/tours/catalog.ts");
const { buildExplorerItem } = await import("../lib/tours/journey-explorer-item.ts");
const { configuredWhatsAppHref } = await import("../lib/tours/journey-whatsapp.ts");
const model = createTourDetailModel(tour);
const catalog = getJourneyCatalogItem(tour.slug);

const { createTourMetadata } = await import("../lib/seo/tour-metadata.ts");
const { tourSearchSpecification } = await import("../lib/seo/tour-specification.ts");
const { itineraryProductSchema, faqPageSchema } = await import("../lib/seo/schema.ts");
const { getVisibleTourFaqs } = await import("../features/tours/detail/tour-detail-model.ts");
const { getJourneySeoTitle } = await import("../content/tours/card-copy.ts");
const { getJourneyStartingOffer } = await import("../lib/tours/journey-pricing.ts");
const { tourOfficialCitations } = await import("../lib/seo/tour-sources.ts");

test("Mutianyu metadata, H1 and canonical use the complete commercial intent without a clipped title", () => {
  const metadata = createTourMetadata(tour);
  assert.equal(metadata.title, tour.title);
  assert.equal(metadata.title, model.headline);
  assert.equal(metadata.title, getJourneySeoTitle(catalog));
  assert.equal(metadata.description, tour.seo.description);
  assert.ok(metadata.description.length >= 120 && metadata.description.length <= 165);
  assert.ok(metadata.alternates.canonical.endsWith(`/tours/${tour.slug}`));
  assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  assert.equal(metadata.robots.index, true);
  assert.equal(metadata.robots.googleBot["max-snippet"], -1);
  // The shared landing page collapses summaries over 70 words: keep the whole answer visible.
  assert.ok(model.answerSummary.split(/\s+/).length <= 70);
});

test("Mutianyu's visible service facts and starting offer match TouristTrip without including optional lifts", () => {
  const url = createTourMetadata(tour).alternates.canonical;
  const schema = itineraryProductSchema({
    ...tourSearchSpecification(tour),
    name: model.headline,
    url,
    offer: getJourneyStartingOffer(catalog, url),
  });
  assert.equal(
    schema.subjectOf[0].mainEntity.find(({ name }) => name === "ISO 8601 duration").value,
    "PT8H",
  );
  assert.equal(schema.description, model.answerSummary);
  assert.equal(schema.offers.price, 349);
  assert.equal(schema.offers.priceSpecification.unitText, "per person");
  assert.equal(schema.offers.availability, undefined);
  assert.deepEqual(
    schema.subjectOf[0].mainEntity
      .filter(({ name }) => model.practicalities.some((fact) => fact.label === name))
      .map(({ name, value }) => ({ label: name, value })),
    model.practicalities,
  );
  assert.match(
    model.practicalities.find(({ label }) => label === "Starting-price basis").value,
    /USD 349 per person.*USD 698 for two/,
  );
  assert.match(
    model.practicalities.find(({ label }) => label === "Mountain transport").value,
    /optional paid/,
  );
  assert.match(model.answerSummary, /Cable car, chairlift, toboggan and lunch are extra/);
  assert.doesNotMatch(tour.included.join(" "), /business MPV|round-trip cable car|lunch included/i);
});

test("all Mutianyu decision answers and booking terms are visible and identical to FAQ schema", () => {
  const visible = getVisibleTourFaqs(tour);
  const schema = faqPageSchema(visible);
  assert.equal(visible.length, 20);
  assert.equal(tour.faqs.length, 18);
  assert.equal(new Set(visible.map(({ question }) => question)).size, visible.length);
  assert.deepEqual(
    schema.mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    })),
    model.faqs,
  );
  const cost = visible.find(({ question }) => /two people/.test(question)).answer;
  assert.match(cost, /USD 349 per person.*USD 698 for two/);
  assert.doesNotMatch(cost, /not a per-person|USD 249|USD 399/);
  assert.match(visible.find(({ question }) => /wheelchair/.test(question)).answer, /not step-free/);
  assert.match(
    visible.find(({ question }) => /layover/.test(question)).answer,
    /separate feasibility review/,
  );
  assert.match(
    visible.find(({ question }) => /passport/.test(question)).answer,
    /Do not send passport numbers/,
  );
});

test("Mutianyu official references have scoped publishers and recommendations stay within Beijing", () => {
  const citations = tourOfficialCitations(tour);
  assert.equal(citations.length, 2);
  assert.ok(citations.some(({ url }) => url === "https://www.mutianyugreatwall.com/"));
  assert.ok(citations.some(({ url }) => url === "https://whc.unesco.org/en/list/438/"));
  assert.equal(
    citations.find(({ url }) => url.includes("unesco")).publisher.name,
    "UNESCO World Heritage Centre",
  );
  assert.equal(model.relatedTourHrefs.length, 2);
  for (const href of model.relatedTourHrefs) {
    assert.ok(getJourneyCatalogItem(href.split("/").at(-1)).destinationFilters.includes("Beijing"));
  }
});

test("Mutianyu remains a published per-person starting-price product across catalog, card and detail", () => {
  assert.equal(catalog.pricing.status, "published-from");
  assert.equal(catalog.pricing.pricingUnit, "per-person");
  assert.equal(catalog.pricing.fromUsd, 349);
  assert.equal(model.price.pricingUnit, "per-person");
  assert.equal(model.price.fromUsd, 349);
  assert.doesNotMatch(buildExplorerItem(catalog).priceNote, /room/i);
  assert.doesNotMatch(JSON.stringify(model.price), /US\$|\$\d/);
});

test("the detail model exposes visit choices, terrain, daily timings and every booking FAQ", () => {
  assert.equal(model.visitOptions.options.length, 3);
  for (const option of model.visitOptions.options) {
    assert.ok(option.walking && option.priceNote);
  }
  assert.match(model.visitOptions.note, /not assumed to be interchangeable/);
  assert.match(model.quickFacts.find((fact) => fact.label === "Pace").value, /steps and slopes/i);
  assert.ok(model.days[0].experiences.every((activity) => activity.time));
  const visibleFaqs = model.faqs.slice(0, model.faqLimit ?? 6);
  assert.equal(visibleFaqs.length, tour.faqs.length + bookingPolicyFaqs.length);
  for (const faq of bookingPolicyFaqs) assert.ok(visibleFaqs.includes(faq));
  assert.equal(tour.hero.primary.href, "#enquiry");
  assert.equal(tour.hero.secondary.href, "#included");
});

test("configured WhatsApp links retain the Mutianyu pickup and route questions", () => {
  const href = configuredWhatsAppHref(model.whatsappHref, model.displayTitle, {
    duration: model.duration,
    guests: "2",
    priceBasis: model.price.basis,
  });
  const url = new URL(href);
  const message = url.searchParams.get("text");
  assert.equal(url.host, "wa.me");
  assert.equal(url.pathname, "/8618027438191");
  for (const text of [
    "Preferred date:",
    "Beijing hotel / pickup address:",
    "children (with ages)",
    "cable car",
    "fixed deadline",
    "Walking limitations",
    "Travellers: 2 guests",
  ]) {
    assert.ok(message.includes(text), text);
  }
  assert.doesNotMatch(message, /US\$|undefined/);
  const fallback = new URL(
    configuredWhatsAppHref("https://wa.me/8618027438191", "Example tour", {
      duration: "1 day",
      guests: "4",
      priceBasis: "Per group",
      priceFromUsd: 500,
    }),
  ).searchParams.get("text");
  assert.match(fallback, /Example tour/);
  assert.match(fallback, /From USD 500. Per group/);
});
