import sharp from "sharp";
import path from "node:path";
import { mkdir, access, readFile, writeFile } from "node:fs/promises";

const [source, destination, position = "attention"] = process.argv.slice(2);
if (
  !source ||
  !destination ||
  !["attention", "centre", "north", "south", "east", "west"].includes(position)
) {
  console.error(
    "Usage: pnpm media:portrait <source> <new-output.webp> [attention|centre|north|south|east|west]",
  );
  process.exit(1);
}
const input = path.resolve(source),
  output = path.resolve(destination);
if (input === output || !output.endsWith(".webp"))
  throw new Error("Use a separate .webp output; source files are never overwritten.");
if (
  await access(output).then(
    () => true,
    () => false,
  )
)
  throw new Error("Output already exists. Choose a new filename.");
const original = await sharp(input).metadata();
if (original.orientation && original.orientation > 4)
  [original.width, original.height] = [original.height, original.width];
if (!original.width || !original.height) throw new Error("Cannot read source dimensions.");
const width = Math.floor(Math.min(original.width, (original.height * 3) / 4, 1200) / 3) * 3;
if (width < 720)
  throw new Error(
    `Only ${width}px available after portrait crop. Use a larger original (minimum 720px portrait width).`,
  );
await mkdir(path.dirname(output), { recursive: true });
const buffer = await sharp(await readFile(input))
  .rotate()
  .resize(width, (width * 4) / 3, { fit: "cover", position, withoutEnlargement: true })
  .webp({ quality: 88, effort: 6 })
  .toBuffer();
await writeFile(output, buffer, { flag: "wx" });
console.log(
  JSON.stringify(
    {
      output,
      width,
      height: (width * 4) / 3,
      kilobytes: Math.round(buffer.length / 1024),
      position,
      note: "Review faces and hands before using the crop.",
    },
    null,
    2,
  ),
);
