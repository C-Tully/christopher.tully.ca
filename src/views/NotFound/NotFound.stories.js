import NotFound from "./NotFound.vue";

export default {
  title: "Views/Not Found",
  component: NotFound,
};

const Template = (args) => ({
  components: { NotFound },
  setup() {
    return { args };
  },
  template: '<NotFound v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
