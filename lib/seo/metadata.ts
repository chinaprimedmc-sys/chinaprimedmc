import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type CreateMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  keywords?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
  type?: "website" | "article";
  languages?: Record<string, string>;
  titleYear?: number;
  callToAction?: string;
};

export function createMetadata({
  title = siteConfig.siteName,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  imageWidth,
  imageHeight,
  imageAlt,
  keywords,
  noIndex = false,
  noFollow = false,
  type = "website",
  languages,
  titleYear,
  callToAction,
}: CreateMetadataInput = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const cleanTitle = title
    .trim()
    .replace(
      new RegExp(
        `\\s*\\|\\s*(?:${escapeRegExp(siteConfig.siteName)}|${escapeRegExp(siteConfig.name)})$`,
        "i",
      ),
      "",
    );
  const titleLimit = 60 - siteConfig.name.length - 3;
  const datedTitle = titleYear
    ? `${limitTitleLength(cleanTitle, titleLimit - String(titleYear).length - 3)} (${titleYear})`
    : cleanTitle;
  const titleCore = limitTitleLength(datedTitle, titleLimit);
  const brandedTitle = `${titleCore} | ${siteConfig.name}`;
  const pageDescription = callToAction
    ? composeDescription(description, callToAction, 150)
    : description;
  const defaultImageDimensions = image === siteConfig.ogImage ? { width: 1200, height: 630 } : {};
  const suppliedImageDimensions =
    imageWidth && imageHeight ? { width: imageWidth, height: imageHeight } : {};
  const openGraphImage = {
    url: image,
    ...defaultImageDimensions,
    ...suppliedImageDimensions,
    alt: imageAlt ?? `${title} — ${siteConfig.siteName}`,
  };

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  return {
    title: titleCore,
    description: pageDescription,
    keywords: keywords ?? [
      "private China tours",
      "tailor-made China travel",
      "China inbound DMC",
      "private China itinerary",
    ],
    applicationName: siteConfig.siteName,
    creator: siteConfig.siteName,
    publisher: siteConfig.operator.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    robots: noIndex
      ? {
          index: false,
          follow: !noFollow,
          googleBot: { index: false, follow: !noFollow, noimageindex: noFollow },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: brandedTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.siteName,
      images: [openGraphImage],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description: pageDescription,
      images: [image],
    },
    verification: googleVerification ? { google: googleVerification } : undefined,
  };
}

function limitTitleLength(title: string, maxLength: number) {
  if (title.length <= maxLength) return title;
  const shortened = title.slice(0, maxLength + 1);
  const wordBoundary = shortened.lastIndexOf(" ");
  return shortened.slice(0, wordBoundary > 20 ? wordBoundary : maxLength).trim();
}

function composeDescription(description: string, callToAction: string, maxLength: number) {
  const base = description.trim().replace(/[.!?\s]+$/, "");
  const action = callToAction.trim().replace(/^[.!?\s]+|[.!?\s]+$/g, "");
  const availableLength = maxLength - action.length - 2;
  if (availableLength < 40) return description;
  if (base.length <= availableLength) return `${base}. ${action}.`;

  let excerpt = base.slice(0, availableLength + 1);
  const wordBoundary = excerpt.lastIndexOf(" ");
  if (wordBoundary > 40) excerpt = excerpt.slice(0, wordBoundary);
  excerpt = excerpt
    .replace(/[\s,;:]+$/, "")
    .replace(/\b(?:and|or|with|for|to|of|by|in|on|at)$/i, "")
    .trim();
  return `${excerpt}… ${action}.`;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
