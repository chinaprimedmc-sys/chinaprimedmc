import { ArrowRight, Compass, MapPinned, MessagesSquare, Route, Sparkles } from "lucide-react";

import { CtaButton } from "@/components/cta";
import { ContentContainer } from "@/components/layout/content-container";
import { Section } from "@/design-system/primitives/section";
import { cn } from "@/lib/utils/cn";
import type { LinkAction } from "@/types/component-library";

type PlanningPath = {
  label: string;
  title: string;
  description: string;
  href: string;
  action: string;
  icon: "destination" | "journey" | "experience" | "expert";
};

type StartPlanningPathsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  paths?: PlanningPath[];
  primary?: LinkAction;
  secondary?: LinkAction;
  className?: string;
};

const defaultPaths: PlanningPath[] = [
  {
    label: "I know where",
    title: "Choose a destination",
    description: "Start with Beijing, Chengdu, Shanghai, Guilin, or another China chapter.",
    href: "/destinations",
    action: "Browse destinations",
    icon: "destination",
  },
  {
    label: "I want a route",
    title: "Compare journeys",
    description: "Use sample private routes to understand pacing, cities, hotels, and flow.",
    href: "/journeys",
    action: "View journeys",
    icon: "journey",
  },
  {
    label: "I know the feeling",
    title: "Pick experiences",
    description: "Food, culture, pandas, nature, photography, family rhythm, and quieter moments.",
    href: "/experiences",
    action: "Explore experiences",
    icon: "experience",
  },
  {
    label: "I am not sure",
    title: "Ask a China specialist",
    description:
      "Send dates, travelers, and what feels hard. We will suggest the first route shape.",
    href: "/contact",
    action: "Start planning",
    icon: "expert",
  },
];

export function StartPlanningPaths({
  eyebrow = "Start here",
  title = "Four easy ways to begin planning China.",
  description = "China can feel big at first. Pick the question closest to where you are today, then let the site guide the next step.",
  paths = defaultPaths,
  primary,
  secondary,
  className,
}: StartPlanningPathsProps) {
  return (
    <Section spacing="default" className={cn("bg-white", className)}>
      <ContentContainer size="xl" className="grid gap-6 md:gap-8">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-2xl leading-tight font-semibold tracking-[-0.03em] md:mt-4 md:text-5xl">
              {title}
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-muted text-sm leading-6 md:text-base md:leading-7">{description}</p>
            {primary || secondary ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {primary ? (
                  <CtaButton href={primary.href} size="sm">
                    {primary.label}
                  </CtaButton>
                ) : null}
                {secondary ? (
                  <CtaButton href={secondary.href} variant="outline" size="sm">
                    {secondary.label}
                  </CtaButton>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {paths.map((path) => (
            <a
              key={path.href}
              href={path.href}
              className="group border-border bg-background/72 rounded-[1.25rem] border p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl md:rounded-[1.5rem] md:p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="bg-foreground text-background grid size-10 shrink-0 place-items-center rounded-full">
                  <PlanningIcon icon={path.icon} />
                </span>
                <span className="text-muted text-[0.68rem] font-bold tracking-[0.14em] uppercase">
                  {path.label}
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-tight font-semibold tracking-[-0.02em] md:mt-5 md:text-xl">
                {path.title}
              </h3>
              <p className="text-muted mt-3 text-sm leading-6">{path.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                {path.action}
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ))}
        </div>
      </ContentContainer>
    </Section>
  );
}

function PlanningIcon({ icon }: { icon: PlanningPath["icon"] }) {
  switch (icon) {
    case "destination":
      return <MapPinned size={18} aria-hidden="true" />;
    case "journey":
      return <Route size={18} aria-hidden="true" />;
    case "experience":
      return <Sparkles size={18} aria-hidden="true" />;
    case "expert":
      return <MessagesSquare size={18} aria-hidden="true" />;
    default:
      return <Compass size={18} aria-hidden="true" />;
  }
}
