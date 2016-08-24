/* eslint-disable max-len */
import webpack from "webpack";
import path from "path";

export default {
  debug: true,
  devtool: "cheap-module-eval-source-map",
  noInfo: true,
  entry: [
    "eventsource-polyfill",
    "webpack-hot-middleware/client?reload=true",
    "./client/index"
  ],
  target: "web",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./client"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery",
      "window.$": "jquery"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
        test: /\.(jpe?g|png|gif|svg|pdf)$/i,
        loaders: [
          "file?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      }
    ]
  }
};