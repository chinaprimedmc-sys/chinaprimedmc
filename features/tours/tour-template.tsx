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
      <SiteNavigation items={tourNav} cta={{ label: "Plan This Tour", href: planningHref }} />

      <HeroLargeImage
        eyebrow={tour.hero.eyebrow ?? "Tailored private tour"}
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
            eyebrow="At a glance"
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
            eyebrow="Signature experiences"
            title="What makes this route distinctive."
            description="The defining places and experiences, selected for their timing, context and fit within the wider route."
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
            eyebrow="Day by day"
            title="A clear view of how each day unfolds."
            description="Open any day for its activities, transfer plan, hotel notes and the decisions that can be adjusted before booking."
          />
          <ItineraryEngine days={tour.itinerary} />
        </ContentContainer>
      </Section>

      {tour.accommodations.length ? (
        <Section id="accommodation" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Accommodation"
              title="The right hotel improves the whole route."
              description="We consider location, room category, breakfast, service and transfer time before recommending a property."
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
            eyebrow="Service details"
            title="Know what is included before you book."
            description="Your written quotation confirms every included service, selected hotel, room category and payable extra."
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
            {(() => {
              const hasDetailedRates = tour.pricing.tiers.some(
                (tier) => tier.alternateRates?.length || tier.childRate || tier.serviceBasis,
              );

              return (
                <div
                  className={`grid border-y border-[var(--border-default)] ${
                    hasDetailedRates ? "md:grid-cols-2" : "md:grid-cols-3"
                  }`}
                >
                  {tour.pricing.tiers.map((tier, index) => {
                    const desktopBorder = hasDetailedRates
                      ? `${index % 2 ? "md:border-l" : ""} ${index >= 2 ? "md:border-t" : "md:border-t-0"}`
                      : index
                        ? "md:border-t-0 md:border-l"
                        : "md:border-t-0";

                    return (
                      <article
                        key={tier.partySize}
                        className={`py-7 md:px-7 md:py-9 ${
                          index ? "border-t border-[var(--border-default)]" : ""
                        } ${desktopBorder}`}
                      >
                        <p className="text-xs font-semibold tracking-[0.14em] text-[var(--text-tertiary)] uppercase">
                          Party size
                        </p>
                        <h3 className="mt-3 font-serif text-3xl font-medium text-[var(--text-primary)]">
                          {tier.partySize}
                        </h3>
                        {tier.serviceBasis ? (
                          <p className="mt-2 min-h-10 max-w-sm text-sm leading-5 text-[var(--text-secondary)]">
                            {tier.serviceBasis}
                          </p>
                        ) : null}
                        <dl className="mt-6 grid gap-4 text-sm">
                          <div className="grid grid-cols-[1fr_auto] items-end gap-x-4 gap-y-1">
                            <dt className="font-medium text-[var(--text-primary)]">
                              {tier.label ?? "Per person"}
                            </dt>
                            <dd className="text-right text-lg font-semibold text-[var(--text-primary)]">
                              {tier.perPerson}
                            </dd>
                            <dt className="text-xs text-[var(--text-tertiary)]">Party total</dt>
                            <dd className="text-right text-xs text-[var(--text-secondary)]">
                              {tier.total}
                            </dd>
                          </div>
                          {tier.alternateRates?.map((rate) => (
                            <div
                              key={rate.label}
                              className="grid grid-cols-[1fr_auto] items-end gap-x-4 gap-y-1 border-t border-[var(--border-default)] pt-4"
                            >
                              <dt className="font-medium text-[var(--text-primary)]">
                                {rate.label}
                              </dt>
                              <dd className="text-right text-lg font-semibold text-[var(--text-primary)]">
                                {rate.perPerson}
                              </dd>
                              <dt className="text-xs text-[var(--text-tertiary)]">Party total</dt>
                              <dd className="text-right text-xs text-[var(--text-secondary)]">
                                {rate.total}
                              </dd>
                            </div>
                          ))}
                          {tier.childRate ? (
                            <div className="border-t border-[var(--border-default)] pt-4">
                              <div className="flex items-baseline justify-between gap-4">
                                <dt className="font-medium text-[var(--text-primary)]">Child</dt>
                                <dd className="text-right text-lg font-semibold text-[var(--text-primary)]">
                                  {tier.childRate.perPerson}
                                </dd>
                              </div>
                              <dd className="mt-2 max-w-md text-xs leading-5 text-[var(--text-tertiary)]">
                                {tier.childRate.note}
                              </dd>
                            </div>
                          ) : null}
                        </dl>
                      </article>
                    );
                  })}
                </div>
              );
            })()}
            <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
              {tour.pricing.note}
            </p>
          </ContentContainer>
        </Section>
      ) : (
        <Section id="pricing" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Private quotation"
              title="Pricing is prepared for your exact travel party."
              description="Share your dates, party size and hotel preference. We will return a written quotation showing the per-person price, party total, included services and any optional upgrades."
            />
            <div className="grid gap-4 border-y border-[var(--border-default)] py-6 md:grid-cols-3">
              <QuickFactCard
                label="1"
                value="Confirm your dates"
                helper="Season and availability affect hotels and transport."
              />
              <QuickFactCard
                label="2"
                value="Choose your comfort level"
                helper="We compare location, room category and service."
              />
              <QuickFactCard
                label="3"
                value="Receive a written quote"
                helper="No booking is made until you approve it."
              />
            </div>
          </ContentContainer>
        </Section>
      )}

      <Section id="optional-experiences" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Optional experiences"
            title="Add experiences that earn their place."
            description="We recommend additions only when they suit your interests and improve the day rather than simply filling it."
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
            eyebrow="Route map"
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
            title="See the character of the route."
            description="A closer look at the places, landscapes and private services included in this journey."
          />
          <GridGallery images={tour.gallery} mode="editorial" />
        </ContentContainer>
      </Section>

      <Section id="faq" spacing="default">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Important details before you decide."
            description="Clear answers on customization, hotels, walking, meals, private services and booking conditions."
          />
          <TourFaqAccordion tour={tour} />
        </ContentContainer>
      </Section>

      {tour.related.tours.length ? (
        <Section id="related-tours" spacing="default" className="bg-white">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Compare journeys"
              title="Another route may suit you better."
              description="Compare destination combinations, duration and travel style before choosing a starting point."
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
            title="Understand the places on this route."
            description="Read the practical destination guides for timing, signature experiences and recommended length of stay."
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
            eyebrow="Your personal trip plan"
            title="Make this journey fit your travelers."
            description="We will recommend the right hotels, room categories, guide service and daily pace, then send a clear quotation for your dates."
            primary={{ label: "Request My Trip Plan", href: planningHref }}
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

      <FloatingCta label="Plan This Tour" href={planningHref} />
      <StickyMobileCta label="Customize" href={planningHref} showAfter={1200} />
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
