import { ArrowUpRight, Check } from "lucide-react";

import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { SectionHeader } from "@/components/content";
import { homeNavItems, primaryAction, storyImages } from "@/content/home/homepage";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { Section } from "@/design-system/primitives/section";

type TourFrameworkTemplateProps = {
  item: JourneyCatalogItem;
};

export function TourFrameworkTemplate({ item }: TourFrameworkTemplateProps) {
  return (
    <PageContainer className="pb-28 md:pb-0">
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <HeroLargeImage
        eyebrow={item.eyebrow}
        title={item.title}
        subtitle={item.summary}
        image={item.image}
        primary={{ label: "Start Planning", href: primaryAction.href }}
        secondary={{ label: "Back to Journeys", href: "/tours" }}
        overlay="medium"
      />

      <Section spacing="default" className="bg-white">
        <ContentContainer size="lg" className="grid gap-10">
          <SectionHeader
            eyebrow="A route direction, not a fixed package"
            title={item.hook}
            description={item.planningNote}
          />
          <div className="border-border grid gap-4 border-y py-6 sm:grid-cols-3">
            <Fact label="Route direction" value={item.routeLabel} />
            <Fact label="Planning range" value={item.durationLabel} />
            <Fact label="Status" value={item.statusLabel ?? "Shaped after inquiry"} />
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="What we shape with you"
            title="The useful details come after we understand the travelers."
            description="This framework keeps the direction clear without pretending that a personal route can be responsibly finalized from a generic card."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "City sequence and number of nights",
              "Daily rhythm, walking, and transfer comfort",
              "Hotel tier, room needs, and food preferences",
            ].map((point) => (
              <div key={point} className="border-border border-t pt-4">
                <Check size={18} aria-hidden="true" className="text-muted" />
                <p className="text-foreground mt-4 text-base leading-7">{point}</p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="Places to consider"
            title="Begin with the cities that fit the feeling."
            description="These links provide destination context. They are not a promise that every city will appear in the final proposal."
          />
          <div className="flex flex-wrap gap-3">
            {item.destinations.map((destination) => (
              <a
                key={`${destination.label}-${destination.href}`}
                href={destination.href}
                className="border-border text-foreground inline-flex min-h-11 items-center gap-2 rounded border px-4 text-sm font-medium"
              >
                {destination.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="lg">
          <CtaCard
            variant="image"
            image={storyImages.tea}
            eyebrow="Shape the first proposal"
            title="Tell us who is traveling and what a good day feels like."
            description="We will use this direction as a starting point, then confirm the route, timing, comfort level, and practical details with you."
            primary={{ label: "Start Planning", href: primaryAction.href }}
            secondary={{ label: "View all journeys", href: "/tours" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Journeys", items: [{ label: "All journeys", href: "/tours" }] },
          {
            title: "Planning",
            items: [
              { label: "Journal", href: "/journal" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ],
          },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">{label}</p>
      <p className="text-foreground mt-2 text-base leading-6">{value}</p>
    </div>
  );
}
