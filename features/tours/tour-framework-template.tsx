import { ArrowUpRight, Check } from "lucide-react";

import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { SectionHeader } from "@/components/content";
import { homeNavItems, storyImages } from "@/content/home/homepage";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { Section } from "@/design-system/primitives/section";
import { RecordViewed } from "@/features/discovery/record-viewed";

type TourFrameworkTemplateProps = {
  item: JourneyCatalogItem;
};

export function TourFrameworkTemplate({ item }: TourFrameworkTemplateProps) {
  const planningHref = `/start-planning?source=${encodeURIComponent(`/tours/${item.slug}`)}&journey=${encodeURIComponent(item.slug)}`;

  return (
    <PageContainer className="pb-28 md:pb-0">
      <RecordViewed
        item={{ id: `tour:${item.slug}`, type: "tour", title: item.title, href: item.href }}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Request a Proposal", href: planningHref }}
      />

      <HeroLargeImage
        eyebrow={item.eyebrow}
        title={item.title}
        subtitle={item.summary}
        image={item.image}
        primary={{ label: "Request My Private Proposal", href: planningHref }}
        secondary={{ label: "Back to Journeys", href: "/tours" }}
        overlay="medium"
      />

      <Section spacing="default" className="bg-white">
        <ContentContainer size="lg" className="grid gap-10">
          <SectionHeader
            eyebrow="A private journey direction"
            title={item.hook}
            description={
              item.planningNote ??
              "This is a starting direction rather than a fixed package. We will shape the final route, hotels and services around your dates and travelers."
            }
          />
          <div className="border-border grid gap-4 border-y py-6 sm:grid-cols-3">
            <Fact label="Route direction" value={item.routeLabel} />
            <Fact label="Suggested length" value={item.durationLabel} />
            <Fact label="Planning status" value={item.statusLabel ?? "Shaped after inquiry"} />
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="What we shape with you"
            title="The right details begin with you."
            description="Tell us who is traveling, then we can shape the cities, hotels, daily rhythm and services around your group."
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
            description="These guides help you understand the places. Your final route will be confirmed around your dates and priorities."
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
            eyebrow="Start your personal plan"
            title="Tell us who is traveling and what a good day feels like."
            description="We will use this direction as a starting point, then confirm the route, timing, comfort level, and practical details with you."
            primary={{ label: "Request My Private Proposal", href: planningHref }}
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
