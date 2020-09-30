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
  }
};
