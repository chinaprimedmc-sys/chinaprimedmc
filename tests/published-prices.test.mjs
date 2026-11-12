import ts from "typescript";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import assert from "node:assert/strict";
import test from "node:test";
import { registerHooks, stripTypeScriptTypes } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
registerHooks({
  resolve(specifier, context, next) {
    if (specifier === "next/image" || specifier === "next/link") {
      const target = pathToFileURL(resolve(root, "node_modules", specifier + ".js")).href;
      return {
        url:
          "data:text/javascript," +
          encodeURIComponent(
            `import component from ${JSON.stringify(target)}; export default component.default ?? component;`,
          ),
        shortCircuit: true,
      };
    }
    if (specifier === "next/navigation" || specifier === "next/headers")
      return next(specifier + ".js", context);

    if (specifier === "server-only")
      return { url: "data:text/javascript,export%20%7B%7D", shortCircuit: true };
    let path;
    if (specifier.startsWith("@/")) path = resolve(root, specifier.slice(2));
    else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:"))
      path = fileURLToPath(new URL(specifier, context.parentURL));
    if ((path?.endsWith(".md") || path?.endsWith(".css")) && existsSync(path))
      return { url: pathToFileURL(path).href, shortCircuit: true };
    if (path) {
      for (const candidate of [path + ".ts", path + ".tsx", path + "/index.ts"]) {
        if (existsSync(candidate))
          return { url: pathToFileURL(candidate).href, shortCircuit: true };
      }
    }
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url.endsWith(".css"))
      return {
        format: "module",
        source: "export default new Proxy({}, {get: (_,key) => String(key)})",
        shortCircuit: true,
      };
    if (url.endsWith(".tsx"))
      return {
        format: "module",
        source: ts.transpileModule(readFileSync(fileURLToPath(url), "utf8"), {
          compilerOptions: {
            jsx: ts.JsxEmit.ReactJSX,
            module: ts.ModuleKind.ESNext,
            target: ts.ScriptTarget.ES2022,
          },
        }).outputText,
        shortCircuit: true,
      };

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

const { journeyCatalog } = await import("../content/tours/catalog.ts");
const { getTourBySlug } = await import("../content/tours/index.ts");
const { publishedJourneyPrices } = await import("../content/tours/published-prices.ts");
const { resolveJourneyPricing, verifiedPriceSlugs } =
  await import("../content/tours/price-visibility.ts");
const { getJourneyPricePresentation, getJourneyStartingOffer } =
  await import("../lib/tours/journey-pricing.ts");
const { buildExplorerItem } = await import("../lib/tours/journey-explorer-item.ts");
const { createTourDetailModel } = await import("../features/tours/detail/tour-detail-model.ts");
const { JourneyTile } = await import("../components/tours/journey-tile.tsx");
const { JourneyPrice } = await import("../features/tours/detail/journey-booking-summary.tsx");
const { JourneyConfigurationProvider } =
  await import("../features/tours/detail/journey-configuration.tsx");
const { itineraryProductSchema } = await import("../lib/seo/schema.ts");
const { configuredWhatsAppHref } = await import("../lib/tours/journey-whatsapp.ts");
const expected = {
  "private-mutianyu-great-wall-day-tour": 349,
  "private-shanghai-day-tour-guide-driver": 349,
  "private-xian-terracotta-warriors-day-tour": 299,
  "private-chengdu-panda-day-tour-early-morning": 279,
  "guilin-yangshuo-li-river-cruise-private-day-tour": 499,
  "beijing-xian-shanghai-private-10-day-tour": 3290,
  "china-at-an-easier-pace-12-day-private-tour": 4690,
  "beijing-xian-chengdu-shanghai-private-11-day-tour": 4790,
  "china-family-tour-with-pandas-12-day-private-tour": 5290,
  "beijing-great-wall-private-5-day-tour": 1690,
  "chengdu-pandas-sichuan-table": 1490,
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": 1890,
  "luxury-yunnan-private-tour": 6490,
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": 2690,
  "shanghai-zhangjiajie-floating-peaks": 3090,
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": 3290,
  "muslim-friendly-china-tour-great-wall-desert-stars": 8490,
  "qingcheng-mountain-private-wellness-retreat-10-day": 5990,
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": 2490,
};

test("all 19 owner-approved rates preserve exact amounts and party bases without claiming supplier verification", () => {
  assert.equal(journeyCatalog.length, 20);
  assert.equal(journeyCatalog.filter((item) => item.pricing.fromUsd !== undefined).length, 19);
  assert.deepEqual(Object.keys(publishedJourneyPrices).sort(), Object.keys(expected).sort());
  assert.equal(verifiedPriceSlugs.size, 0);
  for (const item of journeyCatalog.filter((item) => item.slug in expected)) {
    assert.equal(item.pricing.fromUsd, expected[item.slug], item.slug);
    assert.equal(item.pricing.pricingUnit, "per-person");
    assert.equal(item.pricing.status, "published-from");
    const family = item.slug === "china-family-tour-with-pandas-12-day-private-tour";
    assert.equal(item.pricing.basePartySize, family ? 4 : 2);
    assert.match(item.pricing.basis, family ? /two adults and two children/ : /two adults/);
    assert.doesNotMatch(item.pricing.finalPriceNote, /No public|no.*starting price/i);
    const model = createTourDetailModel(getTourBySlug(item.slug));
    assert.equal(model.price.fromUsd, item.pricing.fromUsd);
    assert.equal(model.price.basePartySize, item.pricing.basePartySize);
    assert.equal(model.price.basis, item.pricing.basis);
  }
  const template = journeyCatalog[0].pricing;
  assert.equal(
    resolveJourneyPricing("unapproved-future-product", { ...template, fromUsd: 999 }).fromUsd,
    undefined,
  );
});

test("actual server-rendered cards display only From USD xxxx as the price and retain accessible basis", () => {
  for (const item of journeyCatalog.filter((item) => item.slug in expected)) {
    const expectedLabel = `From USD ${expected[item.slug].toLocaleString("en-US")}`;
    const presentation = getJourneyPricePresentation(item);
    assert.equal(presentation.displayText, expectedLabel);
    const projection = buildExplorerItem(item);
    assert.equal(projection.priceNote, "");
    const html = renderToStaticMarkup(React.createElement(JourneyTile, { item: projection }));
    assert.ok(html.includes(`<strong>${expectedLabel}</strong>`), item.slug);
    assert.ok(html.includes('aria-label="From USD'), item.slug);
    assert.doesNotMatch(html, /Priced for your dates|Individually priced|US\$/);
  }
});

test("detail price renders consistently for two, four and other requested group sizes without multiplying per-person rates", () => {
  for (const item of journeyCatalog.filter((item) => item.slug in expected)) {
    const expectedLabel = `From USD ${expected[item.slug].toLocaleString("en-US")}`;
    for (const guests of ["2", "4", "7+"]) {
      const html = renderToStaticMarkup(
        React.createElement(
          JourneyConfigurationProvider,
          {
            basePrice: item.pricing.fromUsd,
            initialSelection: { guests },
            journeySlug: item.slug,
            duration: item.durationLabel,
            priceBasis: item.pricing.basis,
            pricingUnit: item.pricing.pricingUnit,
            basePartySize: item.pricing.basePartySize,
          },
          React.createElement(JourneyPrice, { fallback: expectedLabel, journeySlug: item.slug }),
        ),
      );
      assert.ok(html.includes(`>${expectedLabel}</strong>`), `${item.slug}: ${guests}`);
      assert.doesNotMatch(html, /<small>|Individually priced|US\$/);
    }
  }
});

test("shared route Offer and inquiry use exactly the published rate, unit and stated basis", () => {
  for (const item of journeyCatalog.filter((item) => item.slug in expected)) {
    const url = `https://www.chinaprimedmc.com${item.href}`;
    const offer = getJourneyStartingOffer(item, url);
    const schema = itineraryProductSchema({
      name: item.title,
      url,
      description: item.summary,
      offer,
    });
    assert.equal(schema.offers.price, expected[item.slug]);
    assert.equal(schema.offers.priceCurrency, "USD");
    assert.equal(schema.offers.priceSpecification.unitText, "per person");
    assert.equal(schema.offers.description, item.pricing.basis);
    assert.equal(schema.offers.availability, undefined);
    const tour = getTourBySlug(item.slug);
    const message = new URL(
      configuredWhatsAppHref(createTourDetailModel(tour).whatsappHref, item.title, {
        guests: "2",
        duration: item.durationLabel,
        priceFromUsd: item.pricing.fromUsd,
        priceBasis: item.pricing.basis,
      }),
    ).searchParams.get("text");
    assert.ok(message.includes(`From USD ${expected[item.slug].toLocaleString("en-US")}`));
    assert.ok(message.includes(item.pricing.basis));
  }
});

test("both actual AI routes expose all approved prices and retain date-specific written confirmation", async () => {
  const { GET: full } = await import("../app/llms-full.txt/route.ts");
  const { GET: short } = await import("../app/llms.txt/route.ts");
  const longText = await full().text(),
    shortText = await short().text();
  const mutianyu = getTourBySlug("private-mutianyu-great-wall-day-tour");
  const productBlock = longText.split(`# Product: ${mutianyu.title}\n`)[1]?.split("# Product:")[0];
  assert.ok(productBlock, "Mutianyu has its own canonical product section");
  assert.ok(productBlock.includes(mutianyu.overview.answer));
  assert.ok(productBlock.includes("USD 698 for two"));
  assert.ok(productBlock.includes("Published starting price: From USD 349 per person"));
  for (const { question, answer } of mutianyu.faqs) {
    assert.ok(productBlock.includes(question), question);
    assert.ok(productBlock.includes(answer), question);
  }
  for (const { href } of mutianyu.planningResources) assert.ok(productBlock.includes(href), href);
  assert.doesNotMatch(productBlock, /USD 249|USD 399|not a per-person headline/);
  for (const item of journeyCatalog.filter((item) => item.slug in expected)) {
    const price = `From USD ${expected[item.slug].toLocaleString("en-US")}`;
    assert.ok(longText.includes(price), item.slug);
    assert.ok(shortText.includes(price), item.slug);
    assert.ok(longText.includes(item.pricing.basis));
  }
  assert.doesNotMatch(longText, /US\$5,850|US\$23,400/);
  assert.match(longText, /subject to written supplier confirmation/);
});

test("family total and Beijing independent guide inclusions match the approved price version", () => {
  const family = getTourBySlug("china-family-tour-with-pandas-12-day-private-tour");
  const text = JSON.stringify(family);
  assert.match(text, /5,290/);
  assert.match(text, /21,160/);
  assert.doesNotMatch(text, /5,850|23,400/);
  const beijing = getTourBySlug("beijing-great-wall-private-5-day-tour");
  assert.ok(
    beijing.included.some((text) =>
      /Private English-speaking guide and separate professional driver/.test(text),
    ),
  );
  assert.doesNotMatch(JSON.stringify(beijing), /driver-host/);
});
