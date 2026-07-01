import { AdminPageHeader } from "@/features/admin/admin-components";
import { CmsEditor } from "@/features/admin/cms/cms-editor";
import { readCmsDatabase } from "@/services/cms/storage";

export default async function AdminExperiencesPage() {
  const database = await readCmsDatabase();

  return (
    <>
      <AdminPageHeader
        eyebrow="旅行体验"
        title="新增、编辑并发布体验页面。"
        description="体验内容会进入 /experiences 与 /experience/:slug，并可关联目的地和 Journey。"
        primaryLabel="新增体验"
      />
      <CmsEditor
        type="experiences"
        title="Experience CMS"
        description="维护体验分类、时长、适合人群、体验步骤、关联目的地和关联 Journey。"
        initialItems={database.experiences}
      />
    </>
  );
}
