import { ArrowRight, Mail } from "lucide-react";

import { CtaButton } from "@/components/cta/cta-button";
import { WhatsAppIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import type { Tour } from "@/types/tour";

type TourInquiryPanelProps = {
  tour: Tour;
  planningHref: string;
};

export function TourInquiryPanel({ tour, planningHref }: TourInquiryPanelProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
      <div className="rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:p-8 lg:p-10">
        <Badge>Quick consultation</Badge>
        <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-[-0.035em] md:text-5xl">
          Start with the route, then make it yours.
        </h2>
        <p className="text-muted mt-4 text-base leading-7">
          Share your dates, travelers, comfort level, and concerns. The first reply should give you
          a clearer route shape, not a generic brochure.
        </p>

        <div className="mt-7 grid gap-3">
          <CtaButton
            href={planningHref}
            className="w-full justify-center"
            icon={<ArrowRight size={17} aria-hidden="true" />}
            data-cta-placement="inquiry-panel"
            data-journey-slug={tour.slug}
          >
            Plan My Trip
          </CtaButton>
          <div className="grid gap-3 sm:grid-cols-2">
            <CtaButton
              href={tour.inquiry.whatsappHref ?? tour.inquiry.emailHref}
              variant="whatsappFrosted"
              target="_blank"
              rel="noreferrer"
              className="flex-row justify-center gap-2.5"
              data-cta-placement="inquiry-whatsapp"
              data-journey-slug={tour.slug}
            >
              <WhatsAppIcon className="size-[19px] shrink-0" />
              <span>Message Our China Team</span>
            </CtaButton>
            <CtaButton
              href={tour.inquiry.emailHref}
              variant="outline"
              className="justify-center"
              icon={<Mail size={17} aria-hidden="true" />}
              data-cta-placement="inquiry-email"
              data-journey-slug={tour.slug}
            >
              Email Our China Team
            </CtaButton>
          </div>
        </div>
      </div>

      <div className="border-border rounded-[2rem] border bg-white p-6 shadow-sm md:p-8">
        <p className="text-muted text-xs font-semibold tracking-[0.16em] uppercase">
          One clear process
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">
          Your answers go directly to our China planning team.
        </h3>
        <ul className="text-muted mt-6 grid gap-4 text-sm leading-6">
          <li className="border-border border-t pt-4">Four focused steps, usually 3–5 minutes.</li>
          <li className="border-border border-t pt-4">
            This journey and source page are attached automatically.
          </li>
          <li className="border-border border-t pt-4">
            Your inquiry is stored securely and reviewed by a specialist.
          </li>
          <li className="border-border border-t pt-4">Expected personal reply within 24 hours.</li>
        </ul>
      </div>
    </div>
  );
}
