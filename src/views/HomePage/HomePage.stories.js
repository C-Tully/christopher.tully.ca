import HomePage from "./HomePage.vue";

export default {
  title: "Views/HomePage", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: HomePage,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { HomePage },
  setup() {
    return { args };
  },
  template: '<HomePage v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
