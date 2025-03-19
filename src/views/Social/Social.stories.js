import Social from "./Social.vue";

export default {
  title: "Views/Social", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: Social,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Social },
  setup() {
    return { args };
  },
  template: '<Social v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Social Page!",
};
