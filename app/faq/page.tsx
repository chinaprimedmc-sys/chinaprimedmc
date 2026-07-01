import type { Metadata } from "next";

import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Card } from "@/components/ui/card";
import { planJourneyHref } from "@/config/public-site";
import { storyImages } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";

const faqs = [
  {
    question: "Are these fixed package journeys?",
    answer:
      "No. Published journeys are starting points. We adjust pace, hotels, routing, guide style, meals, and special needs around each traveler.",
  },
  {
    question: "Can you plan family and senior-friendly trips?",
    answer:
      "Yes. We pay close attention to daily rhythm, walking load, transfer time, hotel location, rest windows, and child or older-parent comfort.",
  },
  {
    question: "Do you support travel advisors?",
    answer:
      "Yes. China Prime DMC can support advisors with private route design, ground operations, and destination expertise for inbound China travel.",
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
    "Answers to common questions about private China journeys, family travel, travel advisor cooperation, and custom itinerary planning.",
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
      <SiteNavigation cta={{ label: "Plan Your Journey", href: planJourneyHref }} />
      <HeroLargeImage
        eyebrow="FAQ"
        title="Practical answers before we design the route."
        subtitle="A few common planning questions for international travelers considering a private China journey."
        image={storyImages.tea}
        primary={{ label: "Ask a China Specialist", href: planJourneyHref }}
        secondary={{ label: "Explore Route Ideas", href: "/journeys" }}
      />
      <Section spacing="default" className="bg-white">
        <ContentContainer size="md" className="grid gap-8">
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
            title="The useful answer usually starts with your exact travelers."
            description="Tell us who is going, when, and what kind of China you want to remember."
            primary={{ label: "Ask a China Specialist", href: planJourneyHref }}
            secondary={{
              label: "Explore Route Ideas",
              href: "/journey/first-china-beautifully-paced",
            }}
          />
        </ContentContainer>
      </Section>
      <SiteFooter />
    </PageContainer>
  );
}
