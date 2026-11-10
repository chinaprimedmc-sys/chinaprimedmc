import type { Metadata } from "next";

import { HomePage as HomeView } from "@/components/home/home-page";
import { FAQSchema } from "@/components/seo/faq-schema";
import { homeFaqs } from "@/content/home/redesign";
import { homeSearch } from "@/content/home/search";
import { siteConfig } from "@/config/site";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { homepageSchema } from "@/lib/seo/homepage-schema";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...createMetadata({
    title: homeSearch.title,
    description: homeSearch.description,
    path: "/",
    image: siteConfig.ogImage,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "AVIORA China Travel — tailor-made private China tours",
  }),
  // A layout title template applies to child segments, not its own root page.
  title: { absolute: `${homeSearch.title} | ${siteConfig.name}` },
};

export default async function HomePage() {
  const settings = await getPublicSiteSettings();
  return (
    <>
      <JsonLd id="homepage-webpage-schema" data={homepageSchema()} />
      <FAQSchema
        id="homepage-faq-schema"
        items={homeFaqs}
        url={new URL("/", siteConfig.url).toString()}
      />
      <HomeView planningHref={settings.primaryCtaHref} />
    </>
  );
}
