import ExperienceView from "./ExperienceView.vue";

export default {
  title: "Views/ExperienceView", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: ExperienceView,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { ExperienceView },
  setup() {
    return { args };
  },
  template: '<ExperienceView v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
