module.exports = {
    publicPath: './',
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
};