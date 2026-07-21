import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "全站设置",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "网站名称", type: "string", initialValue: "AVIORA" }),
    defineField({ name: "brandDescriptor", title: "品牌说明", type: "string" }),
    defineField({
      name: "defaultSeoDescription",
      title: "默认 SEO 描述",
      type: "text",
      rows: 3,
      validation: (rule) => rule.min(80).max(170),
    }),
    defineField({ name: "footerDescription", title: "页脚说明", type: "text", rows: 3 }),
    defineField({ name: "email", title: "联系邮箱", type: "email" }),
    defineField({ name: "whatsapp", title: "WhatsApp 号码", type: "string" }),
    defineField({
      name: "whatsappLabel",
      title: "WhatsApp 按钮文字",
      type: "string",
      initialValue: "WhatsApp",
    }),
    defineField({ name: "whatsappHref", title: "WhatsApp 链接", type: "url" }),
    defineField({
      name: "primaryCtaLabel",
      title: "主 CTA 文字",
      type: "string",
      initialValue: "Plan My Trip",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "主 CTA 链接",
      type: "string",
      initialValue: "/start-planning",
    }),
    defineField({
      name: "navigation",
      title: "主导航",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "文字",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "链接",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "社交链接",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "名称",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "href",
              title: "链接",
              type: "url",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({ name: "socialImage", title: "默认社交分享图", type: "r2Image" }),
  ],
  preview: { prepare: () => ({ title: "全站设置" }) },
});
