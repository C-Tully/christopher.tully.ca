import SiteNav from "./SiteNav.vue";

export default {
  title: "Components/Site Header", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: SiteNav,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { SiteNav },
  setup() {
    return { args };
  },
  template: '<SiteNav v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {};
