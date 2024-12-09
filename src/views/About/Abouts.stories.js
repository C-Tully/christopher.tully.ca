import About from "./About.vue";

export default {
  title: "Views/About", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: About,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { About },
  setup() {
    return { args };
  },
  template: '<About v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the About Page!",
};
