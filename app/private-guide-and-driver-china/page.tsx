import { createServicePageRoute } from "@/features/service-pages/service-page-route";

const route = createServicePageRoute("private-guide-and-driver-china");

export const metadata = route.metadata;
export default route.Page;
