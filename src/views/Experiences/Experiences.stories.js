import Experiences from "./Experiences.vue";

export default {
  title: "Views/Experiences", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: Experiences,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Experiences },
  setup() {
    return { args };
  },
  template: '<Experiences v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Experiences Page!",
};
