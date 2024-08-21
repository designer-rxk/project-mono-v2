import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemas as types } from "./src/schemas";

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "";
export const dataset = process.env.SANITY_STUDIO_DATASET || "";

export default defineConfig({
  name: "default",
  title: "mono",

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: { types },
});
