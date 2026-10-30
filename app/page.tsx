import type { Metadata } from "next";

import { HomePage as HomeView } from "@/components/home/home-page";
import { homeFaqs } from "@/content/home/redesign";
import { siteConfig } from "@/config/site";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours, Designed and Run in China | AVIORA",
  description:
    "Private China tours with your own guide and driver, designed and run by a licensed team in Beijing, Shanghai and Xi'an. Every detail confirmed in writing. No compulsory shopping.",
  image: siteConfig.ogImage,
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: "Private travelers exploring China with an AVIORA local travel specialist",
});

const homeDescription =
  "AVIORA China Travel plans private China tours with local offices in Beijing, Shanghai and Xi'an, a Guangzhou-registered licensed operator, private guides and no compulsory shopping.";

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
