const path = require('path'),
			webpack = require('webpack'),
			poststylus = require('poststylus'),
			HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname + "/app",
	entry: './app.js',
	output: {
		path: __dirname + '/docs',
		filename: "bundle.js"
	},
	resolve: {
		// Tell webpack to look for required files in node
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx', '.json']
	},
	module: {
		// npParse === aframe Bugfix for console warning
		noParse: [
			/node_modules\/aframe\/dist\/aframe-master.js/, // for aframe from NPM
			/node_modules\/cannon\/build\/cannon.js/, // for aframe-extras from NPM
		],
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			}
		]
	},
	stylus: {
		preferPathResolver: 'webpack',
		use: [
			poststylus([ 'autoprefixer', 'rucksack-css' ])
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Baseproject',
			filetype: 'pug',
			template: __dirname + '/app/index.pug',
			files: {
				'css': [ __dirname + '/app/style.styl']
			}
		})
	],
	devServer: {
		host: '0.0.0.0',
		port: 8090
	}
};
