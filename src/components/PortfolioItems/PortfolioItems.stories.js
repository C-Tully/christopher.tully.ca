// import { fn } from "@storybook/test";

import PortfolioItems from "./PortfolioItems.vue";
import { portfolioCollectionConfig } from "./config/portfolioItemsConfig";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Portfolio Items",
  component: PortfolioItems,
  // tags: ["autodocs"],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// Create a template for rendering the component
const Template = (args) => ({
  components: { PortfolioItems },
  setup() {
    return { args };
  },
  template: '<PortfolioItems v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  portfolioCollection: portfolioCollectionConfig,
};
