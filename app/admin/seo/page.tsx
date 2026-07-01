import { CheckCircle2, RefreshCw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  AdminContentTable,
  AdminPageHeader,
  AdminPanel,
  FormSection,
  QuickNote,
  RowActions,
  SaveBar,
  SeoLengthMeter,
  StatusBadge,
} from "@/features/admin/admin-components";
import { seoItems } from "@/features/admin/admin-data";
import { TextAreaField, TextField } from "@/components/forms/form-field";
import { SelectField } from "@/components/forms/select-field";

const jsonLdExample = `{\n  "@type": "TravelAgency",\n  "name": "China Prime DMC"\n}`;

export default function AdminSeoPage() {
  const selected = seoItems[0];

  return (
    <>
      <AdminPageHeader
        eyebrow="SEO 管理"
        title="集中管理每个页面的搜索表现。"
        description="统一检查标题、描述、Canonical、Open Graph、结构化数据、Robots 与 Sitemap，避免运营分散修改。"
        primaryLabel="运行 SEO 检查"
      />

      <section className="grid gap-6 xl:grid-cols-[1fr_0.92fr]">
        <AdminPanel
          title="页面 SEO 状态"
          description="未来可按页面类型、语言、状态和更新时间筛选。"
          action={
            <Button variant="secondary" className="gap-2">
              <RefreshCw size={16} aria-hidden="true" />
              重新扫描
            </Button>
          }
        >
          <AdminContentTable
            columns={["页面", "路径", "标题长度", "描述长度", "状态", "操作"]}
            rows={seoItems.map((item) => [
              <span key="page" className="font-semibold">
                {item.page}
              </span>,
              <span key="path" className="text-muted text-xs">
                {item.path}
              </span>,
              `${item.titleLength}/70`,
              `${item.descriptionLength}/170`,
              <StatusBadge key="status" status={item.status} />,
              <RowActions key="actions" />,
            ])}
          />
        </AdminPanel>

        <div className="grid gap-4">
          <FormSection title="页面元信息" description="用于 Metadata API、搜索结果展示和社交分享。">
            <TextField label="页面名称" defaultValue={selected.page} />
            <TextField
              label="Canonical URL"
              defaultValue={`https://chinaprimedmc.com${selected.path}`}
            />
            <TextField
              label="SEO 标题"
              defaultValue="Private China Journeys Designed Around You | China Prime DMC"
            />
            <TextAreaField
              label="Meta Description"
              defaultValue="Plan a private China journey with local experts, cinematic destinations, tailored pacing, and premium on-the-ground care."
            />
            <SeoLengthMeter label="SEO 标题长度" value={selected.titleLength} max={70} />
            <SeoLengthMeter
              label="Meta Description 长度"
              value={selected.descriptionLength}
              max={170}
            />
          </FormSection>

          <FormSection
            title="结构化数据与索引"
            description="预留 JSON-LD、Robots、Open Graph 和 Sitemap 配置。"
          >
            <SelectField
              label="Schema 类型"
              value="organization"
              options={[
                { label: "Organization", value: "organization" },
                { label: "TouristDestination", value: "destination" },
                { label: "TouristTrip", value: "tour" },
                { label: "Article", value: "article" },
              ]}
            />
            <TextAreaField label="JSON-LD 覆盖字段" defaultValue={jsonLdExample} />
            <QuickNote>
              <span className="inline-flex items-center gap-2 font-semibold text-emerald-700">
                <CheckCircle2 size={15} /> 当前页面已纳入 Sitemap。
              </span>
              <br />
              Robots 默认为 index, follow；搜索结果页可根据分页策略单独设置 canonical。
            </QuickNote>
          </FormSection>
        </div>
      </section>

      <SaveBar />
    </>
  );
}
