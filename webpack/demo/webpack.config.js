module.exports = {
	entry: __dirname + "/entry.js",
	output: {
		path: __dirname,
		filename: "output.js"
	},
	devServer: {
		contentBase: "./", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	module: {
		rules: [{
				test: /\.json$/,
				use: {
					loader: "json-loader"
				},
				exclude: /node_modules/
			}
		]
	}
}
