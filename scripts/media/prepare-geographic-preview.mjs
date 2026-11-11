/** Regenerate the repository-local map preview. Not run during normal builds. */
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";
const base = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/";
async function download(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  return Buffer.from(await response.arrayBuffer());
}
const projection = ([longitude, latitude]) => [
  longitude,
  (-Math.log(Math.tan(Math.PI / 4 + (Math.max(-85, Math.min(85, latitude)) * Math.PI) / 360)) *
    180) /
    Math.PI,
];
const tiles = [];
for (let x = 5; x <= 7; x++)
  for (let y = 2; y <= 3; y++) {
    tiles.push({
      input: await download(`https://tiles.openfreemap.org/natural_earth/ne2sr/3/${x}/${y}.png`),
      left: (x - 5) * 512,
      top: (y - 2) * 512,
    });
  }
const terrain = await sharp({
  create: { width: 1536, height: 1024, channels: 3, background: "white" },
})
  .composite(tiles)
  .modulate({ saturation: 0.3, brightness: 1.04 })
  .webp({ quality: 85 })
  .toBuffer();
function lines(geometry) {
  if (geometry.type === "LineString") return [geometry.coordinates];
  if (geometry.type === "MultiLineString" || geometry.type === "Polygon")
    return geometry.coordinates;
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flat();
  return [];
}
function pathFor(line, close = false) {
  if (!line.some(([x, y]) => x >= 60 && x <= 150 && y >= 5 && y <= 60)) return "";
  // Reduce source precision and near-identical points at this overview scale.
  let previous;
  const points = line.map(projection).filter((point, index) => {
    if (
      index &&
      index < line.length - 1 &&
      previous &&
      Math.hypot(point[0] - previous[0], point[1] - previous[1]) < 0.025
    )
      return false;
    previous = point;
    return true;
  });
  return (
    points.map(([x, y], index) => `${index ? "L" : "M"}${x.toFixed(3)},${y.toFixed(3)}`).join("") +
    (close ? "Z" : "")
  );
}
async function paths(file, close = false) {
  const data = JSON.parse((await download(base + file)).toString());
  return data.features
    .flatMap((feature) => lines(feature.geometry).map((line) => pathFor(line, close)))
    .join("");
}
const [land, rivers, provinces] = await Promise.all([
  paths("ne_50m_land.geojson", true),
  paths("ne_50m_rivers_lake_centerlines.geojson"),
  paths("ne_50m_admin_1_states_provinces_lines.geojson"),
]);
// Labels are geographic context only, not itinerary stops.
const places = [
  [104, 38, "CHINA", "country"],
  [108, 34, "Shaanxi"],
  [102, 30, "Sichuan"],
  [101, 24, "Yunnan"],
  [118, 32.6, "Jiangsu"],
  [114, 38, "Hebei"],
  [111, 27.5, "Hunan"],
  [108, 23.4, "Guangxi"],
  [114, 30.8, "Hubei"],
  [117, 36.5, "Shandong"],
  [113.5, 34.75, "Henan"],
  [120, 28.2, "Zhejiang"],
];
const labels = places
  .map(([x, y, name, kind]) => {
    const [px, py] = projection([x, y]);
    return `<text x="${px}" y="${py}" class="${kind || "province"}">${name}</text>`;
  })
  .join("");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-180 -180 360 360">
<title>China geographic context: relief, rivers and provinces</title>
<rect x="-180" y="-180" width="360" height="360" fill="#edf2f4"/>
<path d="${land}" fill="#e9ece3"/>
<image x="45" y="-90" width="135" height="90" xlink:href="data:image/webp;base64,${terrain.toString("base64")}"/>
<path d="${rivers}" fill="none" stroke="#88adbc" stroke-width="0.035"/>
<path d="${provinces}" fill="none" stroke="#8f9690" stroke-opacity="0.65" stroke-width="0.035" stroke-dasharray="0.12 0.09"/>
<style>text{font-family:Arial,sans-serif;text-anchor:middle;fill:#56645e;paint-order:stroke;stroke:#f6f7f3;stroke-width:.05;stroke-linejoin:round}.province{font-size:.42px;letter-spacing:.035px}.country{font-size:.85px;letter-spacing:.24px;fill:#65776b}</style>
${labels}</svg>`;
await mkdir("public/maps", { recursive: true });
await writeFile("public/maps/china-geographic-context.svg", svg);
console.log(
  `Geographic preview ready: ${Math.round(Buffer.byteLength(svg) / 1024)} KB, local relief / rivers / province context.`,
);
