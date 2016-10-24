var webpack = require('webpack');
var fs = require('fs');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    name: 'Server',
    entry: {
        'server': './src/server/server.ts'
    },
    target: 'node',
    output: {
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: [
            'node_modules'
        ],
        extensions: ['', '.js', '.ts']
    },
    loaders: [
        {
            test: /\.ts$/,
            loader: 'ts-loader?configFileName=\'tsconfig.server.json\')'
        }
    ],
    node: {
        __dirname: true,
        __filename: true
    },
    externals: nodeModules,
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin('require("source-map-support").install();',
            { raw: true, entryOnly: false })
    ]
}