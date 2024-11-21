// .storybook/main.js
// import { mergeConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// /** @type { import('@storybook/vue3-vite').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
//   addons: ["@chromatic-com/storybook", "@storybook/addon-interactions"],
//   framework: {
//     name: "@storybook/vue3-vite",
//     options: {},
//   },
//   async viteFinal(config) {
//     return mergeConfig(config, {
//       plugins: [vue()],
//     });
//   },
// };

// export default config;

// import { mergeConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import path from "path";

// /** @type { import('@storybook/vue3-vite').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
//   addons: ["@chromatic-com/storybook", "@storybook/addon-interactions"],
//   framework: {
//     name: "@storybook/vue3-vite",
//     options: {},
//   },
//   async viteFinal(config) {
//     // Merging alias configuration into the Vite config for Storybook
//     return mergeConfig(config, {
//       plugins: [vue()],
//       resolve: {
//         alias: {
//           "@": path.resolve(__dirname, "../src"), // Add the alias for Storybook
//         },
//       },
//     });
//   },
// };

// export default config;

///////////
import { mergeConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"), // Ensure alias resolves correctly
        },
      },
      plugins: [vue()],
    });
  },
};

export default config;
