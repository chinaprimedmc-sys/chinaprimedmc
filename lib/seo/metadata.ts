import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type CreateMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  type?: "website" | "article";
};

export function createMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
  noFollow = false,
  type = "website",
}: CreateMetadataInput = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const includesBrandSuffix = title.toLowerCase().endsWith(`| ${siteConfig.name.toLowerCase()}`);
  const fullTitle =
    title === siteConfig.name || includesBrandSuffix ? title : `${title} | ${siteConfig.name}`;
  const openGraphImage =
    image === siteConfig.ogImage
      ? { url: image, width: 1200, height: 630, alt: `${title} — ${siteConfig.name}` }
      : { url: image, alt: `${title} — ${siteConfig.name}` };

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

  return {
    title: fullTitle,
    description,
    applicationName: siteConfig.name,
    creator: siteConfig.name,
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
      siteName: siteConfig.name,
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
