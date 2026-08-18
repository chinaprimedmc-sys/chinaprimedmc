import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const intelligenceDir = path.join(root, "product-intelligence");
const dataDir = path.join(intelligenceDir, "data");
const snapshotDir = path.join(intelligenceDir, "snapshots");
const products = JSON.parse(await readFile(path.join(dataDir, "competitor-products.json"), "utf8"));
const checkedAt = new Date().toISOString();
const dateKey = checkedAt.slice(0, 10);
await mkdir(snapshotDir, { recursive: true });

const snapshots = [];
for (const product of products) {
  snapshots.push(await inspect(product));
}

const previous = await previousSnapshot(dateKey);
const changes = compare(previous, snapshots);
const output = { checkedAt, products: snapshots, changes };
await writeFile(path.join(snapshotDir, `${dateKey}.json`), `${JSON.stringify(output, null, 2)}\n`);

console.log(`Checked ${snapshots.length} official competitor URLs.`);
console.log(`${changes.length} material change(s) detected against the previous snapshot.`);
for (const change of changes) console.log(`- ${change.id}: ${change.fields.join(", ")}`);

async function inspect(product) {
  try {
    const response = await fetch(product.url, {
      redirect: "follow",
      headers: { "user-agent": "AVIORA Product Intelligence/1.0 (+https://www.chinaprimedmc.com)" },
      signal: AbortSignal.timeout(30000),
    });
    const html = await response.text();
    const title = textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const h1 = textMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return {
      id: product.id,
      url: product.url,
      status: response.status,
      finalUrl: response.url,
      title,
      h1,
      contentHash: createHash("sha256").update(visibleText).digest("hex"),
      checkedAt,
    };
  } catch (error) {
    return { id: product.id, url: product.url, status: "ERROR", error: String(error), checkedAt };
  }
}

function textMatch(html, pattern) {
  return (html.match(pattern)?.[1] || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#0?39;|&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

async function previousSnapshot(currentDate) {
  const files = (await readdir(snapshotDir))
    .filter((name) => name.endsWith(".json") && name !== `${currentDate}.json`)
    .sort();
  if (!files.length) return [];
  const latest = JSON.parse(await readFile(path.join(snapshotDir, files.at(-1)), "utf8"));
  return latest.products || [];
}

function compare(previousProducts, currentProducts) {
  if (!previousProducts.length) return [];
  const previousById = new Map(previousProducts.map((product) => [product.id, product]));
  return currentProducts.flatMap((product) => {
    const previousProduct = previousById.get(product.id);
    if (!previousProduct) return [{ id: product.id, fields: ["new product"] }];
    const fields = ["status", "finalUrl", "title", "h1", "contentHash"].filter(
      (field) => previousProduct[field] !== product[field],
    );
    return fields.length ? [{ id: product.id, fields }] : [];
  });
}
