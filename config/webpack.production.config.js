const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin");
// console.log('env', )
module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/[name].[contenthash:22].js",
    publicPath: "./"
  },
  performance: { hints: false },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, ".."),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/static/index.html"
    }),
    new ExtractTextPlugin("[name].min.css", {
      allChunks: true
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader?limit=8&name=images/[name].[ext] "
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
