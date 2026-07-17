import { CmsEditor } from "@/features/admin/cms-editor";
import { getAdminCmsRows } from "@/lib/cms/data";
import type { CmsBlogPost } from "@/lib/cms/types";

export default async function AdminJournalPage() {
  const posts = await getAdminCmsRows<CmsBlogPost>("cms_blog_posts");
  return <CmsEditor type="blog" initialItems={posts} />;
}
