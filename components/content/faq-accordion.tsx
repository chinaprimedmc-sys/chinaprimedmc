"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import type { PlanningFaqCategory } from "@/content/planning";

type FaqAccordionProps = {
  categories: PlanningFaqCategory[];
};

export function FaqAccordion({ categories }: FaqAccordionProps) {
  return (
    <div className="grid gap-6">
      {categories.map((category) => (
        <section key={category.category} className="grid gap-4">
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
              {category.category}
            </p>
            <p className="text-muted mt-2 max-w-2xl text-sm leading-6">{category.description}</p>
          </div>
          <Accordion.Root type="single" collapsible className="grid gap-3">
            {category.items.map((item, index) => (
              <Accordion.Item
                key={item.question}
                value={`${category.category}-${index}`}
                className="border-border overflow-hidden rounded-[1.35rem] border bg-white"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between gap-5 p-5 text-left">
                    <span className="text-base font-semibold tracking-[-0.015em]">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={cn("shrink-0 transition group-data-[state=open]:rotate-180")}
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
                  <div className="border-border border-t px-5 py-4">
                    <p className="text-muted text-sm leading-7">{item.answer}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </section>
      ))}
    </div>
  );
}
