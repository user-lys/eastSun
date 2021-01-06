const path = require("path");
const pxtovw = require("postcss-px-to-viewport");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", path.join(__dirname, "./src"));
  },

  devServer: {
    proxy: {
      "/mmdb": {
        target: "https://wx.maoyan.com",
        changeOrigin: true,
      },
      "/api": {
        target: "http://localhost:4010",
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
      },
      "/ajax": {
        target: "https://m.maoyan.com",
        changeOrigin: true,
      },
    },
  },

  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          new pxtovw({
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
          }),
        ],
      },
    },
  },
};
