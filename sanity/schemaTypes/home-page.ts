import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "首页设置",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero 品牌行", type: "string" }),
    defineField({
      name: "heroTitle",
      title: "Hero 主标题",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "heroCopy", title: "Hero 说明", type: "text", rows: 3 }),
    defineField({
      name: "heroImage",
      title: "Hero 图片",
      type: "r2Image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featuredJourneys",
      title: "精选行程",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "journey" }] })],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: "featuredDestinations",
      title: "精选目的地",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "destination" }] })],
      validation: (rule) => rule.max(8),
    }),
    defineField({
      name: "featuredPosts",
      title: "精选文章",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "blogPost" }] })],
      validation: (rule) => rule.max(4),
    }),
  ],
  preview: { prepare: () => ({ title: "AVIORA 首页内容" }) },
});
