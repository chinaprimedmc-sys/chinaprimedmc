import type { Metadata } from "next";

import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { homeNavItems, primaryAction } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use",
  description:
    "China Prime DMC website terms of use for travel planning content and inquiry communication.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageContainer>
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />
      <Section spacing="spacious">
        <ContentContainer size="sm" className="max-w-3xl">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">Legal</p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-[-0.04em]">
            Terms of Use
          </h1>
          <p className="text-muted mt-5">Last updated: June 30, 2026</p>
          <p className="text-muted mt-8 text-base leading-7">
            This website provides travel inspiration and planning information for private inbound
            China journeys. Content is for general guidance and does not create a confirmed booking.
          </p>
          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">Travel proposals</h2>
          <p className="text-muted mt-3 text-base leading-7">
            Route ideas, hotels, inclusions, pricing guidance, and availability are subject to
            custom confirmation before any booking is finalized.
          </p>
          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">Website content</h2>
          <p className="text-muted mt-3 text-base leading-7">
            We work to keep information accurate, but travel conditions, opening hours, transport,
            and policies can change. Final arrangements should be confirmed directly with China
            Prime DMC.
          </p>
          <h2 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">Contact</h2>
          <p className="text-muted mt-3 text-base leading-7">
            For questions, contact{" "}
            <a href="mailto:chinaprimedmc@gmail.com">chinaprimedmc@gmail.com</a>.
          </p>
        </ContentContainer>
      </Section>
      <SiteFooter columns={[{ title: "Explore", items: homeNavItems }]} social={[]} />
    </PageContainer>
  );
}
