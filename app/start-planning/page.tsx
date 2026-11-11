import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "@/components/icons/symbols";

import { BookingGuide } from "@/components/planning/booking-guide";
import { TrackedLink } from "@/components/cta/tracked-link";
import { StartPlanningForm } from "@/components/forms";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { heroImage, homeNavItems } from "@/content/home/homepage";
import { explorerDestinations } from "@/content/destinations/explorer";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import { Section } from "@/design-system/primitives/section";
import { planningReassurance } from "@/content/planning";
import { JsonLd } from "@/lib/seo/json-ld";
import { describeMatchAnswers, readMatchAnswers } from "@/lib/tours/journey-match";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

import styles from "./planning.module.css";

export const metadata: Metadata = createMetadata({
  title: "Request a Private China Travel Proposal",
  description:
    "Tell us a little about yourself and your trip. An AVIORA China specialist will ask about your travel plans and next steps, with no obligation to book.",
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
    destination?: string;
    match?: string;
  }>;
}) {
  const params = await searchParams;
  const savedJourneys = parseSavedJourneys(params.journeys);
  const currentJourney = getCurrentJourney(params.journey);
  const currentDestination = explorerDestinations.find(
    (destination) =>
      destination.id === params.destination || destination.name === params.destination,
  );
  const match = readMatchAnswers(params.match ?? null);

  return (
    <PageContainer tone="white" className={styles.page}>
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
          provider: { "@id": `${siteConfig.url}/#organization` },
          url: `${siteConfig.url}/start-planning`,
          termsOfService: `${siteConfig.url}/terms`,
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
          <div className={`${styles.introduction} lg:sticky lg:top-28 lg:self-start`}>
            <p className="type-caption text-muted hidden uppercase lg:block">Plan My Trip</p>
            <h1 className="type-page-title max-w-2xl lg:mt-5">Your China journey starts here.</h1>
            <p className="type-body text-muted mt-4 max-w-2xl lg:mt-5">
              Tell us what you have in mind. A China specialist will help you find the route and
              pace that feel right for you.
            </p>
            <a href="#planning-enquiry" className={styles.mobileFormLink}>
              Tell us about your trip <span aria-hidden="true">↓</span>
            </a>
            <ul className={`${styles.reassurance} mt-6 grid max-w-sm gap-2 text-base leading-7`}>
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
            <Link
              href="#planning-process"
              className="mt-5 inline-flex min-h-11 items-center text-sm underline underline-offset-4"
            >
              How planning and booking work
            </Link>
          </div>
          <div id="planning-enquiry" className={`${styles.formColumn} grid gap-6`}>
            <div className={`${styles.formIntro} max-w-2xl`}>
              <h2 className="text-xl font-semibold">A few details to get started.</h2>
              <p className="text-muted mt-2 text-base leading-7">
                Share approximate dates, who is traveling and what matters most. Still deciding?
                That is enough to begin.
              </p>
            </div>
            <StartPlanningForm
              savedJourneys={savedJourneys}
              currentJourney={currentJourney}
              destinationName={currentDestination?.name}
              preference={params.preference}
              matchSummary={match ? describeMatchAnswers(match) : undefined}
            />
            <div
              className={`${styles.directContact} text-muted flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5 text-sm`}
            >
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

      <BookingGuide />

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
