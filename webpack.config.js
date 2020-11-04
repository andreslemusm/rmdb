const webpack = require("webpack");
const { merge } = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");

const modeConfig = (mode) => require(`./buildUtils/webpack.${mode}`)(mode);
const presetConfig = require("./buildUtils/loadPresets");

module.exports = ({ mode = "production", presets = [] }) => {
  return merge(
    {
      mode,
      entry: "./src/index.tsx",
      output: {
        chunkFilename: "[name].lazy-chunk.js",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
      resolve: { extensions: [".tsx", ".ts", ".js"] },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
          },
          {
            test: /\.svg$/i,
            use: [
              {
                loader: "url-loader",
                options: {
                  generator: (content) => svgToMiniDataURI(content.toString()),
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "public/index.html",
          favicon: "public/favicon.ico",
        }),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
