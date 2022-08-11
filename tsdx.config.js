const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            postcss({
                plugins: [
                    autoprefixer(),
                    cssnano({
                      preset: 'default',
                    }),
                ],
                inject: false, //  true
                extract: !!options.writeMeta,
                modules: false,
            }),
        );
        return config;
    },
};