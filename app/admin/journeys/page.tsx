import { AdminPageHeader } from "@/features/admin/admin-components";
import { CmsEditor } from "@/features/admin/cms/cms-editor";
import { readCmsDatabase } from "@/services/cms/storage";

export default async function AdminJourneysPage() {
  const database = await readCmsDatabase();

  return (
    <>
      <AdminPageHeader
        eyebrow="Journeys 管理"
        title="新增、编辑并发布 Journey 页面。"
        description="Journey 是核心商业页面。这里保存的内容会进入 /journeys 与 /journey/:slug。"
        primaryLabel="新增 Journey"
      />
      <CmsEditor
        type="journeys"
        title="Journey CMS"
        description="维护路线、天数、旅行风格、SEO、Featured、关联目的地和包含的体验。"
        initialItems={database.journeys}
      />
    </>
  );
}
