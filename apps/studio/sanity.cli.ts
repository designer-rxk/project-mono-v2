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
        "@objects": path.resolve(__dirname, "./src/schemas/objects/index.ts"),
        "@fields": path.resolve(__dirname, "./src/schemas/fields/index.ts"),
      },
    },
  },
});
