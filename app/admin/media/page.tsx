import { MediaManager } from "@/features/admin/media-manager";
import { getAdminMedia } from "@/lib/cms/data";

export default async function AdminMediaPage() {
  return <MediaManager initialItems={await getAdminMedia()} />;
}
