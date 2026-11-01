import type { Metadata } from "next";

import { HomePage as HomeView } from "@/components/home/home-page";
import { homeFaqs } from "@/content/home/redesign";
import { siteConfig } from "@/config/site";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours, Tailor-Made and Unhurried | AVIORA",
  description:
    "Tailor-made private China tours of 1 to 13 days from a licensed operator with offices in Beijing, Shanghai and Xi'an. Own guide and driver, no forced shopping.",
  image: siteConfig.ogImage,
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "Private travelers exploring China with an AVIORA local travel specialist",
});

const homeDescription =
  "Tailor-made private China tours of 1 to 13 days, with a private multilingual guide and driver, hotels, trains and tickets arranged by a licensed operator with offices in Beijing, Shanghai and Xi'an, serving all of China. No compulsory shopping.";

export default async function HomePage() {
  const settings = await getPublicSiteSettings();
  return (
    <>
      <JsonLd
        id="homepage-webpage-schema"
        data={webPageSchema({
          url: siteConfig.url,
          name: "Private China Tours, Tailor-Made and Unhurried | AVIORA",
          description: homeDescription,
          about: { "@id": `${siteConfig.url}/#organization` },
        })}
      />
      <JsonLd id="homepage-faq-schema" data={homepageFaqSchema()} />
      <HomeView planningHref={settings.primaryCtaHref} />
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
