import { JsonLd } from "@/lib/seo/json-ld";
import { faqPageSchema, type FAQItem } from "@/lib/seo/schema";

type FAQSchemaProps = {
  id: string;
  items: readonly FAQItem[];
  url?: string;
};

export function FAQSchema({ id, items, url }: FAQSchemaProps) {
  return <JsonLd id={id} data={faqPageSchema(items, url)} />;
}
