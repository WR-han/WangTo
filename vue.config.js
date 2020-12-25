module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views",
      }
    },
    devServer: {
      port: 3333, // 启动端口
      open: true // 启动后是否自动打开网页
    }
  }
}