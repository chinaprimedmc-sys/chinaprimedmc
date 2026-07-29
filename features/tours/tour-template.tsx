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
import { Section } from "@/design-system/primitives/section";
import { RecordViewed } from "@/features/discovery/record-viewed";
import { ItineraryEngine } from "@/features/tours/itinerary-engine";
import { TourInquiryPanel } from "@/features/tours/tour-inquiry-panel";
import type { Tour } from "@/types/tour";

type TourTemplateProps = {
  tour: Tour;
};

export function TourTemplate({ tour }: TourTemplateProps) {
  const planningHref = `/start-planning?source=${encodeURIComponent(`/tours/${tour.slug}`)}&journey=${encodeURIComponent(tour.slug)}`;
  const tourNav = [
    { label: "Overview", href: "#overview" },
    ...(tour.planningSupport ? [{ label: "Planning", href: "#planning-support" }] : []),
    { label: "Itinerary", href: "#itinerary" },
    { label: "Hotels", href: "#accommodation" },
    { label: "Map", href: "#route-map" },
    { label: "FAQ", href: "#faq" },
    { label: "Inquiry", href: planningHref },
  ];

  return (
    <PageContainer className="pb-28 md:pb-0">
      <RecordViewed
        item={{
          id: `tour:${tour.slug}`,
          type: "tour",
          title: tour.title,
          href: `/tours/${tour.slug}`,
        }}
      />
      <SiteNavigation items={tourNav} cta={{ label: "Customize Journey", href: planningHref }} />

      <HeroLargeImage
        eyebrow={tour.hero.eyebrow ?? "Private journey"}
        title={tour.title}
        subtitle={tour.subtitle}
        image={tour.hero.image}
        primary={tour.hero.primary}
        secondary={{ label: tour.hero.secondary.label, href: planningHref }}
        overlay="medium"
      >
        <HeroTrustPills items={[tour.duration, tour.route, ...tour.styles.slice(0, 2)]} />
      </HeroLargeImage>

      <Section id="overview" spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Journey overview"
            title={tour.overview.pitch}
            className="md:grid-cols-1"
            titleClassName="max-w-none lg:w-4/5"
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tour.overview.facts.map((fact) => (
              <QuickFactCard key={fact.label} {...fact} />
            ))}
          </div>
        </ContentContainer>
      </Section>

      {tour.planningSupport ? (
        <Section id="planning-support" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow={tour.planningSupport.eyebrow}
              title={tour.planningSupport.title}
              description={tour.planningSupport.description}
            />
            <GridSystem columns={2}>
              {tour.planningSupport.items.map((item) => (
                <FeatureCard
                  key={item.label}
                  icon={<Check size={18} aria-hidden="true" />}
                  title={item.value}
                  description={`${item.label}. ${item.helper ?? ""}`}
                />
              ))}
            </GridSystem>
            <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              {tour.planningSupport.note}
            </p>
          </ContentContainer>
        </Section>
      ) : null}

      <Section id="highlights" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Journey highlights"
            title="The moments that make the proposal worth a conversation."
            description="Highlights are short, visual, and decision-oriented. They help travelers understand the emotional promise before they study each day."
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
            description="Open a day to see its illustrative rhythm, activities, transfer notes, images, and practical planning details."
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
              description="Accommodation notes explain how room setup, comfort, and location can support the route."
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
            description="The final proposal confirms which services are included for your dates, travelers, and selected comfort level."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <ListPanel title="Included" items={tour.included} tone="positive" />
            <ListPanel title="Not included" items={tour.excluded} tone="muted" />
          </div>
        </ContentContainer>
      </Section>

      {tour.pricing ? (
        <Section id="pricing" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Private party pricing"
              title={tour.pricing.title}
              description={tour.pricing.description}
            />
            <div
              className={`grid border-y border-[var(--border-default)] ${
                tour.pricing.tiers.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
              }`}
            >
              {tour.pricing.tiers.map((tier, index) => (
                <article
                  key={tier.partySize}
                  className={`py-7 md:px-7 md:py-9 ${
                    index ? "border-t border-[var(--border-default)] md:border-t-0 md:border-l" : ""
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.14em] text-[var(--text-tertiary)] uppercase">
                    Party size
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-medium text-[var(--text-primary)]">
                    {tier.partySize}
                  </h3>
                  <dl className="mt-6 grid gap-3 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[var(--text-secondary)]">Per person</dt>
                      <dd className="font-medium text-[var(--text-primary)]">{tier.perPerson}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[var(--text-secondary)]">Party total</dt>
                      <dd className="font-medium text-[var(--text-primary)]">{tier.total}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              {tour.pricing.note}
            </p>
          </ContentContainer>
        </Section>
      ) : null}

      <Section id="optional-experiences" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Optional experiences"
            title="Upgrade the feeling of the journey without making it busier."
            description="Optional experiences can be added when they suit your interests, pace, dietary needs, and comfort."
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
            description="A visual sequence of the route, from historic spaces to city life."
          />
          <GridGallery images={tour.gallery} mode="editorial" />
        </ContentContainer>
      </Section>

      <Section id="faq" spacing="default">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions travelers ask before trusting a private China route."
            description="Clear answers to the questions travelers ask before choosing a private China route."
          />
          <TourFaqAccordion tour={tour} />
        </ContentContainer>
      </Section>

      {tour.related.tours.length ? (
        <Section id="related-tours" spacing="default" className="bg-white">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Related tours"
              title="Other routes that may fit your travelers better."
              description="Browse other route directions by pace, theme, and the places you want to understand."
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
                  action={{ label: "Ask for this route", href: related.href }}
                />
              ))}
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      <Section id="related-destinations" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Related destinations"
            title="Understand the places inside the journey."
            description="Move from the route overview into destination context before you decide what belongs in the final plan."
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
            variant="glass"
            eyebrow="Customize this journey"
            title="Keep the route. Change the rhythm."
            description="The best private China trips usually start from a strong route idea, then change around your people, dates, comfort level, and concerns."
            primary={{ label: "Customize My Journey", href: planningHref }}
            secondary={{ label: "Email a Specialist", href: tour.inquiry.emailHref }}
          />
        </ContentContainer>
      </Section>

      <Section id="inquiry" spacing="default">
        <ContentContainer size="xl">
          <TourInquiryPanel tour={tour} planningHref={planningHref} />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Journey", items: tourNav },
          {
            title: "Planning",
            items: [
              { label: "Customize journey", href: planningHref },
              { label: "Interactive itinerary", href: "#itinerary" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Route",
            items: tour.routeMap.stops.map((stop) => ({
              label: stop.name,
              href: "#route-map",
            })),
          },
          {
            title: "Travel styles",
            items: tour.styles.slice(0, 4).map((style) => ({
              label: style,
              href: "#highlights",
            })),
          },
        ]}
        social={[
          { label: "Facebook", href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc" },
        ]}
      />

      <FloatingCta label="Customize Journey" href={planningHref} />
      <StickyMobileCta
        label="Customize"
        href={planningHref}
        showAfter={1200}
        className="right-3 bottom-[calc(env(safe-area-inset-bottom)+0.85rem)] scale-[0.82]"
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
