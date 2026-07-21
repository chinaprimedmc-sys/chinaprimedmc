import { defineArrayMember, defineField, defineType } from "sanity";

export const destinationHubType = defineType({
  name: "destinationHub",
  title: "目的地总览页",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero 标签", type: "string" }),
    defineField({
      name: "heroTitle",
      title: "Hero 标题",
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
    defineField({ name: "interestEyebrow", title: "兴趣筛选标签", type: "string" }),
    defineField({ name: "interestTitle", title: "兴趣筛选标题", type: "string" }),
    defineField({ name: "interestCopy", title: "兴趣筛选说明", type: "text", rows: 3 }),
    defineField({
      name: "interests",
      title: "兴趣选项",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "名称",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "note", title: "说明", type: "string" }),
            defineField({ name: "image", title: "图片", type: "r2Image" }),
          ],
        }),
      ],
    }),
    defineField({ name: "featuredEyebrow", title: "电影式精选标签", type: "string" }),
    defineField({ name: "featuredTitle", title: "电影式精选标题", type: "string" }),
    defineField({ name: "featuredCopy", title: "电影式精选说明", type: "text", rows: 3 }),
    defineField({
      name: "featuredDestinations",
      title: "电影式精选目的地",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "destination" }] })],
    }),
    defineField({ name: "regionsEyebrow", title: "地区列表标签", type: "string" }),
    defineField({ name: "regionsTitle", title: "地区列表标题", type: "string" }),
    defineField({ name: "regionsCopy", title: "地区列表说明", type: "text", rows: 3 }),
    defineField({
      name: "regions",
      title: "地区",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "名称",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "note", title: "说明", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "journeysEyebrow", title: "关联行程标签", type: "string" }),
    defineField({ name: "journeysTitle", title: "关联行程标题", type: "string" }),
    defineField({ name: "journeysCopy", title: "关联行程说明", type: "text", rows: 3 }),
    defineField({
      name: "featuredJourneys",
      title: "关联行程",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "journey" }] })],
      validation: (rule) => rule.max(4),
    }),
    defineField({ name: "ctaEyebrow", title: "底部 CTA 标签", type: "string" }),
    defineField({ name: "ctaTitle", title: "底部 CTA 标题", type: "string" }),
    defineField({ name: "ctaCopy", title: "底部 CTA 说明", type: "text", rows: 3 }),
    defineField({ name: "ctaLabel", title: "底部 CTA 按钮", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "目的地总览页" }) },
});
