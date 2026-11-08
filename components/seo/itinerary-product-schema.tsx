import { JsonLd } from "@/lib/seo/json-ld";
import { itineraryProductSchema, type ItineraryProductInput } from "@/lib/seo/schema";

type ItineraryProductSchemaProps = {
  id: string;
  itinerary: ItineraryProductInput;
};

export function ItineraryProductSchema({ id, itinerary }: ItineraryProductSchemaProps) {
  return <JsonLd id={id} data={itineraryProductSchema(itinerary)} />;
}
