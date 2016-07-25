var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var postPxToEm = require('postcss-px-to-em');

process.argv.forEach(function (item) {
    if (item === 'auto') {
        process.env.AUTO = '1';
    } else if (item === 'https') {
        process.env.HTTPS = '1';
    }
});

module.exports = {
    entry: {
        app: ['./src/pages/app/app.js'],
        'vue-libs': ['vue']
    },
    output: {
        path: path.resolve('./dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: "js/chunk/[name].js"
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        preLoaders: [
            {
                test: /.vue$/,
                loader: 'eslint',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint"
            },
        ],
        eslint: {
            failOnError: true
        },
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/app/app.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vue-libs',
            filename: 'js/vue-libs.js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.DefinePlugin({
            __DEV__: true,
            Config: JSON.stringify(require('./config'))
        })
    ],
    postcss: function () {
        return [postPxToEm({base: 16})];
    },
    vue: {
        postcss: function () {
            return [postPxToEm({base: 16})];
        }
    }
};

if (process.env.AUTO === '1') {
    module.exports.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}
