import { ArrowUpRight, BadgeCheck, Handshake, MapPinned } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/content";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Badge } from "@/components/ui/badge";
import { exhibitionProof } from "@/content/trust/exhibition";
import { Section } from "@/design-system/primitives/section";
import { cn } from "@/lib/utils/cn";

type ExhibitionProofSectionProps = {
  compact?: boolean;
  className?: string;
};

export function ExhibitionProofSection({
  compact = false,
  className,
}: ExhibitionProofSectionProps) {
  return (
    <Section spacing={compact ? "default" : "spacious"} className={cn("bg-white", className)}>
      <ContentContainer size="xl" className="grid gap-8">
        <SectionHeader
          eyebrow={exhibitionProof.eyebrow}
          title={compact ? "Seen in the inbound China travel trade." : exhibitionProof.title}
          description={exhibitionProof.description}
        />

        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <article className="relative min-h-[22rem] overflow-hidden rounded-[2rem] shadow-sm md:min-h-[30rem]">
            <OptimizedImage
              src={exhibitionProof.image.src}
              alt={exhibitionProof.image.alt}
              fill
              sizes="(min-width:1024px) 58vw, 100vw"
              objectPosition={exhibitionProof.image.objectPosition}
              frameClassName="h-full"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/8 to-transparent" />
            <div className="absolute right-4 bottom-4 left-4 grid gap-3 md:right-6 md:bottom-6 md:left-6">
              <div className="flex flex-wrap gap-2">
                {exhibitionProof.facts.map((fact) => (
                  <Badge
                    key={fact.label}
                    className="border-white/35 bg-white/24 text-white backdrop-blur-xl"
                  >
                    {fact.label}
                  </Badge>
                ))}
              </div>
              <h3 className="max-w-2xl text-2xl leading-tight font-semibold tracking-[-0.03em] text-white md:text-4xl">
                Real conversations, stronger China journeys.
              </h3>
            </div>
          </article>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/70 bg-white/68 p-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:p-6">
              <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
                Why it matters
              </p>
              <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.03em] md:text-3xl">
                Trust is built before the first itinerary is written.
              </h3>
              <p className="text-muted mt-3 text-sm leading-6">
                Trade-show conversations expose us to real buyer questions: family comfort,
                halal-aware planning, first-time routes, hotel expectations, and what international
                travelers need to feel confident choosing China.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
              >
                Learn why travelers choose us
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <GridSystem columns={1} className="gap-3">
              <TrustPoint
                icon={<Handshake size={18} aria-hidden="true" />}
                title="Partner-level conversations"
                description="We listen to regional travel buyers and advisors, then turn those questions into clearer traveler-facing routes."
              />
              <TrustPoint
                icon={<MapPinned size={18} aria-hidden="true" />}
                title="Inbound China focus"
                description="The work is specific: private China journeys, ground support, comfort, pacing, and local expertise."
              />
              <TrustPoint
                icon={<BadgeCheck size={18} aria-hidden="true" />}
                title="Visible, accountable team"
                description="A real team behind the website makes the planning conversation feel more human and trustworthy."
              />
            </GridSystem>
          </div>
        </div>
      </ContentContainer>
    </Section>
  );
}

function TrustPoint({
  description,
  icon,
  title,
}: {
  description: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex gap-3 rounded-[1.25rem] border border-white/70 bg-white/52 p-4 shadow-sm backdrop-blur-xl">
      <span className="bg-foreground text-background grid size-10 shrink-0 place-items-center rounded-full">
        {icon}
      </span>
      <div>
        <h3 className="text-base font-semibold tracking-[-0.02em]">{title}</h3>
        <p className="text-muted mt-1 text-sm leading-6">{description}</p>
      </div>
    </div>
  );
}
