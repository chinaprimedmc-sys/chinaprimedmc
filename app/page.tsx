import type { Metadata } from "next";

import { HomeRedesign } from "@/components/home/redesign/home-redesign";
import { homeFaqs } from "@/content/home/redesign";
import { siteConfig } from "@/config/site";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours | Tailor-Made by China Experts | AVIORA",
  description:
    "Plan a tailor-made private China tour with AVIORA's licensed China-based team, private guides and drivers, thoughtful stays and no shopping stops.",
  image: siteConfig.ogImage,
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "Private travelers exploring China with an AVIORA local travel specialist",
});

const homeDescription =
  "Plan a tailor-made private China tour with AVIORA's licensed China-based team, private guides and drivers, thoughtful stays and no shopping stops.";

export default async function HomePage() {
  const settings = await getPublicSiteSettings();
  return (
    <>
      <JsonLd
        id="homepage-webpage-schema"
        data={webPageSchema({
          url: siteConfig.url,
          name: "AVIORA Private China Travel",
          description: homeDescription,
          about: { "@id": `${siteConfig.url}/#organization` },
        })}
      />
      <JsonLd id="homepage-faq-schema" data={homepageFaqSchema()} />
      <HomeRedesign planningHref={settings.primaryCtaHref} />
    </>
  );
}

function homepageFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
