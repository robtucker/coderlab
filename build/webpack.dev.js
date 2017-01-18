const webpack = require('webpack');

const helpers = require('./helpers');

const colors = require('colors');

/**
 * Set environment variables
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const HOST = process.env.HOST = 'localhost';

const PORT = process.env.PORT = 3000;

const APP_GLOBALS = helpers.mergeEnvironment({
    ENV: ENV,
    HOST: HOST,
    // todo - this is just a temp hack to fix the courses/data/index problem
    APP_PATH: __dirname.replace(/build/, '')
});

/**
 * Merge in the development webpack config properties
 */
const WEBPACK_CONFIG = helpers.mergeWebpackConfig({
    plugins: [
        new webpack.DefinePlugin(helpers.configureAppGlobals(APP_GLOBALS))
    ],
    devServer: {
        //hot: true,
        port: 3000,
        contentBase: './dist/',
        historyApiFallback: true
    }
});

//console.log(WEBPACK_CONFIG);

module.exports = WEBPACK_CONFIG;