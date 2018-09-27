const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
	module: {
    rules: [
			{
				test: /\.css$/,
				loaders: ['vue-style-loader', 'css-loader']
      },{
				test: /\.less$/,
				loaders: ['vue-style-loader', 'css-loader', 'less-loader']
      },{
				test: /\.scss$/,
				loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	entry: {
		index: './dev/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		// publicPath: '/dist/',
		filename: 'js/[name].[chunkhash:8].js',
		chunkFilename: 'js/[name].[chunkhash:8].js'
	},
	devServer: {
		historyApiFallback: true,
		disableHostCheck: true,
		host: 'localhost',
		port: '9090'
		// hot: true,
		// noInfo: true
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'dev/index.html',
			inject: true,
			hash: false,
			chunks: ['common', 'vue', 'index']
		})
	],
	devtool: 'inline-source-map'
}

let res = merge([base, config])

module.exports = res