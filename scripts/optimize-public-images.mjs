import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("client/public");
const supported = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const maxWidth = 1400;
const maxHeight = 1400;
const minSavings = 1024;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      return fullPath;
    }),
  );
  return files.flat();
}

function outputFormat(ext) {
  if (ext === ".png") return "png";
  if (ext === ".webp") return "webp";
  return "jpeg";
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  const format = outputFormat(ext);
  const original = await fs.readFile(file);
  let pipeline = sharp(original, { failOn: "none" }).rotate().resize({
    width: maxWidth,
    height: maxHeight,
    fit: "inside",
    withoutEnlargement: true,
  });

  if (format === "jpeg") {
    pipeline = pipeline.jpeg({ quality: 72, mozjpeg: true, progressive: true });
  } else if (format === "png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.webp({ quality: 74, effort: 5 });
  }

  const optimized = await pipeline.toBuffer();
  if (optimized.length + minSavings < original.length) {
    await fs.writeFile(file, optimized);
    return { file, original: original.length, optimized: optimized.length, changed: true };
  }
  return { file, original: original.length, optimized: original.length, changed: false };
}

const files = (await walk(publicDir)).filter((file) => supported.has(path.extname(file).toLowerCase()));
const results = [];
for (const file of files) {
  results.push(await optimize(file));
}

const changed = results.filter((item) => item.changed);
const before = results.reduce((sum, item) => sum + item.original, 0);
const after = results.reduce((sum, item) => sum + item.optimized, 0);
const saved = before - after;

console.log(JSON.stringify({
  scanned: results.length,
  optimized: changed.length,
  beforeBytes: before,
  afterBytes: after,
  savedBytes: saved,
  savedPercent: Number(((saved / before) * 100).toFixed(1)),
  largestSavings: changed
    .map((item) => ({
      file: path.relative(process.cwd(), item.file),
      savedKB: Math.round((item.original - item.optimized) / 1024),
      finalKB: Math.round(item.optimized / 1024),
    }))
    .sort((a, b) => b.savedKB - a.savedKB)
    .slice(0, 20),
}, null, 2));
