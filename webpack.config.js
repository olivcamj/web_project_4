const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // connect plugin 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: "inline-source-map",
  entry: { main: "./src/pages/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "",
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    compress: true, // this will speed up file loading in development mode
    port: 8080,
    open: true, // site will open automatically in the browser after executing npm run dev
    stats: "errors-only", //only output when errors happen
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        loader: "file-loader",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(), // use plugin
    new MiniCssExtractPlugin(),
  ],
};