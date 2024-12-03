import NotFound from "./NotFound.vue";

export default {
  title: "Views/Not Found", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: NotFound,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { NotFound },
  setup() {
    return { args };
  },
  template: '<NotFound v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {};
