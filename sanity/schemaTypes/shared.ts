import { defineArrayMember, defineField } from "sanity";

export const seoFields = [
  defineField({
    name: "seoTitle",
    title: "SEO 标题",
    type: "string",
    description: "建议 45-60 个英文字符，包含页面核心主题与 AVIORA。",
    validation: (rule) => rule.required().min(20).max(65),
    group: "seo",
  }),
  defineField({
    name: "seoDescription",
    title: "SEO 描述",
    type: "text",
    rows: 3,
    description: "建议 120-160 个英文字符，说明页面能帮助客户解决什么。",
    validation: (rule) => rule.required().min(80).max(170),
    group: "seo",
  }),
  defineField({
    name: "noIndex",
    title: "阻止搜索引擎收录",
    type: "boolean",
    initialValue: false,
    group: "seo",
  }),
];

export const portableTextField = defineField({
  name: "body",
  title: "正文",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "正文", value: "normal" },
        { title: "二级标题", value: "h2" },
        { title: "三级标题", value: "h3" },
        { title: "引用", value: "blockquote" },
      ],
    }),
    defineArrayMember({ type: "r2Image" }),
  ],
  group: "content",
});

export const commonGroups = [
  { name: "content", title: "内容", default: true },
  { name: "media", title: "图片" },
  { name: "relations", title: "关联" },
  { name: "seo", title: "SEO" },
];
