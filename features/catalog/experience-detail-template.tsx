import { DestinationCard } from "@/components/cards/destination-card";
import { TourCard } from "@/components/cards/tour-card";
import { QuickFactCard, SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { planJourneyHref } from "@/config/public-site";
import { Section } from "@/design-system/primitives/section";
import type { CatalogDestination, CatalogExperience, CatalogJourney } from "@/types/catalog";

type ExperienceDetailTemplateProps = {
  experience: CatalogExperience;
  destinations: CatalogDestination[];
  journeys: CatalogJourney[];
};

export function ExperienceDetailTemplate({
  experience,
  destinations,
  journeys,
}: ExperienceDetailTemplateProps) {
  return (
    <PageContainer>
      <SiteNavigation cta={{ label: "Plan This Experience", href: planJourneyHref }} />
      <HeroLargeImage
        eyebrow={experience.category}
        title={experience.title}
        subtitle={experience.summary}
        image={experience.image}
        primary={{ label: "Plan This Experience", href: "/contact" }}
        secondary={{ label: "Related journeys", href: "#journeys" }}
      />

      <Section id="overview" spacing="compact" className="bg-white">
        <ContentContainer size="xl">
          <div className="grid gap-3 md:grid-cols-3">
            <QuickFactCard label="Duration" value={experience.duration} />
            <QuickFactCard label="Category" value={experience.category} />
            <QuickFactCard label="Suitable for" value={experience.suitableFor.join(", ")} />
          </div>
        </ContentContainer>
      </Section>

      <Section id="what-you-do" spacing="default">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="What you will do"
            title="A focused experience, not another block of sightseeing."
            description="Understand the feeling quickly: what happens, who it fits, where it belongs, and which journeys can include it."
          />
          <div className="grid gap-4">
            {experience.whatYouWillDo.map((item, index) => (
              <article
                key={item}
                className="border-border rounded-[1.5rem] border bg-white p-5 shadow-sm"
              >
                <Badge className="bg-foreground/5 text-foreground">Step {index + 1}</Badge>
                <p className="text-muted mt-4 text-base leading-7">{item}</p>
              </article>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section id="destinations" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Related destinations"
            title="Where this experience belongs."
            description="The places where this experience feels natural, not forced."
          />
          <GridSystem columns={3}>
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                title={destination.name}
                description={destination.summary}
                image={destination.image}
                badges={[destination.region, destination.type]}
                href={`/destination/${destination.slug}`}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="journeys" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Related journeys"
            title="Journeys that can include this experience."
            description="Sample private routes that can include this experience in the right rhythm."
          />
          <GridSystem columns={3}>
            {journeys.map((journey) => (
              <TourCard
                key={journey.slug}
                title={journey.title}
                description={journey.summary}
                image={journey.image}
                badges={[journey.category]}
                meta={[
                  { label: "Route", value: journey.route },
                  { label: "Length", value: journey.duration },
                ]}
                href={`/journey/${journey.slug}`}
                action={{ label: "View journey", href: `/journey/${journey.slug}` }}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={experience.image}
            eyebrow="Build this into your route"
            title="Tell us what caught your eye. We will place it in the right rhythm."
            description="A private China journey should not feel like separate activities. It should feel like one elegant arc."
            primary={{ label: "Plan This Experience", href: planJourneyHref }}
            secondary={{ label: "Explore journeys", href: "/journeys" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter />
    </PageContainer>
  );
}
