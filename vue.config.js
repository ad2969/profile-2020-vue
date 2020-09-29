module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/typography.scss";
        `
      }
    }
  }
};
