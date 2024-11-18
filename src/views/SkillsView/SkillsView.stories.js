import SkillsView from "./SkillsView.vue";

export default {
  title: "Views/SkillsView", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: SkillsView,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { SkillsView },
  setup() {
    return { args };
  },
  template: '<SkillsView v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
