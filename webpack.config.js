const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require('webpack');
// require('dotenv').config();
const Dotenv = require("dotenv-webpack");
const CssMinimizerPugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const shouldAnalyze = process.argv.includes("--analyze");

const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
  }),
  // new Dotenv({
  //   path: "/.env",
  //   safe: true,
  //   systemvars: true,
  //   defaults: false,
  // }),
  new Dotenv({
    path: "./.env",
    safe: true,
    systemvars: true,
    defaults: false,
  }),
  new CopyPlugin({
    patterns: [
      { from: "public/manifest.json", to: "" },
      { from: "public/sw.js", to: "" },
      { from: "public/logo192.png", to: "assets" },
      { from: "public/logo512.png", to: "assets" },
      { from: "public/favicon.ico", to: "assets" },
    ],
  }),
];

if (shouldAnalyze) {
  const { BundleAnalyzerPlugin } = module.require("webpack-bundle-analyzer");
  plugins.push(new BundleAnalyzerPlugin());
}
const config = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@context": path.resolve(__dirname, "src/context"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      // trabajar con babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  plugins,
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPugin(), new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
};
module.exports = config;
