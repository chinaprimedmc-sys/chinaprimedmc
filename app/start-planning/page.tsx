import type { Metadata } from "next";

import { SectionHeader } from "@/components/content";
import { StartPlanningForm } from "@/components/forms";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { heroImage, homeNavItems, primaryAction } from "@/content/home/homepage";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Request a Private China Travel Proposal",
  description:
    "Tell AVIORA about your dates, travelers and priorities. Receive a considered private China travel proposal with no obligation to book.",
  path: "/start-planning",
  image: heroImage.src,
});

export default async function StartPlanningPage({
  searchParams,
}: {
  searchParams: Promise<{ journeys?: string; journey?: string; preference?: string }>;
}) {
  const params = await searchParams;
  const savedJourneys = parseSavedJourneys(params.journeys);
  const currentJourney = getCurrentJourney(params.journey);

  return (
    <PageContainer>
      <JsonLd
        id="start-planning-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Start Planning", path: "/start-planning" },
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
      <SiteNavigation items={homeNavItems} cta={primaryAction} />

      <Section spacing="spacious" className="start-planning-experience">
        <ContentContainer size="xl" className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
              Start planning
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              Tell us what would make your China journey feel right.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              Share the essentials first. We will use your answers to shape the route, hotels and
              services before preparing a clear private proposal.
            </p>
            <p className="text-muted mt-8 max-w-sm border-t border-[var(--border)] pt-5 text-sm leading-6">
              A China specialist will use these details to prepare a useful first direction. This
              does not confirm a booking.
            </p>
          </div>
          <div className="grid gap-6">
            <StartPlanningForm
              savedJourneys={savedJourneys}
              currentJourney={currentJourney}
              preference={params.preference}
            />
            <div className="text-muted flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5 text-sm">
              <span>Prefer direct contact?</span>
              <a
                href="https://wa.me/447985052302"
                className="min-h-11 font-semibold text-[var(--text-primary)]"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="min-h-11 font-semibold text-[var(--text-primary)]"
              >
                Email
              </a>
            </div>
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="What happens next"
            title="This starts a conversation. It does not confirm a booking."
            description="A China specialist will review your answers, suggest a sensible direction and ask any questions needed before preparing your quotation."
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
                <h2 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h2>
                <p className="text-muted mt-3 text-sm leading-7">{item.body}</p>
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
