// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import BootstrapVueNext from "bootstrap-vue-next";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// createApp(App).use(router).use(BootstrapVueNext).mount("#app");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"), // Add the `@` alias
    };
    return config;
  },
};
