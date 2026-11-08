import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/schema";

type BreadcrumbSchemaProps = {
  id: string;
  items: readonly BreadcrumbItem[];
};

export function BreadcrumbSchema({ id, items }: BreadcrumbSchemaProps) {
  return (
    <JsonLd
      id={id}
      data={breadcrumbSchema(items.map(({ name, item }) => ({ name, path: item })))}
    />
  );
}
