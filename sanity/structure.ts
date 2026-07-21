import type { DocumentActionComponent } from "sanity";
import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["homePage", "siteSettings"]);

export const structure: StructureResolver = (structureBuilder) =>
  structureBuilder
    .list()
    .title("AVIORA 内容后台")
    .items([
      structureBuilder
        .listItem()
        .id("journeys")
        .title("行程")
        .child(structureBuilder.documentTypeList("journey").title("全部行程")),
      structureBuilder
        .listItem()
        .id("destinations")
        .title("目的地")
        .child(structureBuilder.documentTypeList("destination").title("全部目的地")),
      structureBuilder
        .listItem()
        .id("blog-posts")
        .title("博客")
        .child(structureBuilder.documentTypeList("blogPost").title("全部文章")),
      structureBuilder.divider(),
      structureBuilder
        .listItem()
        .id("home-page")
        .title("首页精选")
        .child(structureBuilder.document().schemaType("homePage").documentId("homePage")),
      structureBuilder
        .listItem()
        .id("site-settings")
        .title("全站设置")
        .child(structureBuilder.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);

export const singletonActions = (
  input: DocumentActionComponent[],
  context: { schemaType: string },
) =>
  singletonTypes.has(context.schemaType)
    ? input.filter((action) => !["delete", "duplicate"].includes(action.action ?? ""))
    : input;
