const baseUrl = (
  process.argv.find((argument) => /^https?:\/\//.test(argument)) ??
  process.env.IMAGE_PREWARM_BASE_URL ??
  "https://www.chinaprimedmc.com"
).replace(/\/$/, "");

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Could not load sitemap: ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const tourPages = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((pathname) => /^\/tours\/[^/]+$/.test(pathname))
  .map((pathname) => `${baseUrl}${pathname}`);

const imageRequests = new Set();
for (const pageUrl of tourPages) {
  const response = await fetch(pageUrl);
  if (!response.ok) throw new Error(`${pageUrl} returned ${response.status}`);
  const html = await response.text();
  const imageTags = [...html.matchAll(/<img\b[^>]*>/gi)].slice(0, 2);

  for (const match of imageTags) {
    const tag = match[0];
    const srcSet = tag.match(/\bsrcset="([^"]+)"/i)?.[1];
    const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
    if (srcSet) {
      const candidates = srcSet
        .replaceAll("&amp;", "&")
        .split(",")
        .map((candidate) => {
          const [url, width] = candidate.trim().split(/\s+/);
          return { url, width: Number.parseInt(width, 10) };
        })
        .filter((candidate) => candidate.url && Number.isFinite(candidate.width))
        .sort((left, right) => left.width - right.width);

      for (const targetWidth of [640, 1280]) {
        const candidate = candidates.find(({ width }) => width >= targetWidth) ?? candidates.at(-1);
        if (candidate) imageRequests.add(new URL(candidate.url, pageUrl).toString());
      }
    } else if (src) {
      imageRequests.add(new URL(src.replaceAll("&amp;", "&"), pageUrl).toString());
    }
  }
}

const failures = [];
const requests = [...imageRequests];
for (let index = 0; index < requests.length; index += 4) {
  await Promise.all(
    requests.slice(index, index + 4).map(async (imageUrl) => {
      try {
        const response = await fetch(imageUrl, {
          headers: {
            Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
            "User-Agent": "AVIORA image cache warmer",
          },
        });
        if (!response.ok || !response.headers.get("content-type")?.startsWith("image/")) {
          failures.push(`${imageUrl} returned ${response.status}`);
          return;
        }
        await response.arrayBuffer();
      } catch (error) {
        failures.push(`${imageUrl}: ${error instanceof Error ? error.message : error}`);
      }
    }),
  );
}

if (failures.length) {
  console.error(`Image prewarm found ${failures.length} failure(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(
    `Image prewarm passed: ${requests.length} responsive hero and gallery variants across ${tourPages.length} journey pages.`,
  );
}
