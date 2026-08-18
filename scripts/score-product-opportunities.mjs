import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const intelligenceDir = path.join(root, "product-intelligence");
const competitorPath = path.join(intelligenceDir, "data", "competitor-products.json");
const avioraPath = path.join(intelligenceDir, "data", "aviora-products.json");

const weights = {
  searchDemand: 0.2,
  competitiveValidation: 0.15,
  productAppeal: 0.15,
  conversionPotential: 0.15,
  differentiationOpportunity: 0.15,
  commercialValue: 0.2,
};

const competitors = JSON.parse(await readFile(competitorPath, "utf8"));
const avioraProducts = JSON.parse(await readFile(avioraPath, "utf8"));

const competitorRanking = rank(competitors);
const avioraRanking = rank(avioraProducts);

await writeFile(
  path.join(intelligenceDir, "data", "competitor-ranking.json"),
  `${JSON.stringify(competitorRanking, null, 2)}\n`,
);
await writeFile(
  path.join(intelligenceDir, "data", "aviora-ranking.json"),
  `${JSON.stringify(avioraRanking, null, 2)}\n`,
);
await writeFile(
  path.join(intelligenceDir, "data", "competitor-products.csv"),
  toCompetitorCsv(competitorRanking),
);
await writeFile(
  path.join(intelligenceDir, "data", "aviora-products.csv"),
  toAvioraCsv(avioraRanking),
);

console.log(`Scored ${competitorRanking.length} competitor products.`);
console.log(`Scored ${avioraRanking.length} AVIORA product concepts.`);
console.log(
  `Top competitor opportunity: ${competitorRanking[0].productName} (${competitorRanking[0].opportunityScore}).`,
);
console.log(
  `Top AVIORA concept: ${avioraRanking[0].productName} (${avioraRanking[0].opportunityScore}).`,
);

function rank(products) {
  return products
    .map((product) => ({
      ...product,
      opportunityScore: score(product.scoreInputs),
    }))
    .sort((left, right) => right.opportunityScore - left.opportunityScore)
    .map((product, index) => ({ ...product, rank: index + 1 }));
}

function score(inputs) {
  const total = Object.entries(weights).reduce((sum, [dimension, weight]) => {
    const value = inputs[dimension];
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      throw new Error(`Invalid ${dimension} score: ${value}`);
    }
    return sum + value * weight;
  }, 0);
  return Math.round(total * 10) / 10;
}

function toCompetitorCsv(products) {
  const headers = [
    "rank",
    "opportunity_score",
    "competitor",
    "product_name",
    "url",
    "duration",
    "starting_price",
    "tour_type",
    "destinations",
    "positioning",
    "last_checked",
  ];
  const rows = products.map((product) => [
    product.rank,
    product.opportunityScore,
    product.competitor,
    product.productName,
    product.url,
    product.observed.duration,
    product.observed.startingPrice,
    product.observed.tourType,
    product.observed.destinations.join(" | "),
    product.inferred.positioning,
    product.lastChecked,
  ]);
  return csv(headers, rows);
}

function toAvioraCsv(products) {
  const headers = [
    "rank",
    "opportunity_score",
    "product_name",
    "positioning",
    "duration_days",
    "destinations",
    "primary_keyword",
    "selling_price_estimate",
    "margin_target",
    "status",
  ];
  const rows = products.map((product) => [
    product.rank,
    product.opportunityScore,
    product.productName,
    product.positioning,
    product.durationDays,
    product.destinations.join(" | "),
    product.seo.primaryKeyword,
    product.commercial.recommendedSellingPrice,
    product.commercial.grossMarginTarget,
    product.status,
  ]);
  return csv(headers, rows);
}

function csv(headers, rows) {
  return `${[headers, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n")}\n`;
}

function escapeCsv(value) {
  const text = String(value ?? "UNKNOWN");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}
