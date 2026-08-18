const baseUrl = (
  process.argv.find((argument) => /^https?:\/\//.test(argument)) ?? "http://localhost:3000"
).replace(/\/$/, "");

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(
    `Could not load sitemap: ${sitemapResponse.status} ${sitemapResponse.statusText}`,
  );
}

const sitemap = await sitemapResponse.text();
const pageUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
  const url = new URL(match[1]);
  return `${baseUrl}${url.pathname}${url.search}`;
});

const failures = [];
const images = new Map();
let dimensionlessImages = 0;

function registerImage(imageUrl, pageUrl) {
  const resolvedUrl = new URL(imageUrl.replaceAll("&amp;", "&"), pageUrl).toString();
  const owners = images.get(resolvedUrl) ?? new Set();
  owners.add(pageUrl);
  images.set(resolvedUrl, owners);
}

function registerSrcSet(srcSet, pageUrl) {
  for (const candidate of srcSet.replaceAll("&amp;", "&").split(",")) {
    const imageUrl = candidate.trim().split(/\s+/)[0];
    if (imageUrl && !imageUrl.startsWith("data:")) registerImage(imageUrl, pageUrl);
  }
}

for (const pageUrl of pageUrls) {
  const response = await fetch(pageUrl);
  if (!response.ok) {
    failures.push(`${pageUrl} returned ${response.status}`);
    continue;
  }

  const html = await response.text();
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
    const srcSet = tag.match(/\bsrcset="([^"]+)"/i)?.[1];
    const alt = tag.match(/\balt="([^"]*)"/i)?.[1];
    const width = tag.match(/\bwidth="([^"]+)"/i)?.[1];
    const height = tag.match(/\bheight="([^"]+)"/i)?.[1];

    if (!src || src.startsWith("data:")) continue;
    registerImage(src, pageUrl);
    if (srcSet) registerSrcSet(srcSet, pageUrl);

    if (alt === undefined) failures.push(`${pageUrl} has an image without alt text: ${src}`);
    if (!width || !height) dimensionlessImages += 1;
  }

  for (const match of html.matchAll(/<source\b[^>]*\bsrcset="([^"]+)"[^>]*>/gi)) {
    registerSrcSet(match[1], pageUrl);
  }
}

const imageEntries = [...images.entries()];
for (let index = 0; index < imageEntries.length; index += 12) {
  await Promise.all(
    imageEntries.slice(index, index + 12).map(async ([imageUrl, owners]) => {
      try {
        const response = await fetch(imageUrl);
        const contentType = response.headers.get("content-type") ?? "";
        if (!response.ok || !contentType.startsWith("image/")) {
          failures.push(
            `${imageUrl} returned ${response.status} ${contentType || "without an image content type"} (${[...owners][0]})`,
          );
        }
      } catch (error) {
        failures.push(
          `${imageUrl} failed to load: ${error instanceof Error ? error.message : error}`,
        );
      }
    }),
  );
}

if (failures.length) {
  console.error(
    `Rendered image audit found ${failures.length} issue${failures.length === 1 ? "" : "s"}:`,
  );
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(
    `Rendered image audit passed: ${pageUrls.length} public pages and ${images.size} unique image requests.`,
  );
  if (dimensionlessImages) {
    console.log(
      `${dimensionlessImages} rendered image instances use CSS-sized or Next.js fill containers; verify these visually for layout stability.`,
    );
  }
}
