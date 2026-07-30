import type { Metadata } from "next";

import { SectionHeader } from "@/components/content";
import { StartPlanningForm } from "@/components/forms";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { heroImage, homeNavItems, primaryAction } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "Start Planning a Private China Journey",
  description:
    "Start planning a private China journey with a short multi-step inquiry for travelers, timing, travel style, and contact preferences.",
  path: "/start-planning",
  image: heroImage.src,
});

export default async function StartPlanningPage({
  searchParams,
}: {
  searchParams: Promise<{ journeys?: string }>;
}) {
  const params = await searchParams;
  const savedJourneys = parseSavedJourneys(params.journeys);

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
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <Section spacing="spacious">
        <ContentContainer size="xl" className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
              Start planning
            </p>
            <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
              Tell us what your ideal China trip looks like.
            </h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              Four short steps cover who is traveling, timing, travel style and how you prefer us to
              reply. Your quotation will reflect your dates, hotels and selected services.
            </p>
            <Card className="mt-8 p-5">
              <p className="text-sm font-semibold">Prefer direct contact?</p>
              <div className="text-muted mt-3 grid gap-2 text-sm leading-6">
                <a href={siteConfig.phoneHref} className="hover:text-foreground">
                  Call {siteConfig.phone}
                </a>
                <a href="https://wa.me/447985052302" className="hover:text-foreground">
                  WhatsApp +44 7985 052302
                </a>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </div>
            </Card>
          </div>
          <StartPlanningForm savedJourneys={savedJourneys} />
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="What happens next"
            title="This starts a conversation. It does not confirm a booking."
            description="A China specialist will review your answers, suggest a sensible direction and ask any questions needed before preparing your quotation."
          />
          <div className="grid gap-4 md:grid-cols-3">
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
              <Card key={item.title} className="p-5 md:p-6">
                <h2 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h2>
                <p className="text-muted mt-3 text-sm leading-7">{item.body}</p>
              </Card>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Planning",
            items: [
              { label: "Planning Hub", href: "/planning" },
              { label: "Visa", href: "/planning/visa" },
              { label: "FAQ", href: "/planning/faq" },
              { label: "Senior Travel", href: "/senior-travel" },
            ],
          },
          { title: "Explore", items: homeNavItems },
        ]}
        social={[]}
      />
    </PageContainer>
  );
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
