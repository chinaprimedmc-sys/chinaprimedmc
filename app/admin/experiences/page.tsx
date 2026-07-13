import {
  AdminContentTable,
  AdminPageHeader,
  AdminPanel,
  ContentTitleCell,
  FormSection,
  RowActions,
  SaveBar,
  StatusBadge,
} from "@/features/admin/admin-components";
import { adminExperiences } from "@/features/admin/admin-data";
import { TextAreaField, TextField } from "@/components/forms/form-field";

export default function AdminExperiencesPage() {
  const selected = adminExperiences[0];

  return (
    <>
      <AdminPageHeader
        eyebrow="旅行体验"
        title="把体验变成可复用的旅行模块。"
        description="体验可以关联目的地、线路和文章，帮助运营团队构建更完整的内容网络。"
        primaryLabel="新增体验"
      />

      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <AdminPanel title="体验列表" description="按城市、主题、状态和关联线路管理。">
          <AdminContentTable
            columns={["体验", "城市", "分类", "关联线路", "状态", "操作"]}
            rows={adminExperiences.map((experience) => [
              <ContentTitleCell
                key="title"
                title={experience.title}
                meta={experience.category}
                image={experience.image}
              />,
              experience.city,
              experience.category,
              `${experience.linkedTours} 条`,
              <StatusBadge key="status" status={experience.status} />,
              <RowActions key="actions" />,
            ])}
          />
        </AdminPanel>

        <div className="grid gap-4">
          <FormSection
            title="体验基础信息"
            description="用于 Experience Card、推荐系统和搜索索引。"
          >
            <TextField label="体验名称" defaultValue={selected.title} />
            <div className="grid gap-4 md:grid-cols-2">
              <TextField label="城市" defaultValue={selected.city} />
              <TextField label="分类" defaultValue={selected.category} />
            </div>
            <TextAreaField
              label="体验描述"
              defaultValue="在更合适的时间、更舒服的节奏中体验中国，而不是被固定打卡表推着走。"
            />
          </FormSection>

          <FormSection title="关联关系" description="体验必须能关联目的地、线路和文章。">
            <TextField label="关联目的地" defaultValue="成都，北京，上海" />
            <TextField label="关联线路" defaultValue="First China, Beautifully Paced" />
            <TextField label="推荐标签" defaultValue="亲子，首次访华，文化，自然" />
          </FormSection>
        </div>
      </section>

      <SaveBar />
    </>
  );
}
