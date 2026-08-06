import { ArrowRight } from "lucide-react";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { WhatsAppIcon } from "@/components/icons";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/design-system/primitives/section";
import { JournalGuideExplorer } from "@/features/journal/journal-guide-explorer";
import type { JournalArticle } from "@/types/journal";

type JournalHubTemplateProps = {
  featured: JournalArticle;
  latest: JournalArticle[];
};

const journalNav = [
  { label: "Guides", href: "#guides" },
  { label: "Destinations", href: "/destinations" },
  { label: "About AVIORA", href: "/about" },
];

export function JournalHubTemplate({ featured, latest }: JournalHubTemplateProps) {
  return (
    <PageContainer tone="white">
      <SiteNavigation
        items={journalNav}
        cta={{ label: "Start Planning", href: "/start-planning" }}
        tone="light"
        showWhatsapp={false}
      />

      <section className="journal-masthead border-b border-black/6 bg-white py-10 md:py-12 lg:py-14">
        <ContentContainer
          size="xl"
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          <div className="max-w-4xl">
            <Badge>AVIORA Journal</Badge>
            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3.25rem,8vw,6.7rem)] leading-[0.9] font-medium tracking-normal text-balance text-neutral-950">
              China travel, made clearer.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8">
              Practical guidance for planning a private journey, from entry and transport to pacing,
              hotels and local support.
            </p>
          </div>
          <div className="lg:pb-1">
            <CtaButton
              href="/start-planning"
              size="sm"
              icon={<ArrowRight size={17} aria-hidden="true" />}
              className="min-h-12 px-6"
            >
              Plan with our China team
            </CtaButton>
          </div>
        </ContentContainer>
      </section>

      <JournalGuideExplorer articles={latest} featuredSlug={featured.slug} />

      <Section className="bg-neutral-950 text-white" spacing="spacious">
        <ContentContainer
          size="xl"
          className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.14em] text-white/55 uppercase">
              Personal planning support
            </p>
            <h2 className="mt-4 font-serif text-[2.75rem] leading-[0.98] font-medium tracking-normal text-balance md:text-6xl">
              Still unsure where to begin?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
              Tell us what you are planning. Our China team will help you shape the right route.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <CtaButton href="/start-planning" variant="lightFrosted" size="sm">
              Start Planning
            </CtaButton>
            <CtaButton
              href="https://wa.me/447985052302"
              variant="whatsappFrosted"
              size="sm"
              target="_blank"
              rel="noreferrer"
              className="flex-row gap-2.5"
            >
              <WhatsAppIcon className="size-[18px] shrink-0" />
              <span>Chat on WhatsApp</span>
            </CtaButton>
          </div>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Journal", items: journalNav },
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
