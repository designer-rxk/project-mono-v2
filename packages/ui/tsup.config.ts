import { defineConfig } from "tsup";

export default defineConfig([
  {
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: false,
    dts: true,
    format: ["esm", "cjs"],
    entry: {
      index: "src/index.ts",
    },
    external: ["react"],
    outDir: "dist",
    esbuildOptions: (options) => {
      // Append "use client" to the top of the react entry point
      options.banner = {
        js: '"use client";',
      };
    },
  },
]);
