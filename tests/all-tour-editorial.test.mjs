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
    if (specifier === "next/image" || specifier === "next/link" || specifier === "next/dynamic") {
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
const { getJourneySeoTitle } = await import("../content/tours/card-copy.ts");
const { createTourMetadata } = await import("../lib/seo/tour-metadata.ts");
const { tourSearchSpecification } = await import("../lib/seo/tour-specification.ts");
const { itineraryProductSchema, faqPageSchema } = await import("../lib/seo/schema.ts");
const { createTourDetailModel, bookingPolicyFaqs } =
  await import("../features/tours/detail/tour-detail-model.ts");
const { siteConfig } = await import("../config/site.ts");
const expected = {
  "shanghai-suzhou-hangzhou-private-7-day-tour": [7, 6, 2],
  "guilin-yangshuo-longji-private-5-day-tour": [5, 4, 1],
  "private-mutianyu-great-wall-day-tour": [1, 0, 0],
  "private-shanghai-day-tour-guide-driver": [1, 0, 0],
  "private-xian-terracotta-warriors-day-tour": [1, 0, 0],
  "private-chengdu-panda-day-tour-early-morning": [1, 0, 0],
  "guilin-yangshuo-li-river-cruise-private-day-tour": [1, 0, 0],
  "beijing-xian-shanghai-private-10-day-tour": [10, 9, 2],
  "china-at-an-easier-pace-12-day-private-tour": [12, 11, 2],
  "china-family-tour-with-pandas-12-day-private-tour": [12, 11, 3],
  "beijing-xian-chengdu-shanghai-private-11-day-tour": [12, 11, 3],
  "beijing-great-wall-private-5-day-tour": [5, 4, 0],
  "chengdu-pandas-sichuan-table": [5, 4, 0],
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": [6, 5, 1],
  "luxury-yunnan-private-tour": [10, 9, 3],
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": [7, 6, 1],
  "shanghai-zhangjiajie-floating-peaks": [8, 7, 3],
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": [11, 10, 2],
  "muslim-friendly-china-tour-great-wall-desert-stars": [13, 12, 4],
  "qingcheng-mountain-private-wellness-retreat-10-day": [10, 9, 1],
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": [4, 3, 1],
};

for (const [slug, [days, nights, changes]] of Object.entries(expected)) {
  test(`${slug}: real route, visible facts, search title and FAQ describe the same offer`, () => {
    const tour = getTourBySlug(slug);
    const item = journeyCatalog.find((j) => j.slug === slug);
    const model = createTourDetailModel(tour);
    const meta = createTourMetadata(tour);
    const url = `${siteConfig.url}/tours/${slug}`;
    assert.equal(meta.title, model.headline);
    assert.equal(item.title, tour.title);
    assert.equal(meta.title, getJourneySeoTitle(item));
    assert.equal(meta.alternates.canonical, url);
    assert.equal(meta.robots.index, true);
    assert.equal(meta.description, tour.seo.description);
    assert.ok(meta.description.length >= 120 && meta.description.length <= 165);
    assert.ok(model.answerSummary.split(/\s+/).length <= 70, "keep the whole factual lead visible");
    assert.deepEqual(
      tour.itinerary.map((d) => d.day),
      Array.from({ length: days }, (_, i) => i + 1),
    );
    if (days > 1) {
      assert.equal(tour.itinerary.slice(0, -1).filter((d) => Boolean(d.hotel)).length, nights);
      assert.doesNotMatch(
        tour.itinerary.at(-1).hotel ?? "",
        /hotel|stay|night/i,
        "departure must not add an overnight",
      );
    }
    assert.equal(item.discovery.hotelChanges, changes);
    assert.notEqual(
      item.discovery.walkingLevel,
      "minimal",
      "private transport and rest do not remove public-site walking",
    );
    const schema = itineraryProductSchema({
      ...tourSearchSpecification(tour),
      name: model.headline,
      identifier: slug,
      url,
    });
    assert.equal(schema.description, model.answerSummary);
    const properties = schema.subjectOf[0].mainEntity;
    for (const { label, value } of model.practicalities) {
      assert.equal(properties.find((p) => p.name === label)?.value, value);
    }
    assert.deepEqual(model.faqs, [...tour.faqs, ...bookingPolicyFaqs]);
    assert.equal(new Set(model.faqs.map((f) => f.question)).size, model.faqs.length);
    const faqSchema = faqPageSchema(model.faqs);
    assert.deepEqual(
      faqSchema.mainEntity.map((q) => [q.name, q.acceptedAnswer.text]),
      model.faqs.map((q) => [q.question, q.answer]),
    );
    const priceText = model.faqs
      .filter((q) => /cost|price|starting rate|how much/i.test(q.question))
      .map((q) => q.answer)
      .join(" ");
    assert.ok(
      item.pricing.fromUsd === undefined
        ? /no public starting price|no public starting rate/i.test(priceText)
        : priceText.includes(item.pricing.fromUsd.toLocaleString("en-US")),
      "cost answer reads the published rate",
    );
    assert.ok(tour.planningResources.some((r) => r.officialPublisher));
    for (const ref of tour.planningResources.filter((r) => r.officialPublisher)) {
      assert.equal(new URL(ref.href).protocol, "https:");
      assert.ok(ref.description.length > 30, "state what the official source supports");
    }
    if (tour.comparison) assert.ok(getTourBySlug(tour.comparison.href.split("/").at(-1)));
    for (const action of [tour.hero.primary, tour.hero.secondary]) {
      assert.ok(!["#price", "#proposal"].includes(action.href), "use actual detail anchors");
    }
    const message = decodeURIComponent(tour.inquiry.whatsappHref ?? "");
    if (slug !== "china-family-tour-with-pandas-12-day-private-tour")
      assert.doesNotMatch(message, /four guests|two rooms/i, "do not invent the inquiry party");
  });
}

test("six-day northern route gives palace and Wall separate days and keeps five actual nights", () => {
  const t = getTourBySlug("xian-beijing-terracotta-warriors-great-wall-private-6-day-tour");
  assert.match(t.itinerary[2].transport, /high-speed rail/);
  assert.match(t.itinerary[3].title, /Forbidden City/);
  assert.match(t.itinerary[4].title, /Mutianyu/);
  assert.match(t.accommodations[0].destination, /2 nights/);
  assert.match(t.accommodations[1].destination, /3 nights/);
  assert.doesNotMatch(
    t.itinerary[4].activities.map((a) => a.title).join(" "),
    /Forbidden City|Temple of Heaven/,
  );
});

test("family, retreat and Muslim-friendly products preserve real rest and meal boundaries", () => {
  const f = getTourBySlug("china-family-tour-with-pandas-12-day-private-tour");
  assert.match(f.itinerary[3].summary, /not a private cabin/);
  assert.match(f.itinerary[10].summary, /Protect the afternoon for hotel rest/);
  assert.deepEqual(f.itinerary[10].meals, [
    "Breakfast",
    "Private kitchen lunch",
    "Farewell dinner",
  ]);
  const r = getTourBySlug("qingcheng-mountain-private-wellness-retreat-10-day");
  assert.match(r.itinerary[3].meals.join(" "), /lunch and dinner independent/);
  assert.match(r.itinerary[6].transport, /No scheduled sightseeing vehicle or guide/);
  const m = getTourBySlug("muslim-friendly-china-tour-great-wall-desert-stars");
  assert.equal(m.itinerary[12].hotel, undefined);
  assert.match(m.itinerary[2].summary, /photographer.*extra cost/);
  assert.doesNotMatch(m.itinerary[8].summary, /vineyard/);
});

test("altitude, open days and business sample length stay explicit", () => {
  for (const slug of ["luxury-yunnan-private-tour", "chengdu-pandas-jiuzhaigou-private-7-day-tour"])
    assert.equal(journeyCatalog.find((j) => j.slug === slug).discovery.altitude, "high");
  const c = getTourBySlug("chengdu-chongqing-zhangjiajie-private-11-day-tour");
  for (const index of [5, 9]) assert.match(c.itinerary[index].transport, /None on an open day/);
  const b = journeyCatalog.find(
    (j) => j.slug === "guangzhou-shenzhen-tailor-made-business-tour-4-day",
  );
  assert.match(b.pricing.basis, /4-day \/ 3-night/);
  assert.match(b.pricing.basis, /does not price every 4–7-day agenda/);
});

// These are the actual route handlers, not reconstructed snapshots.
test("both machine-readable routes retain every URL and price; full text carries the actual summaries", async () => {
  for (const path of ["../app/llms.txt/route.ts", "../app/llms-full.txt/route.ts"]) {
    const { GET } = await import(path);
    const body = await (await GET()).text();
    for (const slug of Object.keys(expected)) {
      const t = getTourBySlug(slug);
      const item = journeyCatalog.find((j) => j.slug === slug);
      assert.ok(body.includes(`/tours/${slug}`));
      if (path.includes("llms-full"))
        assert.ok(body.includes(t.overview.answer), `${path}: ${slug} factual summary`);
      if (item.pricing.fromUsd !== undefined)
        assert.ok(body.includes(item.pricing.fromUsd.toLocaleString("en-US")));
      else assert.ok(body.includes(item.pricing.basis));
    }
  }
});

// A shared reading aid must not label all newly added comparisons as 10 versus 12 days.
test("rendered comparison navigation describes the actual product alternatives", async () => {
  const { JourneyDecisionSummary } =
    await import("../features/tours/detail/journey-decision-summary.tsx");
  for (const slug of [
    "china-family-tour-with-pandas-12-day-private-tour",
    "chengdu-pandas-sichuan-table",
    "qingcheng-mountain-private-wellness-retreat-10-day",
  ]) {
    const model = createTourDetailModel(getTourBySlug(slug));
    const html = renderToStaticMarkup(React.createElement(JourneyDecisionSummary, { model }));
    assert.match(html, /href="#compare-durations"/);
    assert.match(html, /Compare these itineraries/);
    assert.doesNotMatch(html, /Compare 10/);
  }
});

test("dossier and catalog agree on overnight changes and use actual walking and altitude facts", async () => {
  const { getDossierData } = await import("../features/tours/dossier/dossier-data.ts");
  for (const item of journeyCatalog) {
    const tour = getTourBySlug(item.slug);
    const dossier = getDossierData(tour);
    assert.equal(dossier.hotelChanges, item.discovery.hotelChanges, item.slug);
    const walking = tour.overview.practicalities.find((f) =>
      /walking|physical|access/i.test(f.label),
    );
    if (walking)
      assert.equal(dossier.fit.find((f) => f.label === "Walking level").value, walking.value);
    const altitude = tour.overview.practicalities.find((f) => /altitude/i.test(f.label));
    if (altitude)
      assert.equal(dossier.fit.find((f) => f.label === "Altitude").value, altitude.value);
  }
});

test("price specifications retain product-specific nights, independent days and optional tickets", () => {
  const price = (slug) => journeyCatalog.find((j) => j.slug === slug).pricing.inclusionSummary;
  assert.match(
    price("beijing-great-wall-private-5-day-tour"),
    /four nights.*Great Wall lifts.*extra/i,
  );
  assert.match(
    price("chengdu-pandas-sichuan-table"),
    /four Chengdu hotel nights.*Leshan or Chengdu/i,
  );
  assert.doesNotMatch(price("chengdu-pandas-sichuan-table"), /domestic transport/);
  assert.match(
    price("xian-beijing-terracotta-warriors-great-wall-private-6-day-tour"),
    /Xi'an 2 and Beijing 3/,
  );
  assert.match(
    price("chengdu-pandas-jiuzhaigou-private-7-day-tour"),
    /Huanglong.*separately arranged/,
  );
  assert.match(
    price("shanghai-zhangjiajie-floating-peaks"),
    /both directions.*Tianmen.*glass bridge.*optional/,
  );
  assert.match(
    price("chengdu-chongqing-zhangjiajie-private-11-day-tour"),
    /Days 6 and 10 have no scheduled guide/,
  );
  assert.match(
    price("muslim-friendly-china-tour-great-wall-desert-stars"),
    /twelve hotel nights in total.*photographer is an optional extra/,
  );
});

test("all 21 actual landing pages render complete readable facts, itinerary, FAQ and source links before hydration", async () => {
  const { TourDetailLanding } = await import("../features/tours/detail/tour-detail-landing.tsx");
  const { PathnameContext } =
    await import("next/dist/shared/lib/hooks-client-context.shared-runtime.js");
  const { mkdirSync, writeFileSync } = await import("node:fs");
  const artifactDirectory = "/tmp/aviora-tour-editorial-rendered";
  mkdirSync(artifactDirectory, { recursive: true });
  const escaped = (value) => renderToStaticMarkup(React.createElement(React.Fragment, null, value));
  for (const slug of Object.keys(expected)) {
    const tour = getTourBySlug(slug);
    const model = createTourDetailModel(tour);
    const html = renderToStaticMarkup(
      React.createElement(
        PathnameContext.Provider,
        { value: `/tours/${slug}` },
        React.createElement(TourDetailLanding, { model }),
      ),
    );
    writeFileSync(`${artifactDirectory}/${slug}.html`, html);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${slug}: unique HTML identifiers`);
    for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g))
      assert.ok(ids.includes(fragment), `${slug}: rendered fragment #${fragment} exists`);

    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `${slug}: one H1`);
    assert.ok(html.includes(escaped(model.headline)), `${slug}: rendered headline`);
    assert.ok(html.includes(escaped(tour.overview.answer)), `${slug}: complete factual lead`);
    for (const { label, value } of tour.overview.practicalities) {
      assert.ok(html.includes(escaped(label)), `${slug}: fact label ${label}`);
      assert.ok(html.includes(escaped(value)), `${slug}: fact value ${label}`);
    }
    for (const day of tour.itinerary)
      assert.ok(html.includes(escaped(day.summary)), `${slug}: readable Day ${day.day} summary`);
    for (const faq of model.faqs) {
      assert.ok(html.includes(escaped(faq.question)), `${slug}: question in HTML`);
      assert.ok(html.includes(escaped(faq.answer)), `${slug}: answer in HTML`);
    }
    for (const ref of tour.planningResources.filter((r) => r.officialPublisher)) {
      assert.ok(html.includes(`href="${escaped(ref.href)}"`), `${slug}: official destination link`);
      assert.ok(html.includes(escaped(ref.officialPublisher)), `${slug}: source publisher`);
    }
    if (tour.comparison) {
      for (const row of tour.comparison.rows)
        for (const cell of row) assert.ok(html.includes(escaped(cell)), `${slug}: comparison cell`);
    }
    for (const action of [tour.hero.primary, tour.hero.secondary])
      if (action.href.startsWith("#"))
        assert.ok(
          html.includes(`id="${action.href.slice(1)}"`),
          `${slug}: authored CTA target ${action.href}`,
        );
    assert.ok(html.includes('id="enquiry"'), `${slug}: inquiry destination`);
  }
});

test("curated alternatives use the linked product’s actual name, duration and direction", () => {
  for (const item of journeyCatalog) {
    const tour = getTourBySlug(item.slug);
    assert.equal(tour.related.useListedTours, true, item.slug);
    assert.equal(new Set(tour.related.tours.map((r) => r.href)).size, tour.related.tours.length);
    for (const alternative of tour.related.tours) {
      const linked = getTourBySlug(alternative.href.split("/").at(-1));
      assert.ok(linked, alternative.href);
      assert.notEqual(linked.slug, tour.slug);
      assert.equal(alternative.title, linked.title);
      assert.equal(alternative.duration.toLowerCase(), linked.duration.toLowerCase());
      assert.equal(alternative.route, linked.route.replaceAll(", ", " · "));
      assert.ok(
        alternative.description.length > 50,
        "explain why a customer might choose the alternative",
      );
    }
  }
});

test("Guilin regional product uses supplied local photography and exposes no invented price or Offer", async () => {
  const slug = "guilin-yangshuo-longji-private-5-day-tour";
  const tour = getTourBySlug(slug);
  const item = journeyCatalog.find((j) => j.slug === slug);
  const { getJourneyStartingOffer } = await import("../lib/tours/journey-pricing.ts");
  assert.equal(item.pricing.status, "quote-only");
  assert.equal(item.pricing.fromUsd, undefined);
  const offer = getJourneyStartingOffer(item, `${siteConfig.url}${item.href}`);
  assert.equal(offer, undefined);
  const schema = itineraryProductSchema({
    name: tour.title,
    url: `${siteConfig.url}${item.href}`,
    ...tourSearchSpecification(tour),
    offer,
  });
  assert.equal(schema.offers, undefined);
  assert.equal(tour.visualStatus, "ready");
  const inspect = (value) => {
    if (!value || typeof value !== "object") return;
    if (typeof value.src === "string") {
      assert.ok(value.src.startsWith(`/tours/${slug}/`), value.src);
      assert.ok(existsSync(resolve(root, "public", value.src.slice(1))));
    }
    for (const child of Object.values(value)) inspect(child);
  };
  inspect(tour);
  inspect(item.image);
  const model = createTourDetailModel(tour);
  assert.equal(model.hasPhotography, true);
  assert.equal(new Set(model.gallery.map((photo) => photo.src)).size, 10);
  assert.match(tour.accommodations[0].description, /not a confirmed property/);
  assert.match(tour.transportation.description, /vehicle photograph is illustrative/);
  assert.ok(tour.faqs.length >= 20);
  assert.match(tour.itinerary[1].summary, /Return to the same Guilin hotel/);
  assert.match(tour.itinerary[2].summary, /scheduled four-star public/);
  assert.match(tour.itinerary[4].activities[0].description, /near Xingping/);
  const { GET } = await import("../app/llms-full.txt/route.ts");
  const block = (await GET().text()).split(`# Product: ${tour.title}\n`)[1]?.split("# Product:")[0];
  assert.ok(block, "new product is in AI-readable inventory");
  assert.ok(block.includes(tour.overview.answer));
  assert.match(block, /Quote only; no public numerical starting price/);
  for (const ref of tour.planningResources) assert.ok(block.includes(ref.href), ref.href);
  for (const faq of tour.faqs) assert.ok(block.includes(faq.answer), faq.question);
});

test("Jiangnan supplied photography, rail handovers and Hangzhou finish stay consistent across public outputs", async () => {
  const slug = "shanghai-suzhou-hangzhou-private-7-day-tour";
  const tour = getTourBySlug(slug);
  const item = journeyCatalog.find((j) => j.slug === slug);
  const model = createTourDetailModel(tour);
  const { getJourneyStartingOffer } = await import("../lib/tours/journey-pricing.ts");
  assert.equal(item.pricing.status, "published-from");
  assert.equal(item.pricing.fromUsd, 3690);
  assert.equal(getJourneyStartingOffer(item, `${siteConfig.url}${item.href}`).price, 3690);
  assert.equal(tour.visualStatus, "ready");
  assert.equal(model.hasPhotography, true);
  assert.equal(new Set(tour.gallery.map((photo) => photo.src)).size, 13);
  assert.equal(model.gallery.filter((photo) => !photo.src.includes("/placeholders/")).length, 13);
  const inspect = (value) => {
    if (!value || typeof value !== "object") return;
    if (typeof value.src === "string") {
      assert.ok(
        value.src.startsWith("/tours/shanghai-suzhou-hangzhou-private-7-day-tour/") ||
          value.src ===
            "/tours/guilin-yangshuo-longji-private-5-day-tour/10-private-vehicle-interior-reference.webp" ||
          value.src === "/tours/placeholders/shanghai-suzhou-hangzhou.svg",
        value.src,
      );
      assert.ok(existsSync(resolve(root, "public", value.src.slice(1))));
    }
    for (const child of Object.values(value)) inspect(child);
  };
  inspect(tour);
  inspect(item.image);
  assert.equal(tour.faqs.length, 22);
  assert.match(tour.itinerary[6].summary, /does not return to Shanghai/);
  assert.match(tour.itinerary[3].activities[0].description, /no guide rides with you/);
  assert.match(tour.transportation.description, /Guests carry bags/);
  const { destinationPlanningGuides } = await import("../content/destinations/planning-guides.ts");
  for (const destination of ["shanghai", "suzhou", "hangzhou"])
    assert.ok(
      destinationPlanningGuides[destination].products.some((p) => p.slug === slug),
      destination,
    );
  const { publicRouteSlugs } = await import("../config/public-route-slugs.ts");
  assert.ok(publicRouteSlugs.tours.includes(slug));
  const { GET } = await import("../app/llms-full.txt/route.ts");
  const block = (await GET().text()).split(`# Product: ${tour.title}\n`)[1]?.split("# Product:")[0];
  assert.ok(block.includes(tour.overview.answer));
  assert.match(block, /Published starting price: From USD 3,690 per person/);
  assert.match(block, /USD 7,380/);
  assert.doesNotMatch(block, /no public starting price|no public numerical starting price/i);
  for (const ref of tour.planningResources) assert.ok(block.includes(ref.href));
  for (const faq of tour.faqs) assert.ok(block.includes(faq.answer));
});
