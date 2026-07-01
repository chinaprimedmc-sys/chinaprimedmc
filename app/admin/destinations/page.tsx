import { AdminPageHeader } from "@/features/admin/admin-components";
import { CmsEditor } from "@/features/admin/cms/cms-editor";
import { readCmsDatabase } from "@/services/cms/storage";

export default async function AdminDestinationsPage() {
  const database = await readCmsDatabase();

  return (
    <>
      <AdminPageHeader
        eyebrow="目的地管理"
        title="新增、编辑并发布目的地页面。"
        description="这里保存的内容会进入 CMS 数据源，并驱动 /destinations 与 /destination/:slug 前台页面。"
        primaryLabel="新增目的地"
      />
      <CmsEditor
        type="destinations"
        title="目的地 CMS"
        description="支持 slug、Hero 图片、SEO、Featured、排序和 Destination → Experience → Journey 关系。"
        initialItems={database.destinations}
      />
    </>
  );
}
