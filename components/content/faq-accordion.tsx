import type { PlanningFaqCategory } from "@/content/planning";

import { FaqList } from "./faq-list";

type FaqAccordionProps = {
  categories: PlanningFaqCategory[];
};

export function FaqAccordion({ categories }: FaqAccordionProps) {
  return (
    <div className="grid gap-10">
      {categories.map((category) => (
        <section key={category.category} className="grid gap-5">
          <div>
            <h2 className="type-card-title">{category.category}</h2>
            <p className="text-muted mt-2 max-w-2xl text-base leading-relaxed">
              {category.description}
            </p>
          </div>
          <FaqList items={category.items} />
        </section>
      ))}
    </div>
  );
}
