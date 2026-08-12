import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, Check, ChevronDown, Circle, Compass, Map, Plane, X } from "lucide-react";

import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { HotelCard } from "@/components/cards/hotel-card";
import { TourCard } from "@/components/cards/tour-card";
import { HeroTrustPills, QuickFactCard, SectionHeader } from "@/components/content";
import { CtaButton } from "@/components/cta/cta-button";
import { FloatingCta } from "@/components/cta/floating-cta";
import { StickyMobileCta } from "@/components/cta/sticky-mobile-cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { CinematicJourneyGallery } from "@/components/gallery/cinematic-journey-gallery";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { OptimizedImage } from "@/components/media/optimized-image";
import { WhatsAppIcon } from "@/components/icons";
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
    { label: "Gallery", href: "#gallery" },
    { label: "Itinerary", href: "#itinerary" },
    { label: "Details", href: "#details" },
    { label: "FAQ", href: "#faq" },
    { label: "Proposal", href: "#proposal" },
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
      <SiteNavigation
        items={tourNav}
        cta={{ label: "Request a Private Proposal", href: planningHref }}
      />

      <HeroLargeImage
        eyebrow={tour.hero.eyebrow ?? "Tailored private tour"}
        title={tour.title}
        subtitle={tour.subtitle}
        image={tour.hero.image}
        primary={{ label: "Request a Private Proposal", href: planningHref }}
        secondary={{ label: "Explore Itinerary", href: "#itinerary" }}
        overlay="medium"
        journeySlug={tour.slug}
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

      {tour.gallery.length ? (
        <CinematicJourneyGallery images={tour.gallery} title="Scenes from this journey." />
      ) : null}

      <Section id="highlights" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Signature experiences"
            title="A route with room to feel the place."
            description="The defining experiences, selected for their timing, context and fit within the wider journey."
          />
          <SignatureExperiences highlights={tour.highlights} />
        </ContentContainer>
      </Section>

      <Section id="itinerary" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Day by day"
            title="See the rhythm of the journey."
            description="Move through the days one at a time. Every detail can be adjusted around your dates, interests and pace."
          />
          <ItineraryEngine days={tour.itinerary} />
        </ContentContainer>
      </Section>

      <Section id="proposal" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="A private proposal for your dates"
            title="The journey is shaped around your party."
            description="There is no fixed package price. We confirm the right hotels, services and inclusions around your dates, group size, preferences and travel rhythm, then send everything in writing."
          />
          <div className="grid gap-4 border-y border-[var(--border-default)] py-6 md:grid-cols-3">
            <QuickFactCard
              label="01"
              value="Share your essentials"
              helper="Dates, travelers, interests and anything that needs extra care."
            />
            <QuickFactCard
              label="02"
              value="We check the details"
              helper="Hotels, room needs, transport, guides and availability."
            />
            <QuickFactCard
              label="03"
              value="Receive your proposal"
              helper="A clear written plan with inclusions and next steps."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-border border-t pt-4">
              <h3 className="font-semibold">What can be tailored</h3>
              <p className="text-muted mt-2 text-sm leading-6">
                Dates, hotel level, room configuration, daily pace, vehicle and guide service,
                meals, dietary requirements, optional experiences and domestic transport.
              </p>
            </div>
            <div className="border-border border-t pt-4">
              <h3 className="font-semibold">No obligation to book</h3>
              <p className="text-muted mt-2 text-sm leading-6">
                Your proposal is prepared for review. Nothing is confirmed until you have checked
                and approved the written details.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-[var(--border-default)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted max-w-xl text-sm leading-6">
              Start with a few details. We will reply personally and there is no obligation to book.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaButton
                href={planningHref}
                size="md"
                icon={<ArrowRight size={16} aria-hidden="true" />}
                data-cta-placement="proposal"
                data-journey-slug={tour.slug}
              >
                Request a Private Proposal
              </CtaButton>
              {tour.inquiry.whatsappHref ? (
                <CtaButton
                  href={tour.inquiry.whatsappHref}
                  variant="whatsappFrosted"
                  target="_blank"
                  rel="noreferrer"
                  data-cta-placement="proposal-whatsapp"
                  data-journey-slug={tour.slug}
                >
                  <WhatsAppIcon className="size-[18px] shrink-0" />
                  WhatsApp a Specialist
                </CtaButton>
              ) : null}
            </div>
          </div>
        </ContentContainer>
      </Section>

      <Section id="details" spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-7">
          <SectionHeader
            eyebrow="Practical details"
            title="Everything important, easy to find."
            description="Open a section when you are ready to look closer. Your final proposal confirms the exact hotels, services and inclusions for your dates."
          />
          <TourDetailsAccordion tour={tour} />
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
              { label: "Request a proposal", href: planningHref },
              { label: "Interactive itinerary", href: "#itinerary" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Route",
            items: tour.routeMap.stops.map((stop) => ({
              label: stop.name,
              href: "#details",
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

      <FloatingCta
        label="Request a Private Proposal"
        href={planningHref}
        placement="floating"
        journeySlug={tour.slug}
      />
      <StickyMobileCta
        label="Request a Private Proposal"
        href={planningHref}
        showAfter={1200}
        placement="mobile-sticky"
        journeySlug={tour.slug}
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

function SignatureExperiences({ highlights }: { highlights: Tour["highlights"] }) {
  const lead = highlights[0];

  if (!lead) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-stretch">
      <div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] bg-[var(--bg-secondary)] md:min-h-[28rem]">
        <OptimizedImage
          src={lead.image.src}
          alt={lead.image.alt}
          width={lead.image.width ?? 1200}
          height={lead.image.height ?? 900}
          sizes="(min-width: 1024px) 56vw, 100vw"
          objectPosition={lead.image.objectPosition}
          frameClassName="absolute inset-0"
          className="h-full w-full"
          showSkeleton={false}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 pt-20 text-white md:p-7 md:pt-24">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold tracking-[0.14em] text-white/90 uppercase">01</span>
            <span className="h-px w-8 bg-white/55" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.14em] text-white/75 uppercase">
              {lead.category}
            </p>
          </div>
          <h3 className="mt-2 max-w-lg text-2xl leading-tight font-semibold tracking-[-0.025em] md:text-3xl">
            {lead.title}
          </h3>
        </div>
      </div>
      <div className="grid divide-y divide-[var(--border-default)] border-y border-[var(--border-default)]">
        {highlights.slice(1, 4).map((highlight, index) => (
          <article key={highlight.title} className="grid gap-2 py-5 first:pt-0 last:pb-0 lg:py-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.14em] text-[var(--accent)] uppercase">
                0{index + 2}
              </span>
              <p className="text-xs font-semibold tracking-[0.12em] text-[var(--text-secondary)] uppercase">
                {highlight.category}
              </p>
            </div>
            <h3 className="text-xl leading-tight font-semibold tracking-[-0.025em]">
              {highlight.title}
            </h3>
            <p className="text-muted text-sm leading-6">{highlight.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function TourDetailsAccordion({ tour }: { tour: Tour }) {
  return (
    <Accordion.Root type="multiple" className="grid gap-3">
      {tour.planningSupport ? (
        <Accordion.Item
          value="designed-around-you"
          className="border-border overflow-hidden rounded-2xl border bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 p-5 text-left md:p-6">
              <span>
                <span className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
                  Designed around you
                </span>
                <span className="mt-2 block text-lg font-semibold tracking-[-0.02em]">
                  {tour.planningSupport.title}
                </span>
              </span>
              <ChevronDown
                size={20}
                aria-hidden="true"
                className="shrink-0 transition group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="border-border border-t px-5 pb-5 md:px-6 md:pb-6">
            <p className="text-muted max-w-3xl pt-5 text-sm leading-7">
              {tour.planningSupport.description}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {tour.planningSupport.items.map((item) => (
                <FeatureCard
                  key={item.label}
                  icon={<Check size={17} aria-hidden="true" />}
                  title={item.value}
                  description={`${item.label}. ${item.helper ?? ""}`}
                />
              ))}
            </div>
            <p className="text-muted mt-5 text-sm leading-6">{tour.planningSupport.note}</p>
          </Accordion.Content>
        </Accordion.Item>
      ) : null}

      {tour.accommodations.length ? (
        <Accordion.Item
          value="accommodation"
          className="border-border overflow-hidden rounded-2xl border bg-white"
        >
          <AccordionHeader eyebrow="Hotels" title="The right hotel improves the whole route." />
          <Accordion.Content className="border-border border-t p-5 md:p-6">
            <p className="text-muted text-sm leading-7">
              We consider location, room category, breakfast, service and transfer time before
              recommending a property.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
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
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ) : null}

      <Accordion.Item
        value="included"
        className="border-border overflow-hidden rounded-2xl border bg-white"
      >
        <AccordionHeader eyebrow="Services" title="Know what is included before you book." />
        <Accordion.Content className="border-border border-t p-5 md:p-6">
          <p className="text-muted text-sm leading-7">
            Your written proposal confirms every included service, selected hotel, room category and
            payable extra.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ListPanel title="Included" items={tour.included} tone="positive" />
            <ListPanel title="Not included" items={tour.excluded} tone="muted" />
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="transportation"
        className="border-border overflow-hidden rounded-2xl border bg-white"
      >
        <AccordionHeader eyebrow="Transport" title={tour.transportation.title} />
        <Accordion.Content className="border-border border-t p-5 md:p-6">
          <p className="text-muted text-sm leading-7">{tour.transportation.description}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {tour.transportation.items.map((item) => (
              <FeatureCard
                key={item.label}
                icon={<Plane size={17} aria-hidden="true" />}
                title={item.value}
                description={`${item.label}. ${item.helper ?? ""}`}
              />
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item
        value="route"
        className="border-border overflow-hidden rounded-2xl border bg-white"
      >
        <AccordionHeader eyebrow="Route map" title={tour.routeMap.title} />
        <Accordion.Content className="border-border border-t p-5 md:p-6">
          <p className="text-muted mb-5 text-sm leading-7">{tour.routeMap.description}</p>
          <RouteMap tour={tour} />
        </Accordion.Content>
      </Accordion.Item>

      {tour.optionalExperiences.length ? (
        <Accordion.Item
          value="optional-experiences"
          className="border-border overflow-hidden rounded-2xl border bg-white"
        >
          <AccordionHeader eyebrow="Optional experiences" title="Add only what earns its place." />
          <Accordion.Content className="border-border border-t p-5 md:p-6">
            <p className="text-muted text-sm leading-7">
              We recommend additions only when they suit your interests and improve the day.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
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
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ) : null}
    </Accordion.Root>
  );
}

function AccordionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Accordion.Header>
      <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 p-5 text-left md:p-6">
        <span>
          <span className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            {eyebrow}
          </span>
          <span className="mt-2 block text-lg font-semibold tracking-[-0.02em]">{title}</span>
        </span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className="shrink-0 transition group-data-[state=open]:rotate-180"
        />
      </Accordion.Trigger>
    </Accordion.Header>
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
