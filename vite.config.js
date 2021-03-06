import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import alias from "@rollup/plugin-alias";

const path = require("path");

const resolve = (alias, replaced) => ({
  find: alias,
  replacement: path.resolve(__dirname, replaced),
});

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require("autoprefixer")({
          grid: true,
        }),
        require("postcss-flexbugs-fixes"),
      ],
    },
  },
  plugins: [
    legacy({
      // 默认值为根目录下的browserslistrc文件
      targets: "defaults",
    }),
    alias({
      entries: [
        resolve("@/assets", "src/assets"),
        resolve("@/config", "src/modules/config"),
        resolve("@/libs", "src/modules/libs"),
        resolve("@/pages", "src/modules/pages"),
        resolve("@/utils", "src/modules/utils"),
        resolve("@/modules", "src/modules"),
        resolve("@/test", "src/test"),
        resolve("@/types", "src/types"),
        resolve("@", "src"),
      ],
    }),
  ],
  server: {
    port: 8080,
  },
  build: {
    assetsInlineLimit: 16384,
  },
});
