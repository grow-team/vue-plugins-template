const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // webpack4分离css不再建议使用extract-text-webpack-plugin
const webpack = require('webpack');
var config = {
  module: {
    rules: [
			{
				test: /\.css$/,
				loaders: [ MiniCssExtractPlugin.loader, 'css-loader']
      },{
				test: /\.less$/,
				loaders: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },{
				test: /\.scss$/,
				loaders: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
  entry: {
      index: './index.js'
  },
  output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'vs-markdown.js',
      chunkFilename: 'js/[name].js',
      library: 'vs-markdown',
      libraryTarget: 'umd',
      umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
      new BundleAnalyzerPlugin({
          // Can be `server`, `static` or `disabled`.
          // In `server` mode analyzer will start HTTP server to show bundle report.
          // In `static` mode single HTML file with bundle report will be generated.
          // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
          analyzerMode: 'server',
          // Host that will be used in `server` mode to start HTTP server.
          analyzerHost: '127.0.0.1',
          // Port that will be used in `server` mode to start HTTP server.
          analyzerPort: 8888,
          // Path to bundle report file that will be generated in `static` mode.
          // Relative to bundles output directory.
          reportFilename: 'report.html',
          // Module sizes to show in report by default.
          // Should be one of `stat`, `parsed` or `gzip`.
          // See "Definitions" section for more information.
          defaultSizes: 'parsed',
          // Automatically open report in default browser
          openAnalyzer: true,
          // If `true`, Webpack Stats JSON file will be generated in bundles output directory
          generateStatsFile: false,
          // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
          // Relative to bundles output directory.
          statsFilename: 'stats.json',
          // Options for `stats.toJson()` method.
          // For example you can exclude sources of your modules from stats file with `source: false` option.
          // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
          statsOptions: null,
          // Log level. Can be 'info', 'warn', 'error' or 'silent'.
          logLevel: 'info'
      })
    ]
}

let res = merge([base, config])

module.exports = res
