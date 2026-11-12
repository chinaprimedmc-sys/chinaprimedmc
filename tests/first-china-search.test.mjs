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
const { firstChina10DayTour: authored } = await import("../content/tours/first-china-10-day.ts");
const { chinaConsidered12DayTour: longer } =
  await import("../content/tours/china-considered-12-day.ts");
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
const { buildExplorerItem } = await import("../lib/tours/journey-explorer-item.ts");
const { siteConfig } = await import("../config/site.ts");
const tour = getTourBySlug(authored.slug);
const catalog = getJourneyCatalogItem(tour.slug);
const model = createTourDetailModel(tour);
const url = siteConfig.url + "/tours/" + tour.slug;
const answerFor = (pattern) =>
  model.faqs.find(({ question }) => pattern.test(question))?.answer ?? "";

test("ten-day product has one source and consistent authored metadata, H1 and canonical", () => {
  assert.equal(tour, authored);
  const metadata = createTourMetadata(tour);
  assert.equal(metadata.title, "10-Day Private Tour of Beijing, Xi'an and Shanghai");
  assert.equal(metadata.title, model.headline);
  assert.equal(metadata.title, getJourneySeoTitle(catalog));
  assert.equal(metadata.description, tour.seo.description);
  assert.ok(metadata.description.length >= 120 && metadata.description.length <= 165);
  assert.equal(metadata.alternates.canonical, url);
  assert.equal(metadata.openGraph.url, url);
  assert.equal(metadata.robots.index, true);
  assert.equal(tour.seniorStandard, undefined);
  assert.equal(tour.pricingBlock, undefined);
});

test("ten days, nine nights, city allocation and transport agree across itinerary, stays and map", () => {
  assert.equal(tour.itinerary.length, 10);
  assert.deepEqual(
    tour.itinerary.map(({ day }) => day),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  );
  const overnights = tour.itinerary
    .filter(({ hotel }) => hotel)
    .reduce((counts, { destination }) => {
      counts[destination] = (counts[destination] ?? 0) + 1;
      return counts;
    }, {});
  assert.deepEqual(overnights, { Beijing: 4, "Xi'an": 2, Shanghai: 3 });
  assert.equal(tour.itinerary[9].hotel, undefined);
  for (const stay of tour.accommodations)
    assert.ok(stay.name.includes(overnights[stay.destination] + " nights"));
  assert.match(tour.routeMap.stops[0].days, /4 nights/);
  assert.match(tour.routeMap.stops[1].days, /2 nights/);
  assert.match(tour.routeMap.stops[2].days, /3 nights/);
  assert.match(tour.itinerary[4].transport, /high-speed rail/);
  assert.match(tour.itinerary[6].transport, /domestic flight/);
  assert.match(
    tour.itinerary[8].transport,
    /private guide and vehicle available at additional cost/,
  );
  assert.ok(tour.itinerary.every(({ activities }) => activities.every(({ time }) => time)));
});

test("visible facts, P10D and published per-person units survive structured projection and cards", () => {
  const schema = itineraryProductSchema({
    ...tourSearchSpecification(tour),
    name: model.headline,
    identifier: tour.slug,
    url,
  });
  assert.equal(
    schema.subjectOf[0].mainEntity.find(({ name }) => name === "ISO 8601 duration").value,
    "P10D",
  );
  assert.equal(schema.description, model.answerSummary);
  assert.equal(schema.offers, undefined);
  assert.deepEqual(
    schema.subjectOf[0].mainEntity
      .filter(({ name }) => model.practicalities.some((fact) => fact.label === name))
      .map(({ name, value }) => ({ label: name, value })),
    model.practicalities,
  );
  assert.equal(schema.provider["@id"], siteConfig.url + "/#organization");
  assert.equal(catalog.pricing.status, "published-from");
  assert.equal(model.price.pricingUnit, "per-person");
  assert.equal(model.price.fromUsd, 3290);
  assert.doesNotMatch(JSON.stringify(model.price), /US\$|3,800|3,190/);
  assert.equal(buildExplorerItem(catalog).priceLabel, "From USD 3,290");
  assert.equal(buildExplorerItem(catalog).easierPace, false);
  assert.equal(catalog.discovery.pace, "balanced");
});

test("all eighteen product questions and two policies are visible with exact FAQPage parity", () => {
  const faqs = getVisibleTourFaqs(tour);
  assert.equal(faqs.length, tour.faqs.length + bookingPolicyFaqs.length);
  assert.equal(faqs.length, 20);
  assert.deepEqual(
    faqPageSchema(faqs, url).mainEntity.map(({ name, acceptedAnswer }) => ({
      question: name,
      answer: acceptedAnswer.text,
    })),
    model.faqs,
  );
  for (const query of [
    /10 days enough/,
    /10-day or 12-day/,
    /two people/,
    /room types/,
    /English-speaking/,
    /train or a flight/,
    /luggage/,
    /tickets guaranteed/,
    /no stairs/,
    /wheelchair/,
    /meals/,
    /Day 9/,
    /visa-free/,
  ]) {
    assert.ok(
      faqs.some(({ question }) => query.test(question)),
      String(query),
    );
  }
});

test("core answers remove ambiguous entitlement to stairs-free access, porters, VIP entry and extra days", () => {
  assert.match(answerFor(/no stairs/), /^No\./);
  assert.match(
    answerFor(/tickets guaranteed/),
    /does not include a VIP entrance, an internal palace sightseeing cart or skip-the-line access/,
  );
  assert.match(answerFor(/luggage/), /Not automatically/);
  assert.match(answerFor(/Day 9/), /no scheduled private guide, vehicle or paid activity/);
  assert.match(answerFor(/meals/), /Lunches, dinners, drinks/);
  assert.match(answerFor(/visa-free/), /^Not by itself/);
  assert.ok(
    tour.included.every((text) => !/VIP|Mercedes|medical channel|porter|15:30/i.test(text)),
  );
  assert.equal(tour.hero.secondary.href, "#enquiry");
});

test("visible duration comparison uses real route nights and points to genuine relevant alternatives", () => {
  assert.deepEqual(model.comparison, tour.comparison);
  const nights = tour.comparison.rows.find(([label]) => label === "Hotel nights");
  assert.match(nights[1], /Beijing 4.*Xi'an 2.*Shanghai 3/);
  assert.match(nights[2], /Beijing 5.*Xi'an 3.*Shanghai 3/);
  assert.match(longer.routeMap.stops[0].days, /5 nights/);
  assert.match(longer.routeMap.stops[1].days, /3 nights/);
  assert.equal(model.relatedTourHrefs.length, 3);
  for (const href of model.relatedTourHrefs)
    assert.ok(getJourneyCatalogItem(href.split("/").at(-1)));
  assert.ok(model.relatedTourHrefs.includes(tour.comparison.href));
});

test("inquiry and existing first-visit articles retain actual room, language and service decisions", () => {
  const href = configuredWhatsAppHref(model.whatsappHref, model.displayTitle, {
    duration: model.duration,
    guests: "2",
    priceBasis: model.price.basis,
  });
  const message = new URL(href).searchParams.get("text");
  for (const value of [
    "child ages",
    "Preferred guide language",
    "single rooms",
    "fixed commitments",
    "lifting limitations",
    "Day 9",
    "Travellers: 2 guests",
  ])
    assert.ok(message.includes(value), value);
  assert.doesNotMatch(message, /passport number|US\$|undefined/i);
  const guides = getJourneyReadingArticles(tour.slug, 7);
  assert.equal(guides[0].slug, "10-day-china-itinerary-first-time-visitors");
  assert.ok(guides.some(({ slug }) => slug === "how-many-days-beijing-xian-shanghai"));
  for (const { href } of model.planningResources.filter(({ href }) =>
    href.startsWith("/journal/"),
  )) {
    assert.ok(
      journalArticles.some(({ slug }) => href === "/journal/" + slug),
      href,
    );
  }
  const firstArticle = journalArticles.find(({ slug }) => slug === guides[0].slug);
  assert.equal(getJourneyBridgeForArticle(firstArticle).journey.slug, tour.slug);
  const seniorArticle = journalArticles.find(
    ({ slug }) => slug === "slow-paced-china-tour-for-seniors-itinerary-guide",
  );
  assert.equal(getJourneyBridgeForArticle(seniorArticle).journey.slug, longer.slug);
  for (const slug of [
    "china-tour-cost-for-seniors",
    "slow-paced-china-tour-for-seniors-itinerary-guide",
    "how-to-visit-great-wall-without-climbing-stairs",
  ]) {
    const article = journalArticles.find((article) => article.slug === slug);
    assert.doesNotMatch(
      JSON.stringify([article.seo, article.editorial]),
      /US\$3,800|3:30|VIP step-free|under 4,000/,
    );
  }
});

test("actual AI text and sitemap publish the same route, comparison and pricing boundaries", async () => {
  const { GET: full } = await import("../app/llms-full.txt/route.ts");
  const { GET: short } = await import("../app/llms.txt/route.ts");
  const section = (await full().text())
    .split("# Product: " + tour.title + "\n")[1]
    .split("\n# Product:")[0];
  assert.ok(section.includes(model.answerSummary));
  for (const { value } of model.practicalities) assert.ok(section.includes(value));
  for (const row of tour.comparison.rows)
    for (const value of row) assert.ok(section.includes(value));
  assert.match(section, /Published starting price subject to the stated basis/);
  assert.doesNotMatch(section, /US\$3,800|Mercedes vans|zero-stair Great Wall access|3:30 PM/);
  assert.ok((await short().text()).includes(catalog.pricing.inclusionSummary));
  const { default: sitemap } = await import("../app/sitemap.ts");
  const entries = (await sitemap()).filter((entry) => entry.url === url);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].lastModified, "2026-11-11");
});

test("corrected supporting articles hydrate into actual visible content without obsolete offer claims", async () => {
  const { hydrateJournalArticle } = await import("../lib/content/journal-markdown.ts");
  for (const slug of [
    "china-tour-cost-for-seniors",
    "slow-paced-china-tour-for-seniors-itinerary-guide",
    "how-to-visit-great-wall-without-climbing-stairs",
  ]) {
    const article = await hydrateJournalArticle(
      journalArticles.find((article) => article.slug === slug),
    );
    assert.ok(article.content.length >= 10, slug);
    const content = JSON.stringify(article.content);
    assert.match(content, /12-day|twelve-day|Easier Pace/);
    assert.doesNotMatch(content, /US\$3,800|3:30 PM|priority electric shuttle|step-free VIP entry/);
    assert.ok(article.citations.length >= 2);
  }
});

test("official citations keep publisher and claim scope identical in models, schema and AI text", async () => {
  const { tourOfficialCitations } = await import("../lib/seo/tour-sources.ts");
  const { GET } = await import("../app/llms-full.txt/route.ts");
  const text = await GET().text();
  for (const slug of [
    "private-mutianyu-great-wall-day-tour",
    "private-shanghai-day-tour-guide-driver",
    "private-xian-terracotta-warriors-day-tour",
    "private-chengdu-panda-day-tour-early-morning",
    "guilin-yangshuo-li-river-cruise-private-day-tour",
    "beijing-xian-shanghai-private-10-day-tour",
  ]) {
    const product = getTourBySlug(slug);
    const resources = product.planningResources.filter((item) => item.officialPublisher);
    assert.ok(resources.length > 0, slug);
    const citations = tourOfficialCitations(product);
    assert.equal(citations.length, resources.length);
    assert.deepEqual(createTourDetailModel(product).planningResources, product.planningResources);
    resources.forEach((resource, index) => {
      assert.equal(new URL(resource.href).protocol, "https:");
      assert.equal(citations[index].url, resource.href);
      assert.equal(citations[index].publisher.name, resource.officialPublisher);
      assert.equal(citations[index].description, resource.description);
      assert.ok(text.includes(`(Official publisher: ${resource.officialPublisher})`));
      assert.ok(text.includes(resource.description));
    });
  }
  assert.deepEqual(
    tourOfficialCitations({
      planningResources: [
        { label: "Our guide", href: "/journal/test", description: "Internal editorial" },
      ],
    }),
    [],
  );
  const museum = tourOfficialCitations(tour).find((item) => item.url.includes("bmy.com.cn"));
  assert.ok(museum);
  assert.ok(
    tourOfficialCitations(tour).some((item) => item.publisher.name === "China Railway 12306"),
  );
});

test("first-visit guide renders ten actual days, eight FAQs and official citations aligned with the product", async () => {
  const { hydrateJournalArticle } = await import("../lib/content/journal-markdown.ts");
  const article = await hydrateJournalArticle(
    journalArticles.find((item) => item.slug === "10-day-china-itinerary-first-time-visitors"),
  );
  assert.equal(article.updatedAt, "2026-11-11");
  const table = article.content.find((block) => block.type === "table");
  assert.equal(table.rows.length, 10);
  assert.match(table.rows[2][1], /Mutianyu/);
  assert.match(table.rows[3][1], /Temple of Heaven.*or.*Summer Palace/);
  assert.match(table.rows[6][1], /Fly/);
  assert.match(table.rows[8][3], /not included automatically/);
  const faqs = article.content.filter((block) => block.type === "faq");
  assert.equal(faqs.length, 8);
  assert.deepEqual(
    faqPageSchema(faqs).mainEntity.map((item) => item.acceptedAnswer.text),
    faqs.map((item) => item.answer),
  );
  const content = JSON.stringify(article.content);
  assert.match(content, /multi-city/);
  assert.match(content, /International airfare/);
  assert.match(content, /duration alone does not establish eligibility/);
  assert.ok(content.includes("/journal/how-many-days-beijing-xian-shanghai"));
  assert.ok(content.includes("/journal/what-is-included-private-china-tour"));
  for (const hostname of [
    "en.dpm.org.cn",
    "www.mutianyugreatwall.com",
    "www.bmy.com.cn",
    "www.12306.cn",
    "en.nia.gov.cn",
  ]) {
    assert.ok(article.citations.some((source) => new URL(source.url).hostname === hostname));
  }
  assert.doesNotMatch(
    content,
    /Suggested structured data|SEO & GEO Review|high-volume|Verified 2026-11-11/,
  );
  const markdown = readFileSync(resolve(root, article.sourcePath), "utf8");
  for (const [, slug] of markdown.matchAll(/\]\(\/journal\/([^)?#]+)/g)) {
    assert.ok(
      journalArticles.some((item) => item.slug === slug),
      `Missing article: ${slug}`,
    );
  }
  for (const [, slug] of markdown.matchAll(/\]\(\/tours\/([^)?#]+)/g)) {
    assert.ok(getJourneyCatalogItem(slug), `Missing journey: ${slug}`);
  }
});

test("ticket and rail guides expose official sources and distinguish historic rule records from tour services", async () => {
  const { hydrateJournalArticle } = await import("../lib/content/journal-markdown.ts");
  for (const [slug, sourceUrl, historicalDate] of [
    ["forbidden-city-tickets-foreigners", "https://intl.dpm.org.cn/visit.html", "2026-08-06"],
    [
      "terracotta-army-tickets-foreign-visitors",
      "https://www.bmy.com.cn/jingtai/bmyweb/ticketing.html",
      "2026-08-08",
    ],
    ["china-high-speed-train-foreigners", "https://www.12306.cn/en/faq.html", "2026-08-06"],
  ]) {
    const article = await hydrateJournalArticle(journalArticles.find((item) => item.slug === slug));
    assert.equal(article.updatedAt, "2026-11-11");
    assert.equal(article.lastFactCheckedAt, historicalDate);
    assert.ok(
      article.citations.some((source) => source.url === sourceUrl),
      slug,
    );
    assert.ok(JSON.stringify(article.content).includes(sourceUrl), slug);
    const faqs = article.content.filter((block) => block.type === "faq");
    assert.ok(faqs.length >= 4);
    assert.deepEqual(
      faqPageSchema(faqs).mainEntity.map((item) => item.acceptedAnswer.text),
      faqs.map((item) => item.answer),
    );
    const markdown = readFileSync(resolve(root, article.sourcePath), "utf8");
    for (const [, target] of markdown.matchAll(/\]\(\/journal\/([^)?#]+)/g)) {
      assert.ok(
        journalArticles.some((item) => item.slug === target),
        target,
      );
    }
    for (const [, target] of markdown.matchAll(/\]\(\/tours\/([^)?#]+)/g)) {
      assert.ok(getJourneyCatalogItem(target), target);
    }
  }
});
