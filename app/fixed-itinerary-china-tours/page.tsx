import { fixedItinerarySlugs } from "@/content/services";
import { createServicePageRoute } from "@/features/service-pages/service-page-route";

const route = createServicePageRoute("fixed-itinerary-china-tours", fixedItinerarySlugs);

export const metadata = route.metadata;
export default route.Page;
