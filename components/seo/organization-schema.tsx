import { JsonLd } from "@/lib/seo/json-ld";
import { organizationSchema } from "@/lib/seo/schema";

export function OrganizationSchema() {
  return <JsonLd id="organization-schema" data={organizationSchema()} />;
}
