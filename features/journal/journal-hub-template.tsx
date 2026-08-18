import { ArrowRight } from "lucide-react";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { homeNavItems } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JournalGuideExplorer } from "@/features/journal/journal-guide-explorer";
import type { JournalArticle } from "@/types/journal";

type JournalHubTemplateProps = {
  featured: JournalArticle;
  latest: JournalArticle[];
};

export function JournalHubTemplate({ featured, latest }: JournalHubTemplateProps) {
  return (
    <PageContainer tone="white" className="journal-page">
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Start Planning", href: "/start-planning" }}
        className="home-navigation-entrance journal-navigation"
        tone="light"
        showWhatsapp={false}
        variant="default"
      />

      <section className="journal-masthead journal-breathing-divider--bottom bg-white pt-5 pb-8 md:pt-7 md:pb-10">
        <ContentContainer
          size="xl"
          className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:items-end lg:gap-16"
        >
          <div className="max-w-3xl">
            <Badge>AVIORA Journal</Badge>
            <h1 className="mt-4 max-w-3xl font-serif text-[2.35rem] leading-[1] font-medium tracking-normal text-balance text-neutral-950 sm:text-[2.75rem] md:text-[3.25rem]">
              China Travel Guides
            </h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-neutral-700 md:text-base">
              Clear, current advice from the AVIORA China Travel Team for choosing routes, preparing
              for arrival and planning a private journey at the right pace.
            </p>
          </div>
          <p className="max-w-md border-l border-black/12 pl-5 text-sm leading-6 text-neutral-600 lg:justify-self-end">
            Start with the question closest to your trip. Each guide links practical advice to the
            journeys where it matters.
          </p>
        </ContentContainer>
      </section>

      <JournalGuideExplorer articles={latest} featuredSlug={featured.slug} />

      <Section className="journal-breathing-divider bg-white" spacing="compact">
        <ContentContainer
          size="xl"
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-neutral-500 uppercase">
              Personal Planning Support
            </p>
            <h2 className="mt-3 font-serif text-[1.9rem] leading-[1.08] font-medium tracking-normal text-balance text-neutral-950 md:text-[2.5rem]">
              Need Help Choosing The Right Route?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
              Share your dates, party and priorities. The AVIORA China Travel Team will suggest a
              sensible starting point.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton
              href="/start-planning?source=journal-hub"
              size="sm"
              icon={<ArrowRight size={16} aria-hidden="true" />}
            >
              Start Planning
            </CtaButton>
            <a
              href="https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%20would%20like%20help%20choosing%20the%20right%20China%20journey."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center border-b border-black/25 px-1 text-sm font-semibold text-neutral-800 transition-colors hover:border-black hover:text-black"
            >
              Message An Advisor
            </a>
          </div>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Journal",
            items: [
              { label: "Travel guides", href: "#guides" },
              { label: "Destinations", href: "/destinations" },
              { label: "About AVIORA", href: "/about" },
            ],
          },
          {
            title: "Planning",
            items: [
              { label: "Private China tours", href: "/tours" },
              { label: "Start planning", href: "/start-planning" },
              { label: "Email us", href: "mailto:chinaprimedmc@gmail.com" },
            ],
          },
        ]}
        social={[
          { label: "Facebook", href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc" },
        ]}
      />
    </PageContainer>
  );
}
