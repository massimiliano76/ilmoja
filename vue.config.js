const { GenerateSW } = require("workbox-webpack-plugin");
module.exports = {
  configureWebpack: {
    plugins: [new GenerateSW({
      maximumFileSizeToCacheInBytes:7*1024*1024, //7mb
      skipWaiting: true
    })],
  },

  pwa: {
    name: 'Ilmoja pidelly',
    themeColor: '#0b5439',
    msTileColor: '#0b5439',
    workboxPluginMode: 'GenerateSW',
    manifestOptions: {
      short_name: 'Ilmoja',
      background_color: '#0b5439'
    },
    manifestCrossorigin: 'use-credentials'
  },
  runtimeCompiler: true
};