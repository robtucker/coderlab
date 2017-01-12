const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractSASS = new ExtractTextPlugin('[name].css');

module.exports = {
    context: path.join(process.env.NODE_PATH, "/src"),
    entry: {
        main: "./main.jsx"
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
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            { 
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract(['css-loader','sass-loader']) 
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader?name=img/[hash].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Bloom',
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
