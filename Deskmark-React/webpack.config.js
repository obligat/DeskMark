const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
    entry: {
        app: ['font-awesome-loader', path.resolve(APP_PATH, 'app.jsx')]
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle_[hash:5].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader', 'sass-loader',
                    ]
                })
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    },

    devtool: 'eval-source-map',

    devServer: {
        contentBase: APP_PATH,
        historyApiFallback: true
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [APP_PATH, 'node_modules']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Deskmark App'
        }),
        new CleanWebpackPlugin(['build']),
        new ExtractTextPlugin("styles.css")
    ]


};
