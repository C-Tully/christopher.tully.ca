import Modal from "./Modal.vue";

export default {
  title: "Components/Contact Form",
  component: Modal,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { Modal },
  setup() {
    return { args };
  },
  template: '<Modal v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {};
