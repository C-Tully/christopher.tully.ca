import HomeView from "./HomeView.vue";

export default {
  title: "Views/HomeView", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: HomeView,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { HomeView },
  setup() {
    return { args };
  },
  template: '<HomeView v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
