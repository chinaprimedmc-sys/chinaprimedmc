import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "全站设置",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "网站名称",
      type: "string",
      initialValue: "AVIORA | China Prime DMC",
    }),
    defineField({
      name: "defaultSeoDescription",
      title: "默认 SEO 描述",
      type: "text",
      rows: 3,
      validation: (rule) => rule.min(80).max(170),
    }),
    defineField({ name: "whatsapp", title: "WhatsApp 号码", type: "string" }),
    defineField({ name: "email", title: "联系邮箱", type: "email" }),
    defineField({ name: "socialImage", title: "默认社交分享图", type: "r2Image" }),
  ],
  preview: { prepare: () => ({ title: "全站设置" }) },
});
