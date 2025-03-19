import PortfolioItems from "./PortfolioCards.vue";
import { portfolioCollectionConfig } from "./config/portfolioCardsConfig";

export default {
  title: "Components/Portfolio Items",
  component: PortfolioItems,
  argTypes: {},
};

const Template = (args) => ({
  components: { PortfolioItems },
  setup() {
    return { args };
  },
  template: '<PortfolioItems v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  portfolioCollection: portfolioCollectionConfig,
};
