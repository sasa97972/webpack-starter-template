const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('../webpack.config');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true,
        },
        port: 8081,
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
        }),
    ],
});

module.exports = new Promise(resolve => {
    resolve(devWebpackConfig);
});
