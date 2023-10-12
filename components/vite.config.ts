import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.ts"),
      name: "LycUi",
      // the name of the output files when the build is run
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `lyc-ui.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.ts"),
      },
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
