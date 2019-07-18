module.exports = {
  publicPath: './',
  lintOnSave: 'error',
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/': {
        ws: false,
        target: 'http://127.0.0.1:3039',
        changeOrigin: true,
      },
    },
  },
};
