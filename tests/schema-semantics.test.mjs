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

const { itineraryProductSchema, articleSchemaData } = await import("../lib/seo/schema.ts");
const { siteConfig } = await import("../config/site.ts");

test("TouristTrip retains duration and operating facts through a describing WebPage without Product/Event-only properties", () => {
  const trip = itineraryProductSchema({
    name: "Private journey",
    url: `${siteConfig.url}/tours/example`,
    identifier: "example",
    description: "Private journey specification",
    duration: "P12D",
    category: "Private tour",
    brandName: "AVIORA",
    audienceType: "Families",
    touristType: ["Families"],
    areaServed: ["China"],
    additionalProperties: [{ name: "Pace", value: "Flexible" }],
    subjectOf: [{ name: "Planning guide", url: `${siteConfig.url}/journal/example` }],
  });
  for (const field of [
    "sku",
    "brand",
    "category",
    "duration",
    "additionalProperty",
    "areaServed",
    "audience",
  ]) {
    assert.equal(field in trip, false, `${field} is not a TouristTrip property`);
  }
  assert.deepEqual(trip.touristType, ["Families"]);
  assert.equal(trip.subjectOf[0]["@type"], "WebPage");
  assert.equal(trip.subjectOf[0].about["@id"], trip["@id"]);
  assert.ok(
    trip.subjectOf[0].mainEntity.some(
      ({ name, value }) => name === "ISO 8601 duration" && value === "P12D",
    ),
  );
  assert.ok(
    trip.subjectOf[0].mainEntity.some(({ name, value }) => name === "Pace" && value === "Flexible"),
  );
  assert.equal(trip.subjectOf[1]["@type"], "Article");
});

test("Product keeps its supported commercial fields without Trip-only provider/touristType", () => {
  const product = itineraryProductSchema({
    schemaType: "Product",
    name: "Service product",
    description: "A service product",
    url: `${siteConfig.url}/tours/example`,
    identifier: "example",
    brandName: "AVIORA",
    category: "Private travel",
    duration: "P12D",
    touristType: ["Families"],
    additionalProperties: [{ name: "Pace", value: "Flexible" }],
  });
  assert.equal(product.sku, "example");
  assert.equal(product.brand.name, "AVIORA");
  assert.equal(product.additionalProperty[0].value, "Flexible");
  for (const field of ["provider", "touristType", "duration"])
    assert.equal(field in product, false);
});

test("editorial review attribution belongs to the WebPage, not BlogPosting", () => {
  const article = articleSchemaData({
    headline: "Guide",
    description: "Travel guide",
    url: `${siteConfig.url}/journal/example`,
    datePublished: "2026-01-01",
    dateModified: "2026-11-11",
    authorName: "AVIORA China Travel Team",
    authorRole: "Editorial team",
    factChecked: true,
    image: { url: `${siteConfig.url}/photo.webp` },
  });
  assert.equal("reviewedBy" in article, false);
  assert.equal(article.mainEntityOfPage.reviewedBy["@id"], `${siteConfig.url}/#organization`);
  assert.equal(article.image.url, `${siteConfig.url}/photo.webp`);
});
