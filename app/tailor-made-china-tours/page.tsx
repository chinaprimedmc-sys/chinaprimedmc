import { tailorMadeStartingPointSlugs } from "@/content/services";
import { createServicePageRoute } from "@/features/service-pages/service-page-route";

const route = createServicePageRoute("tailor-made-china-tours", tailorMadeStartingPointSlugs);

export const metadata = route.metadata;
export default route.Page;
