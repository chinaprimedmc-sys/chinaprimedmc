import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "client/public");
const sourcePath = path.join(root, "client/src/lib/visualAssets.ts");
const source = fs.readFileSync(sourcePath, "utf8");

const blocks = [...source.matchAll(/(\w+):\s*\{([\s\S]*?)\n\s*\}/g)].map((match) => {
  const [, key, body] = match;
  const read = (field) => body.match(new RegExp(`${field}:\\s*"([^"]+)"`))?.[1] ?? "";
  return {
    key,
    id: read("id"),
    src: read("src"),
    alt: read("alt"),
    role: read("role"),
    page: read("page"),
    story: read("story"),
  };
}).filter((asset) => asset.src);

const errors = [];
const seenSrc = new Map();
const seenId = new Map();

for (const asset of blocks) {
  for (const field of ["id", "src", "alt", "role", "page", "story"]) {
    if (!asset[field]) errors.push(`${asset.key}: missing ${field}`);
  }

  if (seenSrc.has(asset.src)) {
    errors.push(`${asset.key}: duplicate src also used by ${seenSrc.get(asset.src)} -> ${asset.src}`);
  } else {
    seenSrc.set(asset.src, asset.key);
  }

  if (seenId.has(asset.id)) {
    errors.push(`${asset.key}: duplicate id also used by ${seenId.get(asset.id)} -> ${asset.id}`);
  } else {
    seenId.set(asset.id, asset.key);
  }

  if (asset.src.startsWith("/")) {
    const file = path.join(publicDir, asset.src.slice(1));
    if (!fs.existsSync(file)) errors.push(`${asset.key}: file does not exist -> ${asset.src}`);
  }
}

if (errors.length) {
  console.error(JSON.stringify({ ok: false, errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  assets: blocks.length,
  pages: [...new Set(blocks.map((asset) => asset.page))].sort(),
  roles: [...new Set(blocks.map((asset) => asset.role))].sort(),
}, null, 2));
