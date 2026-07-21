import { Check } from "lucide-react";

import { SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { GridGallery } from "@/components/gallery/grid-gallery";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Section } from "@/design-system/primitives/section";
import { cmsMediaToAsset } from "@/lib/cms/adapters";
import type { CmsJourney } from "@/lib/cms/types";
import type { SanitySiteSettings } from "@/lib/cms/sanity";

export function CmsJourneyTemplate({
  journey,
  settings,
}: {
  journey: CmsJourney;
  settings: SanitySiteSettings;
}) {
  if (!journey.hero_image) return null;

  const hero = cmsMediaToAsset(journey.hero_image);
  const gallery = journey.content.gallery ?? [];
  const inquiryHref = `/start-planning?journey=${encodeURIComponent(journey.slug)}&source=tour-detail`;

  return (
    <PageContainer className="pb-28 md:pb-0">
      <SiteNavigation
        items={settings.navigation}
        cta={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
      />
      <HeroLargeImage
        eyebrow="Private journey"
        title={journey.title}
        subtitle={journey.subtitle}
        image={hero}
        primary={{ label: "Start Planning", href: inquiryHref }}
        secondary={{ label: "Explore the Itinerary", href: "#itinerary" }}
        overlay="medium"
      />

      <Section spacing="default" className="bg-white">
        <ContentContainer size="lg" className="grid gap-10">
          <SectionHeader eyebrow={journey.route} title={journey.summary} />
          <div className="border-border grid gap-5 border-y py-6 sm:grid-cols-3">
            <Fact label="Journey length" value={journey.duration_label} />
            <Fact label="Best for" value={journey.best_for} />
            <Fact label="Planning level" value={journey.price} />
          </div>
          {journey.content.body ? (
            <div className="text-muted max-w-3xl text-lg leading-8 whitespace-pre-line">
              {journey.content.body}
            </div>
          ) : null}
        </ContentContainer>
      </Section>

      {journey.content.days?.length ? (
        <Section id="itinerary" spacing="default">
          <ContentContainer size="lg" className="grid gap-10">
            <SectionHeader
              eyebrow="Illustrative itinerary"
              title="A clear route, shaped around your pace."
              description="Each day remains illustrative and is refined around your dates, interests, mobility, and preferred rhythm."
            />
            <div className="grid gap-8">
              {journey.content.days.map((day) => (
                <article
                  key={`${day.day}-${day.title}`}
                  className="border-border grid gap-4 border-t pt-6 md:grid-cols-[10rem_1fr]"
                >
                  <div>
                    <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">
                      {day.day}
                    </p>
                    <p className="text-muted mt-2 text-sm">{day.city}</p>
                  </div>
                  <div>
                    <h2 className="text-foreground font-serif text-3xl font-medium">{day.title}</h2>
                    <p className="text-muted mt-3 max-w-3xl text-base leading-7">
                      {day.description}
                    </p>
                    <p className="text-muted mt-3 flex items-center gap-2 text-xs tracking-[0.1em] uppercase">
                      <Check size={14} aria-hidden="true" /> Illustrative — shaped around you
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ContentContainer>
        </Section>
      ) : null}

      {gallery.length ? (
        <Section spacing="default" className="bg-white">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader eyebrow="Journey gallery" title="A closer look at the route." />
            <GridGallery images={gallery} mode="editorial" />
          </ContentContainer>
        </Section>
      ) : null}

      <Section spacing="default">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={hero}
            eyebrow="Shape your private journey"
            title="Tell us what a beautifully paced trip means to you."
            description="Share your dates, travelers, and priorities. We will respond with the first considered route direction."
            primary={{ label: "Plan My Trip", href: inquiryHref }}
            secondary={{ label: "View all journeys", href: "/tours" }}
          />
        </ContentContainer>
      </Section>
      <SiteFooter
        columns={[
          { title: "Journeys", items: [{ label: "All journeys", href: "/tours" }] },
          {
            title: "Planning",
            items: [
              { label: "Start planning", href: inquiryHref },
              { label: "Journal", href: "/journal" },
              { label: "Contact", href: "/contact" },
            ],
          },
        ]}
        social={settings.socialLinks}
      />
    </PageContainer>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">{label}</p>
      <p className="text-foreground mt-2 text-base leading-6">{value}</p>
    </div>
  );
}
