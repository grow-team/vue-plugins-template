const path = require('path')
// vue-loader,v15及以上版本需要使用https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E9%85%8D%E7%BD%AE
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// webpack4分离css不再建议使用extract-text-webpack-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin") 
const WebpackMd5Hash = require('webpack-md5-hash')
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: process.cwd(),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]?[hash]' }
      },
      { 
        test: /\.(woff|ttf|eot|svg)/, 
        loader: 'file-loader?name=font/[name].[ext]&publicPath=../' 
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  },
  performance: {
      hints: false
  },
  plugins: [
    // vue-loader,v15及以上版本必须要用，
    new VueLoaderPlugin(), 
    // 分离css
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // 分离js可能引入的css的chunkhash计算
    new WebpackMd5Hash(),
    // 对css文件进行压缩
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ]
}
