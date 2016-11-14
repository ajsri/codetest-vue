module.exports = {
	entry: './app/app.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js?$/,
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
		
}