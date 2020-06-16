const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const cssMQPacker = require('css-mqpacker');

module.exports = {
    plugins: [
        autoprefixer,
        cssMQPacker,
        cssnano({
            presets: [
                'default',
                {
                    discardComments: {
                        removeAll: true,
                    },
                },
            ],
        }),
    ],
};
