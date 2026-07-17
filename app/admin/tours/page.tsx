import { CmsEditor } from "@/features/admin/cms-editor";
import { getAdminCmsRows } from "@/lib/cms/data";
import type { CmsJourney } from "@/lib/cms/types";

export default async function AdminToursPage() {
  const journeys = await getAdminCmsRows<CmsJourney>("cms_journeys");
  return <CmsEditor type="journey" initialItems={journeys} />;
}
