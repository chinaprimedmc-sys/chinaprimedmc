import {
  AdminContentTable,
  AdminPageHeader,
  AdminPanel,
  ContentTitleCell,
  FormSection,
  QuickNote,
  RowActions,
  SaveBar,
  StatusBadge,
} from "@/features/admin/admin-components";
import { adminTours } from "@/features/admin/admin-data";
import { TextAreaField, TextField } from "@/components/forms/form-field";

export default function AdminToursPage() {
  const selected = adminTours[0];

  return (
    <>
      <AdminPageHeader
        eyebrow="线路管理"
        title="把线路编辑成一份高端旅行提案。"
        description="线路页面围绕信任、体验、品质和定制能力展开，支持未来 100+ 条线路使用同一模板。"
        primaryLabel="新增线路"
      />

      <section className="grid gap-6 xl:grid-cols-[1fr_1.05fr]">
        <AdminPanel title="线路列表" description="支持草稿、发布、复制、预览、排序和未来批量操作。">
          <AdminContentTable
            columns={["线路", "天数", "状态", "SEO", "更新", "操作"]}
            rows={adminTours.map((tour) => [
              <ContentTitleCell
                key="title"
                title={tour.title}
                meta={tour.route}
                image={tour.image}
              />,
              tour.duration,
              <StatusBadge key="status" status={tour.status} />,
              `${tour.seoScore}/100`,
              tour.updatedAt,
              <RowActions key="actions" />,
            ])}
          />
        </AdminPanel>

        <div className="grid gap-4">
          <FormSection title="线路基础信息" description="用于 Hero、Overview 和搜索索引。">
            <TextField label="线路名称" defaultValue={selected.title} />
            <TextField label="路线" defaultValue={selected.route} />
            <div className="grid gap-4 md:grid-cols-2">
              <TextField label="天数" defaultValue={selected.duration} />
              <TextField label="旅行风格" defaultValue={selected.styles.join(" / ")} />
            </div>
          </FormSection>

          <FormSection
            title="每日行程引擎"
            description="支持拖拽排序、复制 Day、快速新增 Day 和移动端优化。"
          >
            <div className="grid gap-3">
              {["Day 1 北京抵达", "Day 2 故宫与胡同", "Day 3 长城体验", "Day 4 高铁前往西安"].map(
                (day, index) => (
                  <div
                    key={day}
                    className="border-border bg-background/72 flex items-center justify-between rounded-2xl border p-4"
                  >
                    <span className="font-semibold">{day}</span>
                    <span className="text-muted text-sm">排序 {index + 1}</span>
                  </div>
                ),
              )}
            </div>
            <QuickNote>拖拽排序与版本历史已预留，后续接入持久化后启用。</QuickNote>
          </FormSection>

          <FormSection title="费用、酒店与体验" description="让运营人员清楚维护提案边界。">
            <TextAreaField
              label="费用包含"
              defaultValue="私人导游、专车、高铁票、精选酒店、景点门票、行程设计与在地支持。"
            />
            <TextAreaField
              label="费用不含"
              defaultValue="国际机票、个人消费、部分餐食、签证费用、旅行保险。"
            />
          </FormSection>
        </div>
      </section>

      <SaveBar />
    </>
  );
}
