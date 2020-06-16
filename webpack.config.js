const path = require('path');
const sass = require('sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, './src/'),
    dist: path.resolve(__dirname, './dist/'),
    assets: 'assets/',
};

const config = {
    externals: {
        paths: PATHS,
    },
    entry: {
        main: PATHS.src,
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/',
    },
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: { path: './configs/postcss.config.js' },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: sass,
                            includePaths: ['./node_modules'],
                        },
                    },
                ],
            },
            {
                test: /\.(eot|woff|woff2|ttf|jpg|png|svg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: (url, resourcePath) => {
                                if (process.platform === 'win32') {
                                    resourcePath = resourcePath.replace(/\\/g, '/');
                                }

                                if (resourcePath.match(/fonts\//)) {
                                    return `./fonts/${url}`;
                                }
                                if (resourcePath.match(/\/img\//)) {
                                    return `./img/${url}`;
                                }
                                return `./${url}`;
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new CssoWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: `${PATHS.src}/static/`, to: PATHS.dist, noErrorOnMissing: true }],
        }),
    ],
};

module.exports = config;
