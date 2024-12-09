const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // Alias for src
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@use "@/assets/styles/vars" as *;`, // Expose all variables directly
      },
      scss: {
        additionalData: `@use "@/assets/styles/vars" as *;`, // Expose all variables directly
      },
    },
  },
});
