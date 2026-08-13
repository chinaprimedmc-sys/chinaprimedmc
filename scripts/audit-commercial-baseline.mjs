import { readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const baseUrl = new URL(process.env.SEO_BASE_URL || "https://www.chinaprimedmc.com");
const workspace = process.cwd();
const bannedImages = [
  "/home/beijing-forbidden-city.jpg",
  "/home/beijing-forbidden-city.webp",
  "/home/beijing-forbidden-city-1400.webp",
];
const strictImageDuplicates = process.env.STRICT_IMAGE_DUPLICATES === "1";
const issues = [];
const duplicateImagePages = [];

const sitemapResponse = await fetch(new URL("/sitemap.xml", baseUrl));
if (!sitemapResponse.ok) fail(`Sitemap returned ${sitemapResponse.status}.`);

const sitemapXml = await sitemapResponse.text();
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const journalUrls = urls.filter((url) => new URL(url).pathname.startsWith("/journal/"));
const tourUrls = urls.filter((url) => new URL(url).pathname.startsWith("/tours/"));
const internalTargets = new Set();

for (const canonicalUrl of urls) {
  const pathname = new URL(canonicalUrl).pathname;
  const response = await fetch(new URL(pathname, baseUrl), { redirect: "manual" });
  if (response.status !== 200) {
    issues.push(`${pathname}: HTTP ${response.status}`);
    continue;
  }

  const html = await response.text();
  const images = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"[^>]*>/gi)].map((match) =>
    normalizeAssetPath(match[1]),
  );
  const duplicates = findDuplicates(images.filter(Boolean));

  for (const image of images) {
    if (bannedImages.includes(image)) issues.push(`${pathname}: banned image ${image}`);
    if (!image?.startsWith("/")) continue;
    const filePath = join(workspace, "public", image);
    try {
      const file = await stat(filePath);
      if (isRasterImage(filePath) && file.size < 20_000) {
        issues.push(`${pathname}: suspiciously small image ${image} (${file.size} bytes)`);
      }
    } catch {
      issues.push(`${pathname}: missing local image ${image}`);
    }
  }

  if (duplicates.length && isCommercialContentPage(pathname)) {
    duplicateImagePages.push({ pathname, images: duplicates });
    if (strictImageDuplicates) {
      issues.push(`${pathname}: repeated image(s): ${duplicates.join(", ")}`);
    }
  }

  for (const href of extractInternalLinks(html)) internalTargets.add(href);
}

for (const pathname of internalTargets) {
  const response = await fetch(new URL(pathname, baseUrl), { redirect: "manual" });
  if (![200, 301, 302, 307, 308].includes(response.status)) {
    issues.push(`${pathname}: linked target returned ${response.status}`);
  }
}

await auditSourceForBannedImages();

if (issues.length) {
  console.error(`Commercial baseline audit failed with ${issues.length} issue(s):`);
  issues.forEach((issue) => console.error(`- ${issue}`));
  process.exit(1);
}

console.log(
  `Commercial baseline passed: ${urls.length} indexable URLs, ${journalUrls.length} journal pages, ${tourUrls.length} tour pages and ${internalTargets.size} internal targets checked.`,
);
console.log(
  `Image duplication baseline: ${duplicateImagePages.length} commercial content page(s) contain repeated image URLs${strictImageDuplicates ? " (strict mode)" : ""}.`,
);

async function auditSourceForBannedImages() {
  const files = await listSourceFiles();
  for (const file of files) {
    const source = await readFile(file, "utf8");
    for (const banned of bannedImages) {
      if (source.includes(banned)) issues.push(`${file}: source references banned image ${banned}`);
    }
  }
}

async function listSourceFiles() {
  const { readdir } = await import("node:fs/promises");
  const roots = ["app", "components", "content", "features", "lib"];
  const files = [];
  for (const root of roots) await walk(join(workspace, root), files, readdir);
  return files;
}

async function walk(directory, files, readdir) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path, files, readdir);
    else if ([".ts", ".tsx", ".js", ".mjs"].includes(extname(entry.name))) files.push(path);
  }
}

function extractInternalLinks(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("//"))
    .map((href) => href.split("#")[0])
    .filter(Boolean);
}

function normalizeAssetPath(src) {
  if (!src || src.startsWith("data:") || src.startsWith("blob:")) return "";
  try {
    const url = new URL(src, baseUrl);
    if (url.origin !== baseUrl.origin) return "";
    if (url.pathname === "/_next/image") {
      const optimizedSource = url.searchParams.get("url");
      return optimizedSource ? decodeURIComponent(optimizedSource).split("?")[0] : "";
    }
    return decodeURIComponent(url.pathname);
  } catch {
    return src.split("?")[0];
  }
}

function findDuplicates(items) {
  const counts = new Map();
  for (const item of items) counts.set(item, (counts.get(item) || 0) + 1);
  return [...counts].filter(([, count]) => count > 1).map(([item]) => item);
}

function isCommercialContentPage(pathname) {
  return (
    pathname === "/tours" || pathname.startsWith("/tours/") || pathname.startsWith("/journal/")
  );
}

function isRasterImage(path) {
  return [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(extname(path).toLowerCase());
}

function fail(message) {
  console.error(`Commercial baseline audit failed: ${message}`);
  process.exit(1);
}
