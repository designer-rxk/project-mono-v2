import { HelloWorldAction } from "@actions";
import { resolve } from "@lib";
import { presentationTool } from "@sanity/presentation";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@schemas";
import { groqdPlaygroundTool } from "groqd-playground";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import deskStructure from "./src/desk-structure";

export const projectId = "3x0we094";
export const dataset = "production";

export default defineConfig({
  name: "default",
  title: "mono",

  projectId,
  dataset,

  plugins: [
    structureTool({ structure: deskStructure }),
    groqdPlaygroundTool(),
    visionTool(),
    presentationTool({
      resolve,
      previewUrl: {
        draftMode: {
          enable: "http://localhost:3000/api/draft-mode/enable",
        },
      },
    }),
  ],

  document: {
    actions: [HelloWorldAction],
  },

  schema: {
    types: schemaTypes,
    templates: (prev) => {
      const pageChild = {
        id: "page-child",
        title: "Page: Child",
        schemaType: "page",
        parameters: [{ name: "parentId", title: "Parent ID", type: "string" }],
        // This value will be passed-in from desk structure
        value: ({ parentId }: { parentId: string }) => ({
          parent: { _type: "reference", _ref: parentId },
        }),
      };

      return [...prev, pageChild];
    },
  },
});
