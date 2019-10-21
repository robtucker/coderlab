// const webpack = require('webpack');
// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

// let extractSASS = new ExtractTextPlugin('[name].css');

module.exports = {
    mode: "production",

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

// module.exports = {
//     context: path.join(process.env.NODE_PATH, "/src"),
//     entry: {
//         vendor: [
//             "babel-polyfill",
//             "redux", 
//             "react-redux", 
//             'redux-thunk',
//             'redux-logger',
//             'redux-form',
//             'isomorphic-fetch',
//             'react-tap-event-plugin',
//             'react-slick',
//             'react-router-scroll',
//             'lodash',
//             'isolog'
//         ],
//         main: "./main.jsx",
//     },
//     output: {
//         path: path.join(process.env.NODE_PATH, "/dist"),
//         filename: "scripts/[name].js"
//     },
//     module:  {
//         rules: [
//             {
//                 test: /\.html$/,
//                 loader: 'raw-loader'
//             },
//             { 
//                 test: /\.(ts|tsx)$/, 
//                 exclude: /node_modules/,
//                 loaders: ["ts-loader"]
//             },
//             {
//                 test: /\.json$/,
//                 loader: 'json-loader',
//             },
//             {
//                 test: /\.css$/,
//                 loader: 'style-loader!css-loader',
//             },
//             { 
//                 test: /\.scss$/, 
//                 loader: ExtractTextPlugin.extract(['css-loader','sass-loader']) 
//             },
//             {
//                 test: /\.(jpg|png|gif)$/,
//                 loader: 'file-loader?name=img/[hash].[ext]'
//             },
//             {
//                 test: /\.(eot|svg|ttf|woff|woff2)$/,
//                 loader: 'file-loader?name=fonts/[name].[ext]'
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'CoderLab',
//             template: 'index.ejs', 
//             favicon: '../src/assets/img/favicon.png',
//             cdns: [],
//             metas: [
//                 {"charset": "utf-8"},
//                 {"name": "author"},
//                 {"http-equiv": "x-ua-compatible", "content": "ie=edge"},
//                 {"name": "viewport", "content": "width=device-width, initial-scale=1"}
//             ]
//         }),
        
//         extractSASS,

//         new CopyWebpackPlugin([
//             {from: 'src/assets/robots.txt'}, 
//             {from: 'src/assets/humans.txt'}
//         ]),

//         // new webpack.optimize.CommonsChunkPlugin({name: "vendor"})

//     ],
//     resolve: {
//         extensions: ['.ts', '.tsx']
//     },
// }
