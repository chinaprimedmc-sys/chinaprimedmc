"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import styles from "@/features/tours/detail/tour-detail.module.css";
import { trackEvent } from "@/lib/analytics/events";

export function TourFaqAccordion({
  faqs,
  journeySlug,
}: {
  faqs: Array<{ question: string; answer: string }>;
  journeySlug: string;
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={styles.faqList}
      onValueChange={(value) => {
        if (!value) return;
        const index = Number(value.replace("faq-", "")) - 1;
        trackEvent("tour_faq_open", {
          journey: journeySlug.slice(0, 160),
          question: (faqs[index]?.question ?? value).slice(0, 160),
        });
      }}
    >
      {faqs.map((faq, index) => (
        <Accordion.Item key={faq.question} value={`faq-${index + 1}`} className={styles.faqItem}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.faqTrigger}>
              <span>{faq.question}</span>
              <ChevronDown size={18} aria-hidden="true" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.faqContent}>
            <p>{faq.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
