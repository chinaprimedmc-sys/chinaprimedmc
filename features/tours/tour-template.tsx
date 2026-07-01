import * as Accordion from "@radix-ui/react-accordion";
import { Check, ChevronDown, Circle, Compass, Map, Plane, X } from "lucide-react";

import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { HotelCard } from "@/components/cards/hotel-card";
import { TourCard } from "@/components/cards/tour-card";
import { HeroTrustPills, QuickFactCard, SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { FloatingCta } from "@/components/cta/floating-cta";
import { StickyMobileCta } from "@/components/cta/sticky-mobile-cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { GridGallery } from "@/components/gallery/grid-gallery";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { publicSocialLinks } from "@/config/public-site";
import { Section } from "@/design-system/primitives/section";
import { RecordViewed } from "@/features/discovery/record-viewed";
import { ItineraryEngine } from "@/features/tours/itinerary-engine";
import { TourInquiryPanel } from "@/features/tours/tour-inquiry-panel";
import type { Tour } from "@/types/tour";

type TourTemplateProps = {
  tour: Tour;
};

const tourNav = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Hotels", href: "#accommodation" },
  { label: "Map", href: "#route-map" },
  { label: "FAQ", href: "#faq" },
  { label: "Inquiry", href: "#inquiry" },
];

export function TourTemplate({ tour }: TourTemplateProps) {
  return (
    <PageContainer className="pb-28 md:pb-0">
      <RecordViewed
        item={{
          id: `tour:${tour.slug}`,
          type: "tour",
          title: tour.title,
          href: `/journey/${tour.slug}`,
        }}
      />
      <SiteNavigation cta={{ label: "Customize Journey", href: tour.hero.secondary.href }} />

      <HeroLargeImage
        eyebrow={tour.hero.eyebrow ?? "Private journey"}
        title={tour.title}
        subtitle={tour.subtitle}
        image={tour.hero.image}
        primary={tour.hero.primary}
        secondary={tour.hero.secondary}
      >
        <HeroTrustPills items={[tour.duration, tour.route, ...tour.styles.slice(0, 2)]} />
      </HeroLargeImage>

      <Section id="overview" spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader eyebrow="Journey overview" title={tour.overview.pitch} />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tour.overview.facts.map((fact) => (
              <QuickFactCard key={fact.label} {...fact} />
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section id="highlights" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Journey highlights"
            title="The moments that make the proposal worth a conversation."
            description="A quick visual read of the journey before you study each day."
          />
          <GridSystem columns={3}>
            {tour.highlights.map((highlight) => (
              <DestinationCard
                key={highlight.title}
                title={highlight.title}
                description={highlight.description}
                image={highlight.image}
                badges={[highlight.category]}
                variant="medium"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="itinerary" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Interactive itinerary"
            title="Open each day like a private travel proposal."
            description="Each day shows the rhythm: what you see, how you move, where you rest, and how the pacing feels."
          />
          <ItineraryEngine days={tour.itinerary} />
        </ContentContainer>
      </Section>

      {tour.accommodations.length ? (
        <Section id="accommodation" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Accommodation"
              title="Hotels are part of the rhythm, not an afterthought."
              description="Stay choices are selected for location, comfort, character, and how they support the day before and after."
            />
            <GridSystem columns={2}>
              {tour.accommodations.map((hotel) => (
                <HotelCard
                  key={hotel.name}
                  title={hotel.name}
                  description={`${hotel.destination}. ${hotel.description}`}
                  image={hotel.image}
                  badges={hotel.roomStyle ? [hotel.roomStyle] : undefined}
                  meta={hotel.highlights.slice(0, 2).map((highlight, index) => ({
                    label: `Highlight ${index + 1}`,
                    value: highlight,
                  }))}
                  variant="large"
                />
              ))}
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      <Section id="included" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Included and excluded"
            title="Clear boundaries create trust before the inquiry."
            description="A transparent starting point. Final inclusions are confirmed in your tailored proposal."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ListPanel title="Included" items={tour.included} tone="positive" />
            <ListPanel title="Not included" items={tour.excluded} tone="muted" />
          </div>
        </ContentContainer>
      </Section>

      <Section id="optional-experiences" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Optional experiences"
            title="Upgrade the feeling of the journey without making it busier."
            description="Add depth where it matters: food, culture, photography, hotels, or slower private moments."
          />
          <GridSystem columns={3}>
            {tour.optionalExperiences.map((experience) => (
              <ExperienceCard
                key={experience.title}
                title={experience.title}
                description={experience.description}
                image={experience.image}
                badges={experience.badges}
                variant="medium"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="transportation" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Transportation"
            title={tour.transportation.title}
            description={tour.transportation.description}
          />
          <GridSystem columns={3}>
            {tour.transportation.items.map((item) => (
              <FeatureCard
                key={item.label}
                icon={<Plane size={18} aria-hidden="true" />}
                title={item.value}
                description={`${item.label}. ${item.helper ?? ""}`}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="route-map" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Interactive map"
            title={tour.routeMap.title}
            description={tour.routeMap.description}
          />
          <RouteMap tour={tour} />
        </ContentContainer>
      </Section>

      <Section id="gallery" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Gallery"
            title="The visual texture of the route."
            description="A quick sense of the scenery, streets, hotels, and atmosphere inside the route."
          />
          <GridGallery images={tour.gallery} mode="editorial" />
        </ContentContainer>
      </Section>

      <Section id="faq" spacing="default">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions travelers ask before trusting a private China route."
            description="Practical answers before you ask us to tailor the proposal."
          />
          <TourFaqAccordion tour={tour} />
        </ContentContainer>
      </Section>

      <Section id="related-journeys" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Related journeys"
            title="Other routes that may fit your travelers better."
            description="If this route is close but not quite right, these alternatives may be a better starting point."
          />
          <GridSystem columns={3}>
            {tour.related.tours.map((related) => (
              <TourCard
                key={related.title}
                title={related.title}
                description={related.description}
                image={related.image}
                badges={related.tags}
                meta={[
                  { label: "Route", value: related.route },
                  { label: "Length", value: related.duration },
                ]}
                href={related.href}
                action={{ label: "Ask for this route", href: related.href }}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="related-destinations" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Related destinations"
            title="Understand the places inside the journey."
            description="Get a clearer sense of the places inside the route before you customize it."
          />
          <GridSystem columns={3}>
            {tour.related.destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                title={destination.name}
                description={destination.description}
                image={destination.image}
                href={destination.href}
                variant="medium"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={tour.hero.image}
            eyebrow="Customize this journey"
            title="Keep the route idea. Change the rhythm."
            description="Send a short brief with travelers, dates, hotel comfort, and what you would change. We will turn this sample route into a calmer private proposal."
            primary={{ label: "Send My Route Brief", href: "#inquiry" }}
            secondary={{ label: "Compare Journeys", href: "/journeys" }}
          />
        </ContentContainer>
      </Section>

      <Section id="inquiry" spacing="default">
        <ContentContainer size="xl">
          <TourInquiryPanel tour={tour} />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Journey", items: tourNav },
          {
            title: "Next step",
            items: [
              { label: "Customize journey", href: "#inquiry" },
              { label: "Contact a specialist", href: "/contact" },
              { label: "Compare journeys", href: "/journeys" },
            ],
          },
          {
            title: "Explore more",
            items: [
              { label: "Destinations", href: "/destinations" },
              { label: "Experiences", href: "/experiences" },
              { label: "Travel guide", href: "/travel-guide" },
            ],
          },
          {
            title: "Travel styles",
            items: tour.styles.slice(0, 4).map((style) => ({
              label: style,
              href: "#highlights",
            })),
          },
        ]}
        social={publicSocialLinks}
      />

      <FloatingCta label="Route Brief" href="#inquiry" />
      <StickyMobileCta
        label="Brief"
        href="#inquiry"
        showAfter={1200}
        className="right-3 bottom-[calc(env(safe-area-inset-bottom)+0.85rem)] scale-[0.78]"
      />
    </PageContainer>
  );
}

function ListPanel({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "positive" | "muted";
}) {
  const Icon = tone === "positive" ? Check : X;

  return (
    <article className="border-border rounded-[1.75rem] border bg-white p-5 shadow-sm md:p-6">
      <h3 className="text-2xl font-semibold tracking-[-0.025em]">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6">
            <span className="bg-foreground text-background mt-0.5 grid size-6 shrink-0 place-items-center rounded-full">
              <Icon size={14} aria-hidden="true" />
            </span>
            <span className="text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RouteMap({ tour }: { tour: Tour }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="bg-foreground text-background relative min-h-[28rem] overflow-hidden rounded-[2rem] shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_72%_52%,rgba(255,255,255,0.15),transparent_28%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:42px_42px] opacity-15" />
        <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-between p-6 md:p-8">
          <div>
            <Badge className="border-white/25 bg-white/14 text-white">Route logic</Badge>
            <h3 className="mt-5 max-w-xl text-3xl leading-tight font-semibold tracking-[-0.035em] md:text-5xl">
              {tour.route}
            </h3>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {tour.routeMap.stops.map((stop, index) => (
              <div
                key={stop.name}
                className="rounded-[1.25rem] border border-white/18 bg-white/12 p-4"
              >
                <span className="grid size-8 place-items-center rounded-full bg-white text-sm font-bold text-black">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-semibold">{stop.name}</p>
                <p className="mt-1 text-xs text-white/70">{stop.days}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        {tour.routeMap.stops.map((stop, index) => (
          <article
            key={stop.name}
            className="border-border rounded-[1.5rem] border bg-white p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="bg-foreground text-background grid size-9 shrink-0 place-items-center rounded-full">
                {index === 0 ? (
                  <Compass size={16} />
                ) : index === tour.routeMap.stops.length - 1 ? (
                  <Map size={16} />
                ) : (
                  <Circle size={12} />
                )}
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase opacity-60">
                  {stop.days}
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em]">{stop.name}</h3>
                <p className="text-muted mt-1 text-sm leading-6">{stop.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function TourFaqAccordion({ tour }: { tour: Tour }) {
  return (
    <Accordion.Root type="single" collapsible className="grid gap-3">
      {tour.faqs.map((faq, index) => (
        <Accordion.Item
          key={faq.question}
          value={`faq-${index}`}
          className="border-border overflow-hidden rounded-[1.5rem] border bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 p-5 text-left md:p-6">
              <span className="text-lg font-semibold tracking-[-0.02em]">{faq.question}</span>
              <ChevronDown
                size={20}
                aria-hidden="true"
                className="shrink-0 transition group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <p className="text-muted border-border border-t p-5 text-sm leading-7 md:p-6">
              {faq.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
