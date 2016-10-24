var webpackMerge = require('webpack-merge');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.server.common.js');
//var helpers = require('./helpers');
var helpers = require('./helpers');

module.exports = function (options) {
    return webpackMerge(commonConfig, {
        output: {
            path: helpers.root('dist')
        }
    });
};
