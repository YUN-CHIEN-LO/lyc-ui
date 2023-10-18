import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".ts", ".tsx", ".json", ".vue", ".scss"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                            @import "${path.resolve(
                              __dirname,
                              "./src/styles/_global.scss"
                            )}";
                        `,
      },
    },
  },
  build: {
    target: "es6",
    chunkSizeWarningLimit: 2000,
    reportCompressedSize: true,
    cssCodeSplit: true,
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "LycUi",
      // the name of the output files when the build is run
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `lyc-ui.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.ts"),
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
});
