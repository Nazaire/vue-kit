import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

module.exports = defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    vue(),
  ],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vtw-ui",
      fileName: "vtw-ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        "vue-router",
        "lodash",
        "tailwindcss",
        "@heroicons/vue",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
          lodash: "Lodash",
          "vue-router": "VueRouter",
        },
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
    },
  },
});
