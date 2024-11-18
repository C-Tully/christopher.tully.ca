import ContactView from "./ContactView.vue";

export default {
  title: "Views/ContactView", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: ContactView,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { ContactView },
  setup() {
    return { args };
  },
  template: '<ContactView v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
