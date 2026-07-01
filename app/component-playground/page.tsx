import { Sparkles } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { DestinationCard } from "@/components/cards/destination-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { StatisticCard } from "@/components/cards/statistic-card";
import { TourCard } from "@/components/cards/tour-card";
import { CtaCard } from "@/components/cta/cta-card";
import { NoResultsState } from "@/components/empty-states/preset-empty-states";
import { SelectField } from "@/components/forms/select-field";
import { TextAreaField, TextField } from "@/components/forms/form-field";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroEditorial } from "@/components/hero/hero-editorial";
import { ContentContainer } from "@/components/layout/content-container";
import { EditorialLayout } from "@/components/layout/editorial-layout";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { CardSkeleton } from "@/components/loading/skeleton";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { TravelTimeline } from "@/components/timeline/travel-timeline";
import { Section } from "@/design-system/primitives/section";
import type { NavigationItem } from "@/types/component-library";

const placeholderImage = {
  src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  alt: "Editorial travel landscape placeholder",
  width: 1400,
  height: 1000,
};

const navItems: NavigationItem[] = [
  { label: "Destinations", href: "#destinations" },
  { label: "Trips", href: "#trips" },
  {
    label: "Plan",
    href: "#plan",
    children: [
      {
        label: "Families",
        href: "#families",
        description: "Comfortable pacing and child-aware design.",
      },
      {
        label: "Luxury",
        href: "#luxury",
        description: "Private guides, stronger hotels, seamless movement.",
      },
    ],
  },
];

export default function ComponentPlaygroundPage() {
  return (
    <PageContainer>
      <SiteNavigation items={navItems} />
      <HeroEditorial
        eyebrow="Component Playground"
        title="Official building blocks for China Prime DMC V2."
        subtitle="This internal preview validates reusable components only. It is not a business page."
        image={placeholderImage}
        primary={{ label: "Review Components", href: "#cards" }}
        secondary={{ label: "Motion Ready", href: "#motion" }}
      />
      <Section id="cards">
        <ContentContainer className="grid gap-8">
          <EditorialLayout
            eyebrow="Card System"
            title="Cards carry visual rhythm, not page-specific styling."
            intro="Destination, tour, experience, hotel, gallery, review, feature, statistic, blog, and CTA cards share one visual logic."
            media={
              <DestinationCard
                title="Destination Card"
                description="Image-first surface with badges, metadata, glass overlay, and hover zoom."
                image={placeholderImage}
                badges={["Large"]}
                action={{ label: "Preview", href: "#" }}
              />
            }
          />
          <GridSystem columns={3}>
            <TourCard
              title="Tour Card"
              description="Reusable for future trip collections."
              image={placeholderImage}
              meta={[
                { label: "Length", value: "10 days" },
                { label: "Pace", value: "Private" },
              ]}
            />
            <BlogCard
              title="Blog Card"
              excerpt="Designed for future guides without creating a blog page in Sprint 2."
              href="#"
              image={placeholderImage}
              category="Guide"
            />
            <FeatureCard
              icon={<Sparkles size={18} />}
              title="Feature Card"
              description="Clear, compact proof point component for future section layouts."
            />
            <StatisticCard
              value="2012"
              label="Established"
              helper="A metric component, not a business claim system."
            />
            <CtaCard
              title="CTA Card"
              description="Conversion surface with controlled variants."
              primary={{ label: "Primary CTA", href: "#" }}
            />
            <CardSkeleton />
          </GridSystem>
        </ContentContainer>
      </Section>
      <Section>
        <ContentContainer className="grid gap-8">
          <div className="grid gap-3">
            <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
              Forms + Timeline
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.03em]">
              Inquiry and itinerary primitives.
            </h2>
          </div>
          <GridSystem columns={2}>
            <div className="border-border grid gap-4 rounded-[2rem] border bg-white p-5">
              <TextField label="Name" placeholder="Your name" />
              <SelectField
                label="Travel style"
                options={[
                  { label: "Private family trip", value: "family" },
                  { label: "Luxury journey", value: "luxury" },
                ]}
              />
              <TextAreaField
                label="Brief"
                placeholder="What kind of China trip are you imagining?"
              />
            </div>
            <TravelTimeline
              items={[
                {
                  eyebrow: "Day 1",
                  title: "Timeline Item",
                  description:
                    "Expandable itinerary block with hotel, meals, transport, activities, and image support.",
                  hotel: "Hotel placeholder",
                  meals: ["Breakfast"],
                  transport: "Private car",
                  activities: ["Slow arrival", "Local orientation"],
                  image: placeholderImage,
                },
              ]}
            />
          </GridSystem>
        </ContentContainer>
      </Section>
      <Section>
        <ContentContainer>
          <NoResultsState />
        </ContentContainer>
      </Section>
      <SiteFooter
        columns={[
          { title: "Explore", items: navItems },
          { title: "Planning", items: [{ label: "Contact", href: "/contact" }] },
        ]}
        social={[{ label: "Instagram", href: "#" }]}
      />
    </PageContainer>
  );
}
