"use client";

import { buildLegacyTheme, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { sanityDataset, sanityProjectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";
import { defaultDocumentNode, singletonActions, structure } from "@/sanity/structure";

const avioraTheme = buildLegacyTheme({
  "--black": "#171916",
  "--gray": "#697069",
  "--focus-color": "#2f6b4f",
  "--brand-primary": "#214b39",
  "--default-button-primary-color": "#214b39",
  "--default-button-success-color": "#2f6b4f",
});

export default defineConfig({
  name: "aviora-content",
  title: "AVIORA 内容后台",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  basePath: "/studio",
  theme: avioraTheme,
  plugins: [
    structureTool({
      name: "content",
      title: "内容管理",
      structure,
      defaultDocumentNode,
    }),
  ],
  releases: { enabled: false },
  scheduledDrafts: { enabled: false },
  tasks: { enabled: false },
  schema: { types: schemaTypes },
  document: { actions: (previous, context) => singletonActions(previous, context) },
});
