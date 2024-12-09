import Home from "./Home.vue";

export default {
  title: "Views/Home",
  component: Home,
};

const Template = (args) => ({
  components: { Home },
  setup() {
    return { args };
  },
  template: '<Home v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
