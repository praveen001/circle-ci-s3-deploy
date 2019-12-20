const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  webpack = require("webpack");

module.exports = {
  mode: "production",

  entry: "./src/index.tsx",

  resolve: {
    extensions: [".ts", ".tsx"]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
  ]
};
