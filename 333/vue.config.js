const path = require('path');

//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('network', resolve('src/network'))
      .set('tools', resolve('src/tools'))
      .set('views', resolve('src/views'))
  },
  devServer: {
    // host: 'localhost', // ip
    // host: '192.168.3.247',
    //host: '192.168.1.102', // ip
    //port: 8080, // 设置端口号
    //https: false, // https:{type:Boolean}
    //open: true, //配置自动启动浏览器

    proxy:{
      '/api': {
        target: 'http://192.168.4.233:8360', //API服务器的地址
        changeOrigin: true, // 虚拟的站点需要更管origin
      }
    }
  }
}


