import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DestinationCard } from "@/components/cards/destination-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { TourCard } from "@/components/cards/tour-card";
import { SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { assertPublicRouteSlugs, publicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { destinations } from "@/content/destinations";
import { homeNavItems, primaryAction } from "@/content/home/homepage";
import { tours } from "@/content/tours";
import { getTravelStyleBySlug, getTravelStyleSlugs, travelStyles } from "@/content/travel-styles";
import { Section } from "@/design-system/primitives/section";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type StylePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const styleSlugs = getTravelStyleSlugs();
  assertPublicRouteSlugs("styles", styleSlugs);
  return publicRouteSlugs.styles.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: StylePageProps): Promise<Metadata> {
  const { slug } = await params;
  const style = getTravelStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  return createMetadata({
    title: style.seo.title,
    description: style.seo.description,
    path: `/styles/${style.slug}`,
    image: style.image.src,
  });
}

export default async function StyleDetailPage({ params }: StylePageProps) {
  const { slug } = await params;
  const style = getTravelStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  const relatedTours = tours.filter((tour) => style.relatedTourSlugs.includes(tour.slug));
  const relatedDestinations = destinations.filter((destination) =>
    style.relatedDestinationSlugs.includes(destination.slug),
  );

  return (
    <PageContainer>
      <JsonLd
        id={`${style.slug}-style-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: style.title,
          description: style.seo.description,
          url: new URL(`/styles/${style.slug}`, siteConfig.url).toString(),
          keywords: style.seo.keywords,
        }}
      />
      <JsonLd
        id={`${style.slug}-style-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Travel Styles", path: "/styles" },
          { name: style.title, path: `/styles/${style.slug}` },
        ])}
      />
      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <HeroLargeImage
        eyebrow={style.eyebrow}
        title={style.title}
        subtitle={style.summary}
        image={style.image}
        primary={{ label: "View Matching Tours", href: "#matching-tours" }}
        secondary={{ label: "Start Planning", href: primaryAction.href }}
        overlay="medium"
      />

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Who this suits"
            title="See what changes in the actual journey."
            description="Hotel selection, guide service, private transport and daily timing are adjusted around these priorities."
          />
          <GridSystem columns={3}>
            {style.idealFor.map((item) => (
              <FeatureCard
                key={item}
                title={item}
                description="We address this requirement in the route, hotel and service recommendations."
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="How we design it"
            title="What changes behind the scenes."
            description="This section is intentionally practical: route design, hotels, transfer flow, and guide briefing."
          />
          <div className="grid gap-4">
            {style.designNotes.map((note, index) => (
              <article
                key={note}
                className="border-border bg-background/82 rounded-[1.5rem] border p-5 shadow-sm md:p-6"
              >
                <Badge>Detail {index + 1}</Badge>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.025em]">{note}</h2>
              </article>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section id="matching-tours" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Matching tours"
            title="Route examples that can be shaped in this style."
            description="These are not fixed products. They are strong starting points for a tailored proposal."
          />
          <GridSystem columns={2}>
            {relatedTours.map((tour) => (
              <TourCard
                key={tour.slug}
                title={tour.title}
                description={tour.subtitle}
                image={tour.hero.image}
                href={`/tours/${tour.slug}`}
                badges={tour.styles.slice(0, 3)}
                meta={[
                  { label: "Length", value: tour.duration },
                  { label: "Route", value: tour.route },
                ]}
                action={{ label: "View itinerary", href: `/tours/${tour.slug}` }}
                variant="large"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Related destinations"
            title="Places that often support this style."
            description="These places often work well with this travel rhythm, but the final route remains personal to your group."
          />
          <GridSystem columns={3}>
            {relatedDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                title={destination.name}
                description={`${destination.hero.tagline} ${destination.hero.summary}`}
                image={destination.hero.image}
                href={`/destinations/${destination.slug}`}
                badges={[destination.region]}
                action={{ label: "View guide", href: `/destinations/${destination.slug}` }}
                variant="medium"
              />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            eyebrow="Custom proposal"
            title={`Design a ${style.title.toLowerCase()} journey around your people.`}
            description="Tell us who is traveling, when, and what needs to feel easy. We will shape the first route idea."
            primary={{ label: "Start Planning", href: primaryAction.href }}
            secondary={{ label: "All Travel Styles", href: "/styles" }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Styles",
            items: travelStyles.map((item) => ({
              label: item.title,
              href: `/styles/${item.slug}`,
            })),
          },
          {
            title: "Planning",
            items: [
              { label: "Tours", href: "/tours" },
              { label: "Destinations", href: "/destinations" },
              { label: "Contact", href: "/contact" },
            ],
          },
        ]}
        social={[]}
      />
    </PageContainer>
  );
}
