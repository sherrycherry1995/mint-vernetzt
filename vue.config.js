module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/mint-vernetzt/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/_variables.scss";`,
      },
    },
  },
};
