import Skills from "./Skills.vue";

export default {
  title: "Views/Skills", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: Skills,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Skills },
  setup() {
    return { args };
  },
  template: '<Skills v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {};
