import Experience from "./Experience.vue";

export default {
  title: "Views/Experience",
  component: Experience,
};

const Template = (args) => ({
  components: { Experience },
  setup() {
    return { args };
  },
  template: '<Experience v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
