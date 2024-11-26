const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|vue)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // Resolves alias for easier imports
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "../src"),
    };

    // Add SCSS loader with global variables
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            additionalData: `@import "@/assets/styles/vars.scss";`,
          },
        },
      ],
    });

    return config;
  },
  docs: {
    autodocs: true,
  },
};
