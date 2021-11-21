/* eslint-disable import/no-default-export
  --
  Default export is required by vite
*/
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@root", replacement: path.resolve(__dirname, "./src") },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "./src/services"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "./src/pages"),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "./src/utils"),
      },
    ],
  },
});
