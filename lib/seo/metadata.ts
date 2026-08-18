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
}: CreateMetadataInput = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const normalizedTitle = title.toLowerCase();
  const includesBrandName = [siteConfig.siteName, siteConfig.name].some((brandName) =>
    normalizedTitle.includes(brandName.toLowerCase()),
  );
  const fullBrandTitle = `${title} | ${siteConfig.siteName}`;
  const shortBrandTitle = `${title} | ${siteConfig.name}`;
  const fullTitle = includesBrandName
    ? title
    : fullBrandTitle.length <= 64
      ? fullBrandTitle
      : shortBrandTitle.length <= 64
        ? shortBrandTitle
        : title;
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
    title: fullTitle,
    description,
    keywords,
    applicationName: siteConfig.siteName,
    creator: siteConfig.siteName,
    publisher: siteConfig.operator.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
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
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.siteName,
      images: [openGraphImage],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    verification: googleVerification ? { google: googleVerification } : undefined,
  };
}
