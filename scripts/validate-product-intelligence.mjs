import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "product-intelligence", "data");
const competitors = JSON.parse(
  await readFile(path.join(dataDir, "competitor-products.json"), "utf8"),
);
const avioraProducts = JSON.parse(
  await readFile(path.join(dataDir, "aviora-products.json"), "utf8"),
);
const issues = [];

if (competitors.length !== 20) issues.push(`Expected 20 competitors, found ${competitors.length}.`);
if (avioraProducts.length !== 10)
  issues.push(`Expected 10 AVIORA concepts, found ${avioraProducts.length}.`);

checkUnique(competitors, "competitor");
checkUnique(avioraProducts, "AVIORA");

for (const product of competitors) {
  requireFields(product, [
    "id",
    "competitor",
    "productName",
    "url",
    "observed",
    "inferred",
    "scoreInputs",
    "sources",
    "lastChecked",
  ]);
  checkUrl(product.url, product.id);
  checkScores(product);
  if (!product.sources?.length) issues.push(`${product.id}: missing sources.`);
  if (product.observed.keywordVolume !== "UNKNOWN") {
    issues.push(
      `${product.id}: keywordVolume must remain UNKNOWN until licensed keyword data is connected.`,
    );
  }
  if (product.observed.startingPrice === 0 || product.observed.startingPrice === "$0") {
    issues.push(`${product.id}: invalid zero price; use PRICE NOT DISCLOSED.`);
  }
}

for (const product of avioraProducts) {
  requireFields(product, [
    "id",
    "productName",
    "positioning",
    "targetCustomer",
    "durationDays",
    "destinations",
    "signatureExperiences",
    "itinerary",
    "commercial",
    "seo",
    "scoreInputs",
    "status",
  ]);
  checkScores(product);
  if (product.signatureExperiences.length < 3)
    issues.push(`${product.id}: fewer than three signature experiences.`);
  if (product.itinerary.length !== product.durationDays)
    issues.push(`${product.id}: itinerary length does not equal durationDays.`);
  if (!String(product.commercial.estimatedCost).startsWith("ESTIMATE"))
    issues.push(`${product.id}: estimated cost must be marked ESTIMATE.`);
  if (!String(product.commercial.recommendedSellingPrice).startsWith("ESTIMATE"))
    issues.push(`${product.id}: selling price must be marked ESTIMATE.`);
}

if (issues.length) {
  console.error(`Product intelligence validation failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(
  `Product intelligence validation passed: ${competitors.length} competitors and ${avioraProducts.length} AVIORA concepts.`,
);

function requireFields(record, fields) {
  for (const field of fields) {
    if (record[field] === undefined || record[field] === null || record[field] === "") {
      issues.push(`${record.id || "UNKNOWN"}: missing ${field}.`);
    }
  }
}

function checkUnique(records, label) {
  const ids = records.map((record) => record.id);
  if (new Set(ids).size !== ids.length) issues.push(`${label}: duplicate IDs.`);
}

function checkUrl(value, id) {
  try {
    new URL(value);
  } catch {
    issues.push(`${id}: invalid URL ${value}.`);
  }
}

function checkScores(product) {
  const expected = [
    "searchDemand",
    "competitiveValidation",
    "productAppeal",
    "conversionPotential",
    "differentiationOpportunity",
    "commercialValue",
  ];
  for (const key of expected) {
    const value = product.scoreInputs?.[key];
    if (!Number.isFinite(value) || value < 0 || value > 100)
      issues.push(`${product.id}: invalid ${key} score.`);
  }
}
