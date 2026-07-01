import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  AdminPageHeader,
  AdminPanel,
  FormSection,
  QuickNote,
  SaveBar,
} from "@/features/admin/admin-components";
import { siteSettings } from "@/features/admin/admin-data";
import { TextAreaField, TextField } from "@/components/forms/form-field";
import { SelectField } from "@/components/forms/select-field";

export default function AdminSettingsPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="网站设置"
        title="管理全站品牌、联系与基础配置。"
        description="把 Logo、导航、Footer、联系方式、社交媒体和预留的 Analytics / Cookie 配置集中管理。"
        primaryLabel="保存设置"
      />

      <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="grid gap-4">
          <FormSection
            title="品牌基础"
            description="这些配置会影响导航、Footer、Open Graph 和后台展示。"
          >
            <TextField label="品牌名称" defaultValue={siteSettings.brand} />
            <TextField label="版权信息" defaultValue={siteSettings.copyright} />
            <SelectField
              label="默认主题"
              value="light"
              options={[
                { label: "浅色主题", value: "light" },
                { label: "深色主题（预留）", value: "dark" },
                { label: "跟随系统（预留）", value: "system" },
              ]}
            />
          </FormSection>

          <FormSection
            title="联系方式"
            description="未来可接入 WhatsApp、邮件模板和自动分配负责人。"
          >
            <TextField label="联系邮箱" defaultValue={siteSettings.email} />
            <TextField label="WhatsApp" defaultValue={siteSettings.whatsapp} />
            <div className="border-border bg-background/70 grid gap-3 rounded-[1.5rem] border p-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} /> 邮件询盘：已启用
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} /> WhatsApp：预留
              </div>
            </div>
          </FormSection>
        </div>

        <div className="grid gap-4">
          <FormSection
            title="导航与 Footer"
            description="用于前台导航、页脚链接、法律页面和转化入口。"
          >
            <TextAreaField
              label="主导航"
              defaultValue="Home\nDestinations\nExperiences\nJourneys\nAbout\nContact"
            />
            <TextAreaField
              label="Footer 快速链接"
              defaultValue="About China Prime DMC\nPrivate China Journeys\nDestinations\nExperiences\nTravel Journal\nFAQ\nPrivacy Policy\nTerms"
            />
          </FormSection>

          <FormSection title="社交媒体" description="统一维护前台浮动按钮、Footer 和分享卡片链接。">
            <TextField label="Facebook" defaultValue={siteSettings.facebook} />
            <TextField label="Instagram" defaultValue={siteSettings.instagram} />
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" className="gap-2">
                <Facebook size={16} /> 测试 Facebook
              </Button>
              <Button variant="secondary" className="gap-2">
                <Instagram size={16} /> 测试 Instagram
              </Button>
            </div>
          </FormSection>

          <AdminPanel title="预留配置" description="暂不启用，但结构已为后续增长工具准备好。">
            <div className="grid gap-3">
              <QuickNote>Analytics：预留 GA4、Meta Pixel、TikTok Pixel 和自定义事件。</QuickNote>
              <QuickNote>Cookie：预留同意横幅、地区策略和隐私配置。</QuickNote>
              <QuickNote>权限：预留管理员、编辑、运营、SEO、游客角色。</QuickNote>
            </div>
          </AdminPanel>
        </div>
      </section>

      <SaveBar />
    </>
  );
}
