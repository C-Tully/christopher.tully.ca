import AboutView from "./AboutView.vue";

export default {
  title: "Views/AboutView", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: AboutView,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { AboutView },
  setup() {
    return { args };
  },
  template: '<AboutView v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
