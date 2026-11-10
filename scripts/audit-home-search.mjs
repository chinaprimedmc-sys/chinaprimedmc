import assert from "node:assert/strict";

const base = new URL(process.env.SEO_BASE_URL || "https://www.chinaprimedmc.com");
const origin = (process.env.SEO_SITE_ORIGIN || "https://www.chinaprimedmc.com").replace(/\/$/, "");
const homeUrl = `${origin}/`;
const response = await fetch(base, { redirect: "manual" });
assert.equal(response.status, 200, "Homepage must return 200 without a redirect");
assert.ok(!/noindex|nosnippet/i.test(response.headers.get("x-robots-tag") || ""));
const html = await response.text();
const text = toText(html);
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || "";
assert.equal([...html.matchAll(/<main(?:\s|>)/gi)].length, 1, "Expected one main landmark");
assert.ok(
  !/<header[^>]+data-header|<footer\b/i.test(main),
  "Global navigation and footer belong outside main content",
);
const title = decode(html.match(/<title>([^<]+)<\/title>/i)?.[1] || "");
const description = decode(meta("name", "description"));
assert.ok(title.length >= 45 && title.length <= 60, `Title length: ${title.length}`);
assert.ok(
  description.length >= 120 && description.length <= 160,
  `Description length: ${description.length}`,
);
assert.equal([...html.matchAll(/<h1(?:\s|>)/gi)].length, 1, "Expected one server-rendered H1");
assert.match(toText(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || ""), /Private China tours/i);
assert.equal(
  new URL(decode(html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] || "")).href,
  homeUrl,
);
assert.equal(new URL(meta("property", "og:url")).href, homeUrl);
assert.equal(meta("property", "og:site_name"), "AVIORA China Travel");
assert.equal(decode(meta("property", "og:title")), title);
assert.equal(decode(meta("property", "og:description")), description);
assert.equal(meta("name", "twitter:card"), "summary_large_image");
assert.match(meta("name", "robots"), /index, follow/);
assert.ok(!/noindex|nosnippet/i.test(meta("name", "robots")));
assert.match(meta("name", "googlebot"), /max-image-preview:large/);
assert.ok(
  !/<[^>]+\bdata-nosnippet\b/i.test(html),
  "Homepage content must be available for snippets",
);

const roots = [
  ...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
].map((match) => JSON.parse(match[1]));
const nodes = roots.flatMap((root) => root["@graph"] || [root]);
const ofType = (type) => nodes.filter((node) => [node["@type"]].flat().includes(type));
for (const type of ["WebPage", "WebSite", "TravelAgency", "Service", "ItemList", "FAQPage"]) {
  assert.equal(ofType(type).length, 1, `Expected one ${type} entity`);
}
const agency = ofType("TravelAgency")[0];
const page = ofType("WebPage")[0];
const service = ofType("Service")[0];
assert.equal(agency["@id"], `${homeUrl}#organization`);
assert.equal(page["@id"], `${homeUrl}#webpage`);
assert.equal(page.name, title);
assert.equal(page.description, description);
assert.equal(page.publisher["@id"], agency["@id"]);
assert.equal(page.mainEntity["@id"], service["@id"]);
assert.equal(service.provider["@id"], agency["@id"]);
assert.equal(service.areaServed.name, "China");
assert.match(agency.description, /full-service private China tours/);
assert.match(service.description, /one-stop, full-service/);
for (const phase of [
  "itinerary design",
  "reservations",
  "airport pickup",
  "in-trip support",
  "departure transfers",
]) {
  assert.ok(service.description.includes(phase), `Missing full-service phase: ${phase}`);
}
assert.ok(text.includes(service.description), "Service description must appear in server HTML");
const stages = service.hasOfferCatalog.itemListElement.map((offer) => offer.itemOffered);
assert.equal(stages.length, 3, "Expected planning, travel and departure service coverage");
for (const stage of stages) {
  assert.equal(stage.provider["@id"], agency["@id"]);
  assert.ok(
    text.includes(stage.name) && text.includes(stage.description),
    "Full-service schema must match visible service details",
  );
}
for (const { audienceType } of service.audience) {
  assert.ok(
    text.toLowerCase().includes(audienceType.toLowerCase()),
    `Missing visible audience: ${audienceType}`,
  );
}

const list = ofType("ItemList")[0];
assert.equal(page.mentions["@id"], list["@id"]);
assert.equal(list.numberOfItems, 3);
assert.equal(list.itemListElement.length, 3);
for (const [index, { position, item }] of list.itemListElement.entries()) {
  assert.equal(position, index + 1);
  assert.equal(item["@type"], "TouristTrip");
  assert.equal(item.provider["@id"], agency["@id"]);
  assert.ok(
    text.includes(item.name) && text.includes(item.description),
    "Journey schema must match visible copy",
  );
  assert.ok(
    html.includes(new URL(item.url).pathname),
    "Featured journey must have a crawlable link",
  );
  assert.ok(!item.offers, "Do not imply a confirmed product offer on the homepage");
}

const faq = ofType("FAQPage")[0];
const details = [...html.matchAll(/<details\b[^>]*id="home-faq-\d+"[^>]*>([\s\S]*?)<\/details>/gi)];
assert.equal(page.hasPart["@id"], faq["@id"]);
assert.equal(details.length, faq.mainEntity.length);
assert.ok(details.length >= 8, "Expected practical pricing, suitability and service answers");
for (const [index, detail] of details.entries()) {
  const question = toText(detail[1].match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/i)?.[1] || "");
  const answer = toText(detail[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");
  assert.equal(question, faq.mainEntity[index].name);
  assert.equal(answer, faq.mainEntity[index].acceptedAnswer.text);
}

const links = new Set(
  [...html.matchAll(/<a\b[^>]*href="([^"]+)"/gi)]
    .map((match) => decode(match[1]))
    .filter((href) => href.startsWith("/") && !href.startsWith("//")),
);
for (const link of links) {
  const result = await fetch(new URL(link, base));
  assert.equal(result.status, 200, `Internal homepage link failed: ${link}`);
}

const robotsResponse = await fetch(new URL("/robots.txt", base));
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
const groups = robots.split(/\n\s*\n/).map((group) => ({
  agents: [...group.matchAll(/^User-agent:\s*(.+)$/gim)].map((match) =>
    match[1].trim().toLowerCase(),
  ),
  text: group,
}));
const agents = ["Googlebot", "Bingbot", "OAI-SearchBot", "GPTBot", "PerplexityBot", "ClaudeBot"];
for (const agent of agents) {
  const group =
    groups.find((item) => item.agents.includes(agent.toLowerCase())) ||
    groups.find((item) => item.agents.includes("*"));
  assert.ok(group && /^Allow:\s*\/\s*$/m.test(group.text), `Homepage access missing for ${agent}`);
  assert.ok(!/^Disallow:\s*\/\s*$/m.test(group.text), `Homepage blocked for ${agent}`);
  const result = await fetch(base, { headers: { "User-Agent": agent }, redirect: "manual" });
  assert.equal(result.status, 200, `Homepage unavailable to ${agent}`);
  assert.ok(!/noindex|nosnippet/i.test(result.headers.get("x-robots-tag") || ""));
}
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
const sitemap = await (await fetch(new URL("/sitemap.xml", base))).text();
assert.ok(sitemap.includes(`<loc>${homeUrl}</loc>`), "Homepage missing from sitemap");
for (const file of ["/llms.txt", "/llms-full.txt"]) {
  const result = await fetch(new URL(file, base));
  assert.equal(result.status, 200);
  const guide = await result.text();
  assert.ok(
    guide.includes(service.description),
    `${file} must match the visible homepage overview`,
  );
  for (const stage of stages) {
    assert.ok(
      guide.includes(stage.name) && guide.includes(stage.description),
      `${file} full-service scope mismatch`,
    );
  }
  for (const question of faq.mainEntity) {
    assert.ok(
      guide.includes(question.name) && guide.includes(question.acceptedAnswer.text),
      `${file} FAQ mismatch`,
    );
  }
  assert.match(guide, /US\$5,850/);
  assert.match(guide, /(?:2|two) adults and (?:2|two) children aged 6[–-]11/);
  assert.match(guide, /non-peak seasons/);
}

const image = await fetch(new URL(new URL(meta("property", "og:image"), base).pathname, base));
assert.equal(image.status, 200, "Social image must be accessible");
console.log(
  `Homepage search audit passed: SSR content, ${faq.mainEntity.length} FAQs, 3 journeys, ${links.size} links, ${agents.length} crawlers and AI reading guides.`,
);

function meta(attribute, name) {
  return (
    html.match(new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="([^"]*)"`, "i"))?.[1] || ""
  );
}

function toText(markup) {
  return decode(
    markup
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function decode(value) {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, key) => {
    if (key.startsWith("#")) {
      return String.fromCodePoint(
        key[1].toLowerCase() === "x" ? parseInt(key.slice(2), 16) : Number(key.slice(1)),
      );
    }
    return entities[key.toLowerCase()] || entity;
  });
}
