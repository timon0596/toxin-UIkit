const path = require('path');
const HWP=require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

// const autoprefixer = require('autoprefixer');
module.exports={
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname,'dist')
	},
	module:{
		rules: [{
			test:/\.pug$/,
			loader: 'pug-loader',
			options: {pretty: true}
		},{
			test:/\.js$/,
			loader: 'babel-loader',
			exclude:'/node_modules/'},
			//{
		// 	test:/\.(sass)$/,
		// 	use:[
		// 		"style-loader",
		// 		"css-loader",
		// 		{
  //                   loader: 'postcss-loader',
  //                   options: {
  //                       plugins: [
  //                           autoprefixer()
  //                       ]
  //                   }
  //               },
		// 		"sass-loader"
		// 		]
		// },
{
    test: /\.(scss|sass)$/,
    use: [{
      loader: 'style-loader', // inject CSS to page
    }, {
      loader: 'css-loader', // translates CSS into CommonJS modules
    }, {
      loader: 'postcss-loader', // Run post css actions
      options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
      }
    }, {
      loader: 'sass-loader' // compiles SASS to CSS
    }]
  },
  {
			test:/\.css$/,
			use:[
				"style-loader",
				"css-loader"
				]
		},
		{
         test: /\.(woff|svg|ttf)$/,
         exclude:path.resolve(__dirname, "node_modules"),
         use: [
         	'file-loader'
         ]         
       },{
		  test: /\d{1,3}\.image\d{1}\.(jpg|png)$/,
		  use:[ {
		    loader: "file-loader",
		    options: {
		      name: "[name].[ext]",
		      outputPath: './img/roompreview/',
		      useRelativePath: true
		  }}],
  },



       {
		  test: /\.(jpg|png)$/,
		  exclude:path.resolve(__dirname, "src/img/roompreview"),
		  
		  use:[ {

		    loader: "file-loader",

		    options: {
		      name: "[name].[ext]",
		      outputPath: './img'
		  }}],
  },]
	},
	plugins:[
		
		new HWP({
			template: './src/index.pug',
			filename: 'index.html'
		}),
		new HWP({
			template: './src/cards/cards.pug',
			filename: 'cards.html'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new HtmlWebpackPugPlugin()


	]
}