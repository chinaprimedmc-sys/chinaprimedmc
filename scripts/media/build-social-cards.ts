import { readFile, mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { createElement as h } from "react";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyHeadline } from "@/content/tours/card-copy";
import { journalArticles } from "@/content/journal";
import { siteConfig } from "@/config/site";
import { socialCardPath } from "@/lib/seo/social-card";

const root = process.cwd();
const output = path.join(root, "public/og/generated");
await mkdir(output, { recursive: true });
const css = await readFile(path.join(root, "design-system/tokens/foundation.css"), "utf8");
function token(name: string) {
  const value = css.match(new RegExp(`${name}:\\s*([^;]+);`))?.[1]?.trim();
  if (!value) throw new Error(`Missing brand token ${name}`);
  return value;
}
const colors = {
  canvas: token("--color-canvas"),
  ink: token("--color-ink"),
  muted: token("--color-muted"),
  accent: token("--color-forest"),
  line: token("--color-line"),
};
const inter = await readFile(path.join(root, "assets/fonts/Inter.ttf"));
const newsreader = await readFile(path.join(root, "assets/fonts/Newsreader.ttf"));
const renderer = await readFile(new URL(import.meta.url));
const signature = createHash("sha256")
  .update(renderer)
  .update(css)
  .update(inter)
  .update(newsreader)
  .digest("hex");
const previous: Record<string, string> = JSON.parse(
  await readFile(path.join(output, "manifest.json"), "utf8").catch(() => "{}"),
);
const manifest: Record<string, string> = {};
const cards = [
  ...journeyCatalog.map((item) => ({
    title: getJourneyHeadline(item) ?? item.title,
    subtitle: `${item.durationLabel} · ${item.routeLabel}`,
    label: "PRIVATE CHINA JOURNEYS",
    image:
      item.visualStatus === "pending"
        ? "/tours/placeholders/photography-pending.svg"
        : item.image.src,
    file: socialCardPath("tours", item.slug),
  })),
  ...journalArticles.map((article) => ({
    title: article.title,
    subtitle: article.category,
    label: "THE AVIORA JOURNAL",
    image: article.hero.mode === "text" ? siteConfig.ogImage : article.hero.image.src,
    file: socialCardPath("journal", article.slug),
  })),
];
let generated = 0;
for (const card of cards) {
  // Only repository-local photography is embedded; builds never fetch arbitrary URLs.
  const safeImage =
    card.image.startsWith("/") && !card.image.includes("..") ? card.image : siteConfig.ogImage;
  const source = await readFile(path.join(root, "public", safeImage));
  const hash = createHash("sha256")
    .update(signature)
    .update(JSON.stringify(card))
    .update(source)
    .digest("hex");
  const target = path.join(root, "public", card.file);
  manifest[card.file] = hash;
  if (
    previous[card.file] === hash &&
    (await stat(target).then(
      () => true,
      () => false,
    ))
  )
    continue;
  const photo = await sharp(source)
    .rotate()
    .resize(560, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 88 })
    .toBuffer();
  // ImageResponse/Satori requires inline render properties. They are image layout,
  // not DOM styles; brand colors are read from the site's CSS token source above.
  const image = new ImageResponse(
    h(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          background: colors.canvas,
          color: colors.ink,
        },
      },
      h("img", {
        src: `data:image/jpeg;base64,${photo.toString("base64")}`,
        width: 560,
        height: 630,
        alt: "",
      }),
      h(
        "div",
        {
          style: {
            display: "flex",
            width: 640,
            padding: "48px 44px",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        },
        h("div", { style: { fontFamily: "Newsreader", fontSize: 34, letterSpacing: 7 } }, "AVIORA"),
        h(
          "div",
          { style: { display: "flex", flexDirection: "column" } },
          h(
            "div",
            {
              style: {
                fontFamily: "Inter",
                color: colors.accent,
                fontSize: 14,
                letterSpacing: 2,
                marginBottom: 22,
              },
            },
            card.label,
          ),
          h(
            "div",
            {
              style: {
                fontFamily: "Newsreader",
                fontSize: card.title.length > 100 ? 36 : 44,
                lineHeight: 1.13,
              },
            },
            card.title,
          ),
          h(
            "div",
            {
              style: {
                fontFamily: "Inter",
                color: colors.muted,
                fontSize: 18,
                lineHeight: 1.5,
                marginTop: 24,
              },
            },
            card.subtitle,
          ),
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              borderTop: `1px solid ${colors.line}`,
              paddingTop: 18,
              fontFamily: "Inter",
              color: colors.muted,
              fontSize: 15,
            },
          },
          "chinaprimedmc.com",
        ),
      ),
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: inter, style: "normal", weight: 400 },
        { name: "Newsreader", data: newsreader, style: "normal", weight: 400 },
      ],
    },
  );
  const jpeg = await sharp(Buffer.from(await image.arrayBuffer()))
    .jpeg({ quality: 88, mozjpeg: true })
    .toBuffer();
  await writeFile(target, jpeg);
  generated++;
}
await writeFile(path.join(output, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(
  `Social cards ready: ${cards.length} registered routes, ${generated} generated, ${cards.length - generated} unchanged (1200 × 630 JPEG).`,
);
