import type { Metadata } from "next";

import { CtaButton } from "@/components/cta";
import { Container } from "@/design-system/primitives/container";
import { Section } from "@/design-system/primitives/section";
import { Typography } from "@/design-system/primitives/typography";

export const metadata: Metadata = {
  title: "Page Not Found | AVIORA",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <Section spacing="screen" className="grid place-items-center">
        <Container size="sm" className="grid gap-4 text-center">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">404</p>
          <Typography as="h1" variant="heading">
            This route has moved on.
          </Typography>
          <Typography>
            The page you requested could not be found. Return to AVIORA or explore our private China
            journey ideas.
          </Typography>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <CtaButton href="/">Return Home</CtaButton>
            <CtaButton href="/tours" variant="outline">
              Browse Journeys
            </CtaButton>
          </div>
        </Container>
      </Section>
    </main>
  );
}
