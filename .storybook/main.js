// .storybook/main.js
import { mergeConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
  addons: ["@chromatic-com/storybook", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
    });
  },
};

export default config;
