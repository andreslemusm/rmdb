const CracoAlias = require("craco-alias");
const { POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  eslint: {
    enable: false,
  },
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  typescript: {
    enableTypeChecking: false,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
  ],
};
