/**
 * @return {import('webpack').Configuration}
 */
module.exports = () => ({
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    liveReload: false,
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
    chunkFilename: "[name].lazy-chunk.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
});
