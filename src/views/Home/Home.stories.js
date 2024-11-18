import Home from "./Home.vue";

export default {
  title: "Views/Home", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: Home,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Home },
  setup() {
    return { args };
  },
  template: '<Home v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
