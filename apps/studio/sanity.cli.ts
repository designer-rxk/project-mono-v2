import path from "path";
import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./sanity.config";

export default defineCliConfig({
  api: { projectId, dataset },
  vite: {
    resolve: {
      alias: {
        "@documents": path.resolve(
          __dirname,
          "./src/schemas/documents/index.ts",
        ),
        "@actions": path.resolve(__dirname, "./src/schemas/actions/index.ts"),
        "@objects": path.resolve(__dirname, "./src/schemas/objects/index.ts"),
        "@blocks": path.resolve(__dirname, "./src/schemas/blocks/index.ts"),
        "@fields": path.resolve(__dirname, "./src/schemas/fields/index.ts"),
        "@utils": path.resolve(__dirname, "./src/schemas/utils/index.ts"),
        "@schemas": path.resolve(__dirname, "./src/schemas/index.ts"),
        "@lib": path.resolve(__dirname, "./src/lib/index.ts"),
      },
    },
  },
});
