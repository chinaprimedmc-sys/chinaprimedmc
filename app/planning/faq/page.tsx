import type { Metadata } from "next";

import { FaqAccordion } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import { planningFaqCategories } from "@/content/planning";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Private China Travel Planning FAQ",
  description:
    "Planning FAQ for private China travel, including safety, payments, internet, walking load, food, shopping policy, seasons, and route design.",
  path: "/planning/faq",
});

export default function PlanningFaqPage() {
  const faqItems = planningFaqCategories.flatMap((category) => category.items);

  return (
    <PageContainer>
      <JsonLd
        id="planning-faq-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <JsonLd
        id="planning-faq-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Planning", path: "/planning" },
          { name: "FAQ", path: "/planning/faq" },
        ])}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <Section spacing="spacious">
        <ContentContainer size="lg" className="grid gap-10">
          <div className="max-w-4xl">
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
              Planning FAQ
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              Practical answers before China becomes an itinerary.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              Questions are grouped by the concerns travelers usually feel before booking: safety,
              payments, walking load, food, shopping, seasons, and route rhythm.
            </p>
          </div>
          <FaqAccordion categories={planningFaqCategories} />
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.tea}
            eyebrow="Still unsure?"
            title="A private route should answer your specific constraint."
            description="Send the question that would make the trip easier to say yes to. We will start there."
            primary={{
              label: "Email a Specialist",
              href: "mailto:chinaprimedmc@gmail.com?subject=Question%20for%20a%20China%20Specialist",
            }}
            secondary={{ label: "Visa Notes", href: "/planning/visa" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Planning",
            items: [
              { label: "Planning Hub", href: "/planning" },
              { label: "Visa", href: "/planning/visa" },
              { label: "Family Travel", href: "/family-travel" },
              { label: "Senior Travel", href: "/senior-travel" },
            ],
          },
          { title: "Explore", items: homeNavItems },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
