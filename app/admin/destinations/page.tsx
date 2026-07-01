import {
  AdminContentTable,
  AdminPageHeader,
  AdminPanel,
  ContentTitleCell,
  FormSection,
  QuickNote,
  RowActions,
  SaveBar,
  SeoLengthMeter,
  StatusBadge,
} from "@/features/admin/admin-components";
import { adminDestinations } from "@/features/admin/admin-data";
import { TextAreaField, TextField } from "@/components/forms/form-field";

export default function AdminDestinationsPage() {
  const selected = adminDestinations[0];

  return (
    <>
      <AdminPageHeader
        eyebrow="目的地管理"
        title="管理每一个目的地的故事结构。"
        description="目的地页面不是百科，而是激发旅行欲望、建立信任并推荐相关线路的内容系统。"
        primaryLabel="新增目的地"
      />

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <AdminPanel
          title="目的地列表"
          description="支持新增、编辑、复制、删除、草稿、发布、排序与预览。"
        >
          <AdminContentTable
            columns={["目的地", "区域", "状态", "SEO", "更新", "操作"]}
            rows={adminDestinations.map((destination) => [
              <ContentTitleCell
                key="title"
                title={destination.name}
                meta={`/destinations/${destination.slug}`}
                image={destination.image}
              />,
              destination.region,
              <StatusBadge key="status" status={destination.status} />,
              `${destination.seoScore}/100`,
              destination.updatedAt,
              <RowActions key="actions" />,
            ])}
          />
        </AdminPanel>

        <div className="grid gap-4">
          <FormSection title="Hero 与基础信息" description="首屏内容决定目的地页面的第一印象。">
            <div className="grid gap-4 md:grid-cols-2">
              <TextField label="目的地名称" defaultValue={selected.name} />
              <TextField label="Slug" defaultValue={selected.slug} />
            </div>
            <TextField label="Hero 标语" defaultValue="Imperial scale, made human." />
            <TextAreaField
              label="简短介绍"
              defaultValue="用更从容的节奏理解北京：故宫、胡同、寺庙清晨与长城体验被组织成适合首次访华家庭的私人旅程。"
            />
          </FormSection>

          <FormSection title="内容分组" description="运营人员按模块维护，避免一个超长表单。">
            <QuickNote>
              已配置：图库、亮点、最佳旅行时间、旅行体验、推荐线路、旅行贴士、FAQ。
            </QuickNote>
            <div className="grid gap-3 md:grid-cols-3">
              {["图库 8 张", "亮点 6 个", "FAQ 5 条"].map((item) => (
                <div
                  key={item}
                  className="border-border bg-background/72 rounded-2xl border p-4 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </FormSection>

          <FormSection
            title="SEO"
            description="发布前必须检查标题、描述、Canonical、OG 和 FAQ Schema。"
          >
            <TextField
              label="SEO 标题"
              defaultValue="Private Beijing Tours and Luxury Beijing Travel"
            />
            <TextAreaField
              label="Meta Description"
              defaultValue="Plan a private Beijing tour with calm pacing, expert guides, family-friendly logistics, and luxury China travel support."
            />
            <SeoLengthMeter label="标题长度" value={54} max={60} />
            <SeoLengthMeter label="描述长度" value={143} max={160} />
          </FormSection>
        </div>
      </section>

      <SaveBar />
    </>
  );
}
