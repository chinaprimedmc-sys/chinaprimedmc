import { createRequire } from "node:module";
import { readFile, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
const require = createRequire(import.meta.url);
const directory = path.dirname(require.resolve("maplibre-gl/package.json"));
const { version } = JSON.parse(await readFile(path.join(directory, "package.json"), "utf8"));
const output = path.join("public/maps/vendor", version);
await mkdir(output, { recursive: true });
for (const file of ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"]) {
  await copyFile(path.join(directory, "dist", file), path.join(output, file));
}
await copyFile(path.join(directory, "LICENSE.txt"), path.join(output, "LICENSE.txt"));
console.log(`MapLibre ${version}: same-origin worker assets ready.`);
