/* eslint-disable import/no-default-export
  --
  Default export is required by vite
*/
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    globalSetup: ["./src/test/global-setup.ts"],
    setupFiles: ["./src/test/setup-files.ts"],
    watch: false,
  },
});
