import type { Metadata } from "next";

import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import { FeatureCard } from "@/components/cards/feature-card";
import { CtaButton } from "@/components/cta";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Card } from "@/components/ui/card";
import { planJourneyHref } from "@/config/public-site";
import { storyImages } from "@/content/home/homepage";
import { siteConfig } from "@/config/site";
import { Section } from "@/design-system/primitives/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact China Prime DMC",
  description:
    "Contact China Prime DMC to plan a private China journey, request a first route idea, or discuss travel advisor cooperation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageContainer>
      <SiteNavigation cta={{ label: "Plan Your Journey", href: planJourneyHref }} />
      <HeroLargeImage
        eyebrow="Contact"
        title="Start with a first route brief."
        subtitle="Tell us who is traveling, when you might come, and what kind of China feels right. We will reply with a clear first direction, not a generic package list."
        image={storyImages.rail}
        primary={{ label: "Email My Route Brief", href: planJourneyHref }}
        secondary={{ label: "Explore Journeys", href: "/journeys" }}
      />
      <Section spacing="default" className="bg-white">
        <ContentContainer size="lg" className="grid gap-10">
          <div className="grid gap-8">
            <Card className="border-foreground/10 bg-white/72 p-5 shadow-sm backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <span className="bg-foreground text-background grid size-10 shrink-0 place-items-center rounded-full">
                  <ShieldCheck size={17} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.02em]">What happens next?</h2>
                  <p className="text-muted mt-2 text-sm leading-6">
                    A China specialist reviews your notes and replies with route logic, pacing
                    questions, and the best next step.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="grid gap-6 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                Send the essentials in one email
              </h2>
              <p className="text-muted mt-2 text-sm leading-6">
                The button opens a pre-filled message with the fields we need to suggest a
                thoughtful first China route.
              </p>
            </div>
            <CtaButton href={planJourneyHref} icon={<ArrowRight size={16} aria-hidden="true" />}>
              Email My Route Brief
            </CtaButton>
          </Card>

          <GridSystem columns={3}>
            <FeatureCard
              icon={<Users size={18} aria-hidden="true" />}
              title="1. Who is traveling?"
              description="Adults, children, older parents, travel style, hotel comfort, walking pace, and any dietary needs."
            />
            <FeatureCard
              icon={<CalendarDays size={18} aria-hidden="true" />}
              title="2. When might you come?"
              description="Exact dates are helpful, but a month or season is enough for us to think about weather, crowds, and routing."
            />
            <FeatureCard
              icon={<MapPinned size={18} aria-hidden="true" />}
              title="3. What feels important?"
              description="Cities, food, pandas, nature, luxury hotels, family ease, photography, culture, or simply less stress."
            />
          </GridSystem>

          <GridSystem columns={3}>
            <FeatureCard
              icon={<Mail size={18} aria-hidden="true" />}
              title="Email"
              description={siteConfig.email}
            />
            <FeatureCard
              icon={<MessageCircle size={18} aria-hidden="true" />}
              title="Best for"
              description="Private journeys, family trips, luxury routes, first-time China, and travel advisor cooperation."
            />
            <FeatureCard
              icon={<ShieldCheck size={18} aria-hidden="true" />}
              title="Planning promise"
              description="No shopping-tour pressure, no generic fixed package, and no rushed route before we understand the travelers."
            />
          </GridSystem>

          <CtaCard
            title="Still unsure what to write?"
            description="That is normal. Send a simple note with your traveler count, possible dates, and one thing you want the trip to avoid. We can shape the rest together."
            primary={{ label: "Start With a Simple Note", href: planJourneyHref }}
            secondary={{ label: "Browse Journey Ideas", href: "/journeys" }}
          />
        </ContentContainer>
      </Section>
      <SiteFooter email={siteConfig.email} />
    </PageContainer>
  );
}
