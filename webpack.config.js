const PATH = require('path');
const WEBPACK = require('webpack');

module.exports = {
	context: __dirname + "/app",
	entry: {
		app: __dirname + '/app/app.js'
	},
	output: {
		path: __dirname + '/app',
		filename: "bundle.js"
	},
	resolve: {
    // Tell webpack to look for required files in node
    modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx', '.json', '.css', '.styl', '.pug']
  },
	module: {
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
				loader: "style-loader!css-loader!stylus-loader"
			}
		]
	},
};
