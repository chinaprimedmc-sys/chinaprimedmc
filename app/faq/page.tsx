import type { Metadata } from "next";

import { FaqAccordion } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { homeNavItems, storyImages } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";

import { journeyFaqs } from "@/content/tours/journeys-page-content";
import { bookingPolicyFaqs } from "@/features/tours/detail/tour-detail-model";

const faqs = [...journeyFaqs, ...bookingPolicyFaqs];

export const metadata: Metadata = createMetadata({
  title: "China Travel Planning FAQ",
  description:
    "Answers to common questions about private China tours, hotels, guides, family travel, payments and tailored itinerary planning.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageContainer>
      <JsonLd
        id="faq-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <SiteNavigation />
      <Section spacing="spacious">
        <ContentContainer size="md" className="grid gap-8">
          <div>
            <p className="type-caption text-muted font-semibold">FAQ</p>
            <h1 className="type-page-title mt-5">Clear answers before you plan your trip.</h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              A few common planning questions for international travelers considering a private
              China journey.
            </p>
          </div>
          <FaqAccordion
            categories={[
              {
                category: "Before you plan",
                description:
                  "The practical answers travelers usually need before starting a private China journey.",
                items: faqs,
              },
            ]}
          />
        </ContentContainer>
      </Section>
      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.tea}
            eyebrow="Next step"
            title="Your own dates and priorities deserve a personal answer."
            description="Tell us who is going, when you hope to travel and what you want from China."
            primary={{
              label: "Plan My Trip",
              href: "/start-planning?source=faq",
            }}
            secondary={{
              label: "Browse Tours",
              href: "/tours",
            }}
          />
        </ContentContainer>
      </Section>
      <SiteFooter columns={[{ title: "Explore", items: homeNavItems }]} social={[]} />
    </PageContainer>
  );
}
