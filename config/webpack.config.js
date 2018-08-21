const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: "cheap-module-eval-source-map",
  // devtool: "inline-source-map",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "js/bundle.js"
  },
  performance: { hints: false },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all"
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // new CleanWebpackPlugin([path.join(__dirname, "../dist")]),
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, ".."),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/static/index.html"
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
        test: /\.(?:png|jpg|svg)$/,
        loader: "url-loader",
        query: {
          // Inline images smaller than 10kb as data URIs
          limit: 10000
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
