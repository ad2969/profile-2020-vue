module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/styles/animations.scss";
          @import "~@/styles/components.scss";
          @import "~@/styles/sizes.scss";
          @import "~@/styles/styles.scss";
          @import "~@/styles/typography.scss";
          @import "~@/styles/variables.scss";
          `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/pdf/[name].[hash:8].[ext]"
      });
  }
};
