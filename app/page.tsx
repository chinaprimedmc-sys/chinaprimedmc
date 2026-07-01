import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";

import { BlogCard } from "@/components/cards/blog-card";
import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { ReviewCard } from "@/components/cards/review-card";
import { StatisticCard } from "@/components/cards/statistic-card";
import { TourCard } from "@/components/cards/tour-card";
import { HeroTrustPills, SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { FloatingCta } from "@/components/cta/floating-cta";
import { StickyMobileCta } from "@/components/cta/sticky-mobile-cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { EditorialLayout } from "@/components/layout/editorial-layout";
import { GridSystem } from "@/components/layout/grid-system";
import { MagazineLayout } from "@/components/layout/magazine-layout";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { EditorialReview } from "@/components/reviews/editorial-review";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import {
  b2bAction,
  destinationImages,
  destinations,
  experiences,
  heroImage,
  homeNavItems,
  journal,
  journeys,
  primaryAction,
  proofPoints,
  reviews,
  storyImages,
} from "@/content/home/homepage";

export const metadata: Metadata = createMetadata({
  title: "Private China Tours for Families, Couples, and Luxury Travelers",
  description:
    "Plan a private China journey with China Prime DMC: custom routes, private guides, family-friendly pacing, luxury hotels, and stress-free local logistics.",
  image: heroImage.src,
});

export default function HomePage() {
  return (
    <PageContainer className="pb-20 md:pb-0">
      <JsonLd
        id="home-travel-agency-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "China Prime DMC",
          url: "https://chinaprimedmc.com/",
          description:
            "Private China tours and custom inbound travel planning for international families, couples, luxury travelers, and travel advisors.",
          areaServed: ["China", "United States", "Canada", "United Kingdom", "Australia"],
          knowsAbout: [
            "Private China tours",
            "Luxury China travel",
            "China family tours",
            "Custom China itinerary planning",
            "Muslim-friendly China travel",
          ],
        }}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
        whatsapp={{ label: "WhatsApp", href: "/contact" }}
      />
      <HeroLargeImage
        eyebrow="China Prime DMC"
        title="China, beautifully within reach."
        subtitle="Private China journeys with the wonder kept in, and the friction quietly designed out."
        image={heroImage}
        primary={{ label: "Plan My Trip", href: primaryAction.href }}
        secondary={{ label: "Explore Routes", href: "#journeys" }}
        overlay="soft"
      >
        <HeroTrustPills
          items={["Licensed inbound operator", "Founded 2012", "Private, no-shopping travel"]}
        />
      </HeroLargeImage>

      <Section id="destinations" spacing="spacious">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Featured destinations"
            title="Where should your China story begin?"
            description="Six first chapters, each with a different kind of pull: imperial, modern, playful, natural, cinematic, or slow."
          />
          <MagazineLayout
            lead={
              <DestinationCard
                title={destinations[0].title}
                description={destinations[0].description}
                image={destinations[0].image}
                badges={destinations[0].badges}
                variant="large"
                action={{ label: "Begin here", href: "#journeys" }}
              />
            }
            aside={destinations.slice(1, 3).map((destination) => (
              <DestinationCard
                key={destination.title}
                title={destination.title}
                description={destination.description}
                image={destination.image}
                badges={destination.badges}
                variant="small"
              />
            ))}
            footer={
              <GridSystem columns={3}>
                {destinations.slice(3).map((destination) => (
                  <DestinationCard
                    key={destination.title}
                    title={destination.title}
                    description={destination.description}
                    image={destination.image}
                    badges={destination.badges}
                    variant="medium"
                  />
                ))}
              </GridSystem>
            }
          />
        </ContentContainer>
      </Section>

      <Section id="experiences" spacing="spacious" className="bg-white">
        <ContentContainer size="xl">
          <EditorialLayout
            eyebrow="Signature experiences"
            title="The trip should feel designed around you, not around a bus schedule."
            intro="Some travelers want icons without exhaustion. Some need halal-aware planning. Some are bringing children or older parents. The route should start with your reality."
            media={
              <ExperienceCard
                title="A quieter way to meet China"
                description="Private pacing, thoughtful hotels, real local texture, and enough space to actually enjoy what you came to see."
                image={destinationImages.guilin}
                badges={["Private", "Flexible"]}
                variant="large"
              />
            }
          />
          <GridSystem columns={3} className="mt-8">
            {experiences.map((experience) => (
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

      <Section id="journeys" spacing="spacious">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Luxury journeys"
            title="Start with a route idea. Then make it yours."
            description="These routes are not packages. They are starting points for pace, routing, comfort, and the kind of China you want to remember."
          />
          <GridSystem columns={3}>
            {journeys.map((journey) => (
              <TourCard
                key={journey.title}
                title={journey.title}
                description={journey.description}
                image={journey.image}
                badges={journey.badges}
                meta={journey.meta}
                action={{ label: "Ask for a first route idea", href: primaryAction.href }}
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="why" spacing="spacious" className="bg-neutral-950 text-white">
        <ContentContainer size="xl" className="grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
                Why China Prime
              </p>
              <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
                The practical worries are part of the design.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/68 md:text-lg">
              A beautiful China trip is scenery, yes. It is also language, pacing, tickets, meals,
              transfers, rest, and knowing exactly who is taking care of the details.
            </p>
          </div>
          <GridSystem columns={3}>
            <StatisticCard
              value="2012"
              label="Founded"
              helper="Long-term China inbound travel experience."
              className="bg-white/8 text-white ring-1 ring-white/12"
            />
            <StatisticCard
              value="Private"
              label="Daily rhythm"
              helper="Guides, vehicles, and pacing shaped around you."
              className="bg-white/8 text-white ring-1 ring-white/12"
            />
            <StatisticCard
              value="0"
              label="Shopping-tour pressure"
              helper="Your time belongs to your trip, not commission stops."
              className="bg-white/8 text-white ring-1 ring-white/12"
            />
          </GridSystem>
          <GridSystem columns={3}>
            {proofPoints.map((point, index) => (
              <FeatureCard
                key={point.title}
                icon={
                  index === 0 ? (
                    <ShieldCheck size={18} />
                  ) : index === 1 ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <Sparkles size={18} />
                  )
                }
                title={point.title}
                description={point.description}
                className="border-white/12 bg-white/8 text-white [&_p]:text-white/66"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="stories" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <EditorialReview
            review={{
              quote:
                "The right China trip does not feel rushed. It feels like someone quietly removed the friction.",
              name: "China Prime DMC planning principle",
              country: "Private travel",
            }}
          />
          <GridSystem columns={3}>
            {reviews.map((review) => (
              <ReviewCard key={`${review.name}-${review.trip}`} review={review} />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="journal" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Travel journal"
            title="Useful thinking before you choose a route."
            description="Short, practical planning notes for the questions travelers ask before the route feels real."
          />
          <GridSystem columns={3}>
            {journal.map((article) => (
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

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={storyImages.rail}
            eyebrow="Start the conversation"
            title="Tell us who is traveling. We will suggest the first shape of the journey."
            description="Start with dates, travelers, pace, comfort level, and the questions you are not sure how to ask yet."
            primary={{ label: "Get My First Route Idea", href: primaryAction.href }}
            secondary={{
              label: "Ask a China Specialist",
              href: "mailto:chinaprimedmc@gmail.com?subject=Question%20for%20a%20China%20Specialist",
            }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Explore", items: homeNavItems },
          {
            title: "Travel styles",
            items: [
              { label: "Family China", href: "#experiences" },
              { label: "Luxury China", href: "#journeys" },
              { label: "Muslim-friendly", href: "#why" },
            ],
          },
          {
            title: "Planning",
            items: [
              { label: "First route idea", href: primaryAction.href },
              { label: "Travel advisors", href: b2bAction.href },
            ],
          },
          {
            title: "Journal",
            items: journal.map((article) => ({ label: article.category, href: article.href })),
          },
        ]}
        social={[
          { label: "Facebook", href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc" },
        ]}
      />
      <FloatingCta label="Plan My China Trip" href={primaryAction.href} />
      <StickyMobileCta label="Plan Trip" href={primaryAction.href} showAfter={720} />
    </PageContainer>
  );
}
