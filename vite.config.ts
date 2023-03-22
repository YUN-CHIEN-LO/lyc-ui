import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve, join, relative, extname } from "path";
import glob from "glob";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "./src")}/`,
    },
    extensions: [".ts", ".tsx", ".json"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "LycUi",
      formats: ["es"],
      fileName: (format, entryName) => {
        if (entryName === "index") return "lyc-ui.js";
        return `lyc-ui-${entryName}.js`;
      },
    },
    minify: "terser",
    outDir: join(__dirname, "dist/js"),
    terserOptions: {
      compress: {
        defaults: false,
        drop_console: true,
      },
      output: {
        comments: false,
      },
    },
    rollupOptions: {
      external: ["vue"],
      input: {
        index: resolve(__dirname, "src/index.ts"),
        ...Object.fromEntries(
          glob.sync("src/components/**/index.ts").map((file) => {
            return [
              relative(
                "src/components/",
                file.slice(0, file.length - extname(file).length)
              ).replace("/index", ""),
              fileURLToPath(new URL(file, import.meta.url)),
            ];
          })
        ),
      },
      output: {
        globals: { vue: "Vue" },
        exports: "named",
        format: "es",
        dir: "./dist/js",
        chunkFileNames: "[name].js",
      },
    },
  },
});
