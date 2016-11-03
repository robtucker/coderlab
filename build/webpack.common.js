const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractCSS = new ExtractTextPlugin('[name].css');
let extractSASS = new ExtractTextPlugin('[name].css');

module.exports = {
    context: process.env.NODE_PATH + "/src",
    entry: {
        main: "./main.tsx",
        vendor: "./vendor.tsx",
        polyfills: "./polyfills.tsx"
    },
    output: {
        path: process.env.NODE_PATH + "/dist",
        filename: "scripts/[name].js"
    },
    module:  {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            { 
                test: /\.tsx$/, 
                exclude: /node_modules/,
                loaders: ["awesome-typescript-loader"]
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            { 
                test: /\.css$/, 
                loader: extractCSS.extract(['to-string-loader', 'css']) 
            },
            { 
                test: /\.scss$/, 
                loader: extractSASS.extract(['css','sass']) 
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CoderLab',
            template: 'index.ejs', 
            favicon: '../src/assets/img/favicon.png',
            metas: [
                {"charset": "utf-8"},
                {"name": "author"},
                {"http-equiv": "x-ua-compatible", "content": "ie=edge"},
                {"name": "viewport", "content": "width=device-width, initial-scale=1"}
            ]
        }),
        
        extractCSS,
        extractSASS,

        new CopyWebpackPlugin([
            {from: 'src/assets/robots.txt'}, 
            {from: 'src/assets/humans.txt'}
        ]),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.html']
    }
}
