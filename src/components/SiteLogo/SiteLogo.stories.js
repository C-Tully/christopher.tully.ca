import SiteLogo from "./SiteLogo.vue";

export default {
  title: "Components/Site Logo", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: SiteLogo,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { SiteLogo },
  setup() {
    return { args };
  },
  template: '<SiteLogo v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
