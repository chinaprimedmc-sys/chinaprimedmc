import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { homeNavItems } from "@/content/home/homepage";
import { Section } from "@/design-system/primitives/section";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact an AVIORA China Travel Specialist",
  description:
    "Contact an AVIORA specialist to discuss your dates, interests, hotel preferences and private China tour ideas.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageContainer>
      <SiteNavigation />
      <Section spacing="spacious">
        <ContentContainer size="lg" className="grid gap-10">
          <div className="max-w-4xl">
            <p className="type-caption text-muted font-semibold">Contact</p>
            <h1 className="type-page-title mt-5">Talk to a China specialist.</h1>
            <p className="text-muted mt-5 max-w-2xl text-base leading-7 md:text-lg">
              Have a route in mind, a booking question or a specific request? Contact our China team
              directly. Still exploring? Start with our short planning form.
            </p>
          </div>
          <Card className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="type-card-title">Plan your private trip</h2>
              <p className="text-muted mt-2 text-base leading-7">
                Share the essential trip details through our secure planning form. A China
                specialist will review them and reply within 24 hours.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
              <CtaButton variant="outline" href="/start-planning?source=/contact">
                Start planning
              </CtaButton>
              <CtaButton
                href="https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20would%20like%20help%20planning%20a%20private%20journey%20in%20China."
                icon={<MessageCircle size={16} aria-hidden="true" />}
                target="_blank"
                rel="noreferrer"
              >
                Message Our China Team
              </CtaButton>
            </div>
          </Card>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex min-h-11 items-center gap-3 self-start font-semibold text-[var(--color-forest)] underline underline-offset-4"
          >
            <Mail size={18} aria-hidden="true" /> Email our China team
          </a>
        </ContentContainer>
      </Section>
      <SiteFooter
        columns={[{ title: "Explore", items: homeNavItems }]}
        social={[]}
        email={siteConfig.email}
      />
    </PageContainer>
  );
}
