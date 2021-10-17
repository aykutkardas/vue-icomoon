import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2020",

    lib: {
      entry: path.resolve(root, "src", "lib.js"),
      name: "vue-icomoon",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
