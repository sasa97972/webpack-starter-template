const merge = require('webpack-merge');
const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const baseWebpackConfig = require('../webpack.config');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new PurgecssPlugin({
            paths: glob.sync(`${baseWebpackConfig.externals.paths.src}/**/*`, { nodir: true }),
        }),
    ],
});

module.exports = new Promise(resolve => {
    resolve(buildWebpackConfig);
});
