const { defineConfig } = require("@vue/cli-service");
const path = require("path");

const vueFeatureFlags = {
  __VUE_OPTIONS_API__: true,
  __VUE_PROD_DEVTOOLS__: false,
  __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
};

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // Alias for src
      },
    },
  },
  chainWebpack: (config) => {
    // Add feature flags using DefinePlugin
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0]["process.env"], vueFeatureFlags);
      return definitions;
    });
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
