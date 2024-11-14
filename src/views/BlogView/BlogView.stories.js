import BlogView from "./BlogView.vue";

export default {
  title: "Views/BlogView", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: BlogView,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { BlogView },
  setup() {
    return { args };
  },
  template: '<BlogView v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
