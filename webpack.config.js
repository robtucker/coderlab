process.env['NODE_PATH'] = process.env.NODE_PATH || __dirname;
const isProd = process.env.NODE_ENV === 'production';

// switch (process.env.NODE_ENV) {
//   case 'prod':
//   case 'production':
//     module.exports = require('./config/webpack.prod');
//     break;
//   case 'test':
//   case 'testing':
//     module.exports = require('./config/webpack.test');
//     break;
//   case 'dev':
//   case 'development':
//   default:
//     module.exports = require('./config/webpack.dev');
// }

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    context: path.join(process.env.NODE_PATH, "/src"),
    entry: {
        main: "./main.jsx",
        vendor: "./vendor.jsx",
        polyfills: "./polyfills.jsx"
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
                test: /\.tsx$/, 
                exclude: /node_modules/,
                loaders: ["awesome-typescript-loader"]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CoderLab',
            template: 'index.ejs', 
            metas: [
                {"charset": "utf-8"},
                {"name": "author"},
                {"http-equiv": "x-ua-compatible", "content": "ie=edge"},
                {"name": "viewport", "content": "width=device-width, initial-scale=1"}
            ]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve('./client'),
            'node_modules'
        ]
    },
    devServer: {
        //hot: true,
        port: 3000,
        contentBase: './dist/',
        historyApiFallback: true
    }
};