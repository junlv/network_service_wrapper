const path = require('path')
const debug = process.env.NODE_ENV !== 'production'
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) { // 开发环境配置
      // config.devtool = 'cheap-module-eval-source-map'
    } else { // 生产环境配置
    }
    Object.assign(config, { // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
    })
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9876,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
  }
}
