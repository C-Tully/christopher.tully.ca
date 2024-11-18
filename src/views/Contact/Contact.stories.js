import Contact from "./Contact.vue";

export default {
  title: "Views/Contact", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: Contact,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Contact },
  setup() {
    return { args };
  },
  template: '<Contact v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Contact Page!",
};
