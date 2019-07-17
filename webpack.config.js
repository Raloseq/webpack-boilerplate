const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: "file-loader",
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};