import Experience from "./Experience.vue";

export default {
  title: "Views/Experience", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: Experience,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Experience },
  setup() {
    return { args };
  },
  template: '<Experience v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Experience Page!",
};
