import type { Metadata } from "next";
import { Check } from "lucide-react";

import { SectionHeader } from "@/components/content";
import { TrackedLink } from "@/components/cta/tracked-link";
import { StartPlanningForm } from "@/components/forms";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { heroImage, homeNavItems } from "@/content/home/homepage";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import { Section } from "@/design-system/primitives/section";
import { planningReassurance } from "@/content/planning";
import { JsonLd } from "@/lib/seo/json-ld";
import { describeMatchAnswers, readMatchAnswers } from "@/lib/tours/journey-match";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Request a Private China Travel Proposal",
  description:
    "Leave your first name and WhatsApp number. An AVIORA China specialist will ask about your travel plans and next steps, with no obligation to book.",
  path: "/start-planning",
  image: heroImage.src,
});

export default async function StartPlanningPage({
  searchParams,
}: {
  searchParams: Promise<{
    journeys?: string;
    journey?: string;
    preference?: string;
    match?: string;
  }>;
}) {
  const params = await searchParams;
  const savedJourneys = parseSavedJourneys(params.journeys);
  const currentJourney = getCurrentJourney(params.journey);
  const match = readMatchAnswers(params.match ?? null);

  return (
    <PageContainer>
      <JsonLd
        id="start-planning-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Plan My Trip", path: "/start-planning" },
        ])}
      />
      <JsonLd
        id="start-planning-service-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Private China Journey Planning",
          provider: {
            "@type": "TravelAgency",
            name: siteConfig.name,
            email: siteConfig.email,
            telephone: siteConfig.phone,
          },
          areaServed: "China",
          serviceType: "Private inbound China travel planning",
        }}
      />
      <SiteNavigation />

      <Section
        spacing="spacious"
        className="start-planning-experience py-8 md:py-[var(--space-section-spacious)]"
      >
        <ContentContainer size="xl" className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="type-caption text-muted hidden uppercase lg:block">Plan My Trip</p>
            <h1 className="type-page-title max-w-2xl lg:mt-5">
              Start a conversation about your China journey.
            </h1>
            <p className="type-body text-muted mt-4 max-w-2xl lg:mt-5">
              Leave your first name and WhatsApp number. We will ask about your dates and priorities
              when we reply.
            </p>
            <p className="text-muted mt-8 hidden max-w-sm border-t border-[var(--border)] pt-5 text-base leading-7 lg:block">
              A China specialist will learn what matters to you before suggesting a route. This does
              not confirm a booking.
            </p>
            <ul className="mt-5 hidden max-w-sm gap-2 border-b border-[var(--border)] pb-5 text-base leading-7 lg:grid">
              {planningReassurance.map((item) => (
                <li key={item} className="grid grid-cols-[1rem_1fr] items-start gap-2.5">
                  <Check
                    className="mt-1 text-[var(--text-secondary)]"
                    size={14}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            <StartPlanningForm
              savedJourneys={savedJourneys}
              currentJourney={currentJourney}
              preference={params.preference}
              matchSummary={match ? describeMatchAnswers(match) : undefined}
            />
            <div className="text-muted flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5 text-sm">
              <span>Prefer direct contact?</span>
              <TrackedLink
                href="https://wa.me/8618027438191"
                className="min-h-11 font-semibold text-[var(--text-primary)]"
                trackingLabel="Message Our China Team"
                trackingPlacement="planning-direct-whatsapp"
              >
                Message Our China Team
              </TrackedLink>
              <TrackedLink
                href={`mailto:${siteConfig.email}`}
                className="min-h-11 font-semibold text-[var(--text-primary)]"
                trackingLabel="Email Our China Team"
                trackingPlacement="planning-direct-email"
              >
                Email Our China Team
              </TrackedLink>
            </div>
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="What happens next"
            title="This starts a conversation. It does not confirm a booking."
            description="A China specialist will reach out on WhatsApp to understand your dates and priorities before preparing a quotation."
          />
          <div className="grid gap-0 border-y border-[var(--border)] md:grid-cols-3">
            {[
              {
                title: "1. We review your priorities",
                body: "Your dates, group, interests, hotel expectations and practical needs shape our first reply.",
              },
              {
                title: "2. We suggest a direction",
                body: "We suggest a route, length of stay and daily pace that make sense for your time in China.",
              },
              {
                title: "3. You receive a written quotation",
                body: "Once the direction is clear, we confirm hotels, services, inclusions and pricing in writing.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border-b border-[var(--border)] p-5 last:border-b-0 md:border-r md:border-b-0 md:p-6 md:last:border-r-0"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-muted mt-3 text-base leading-7">{item.body}</p>
              </article>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Planning",
            items: [
              { label: "Private Journeys", href: "/tours" },
              {
                label: "Visa Guide",
                href: "/journal/china-240-hour-visa-free-transit-guide",
              },
              { label: "FAQ", href: "/faq" },
              {
                label: "China At An Easier Pace",
                href: "/tours/china-at-an-easier-pace-12-day-private-tour",
              },
            ],
          },
          { title: "Explore", items: homeNavItems },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}

function getCurrentJourney(slug?: string) {
  if (!slug) return undefined;

  const tour = getTourBySlug(slug);
  if (tour) return { slug: tour.slug, title: tour.title };

  const journey = getJourneyCatalogItem(slug);
  return journey ? { slug: journey.slug, title: journey.title } : undefined;
}

function parseSavedJourneys(value?: string) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter(
          (journey): journey is string => typeof journey === "string" && Boolean(journey.trim()),
        )
      : [];
  } catch {
    return [];
  }
}
