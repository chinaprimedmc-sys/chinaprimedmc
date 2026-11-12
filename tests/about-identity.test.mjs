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
    if (path)
      for (const c of [path + ".ts", path + "/index.ts"])
        if (existsSync(c)) return { url: pathToFileURL(c).href, shortCircuit: true };
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

const { organizationSchema } = await import("../lib/seo/schema.ts");
const { companyIdentity, renderCompanyIdentity } = await import("../content/about/identity.ts");
const { siteConfig } = await import("../config/site.ts");
const { getServiceCases } = await import("../content/about/service-cases.ts");
const { getPublicTravelerReviews } = await import("../content/home/traveler-reviews.ts");
const { serviceAchievementsText } = await import("../content/home/service-achievements.ts");
const { aboutSearch, renderAboutVerificationGuide } = await import("../content/about/search.ts");
const { aboutPageSchema } = await import("../lib/seo/about.ts");
const { PUBLIC_JOURNAL_SLUGS } = await import("../content/journal/public-manifest.ts");
const { createMetadata } = await import("../lib/seo/metadata.ts");

test("company registration belongs to the operator, while the founder belongs to AVIORA", () => {
  const brand = organizationSchema();
  assert.equal(brand.name, siteConfig.siteName);
  assert.equal(brand["@id"], `${siteConfig.url}/#organization`);
  assert.equal(brand.foundingDate, undefined);
  assert.equal(brand.legalName, undefined);
  const operator = brand.parentOrganization;
  assert.notEqual(operator["@id"], brand["@id"]);
  assert.equal(operator.legalName, siteConfig.operator.legalName);
  assert.equal(operator.foundingDate, "2018-03-28");
  assert.equal(operator.identifier.value, "91440101MA5ARE270P");
  assert.equal(operator.founder, undefined);
  assert.equal(brand.founder.name, companyIdentity.founderName);
  assert.equal(brand.founder["@id"], `${siteConfig.url}/#founder`);
});

test("identity feed distinguishes registration dates and source limitations", () => {
  const text = renderCompanyIdentity();
  assert.ok(text.includes(companyIdentity.brandSummary));
  assert.ok(text.includes(companyIdentity.operatorSummary));
  assert.ok(text.includes(companyIdentity.tradeRelationship));
  assert.ok(text.includes("legal operating company’s registration date"));
  assert.ok(text.includes("company-reported"));
  assert.ok(text.includes("not certification or endorsement"));
});

test("service stories preserve a verbatim quotation and link to its public source", () => {
  const reviews = new Map(getPublicTravelerReviews().map((review) => [review.id, review]));
  const stories = getServiceCases();
  assert.equal(stories.length, 3);
  for (const story of stories) {
    const review = reviews.get(story.reviewId);
    assert.ok(review);
    assert.equal(story.author, review.author);
    assert.equal(story.sourceHref, `/reviews?review=${review.id}`);
    assert.ok(review.paragraphs.some((paragraph) => paragraph.includes(story.quote)));
  }
});

test("service figures are qualified as company-reported in feeds and structured data", () => {
  assert.match(serviceAchievementsText(), /reported by AVIORA/);
  assert.match(
    serviceAchievementsText(),
    /reporting period and independent audit are not provided/,
  );
  for (const figure of organizationSchema().additionalProperty) {
    assert.match(figure.description, /Company-reported service figure/);
  }
});

test("legacy feedback is identified as site content without inferred booking verification", () => {
  const reviews = getPublicTravelerReviews();
  assert.ok(reviews.length > 0);
  assert.ok(reviews.every((review) => review.sourceType === "legacy-site-content"));
  assert.ok(reviews.every((review) => review.verifiedOn === undefined));
});

test("brand answers preserve legal roles and only link to public verification articles", () => {
  const text = renderAboutVerificationGuide();
  assert.equal(aboutSearch.identityAnswers.length, 4);
  assert.equal(aboutSearch.reading.length, 6);
  assert.equal(aboutSearch.identityAnswers[0].answer, companyIdentity.tradeRelationship);
  assert.match(
    aboutSearch.identityAnswers.find((item) => item.id === "when-registered").answer,
    /not presented here as AVIORA’s brand founding date/,
  );
  for (const answer of aboutSearch.identityAnswers) {
    assert.ok(text.includes(answer.answer));
    assert.ok(text.includes(`/about#${answer.id}`));
  }
  for (const link of aboutSearch.reading) {
    assert.ok(PUBLIC_JOURNAL_SLUGS.includes(link.href.replace("/journal/", "")), link.href);
    assert.ok(text.includes(link.href));
  }
});

test("About schema answers match visible sources and point to the existing brand entities", () => {
  const graph = aboutPageSchema()["@graph"];
  const page = graph.find((item) => item["@type"] === "AboutPage");
  const list = graph.find((item) => item["@type"] === "ItemList");
  assert.equal(page.mainEntity["@id"], organizationSchema()["@id"]);
  assert.equal(page.mentions[1]["@id"], organizationSchema().parentOrganization["@id"]);
  assert.equal(list.itemListElement.length, 6);
  for (const answer of aboutSearch.identityAnswers) {
    const part = page.hasPart.find((item) => item.url === `${siteConfig.url}/about#${answer.id}`);
    assert.equal(part.text, answer.answer);
    assert.equal(part.name, answer.question);
  }
  const visible = readFileSync(resolve(root, "app/about/page.tsx"), "utf8");
  assert.ok(visible.includes("aboutSearch.identityAnswers.map"));
  assert.ok(visible.includes("aboutSearch.reading.map"));
  assert.ok(visible.includes("aboutSearch.facts.map"));
  assert.ok(visible.includes("id={`about-answer-${index + 1}`}"));
  const metadata = createMetadata({
    title: aboutSearch.title,
    description: aboutSearch.description,
    path: "/about",
  });
  assert.equal(metadata.title, aboutSearch.title);
  assert.equal(metadata.alternates.canonical, `${siteConfig.url}/about`);
});
