const webpack = require('webpack');

const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

/**
 * Merge in the development environment variables
 */
const PRODUCTION_GLOBALS = helpers.mergeEnvironment({
    ENV: ENV,
    LOG_LEVEL: 300
});

/**
 * Merge in the development webpack config properties
 */
module.exports = helpers.mergeWebpackConfig({
    externals: {
        // Use external version of React
        //"react": "React",
        //"react-dom": "ReactDOM",
        //lodash : {
        //    commonjs: "lodash",
        //    amd: "lodash",
        //    root: "_" // indicates global variable
        //}
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CoderLab',
            template: 'index.ejs', 
            favicon: '../src/assets/img/favicon.png',
            cdns: [
                //{src: "https://unpkg.com/react@15/dist/react.js"},
                //{src: "https://unpkg.com/react-dom@15/dist/react-dom.js"},
                //{src: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"}
            ],
            links: [
                {href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
            ],
            metas: [
                {"charset": "utf-8"},
                {"name": "author"},
                {"http-equiv": "x-ua-compatible", "content": "ie=edge"},
                {"name": "viewport", "content": "width=device-width, initial-scale=1"}
            ]
        }),
        new webpack.DefinePlugin(helpers.configureAppGlobals(ENV, PRODUCTION_GLOBALS)),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        
    ]
});
