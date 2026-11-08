import { JsonLd } from "@/lib/seo/json-ld";
import { websiteSchema } from "@/lib/seo/schema";

export function WebSiteSchema() {
  return <JsonLd id="website-schema" data={websiteSchema()} />;
}
