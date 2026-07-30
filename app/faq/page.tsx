import type { Metadata } from "next";

import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Card } from "@/components/ui/card";
import { homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";

const faqs = [
  {
    question: "Are these fixed package tours?",
    answer:
      "No. Published journeys are starting points. We adjust pace, hotels, routing, guide style, meals, and special needs around each traveler.",
  },
  {
    question: "Can you plan family and senior-friendly trips?",
    answer:
      "Yes. We pay close attention to daily rhythm, walking load, transfer time, hotel location, rest windows, and child or older-parent comfort.",
  },
  {
    question: "Will I have support while traveling in China?",
    answer:
      "Yes. Your local guides manage each destination, and our China-based team remains reachable for timing, transport and practical changes during your trip.",
  },
  {
    question: "How should I start?",
    answer:
      "Send your travel dates, traveler count, interests, comfort level, and any concerns. We will suggest the first route direction.",
  },
];

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
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />
      <Section spacing="spacious">
        <ContentContainer size="md" className="grid gap-8">
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">FAQ</p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              Clear answers before you plan your trip.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              A few common planning questions for international travelers considering a private
              China journey.
            </p>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <Card key={item.question} className="p-6">
                <h2 className="text-xl font-semibold tracking-[-0.025em]">{item.question}</h2>
                <p className="text-muted mt-3 text-sm leading-7">{item.answer}</p>
              </Card>
            ))}
          </div>
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
              label: "Email a Specialist",
              href: "mailto:chinaprimedmc@gmail.com?subject=Question%20for%20a%20China%20Specialist",
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
