/* eslint-disable import/no-default-export
  --
  Default export is required by vite
*/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";


/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
