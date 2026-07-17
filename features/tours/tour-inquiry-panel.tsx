"use client";

import { CalendarDays, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

import { CtaButton } from "@/components/cta/cta-button";
import { SelectField } from "@/components/forms/select-field";
import { TextAreaField, TextField } from "@/components/forms/form-field";
import { TravelerSelector } from "@/components/forms/traveler-selector";
import { Badge } from "@/components/ui/badge";
import type { Tour } from "@/types/tour";

type TourInquiryPanelProps = {
  tour: Tour;
};

export function TourInquiryPanel({ tour }: TourInquiryPanelProps) {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [comfort, setComfort] = useState("premium");

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:p-8">
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
            href={tour.inquiry.emailHref}
            className="w-full justify-center"
            icon={<Mail size={17} aria-hidden="true" />}
          >
            Email My Trip Request
          </CtaButton>
          <div className="grid gap-3 sm:grid-cols-2">
            <CtaButton
              href={tour.inquiry.whatsappHref ?? tour.inquiry.emailHref}
              variant="outline"
              className="justify-center"
              icon={<MessageCircle size={17} aria-hidden="true" />}
            >
              WhatsApp
            </CtaButton>
            <CtaButton
              href={tour.inquiry.scheduleCallHref ?? tour.inquiry.emailHref}
              variant="outline"
              className="justify-center"
              icon={<CalendarDays size={17} aria-hidden="true" />}
            >
              Schedule Call
            </CtaButton>
          </div>
        </div>
      </div>

      <form className="border-border grid gap-4 rounded-[2rem] border bg-white p-5 shadow-sm md:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Name" placeholder="Your name" autoComplete="name" />
          <TextField
            label="Email"
            placeholder="you@example.com"
            autoComplete="email"
            type="email"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField label="Travel dates" placeholder="Month or exact dates" />
          <SelectField
            label="Comfort level"
            value={comfort}
            onValueChange={setComfort}
            options={[
              { label: "Premium private", value: "premium" },
              { label: "Luxury", value: "luxury" },
              { label: "Ultra-luxury", value: "ultra-luxury" },
            ]}
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <TravelerSelector label="Adults" value={adults} min={1} onChange={setAdults} />
          <TravelerSelector label="Children" value={children} onChange={setChildren} />
        </div>
        <TextAreaField
          label="What should we know?"
          defaultValue={tour.inquiry.defaultMessage}
          helper="Tell us what matters most and we will use it to shape the first route idea."
        />
        <CtaButton
          href={tour.inquiry.emailHref}
          className="justify-center"
          icon={<Send size={17} aria-hidden="true" />}
        >
          Send Inquiry
        </CtaButton>
      </form>
    </div>
  );
}
