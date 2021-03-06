/* eslint-disable max-len */
import webpack from "webpack";
import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";

const GLOBALS = {
    "process.env.NODE_ENV": JSON.stringify("production")
};

export default {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  entry: [
    "./client/index.js"
  ],
  target: "web",
  output: {
    path: __dirname + "/dist", // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery",
      "window.$": "jquery"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin("material.icons.css"),
    new ExtractTextPlugin("material.style.css"),
    new ExtractTextPlugin("simpletextrotator.css"),
    new ExtractTextPlugin("animate.css"),
    new ExtractTextPlugin("style.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, "server"), loaders: ["babel"] },
      { test: /\.js$/, include: path.join(__dirname, "client"), loaders: ["babel"] },
      { test: /\.jsx$/, include: path.join(__dirname, "client"), loader: "babel", query: { presets: ["es2015", "react"] } },
      { test: /(\.css)$/, loaders: ["style", "css"] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      {test: /\.ico$/, loader: "file-loader?name=[name].[ext]"},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      }
    ]
  }
};