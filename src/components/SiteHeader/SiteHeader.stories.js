import SiteHeader from "./SiteHeader.vue";

export default {
  title: "Components/Site Header", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: SiteHeader,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { SiteHeader },
  setup() {
    return { args };
  },
  template: '<SiteHeader v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
