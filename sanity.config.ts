"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { sanityDataset, sanityProjectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";
import { singletonActions, structure } from "@/sanity/structure";

export default defineConfig({
  name: "aviora-content",
  title: "AVIORA 内容后台",
  projectId: sanityProjectId,
  dataset: sanityDataset,
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
  document: { actions: (previous, context) => singletonActions(previous, context) },
});
