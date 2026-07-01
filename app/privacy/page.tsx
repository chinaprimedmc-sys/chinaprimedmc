import type { Metadata } from "next";

import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { planJourneyHref } from "@/config/public-site";
import { Section } from "@/design-system/primitives/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "China Prime DMC privacy policy for inquiry, planning, analytics, and communication data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PageContainer>
      <SiteNavigation cta={{ label: "Plan Your Journey", href: planJourneyHref }} />
      <Section spacing="spacious" className="pt-32">
        <ContentContainer size="sm" className="max-w-3xl">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">Legal</p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.04em]">
            Privacy Policy
          </h1>
          <p className="text-muted mt-5">Last updated: June 30, 2026</p>
          <p className="text-muted mt-8 text-base leading-7">
            China Prime DMC collects only the information needed to respond to travel inquiries and
            design private China journeys, such as name, email, travel interests, dates, and
            planning preferences.
          </p>
          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">
            How we use information
          </h2>
          <p className="text-muted mt-3 text-base leading-7">
            We use inquiry details to communicate with travelers, prepare route ideas, coordinate
            services, and improve the website experience. We do not sell personal information.
          </p>
          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">Analytics</h2>
          <p className="text-muted mt-3 text-base leading-7">
            Analytics tools are optional and configured through environment variables. When enabled,
            they should be used to understand aggregate website performance and improve content.
          </p>
          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">Contact</h2>
          <p className="text-muted mt-3 text-base leading-7">
            For privacy questions, contact us at{" "}
            <a href="mailto:chinaprimedmc@gmail.com">chinaprimedmc@gmail.com</a>.
          </p>
        </ContentContainer>
      </Section>
      <SiteFooter />
    </PageContainer>
  );
}
