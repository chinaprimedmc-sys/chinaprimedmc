"use client";

import { FaqList } from "@/components/content/faq-list";
import { trackEvent } from "@/lib/analytics/events";

export function TourFaqAccordion({
  faqs,
  journeySlug,
}: {
  faqs: Array<{ question: string; answer: string }>;
  journeySlug: string;
}) {
  return (
    <FaqList
      items={faqs}
      onOpen={(faq) => {
        trackEvent("tour_faq_open", {
          journey: journeySlug.slice(0, 160),
          question: faq.question.slice(0, 160),
        });
      }}
    />
  );
}
