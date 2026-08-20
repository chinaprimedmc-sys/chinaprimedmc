import * as Accordion from "@radix-ui/react-accordion";
import {
  CalendarDays,
  ChevronDown,
  CloudSun,
  Compass,
  CreditCard,
  Globe2,
  Luggage,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { TourCard } from "@/components/cards/tour-card";
import { HeroTrustPills, QuickFactCard, SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { FloatingCta } from "@/components/cta/floating-cta";
import { StickyMobileCta } from "@/components/cta/sticky-mobile-cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { GridGallery } from "@/components/gallery/grid-gallery";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { EditorialLayout } from "@/components/layout/editorial-layout";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { homeNavItems } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { RecordViewed } from "@/features/discovery/record-viewed";
import type { Destination, DestinationTip } from "@/types/destination";

type DestinationTemplateProps = {
  destination: Destination;
};

export function DestinationTemplate({ destination }: DestinationTemplateProps) {
  const inquiryHref = destination.hero.secondary.href;

  return (
    <PageContainer className="pb-20 md:pb-0">
      <RecordViewed
        item={{
          id: `destination:${destination.slug}`,
          type: "destination",
          title: destination.name,
          href: `/destinations/${destination.slug}`,
        }}
      />
      <SiteNavigation items={homeNavItems} cta={{ label: "Start Planning", href: inquiryHref }} />

      <HeroLargeImage
        eyebrow={destination.hero.eyebrow ?? "Destination guide"}
        title={destination.name}
        subtitle={`${destination.hero.tagline} ${destination.hero.summary}`}
        image={destination.hero.image}
        primary={destination.hero.primary}
        secondary={destination.hero.secondary}
        overlay="medium"
      >
        <HeroTrustPills items={[destination.region, "Private pacing", "Tailor-made China"]} />
      </HeroLargeImage>

      <Section spacing="compact" className="bg-white">
        <ContentContainer size="xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {destination.quickFacts.map((fact) => (
              <QuickFactCard
                key={fact.label}
                value={fact.value}
                label={fact.label}
                helper={fact.helper}
              />
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section id="why-visit" spacing="default">
        <ContentContainer size="xl">
          <EditorialLayout
            eyebrow={<Badge>Why visit</Badge>}
            title={destination.whyVisit.title}
            intro={destination.whyVisit.body}
            media={
              <DestinationCard
                title={destination.name}
                description={destination.hero.tagline}
                image={destination.whyVisit.image}
                badges={[destination.region]}
                variant="large"
              />
            }
          />
        </ContentContainer>
      </Section>

      <Section id="best-time" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Best time to visit"
            title={destination.bestTime.title}
            description={destination.bestTime.summary}
          />
          <GridSystem columns={4}>
            {destination.bestTime.seasons.map((season) => (
              <FeatureCard
                key={season.label}
                icon={<CalendarDays size={18} aria-hidden="true" />}
                title={season.label}
                description={`${season.value}. ${season.helper ?? ""}`}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="highlights" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Top highlights"
            title={`What makes ${destination.name} worth the journey?`}
            description="A destination page should help travelers picture the trip quickly, then invite them deeper."
          />
          <GridSystem columns={3}>
            {destination.highlights.map((highlight) => (
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

      <Section id="experiences" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Signature experiences"
            title="Ways to feel the destination, not just see it."
            description="Explore ways to experience the destination through private guiding, local texture, and a pace that suits your group."
          />
          <GridSystem columns={3}>
            {destination.experiences.map((experience) => (
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

      {destination.hotels?.length ? (
        <Section id="hotels" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Featured luxury hotels"
              title="Stay choices should support the rhythm of the trip."
              description="Stay choices can be matched to the route rhythm, room needs, and comfort level your travelers prefer."
            />
            <GridSystem columns={2}>
              {destination.hotels.map((hotel) => (
                <DestinationCard
                  key={hotel.name}
                  title={hotel.name}
                  description={hotel.description}
                  image={hotel.image}
                  badges={[hotel.style]}
                  variant="large"
                />
              ))}
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      <Section id="suggested-tours" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Suggested tours"
            title={`Private routes that pair well with ${destination.name}.`}
            description="See private route ideas that include this destination, with the pace and details shaped around your travelers."
          />
          <GridSystem columns={3}>
            {destination.related.journeys.map((tour) => (
              <TourCard
                key={tour.title}
                title={tour.title}
                description={tour.description}
                image={tour.image}
                badges={tour.tags}
                meta={[
                  { label: "Route", value: tour.route },
                  { label: "Length", value: tour.duration },
                ]}
                action={{ label: "Ask for this route", href: tour.href }}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="gallery" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Travel inspiration gallery"
            title="A quick visual sense of the journey."
            description="A visual sequence of the destination, with space to notice its architecture, neighborhoods, and daily rhythm."
          />
          <GridGallery images={destination.gallery} mode="editorial" />
        </ContentContainer>
      </Section>

      <Section id="tips" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Travel tips"
            title="Small planning details that protect the whole trip."
            description="Tips are intentionally short. They answer practical worries without turning the page into a guidebook."
          />
          <GridSystem columns={4}>
            {destination.tips.map((tip) => (
              <FeatureCard
                key={tip.title}
                icon={tipIcon(tip)}
                title={tip.title}
                description={tip.description}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="faq" spacing="default">
        <ContentContainer size="lg" className="grid gap-8">
          <SectionHeader
            eyebrow="FAQ"
            title={`Questions travelers ask about ${destination.name}.`}
            description="Practical answers about pace, timing, and comfort help you decide whether this destination suits your route."
          />
          <DestinationFaqAccordion destination={destination} />
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={destination.hero.image}
            eyebrow="Private China journey"
            title={`Let us shape ${destination.name} around the way you travel.`}
            description="Tell us who is traveling, what pace feels right, and what you are worried about. We will suggest the first route shape."
            primary={{ label: "Plan My Trip", href: inquiryHref }}
            secondary={{ label: "Ask a China Specialist", href: inquiryHref }}
          />
        </ContentContainer>
      </Section>

      <Section spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Related inspiration"
            title="Keep building the route."
            description="Keep exploring planning notes and ideas for shaping a private route through China."
          />
          <GridSystem columns={3}>
            {destination.related.articles.map((article) => (
              <BlogCard
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                href={article.href}
                image={article.image}
                category={article.category}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Destination",
            items: [
              { label: "Highlights", href: "#highlights" },
              { label: "Experiences", href: "#experiences" },
              { label: "Suggested journeys", href: "#suggested-tours" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Planning",
            items: [
              { label: "Plan my trip", href: inquiryHref },
              { label: "Suggested tours", href: "#suggested-tours" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            title: "Explore",
            items: [
              { label: "Private journeys", href: "/tours" },
              { label: "Family journeys", href: "/tours?travellers=families" },
              { label: "Start planning", href: "/start-planning" },
            ],
          },
          {
            title: "Related",
            items: destination.related.articles.map((article) => ({
              label: article.category,
              href: article.href,
            })),
          },
        ]}
        social={[
          { label: "Facebook", href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc" },
        ]}
      />
      <FloatingCta label="Plan This Trip" href={inquiryHref} />
      <StickyMobileCta label="Plan" href={inquiryHref} showAfter={1200} />
    </PageContainer>
  );
}

function DestinationFaqAccordion({ destination }: { destination: Destination }) {
  return (
    <Accordion.Root type="single" collapsible className="grid gap-3">
      {destination.faqs.map((faq, index) => (
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

function tipIcon(tip: DestinationTip) {
  const iconProps = { size: 18, "aria-hidden": true };

  switch (tip.category) {
    case "Weather":
      return <CloudSun {...iconProps} />;
    case "Transportation":
      return <Compass {...iconProps} />;
    case "Language":
      return <Globe2 {...iconProps} />;
    case "Payment":
      return <CreditCard {...iconProps} />;
    case "Safety":
      return <ShieldCheck {...iconProps} />;
    case "Packing":
      return <Luggage {...iconProps} />;
    case "Internet":
      return <Wifi {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}
