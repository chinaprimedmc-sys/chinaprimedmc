import type { ReactNode } from "react";
import { Compass, Filter, MessageCircle } from "lucide-react";

import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { TourCard } from "@/components/cards/tour-card";
import { StartPlanningPaths } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { NoResultsState } from "@/components/empty-states/preset-empty-states";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroEditorial } from "@/components/hero/hero-editorial";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { planJourneyHref } from "@/config/public-site";
import { Section } from "@/design-system/primitives/section";
import type { MediaAsset } from "@/types/component-library";
import type { CatalogDestination, CatalogExperience, CatalogJourney } from "@/types/catalog";

type CatalogListTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: MediaAsset;
  filters?: ReactNode;
  children: ReactNode;
  countLabel: string;
};

export function CatalogListTemplate({
  eyebrow,
  title,
  description,
  image,
  filters,
  children,
  countLabel,
}: CatalogListTemplateProps) {
  return (
    <PageContainer>
      <SiteNavigation cta={{ label: "Plan Your Journey", href: planJourneyHref }} />
      <HeroEditorial
        eyebrow={eyebrow}
        title={title}
        subtitle={description}
        image={image}
        primary={{ label: "Start Planning", href: "/contact" }}
        secondary={{ label: "View journeys", href: "/journeys" }}
      />
      <StartPlanningPaths
        eyebrow="How this site works"
        title="Choose where, choose the feeling, or choose a route."
        description="Destinations explain the place. Experiences explain what the trip can feel like. Journeys show how everything can become one private route."
        className="border-foreground/8 border-b py-10 md:py-16"
      />
      <Section spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-5">
          <DecisionStrip />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {countLabel ? (
              <Badge className="bg-foreground/5 text-foreground w-fit">{countLabel}</Badge>
            ) : null}
            {filters ? <div className="flex flex-wrap gap-2">{filters}</div> : null}
          </div>
          {children}
        </ContentContainer>
      </Section>
      <Section spacing="default">
        <ContentContainer size="xl">
          <CtaCard
            eyebrow="Private planning"
            title="Use this as a starting point, not a fixed menu."
            description="Tell us your dates, travelers, comfort level, and the places or experiences that caught your eye."
            primary={{ label: "Contact China Prime DMC", href: "/contact" }}
            secondary={{ label: "Explore journeys", href: "/journeys" }}
          />
        </ContentContainer>
      </Section>
      <SiteFooter />
    </PageContainer>
  );
}

function DecisionStrip() {
  const items = [
    {
      icon: <Compass size={16} aria-hidden="true" />,
      title: "Start broad",
      text: "Use the cards to find what feels right before comparing details.",
    },
    {
      icon: <Filter size={16} aria-hidden="true" />,
      title: "Filter lightly",
      text: "One filter is usually enough. Too many choices can hide good ideas.",
    },
    {
      icon: <MessageCircle size={16} aria-hidden="true" />,
      title: "Ask early",
      text: "If the idea is close, we can tailor the route instead of forcing a match.",
    },
  ];

  return (
    <div className="border-foreground/8 bg-background/70 grid gap-3 rounded-[1.5rem] border p-4 md:grid-cols-3 md:p-5">
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-3">
          <span className="bg-foreground text-background mt-0.5 grid size-8 shrink-0 place-items-center rounded-full">
            {item.icon}
          </span>
          <div>
            <p className="text-sm font-semibold tracking-[-0.01em]">{item.title}</p>
            <p className="text-muted mt-1 text-sm leading-5">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DestinationGrid({ destinations }: { destinations: CatalogDestination[] }) {
  if (!destinations.length) return <NoResultsState />;

  return (
    <GridSystem columns={3}>
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.slug}
          title={destination.name}
          description={destination.summary}
          image={destination.image}
          badges={[destination.region, destination.type]}
          href={`/destination/${destination.slug}`}
          variant="medium"
        />
      ))}
    </GridSystem>
  );
}

export function ExperienceGrid({ experiences }: { experiences: CatalogExperience[] }) {
  if (!experiences.length) return <NoResultsState />;

  return (
    <GridSystem columns={3}>
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.slug}
          title={experience.title}
          description={experience.summary}
          image={experience.image}
          badges={[experience.category, experience.duration]}
          href={`/experience/${experience.slug}`}
          variant="medium"
        />
      ))}
    </GridSystem>
  );
}

export function JourneyGrid({ journeys }: { journeys: CatalogJourney[] }) {
  if (!journeys.length) return <NoResultsState />;

  return (
    <GridSystem columns={3}>
      {journeys.map((journey) => (
        <TourCard
          key={journey.slug}
          title={journey.title}
          description={journey.summary}
          image={journey.image}
          badges={[journey.category, ...journey.styles.slice(0, 2)]}
          meta={[
            { label: "Route", value: journey.route },
            { label: "Length", value: journey.duration },
          ]}
          href={`/journey/${journey.slug}`}
          action={{ label: "View journey", href: `/journey/${journey.slug}` }}
        />
      ))}
    </GridSystem>
  );
}

export function FilterLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? "bg-foreground text-background"
          : "bg-foreground/5 text-foreground hover:bg-foreground/10"
      }`}
    >
      {label}
    </a>
  );
}
