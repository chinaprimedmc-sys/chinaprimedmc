import type { DocumentActionComponent } from "sanity";
import type { DefaultDocumentNodeResolver, StructureResolver } from "sanity/structure";
import {
  BookOpenText,
  CircleAlert,
  Globe2,
  House,
  MapPinned,
  Plane,
  Settings2,
} from "lucide-react";

import { DocumentPreview } from "@/sanity/components/document-preview";
import { StudioDashboard } from "@/sanity/components/studio-dashboard";

const singletonTypes = new Set(["homePage", "destinationHub", "siteSettings"]);

export const structure: StructureResolver = (structureBuilder) =>
  structureBuilder
    .list()
    .title("AVIORA 内容后台")
    .items([
      structureBuilder
        .listItem()
        .id("dashboard")
        .title("后台首页")
        .icon(House)
        .child(structureBuilder.component(StudioDashboard).id("dashboard").title("后台首页")),
      structureBuilder.divider(),
      structureBuilder
        .listItem()
        .id("journeys-live")
        .title("已上线行程")
        .icon(Plane)
        .child(
          structureBuilder
            .documentList()
            .id("journeys-live-list")
            .title("已上线行程")
            .schemaType("journey")
            .filter(
              '_type == "journey" && defined(slug.current) && defined(heroImage.url) && count(days) >= 3',
            ),
        ),
      structureBuilder
        .listItem()
        .id("destinations-live")
        .title("已上线目的地")
        .icon(MapPinned)
        .child(
          structureBuilder
            .documentList()
            .id("destinations-live-list")
            .title("已上线目的地")
            .schemaType("destination")
            .filter('_type == "destination" && defined(slug.current) && defined(heroImage.url)'),
        ),
      structureBuilder
        .listItem()
        .id("blogs-live")
        .title("已上线博客")
        .icon(BookOpenText)
        .child(
          structureBuilder
            .documentList()
            .id("blogs-live-list")
            .title("已上线博客")
            .schemaType("blogPost")
            .filter(
              '_type == "blogPost" && defined(slug.current) && defined(heroImage.url) && defined(body)',
            ),
        ),
      structureBuilder
        .listItem()
        .id("drafts")
        .title("草稿与待完善")
        .icon(CircleAlert)
        .child(
          structureBuilder
            .list()
            .id("drafts-list")
            .title("草稿与待完善")
            .items([
              incompleteList(
                structureBuilder,
                "journey",
                "待完善行程",
                "!defined(slug.current) || !defined(heroImage.url) || count(days) < 3",
              ),
              incompleteList(
                structureBuilder,
                "destination",
                "待完善目的地",
                "!defined(slug.current) || !defined(heroImage.url)",
              ),
              incompleteList(
                structureBuilder,
                "blogPost",
                "待完善博客",
                "!defined(slug.current) || !defined(heroImage.url) || !defined(body)",
              ),
            ]),
        ),
      structureBuilder.divider(),
      structureBuilder
        .listItem()
        .id("home-page")
        .title("首页精选")
        .icon(House)
        .child(
          structureBuilder
            .document()
            .schemaType("homePage")
            .documentId("homePage")
            .views(documentViews(structureBuilder, "homePage")),
        ),
      structureBuilder
        .listItem()
        .id("destination-hub")
        .title("目的地总览")
        .icon(Globe2)
        .child(
          structureBuilder
            .document()
            .schemaType("destinationHub")
            .documentId("destinationHub")
            .views(documentViews(structureBuilder, "destinationHub")),
        ),
      structureBuilder
        .listItem()
        .id("site-settings")
        .title("全站设置")
        .icon(Settings2)
        .child(
          structureBuilder
            .document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .views(documentViews(structureBuilder, "siteSettings")),
        ),
    ]);

function incompleteList(
  structureBuilder: Parameters<StructureResolver>[0],
  schemaType: "journey" | "destination" | "blogPost",
  title: string,
  condition: string,
) {
  return structureBuilder
    .listItem()
    .id(`incomplete-${schemaType}`)
    .title(title)
    .child(
      structureBuilder
        .documentList()
        .id(`incomplete-${schemaType}-list`)
        .title(title)
        .schemaType(schemaType)
        .filter(`_type == "${schemaType}" && (${condition})`),
    );
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (structureBuilder, context) =>
  structureBuilder.document().views(documentViews(structureBuilder, context.schemaType));

function documentViews(structureBuilder: Parameters<StructureResolver>[0], schemaType: string) {
  return [
    structureBuilder.view.form().id("form").title("编辑内容"),
    structureBuilder.view
      .component(DocumentPreview)
      .id("preview")
      .options({ schemaType })
      .title("前台预览"),
  ];
}

export const singletonActions = (
  input: DocumentActionComponent[],
  context: { schemaType: string },
) =>
  singletonTypes.has(context.schemaType)
    ? input.filter((action) => !["delete", "duplicate"].includes(action.action ?? ""))
    : input;
