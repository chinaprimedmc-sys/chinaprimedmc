import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Section } from "@/design-system/primitives/section";

export default function NotFound() {
  return (
    <PageContainer>
      <SiteNavigation />
      <Section spacing="screen" className="grid place-items-center pt-28">
        <ContentContainer size="sm" className="grid gap-6 text-center">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">404</p>
          <h1 className="text-4xl leading-tight font-semibold tracking-[-0.04em] md:text-6xl">
            This route is not on the map.
          </h1>
          <p className="text-muted text-base leading-7">
            The page may have moved, but the journey can still begin from destinations, private
            journeys, or the travel guide.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CtaButton href="/journeys">Explore Journeys</CtaButton>
            <CtaButton href="/destinations" variant="outline">
              Browse Destinations
            </CtaButton>
          </div>
        </ContentContainer>
      </Section>
      <SiteFooter />
    </PageContainer>
  );
}
