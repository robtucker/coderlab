const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractSASS = new ExtractTextPlugin('[name].css');

module.exports = {
    context: path.join(process.env.NODE_PATH, "/src"),
    entry: {
        main: "./main.jsx",
        vendor: "./vendor.js",
        polyfills: "./polyfills.js"
    },
    output: {
        path: path.join(process.env.NODE_PATH, "/dist"),
        filename: "scripts/[name].js"
    },
    module:  {
        loaders: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
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
        
        extractSASS,

        new CopyWebpackPlugin([
            {from: 'src/assets/robots.txt'}, 
            {from: 'src/assets/humans.txt'}
        ]),

        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
        })

    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules'
        ]
    },
}
