const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    publicPath: './',
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.module.rules.delete('eslint')
        config.module
            .rule("i18n")
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use("i18n")
            .loader("@kazupon/vue-i18n-loader")
            .end()
            .use('yaml')
            .loader('yaml-loader')
            .end()
    },
    configureWebpack: {
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        }
    }
};