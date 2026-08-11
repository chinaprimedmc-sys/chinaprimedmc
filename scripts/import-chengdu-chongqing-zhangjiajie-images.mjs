import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

import sharp from "../node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/index.js";

const sourceRoot =
  process.env.JOURNEY_IMAGE_SOURCE || "/Users/Admin/Documents/城市图片/成都+重庆+张家界11天";
const outputRoot = path.join(
  process.cwd(),
  "public",
  "tours",
  "chengdu-chongqing-zhangjiajie-private-11-day-tour",
);

const collections = [
  { folder: "01_Hero候选", prefix: "hero" },
  { folder: "02_成都", prefix: "chengdu" },
  { folder: "03_重庆", prefix: "chongqing" },
  { folder: "04_张家界", prefix: "zhangjiajie" },
  { folder: "05_自由日可选体验", prefix: "optional" },
  { folder: "06_酒店", prefix: "hotel" },
  { folder: "07_交通与私人服务", prefix: "service" },
];

await mkdir(outputRoot, { recursive: true });

let imported = 0;
for (const collection of collections) {
  const sourceDir = path.join(sourceRoot, collection.folder);
  const sourceFiles = (await readdir(sourceDir))
    .filter((name) => /\.(jpe?g|png|webp|heic)$/i.test(name))
    .sort((left, right) => left.localeCompare(right, "zh-CN"));

  for (const [index, filename] of sourceFiles.entries()) {
    const sequence = String(index + 1).padStart(2, "0");
    const outputName = `${collection.prefix}-${sequence}.webp`;
    await sharp(path.join(sourceDir, filename))
      .rotate()
      .resize(1600, 1067, {
        fit: "cover",
        position: sharp.strategy.attention,
      })
      .webp({ quality: collection.prefix === "hero" ? 84 : 78, effort: 5 })
      .toFile(path.join(outputRoot, outputName));
    imported += 1;
  }
}

console.log(`Imported ${imported} journey images into ${outputRoot}.`);
