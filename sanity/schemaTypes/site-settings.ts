import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "全站设置",
  type: "document",
  groups: [
    { name: "brand", title: "品牌" },
    { name: "contact", title: "联系方式" },
    { name: "navigation", title: "导航与 CTA" },
    { name: "social", title: "社交媒体" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      title: "网站名称",
      type: "string",
      initialValue: "AVIORA",
      group: "brand",
    }),
    defineField({ name: "brandDescriptor", title: "品牌说明", type: "string", group: "brand" }),
    defineField({
      name: "defaultSeoDescription",
      title: "默认 SEO 描述",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (rule) => rule.min(80).max(170),
    }),
    defineField({
      name: "footerDescription",
      title: "页脚说明",
      type: "text",
      rows: 3,
      group: "brand",
    }),
    defineField({ name: "email", title: "联系邮箱", type: "email", group: "contact" }),
    defineField({ name: "whatsapp", title: "WhatsApp 号码", type: "string", group: "contact" }),
    defineField({
      name: "whatsappLabel",
      title: "WhatsApp 按钮文字",
      type: "string",
      initialValue: "WhatsApp",
      group: "contact",
    }),
    defineField({ name: "whatsappHref", title: "WhatsApp 链接", type: "url", group: "contact" }),
    defineField({
      name: "primaryCtaLabel",
      title: "主 CTA 文字",
      type: "string",
      initialValue: "Plan My Trip",
      group: "navigation",
    }),
    defineField({
      name: "primaryCtaHref",
      title: "主 CTA 链接",
      type: "string",
      initialValue: "/start-planning",
      group: "navigation",
    }),
    defineField({
      name: "navigation",
      title: "主导航",
      type: "array",
      group: "navigation",
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
      group: "social",
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
    defineField({ name: "socialImage", title: "默认社交分享图", type: "r2Image", group: "seo" }),
  ],
  preview: { prepare: () => ({ title: "全站设置" }) },
});
