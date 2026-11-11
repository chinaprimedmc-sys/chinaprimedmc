import { readdir, stat, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

async function collect(directory) {
  return (
    await Promise.all(
      (await readdir(directory, { withFileTypes: true })).map(async (entry) => {
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) return collect(file);
        return /\.(avif|webp|jpe?g|png)$/i.test(file) ? [file] : [];
      }),
    )
  ).flat();
}
const results = [];
for (const file of await collect("public")) {
  try {
    const { width, height } = await sharp(file).metadata();
    const bytes = (await stat(file)).size;
    const issues = [];
    if (!width || !height) throw new Error("No raster dimensions");
    if (bytes > 600 * 1024) issues.push("over-600KB");
    if (width < 720 && height > width) issues.push("small-portrait-source");
    results.push({ file, width, height, bytes, issues });
  } catch (error) {
    results.push({ file, issues: ["unreadable"], error: error.message });
  }
}
await mkdir("artifacts/media", { recursive: true });
await writeFile("artifacts/media/library.json", JSON.stringify(results, null, 2));
const unreadable = results.filter((item) => item.issues.includes("unreadable"));
console.log(
  `Checked ${results.length} images; ${unreadable.length} unreadable. Size/resolution recommendations: artifacts/media/library.json`,
);
if (unreadable.length) process.exitCode = 1;
