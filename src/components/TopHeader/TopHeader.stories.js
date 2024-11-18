import TopHeader from "./TopHeader.vue";

export default {
  title: "Components/Top Header", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: TopHeader,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { TopHeader },
  setup() {
    return { args };
  },
  template: '<TopHeader v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!",
};
