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

test("Mutianyu remains a published per-person starting-price product across catalog, card and detail", () => {
  assert.equal(catalog.pricing.status, "published-from");
  assert.equal(catalog.pricing.pricingUnit, "per-person");
  assert.equal(catalog.pricing.fromUsd, 249);
  assert.equal(model.price.pricingUnit, "per-person");
  assert.equal(model.price.fromUsd, 249);
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
