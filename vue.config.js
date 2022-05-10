const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path')
const webpack = require("webpack");
module.exports = {
  publicPath: "./",
  outputDir:'dist',
  indexPath:'index.html',
  productionSourceMap: false,
  lintOnSave: false,
  transpileDependencies: ['element-ui', 'ele-admin', 'vue-i18n'],
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    if (process.env.NODE_ENV !== 'development') {
      // 对超过10kb的文件gzip压缩
      config.plugin('compressionPlugin').use(new CompressionWebpackPlugin({
        test: /\.(js|css|html)$/,
        threshold: 10240
      }));
    }
  },
  configureWebpack: {
    //支持jquery
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          outputStyle: 'expanded'
        }
      }
    }
  }
}
