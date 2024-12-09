import Blog from "./Blog.vue";

export default {
  title: "Views/Blog", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: Blog,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Blog },
  setup() {
    return { args };
  },
  template: '<Blog v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Blog Page!",
};
