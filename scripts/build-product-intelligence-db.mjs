import { readFile, mkdir } from "node:fs/promises";
import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "product-intelligence", "data");
await mkdir(dataDir, { recursive: true });

const competitors = JSON.parse(
  await readFile(path.join(dataDir, "competitor-ranking.json"), "utf8"),
);
const avioraProducts = JSON.parse(
  await readFile(path.join(dataDir, "aviora-ranking.json"), "utf8"),
);
const db = new DatabaseSync(path.join(dataDir, "product-intelligence.sqlite"));

db.exec(`
  PRAGMA journal_mode = DELETE;
  CREATE TABLE IF NOT EXISTS competitor_products (
    id TEXT PRIMARY KEY,
    competitor TEXT NOT NULL,
    product_name TEXT NOT NULL,
    url TEXT NOT NULL,
    duration TEXT,
    starting_price TEXT,
    tour_type TEXT,
    destinations_json TEXT NOT NULL,
    observed_json TEXT NOT NULL,
    inferred_json TEXT NOT NULL,
    score_inputs_json TEXT NOT NULL,
    opportunity_score REAL NOT NULL,
    rank INTEGER NOT NULL,
    sources_json TEXT NOT NULL,
    last_checked TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS aviora_products (
    id TEXT PRIMARY KEY,
    product_name TEXT NOT NULL,
    positioning TEXT NOT NULL,
    duration_days INTEGER NOT NULL,
    destinations_json TEXT NOT NULL,
    audience_json TEXT NOT NULL,
    signature_experiences_json TEXT NOT NULL,
    itinerary_json TEXT NOT NULL,
    commercial_json TEXT NOT NULL,
    seo_json TEXT NOT NULL,
    score_inputs_json TEXT NOT NULL,
    opportunity_score REAL NOT NULL,
    rank INTEGER NOT NULL,
    status TEXT NOT NULL
  );
  DELETE FROM competitor_products;
  DELETE FROM aviora_products;
`);

const insertCompetitor = db.prepare(`
  INSERT INTO competitor_products VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
for (const product of competitors) {
  insertCompetitor.run(
    product.id,
    product.competitor,
    product.productName,
    product.url,
    product.observed.duration,
    product.observed.startingPrice,
    product.observed.tourType,
    JSON.stringify(product.observed.destinations),
    JSON.stringify(product.observed),
    JSON.stringify(product.inferred),
    JSON.stringify(product.scoreInputs),
    product.opportunityScore,
    product.rank,
    JSON.stringify(product.sources),
    product.lastChecked,
  );
}

const insertAviora = db.prepare(`
  INSERT INTO aviora_products VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
for (const product of avioraProducts) {
  insertAviora.run(
    product.id,
    product.productName,
    product.positioning,
    product.durationDays,
    JSON.stringify(product.destinations),
    JSON.stringify(product.targetCustomer),
    JSON.stringify(product.signatureExperiences),
    JSON.stringify(product.itinerary),
    JSON.stringify(product.commercial),
    JSON.stringify(product.seo),
    JSON.stringify(product.scoreInputs),
    product.opportunityScore,
    product.rank,
    product.status,
  );
}

db.close();
console.log(
  `Built SQLite database with ${competitors.length} competitor and ${avioraProducts.length} AVIORA records.`,
);
