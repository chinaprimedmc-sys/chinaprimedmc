import { coverageHub } from "@/content/coverage";
import { createContentPageRoute } from "@/features/service-pages/service-page-route";

const route = createContentPageRoute(coverageHub);

export const metadata = route.metadata;
export default route.Page;
