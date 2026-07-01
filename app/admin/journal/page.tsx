import {
  AdminContentTable,
  AdminPageHeader,
  AdminPanel,
  ContentTitleCell,
  DraftEditorPreview,
  FormSection,
  RowActions,
  SaveBar,
  SeoLengthMeter,
  StatusBadge,
} from "@/features/admin/admin-components";
import { adminArticles } from "@/features/admin/admin-data";
import { TextAreaField, TextField } from "@/components/forms/form-field";
import { SelectField } from "@/components/forms/select-field";

export default function AdminJournalPage() {
  const selected = adminArticles[0];

  return (
    <>
      <AdminPageHeader
        eyebrow="旅行杂志"
        title="管理像高端旅行杂志一样的内容。"
        description="统一管理文章、分类、标签、作者、关联内容和 SEO，让内容生态持续为搜索与转化服务。"
        primaryLabel="新建文章"
      />

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <AdminPanel
          title="文章内容库"
          description="支持草稿、待发布、已发布状态，以及目的地、线路、体验的自动关联。"
        >
          <AdminContentTable
            columns={["文章", "分类", "作者", "状态", "SEO", "更新", "操作"]}
            rows={adminArticles.map((article) => [
              <ContentTitleCell
                key="title"
                title={article.title}
                meta={`/${article.slug}`}
                image={article.image}
              />,
              article.category,
              article.author,
              <StatusBadge key="status" status={article.status} />,
              `${article.seoScore} 分`,
              article.updatedAt,
              <RowActions key="actions" />,
            ])}
          />
        </AdminPanel>

        <div className="grid gap-4">
          <FormSection
            title="文章基础信息"
            description="用于文章详情页、内容中心、搜索结果和 Open Graph 分享。"
          >
            <TextField label="文章标题" defaultValue={selected.title} />
            <TextField label="URL Slug" defaultValue={selected.slug} />
            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                label="分类"
                value="travel-guides"
                options={[
                  { label: "旅行指南", value: "travel-guides" },
                  { label: "签证与入境", value: "visa" },
                  { label: "美食文化", value: "food-culture" },
                  { label: "高端酒店", value: "luxury-hotels" },
                ]}
              />
              <TextField label="作者" defaultValue={selected.author} />
            </div>
            <TextField
              label="标签"
              defaultValue="首次访华，北京，家庭旅行，秋季"
              helper="多个标签用中文逗号分隔，未来可替换为 Tag Picker。"
            />
          </FormSection>

          <FormSection
            title="正文编辑"
            description="当前预留 Markdown / 富文本双模式，未来接入正式编辑器与版本历史。"
          >
            <DraftEditorPreview defaultValue="## 开篇\n用一张强图片和一个清晰观点开始，而不是堆砌攻略信息。\n\n## 适合谁\n第一次来中国的家庭、情侣和高端定制客人。" />
            <TextAreaField
              label="图片说明与引用"
              defaultValue="图片说明需要为 SEO、无障碍和杂志式阅读体验服务。"
            />
          </FormSection>

          <FormSection
            title="关联与 SEO"
            description="文章必须连接目的地、线路和体验，形成完整内容网络。"
          >
            <TextField label="关联目的地" defaultValue="北京，上海，成都" />
            <TextField label="关联 Journey" defaultValue="First China, Beautifully Paced" />
            <SeoLengthMeter
              label="SEO 标题长度"
              value={selected.seoScore > 90 ? 58 : 47}
              max={70}
            />
            <SeoLengthMeter label="Meta Description 长度" value={154} max={170} />
          </FormSection>
        </div>
      </section>

      <SaveBar />
    </>
  );
}
