import ContactForm from "./ContactForm.vue";

export default {
  title: "Components/Contact Form",
  component: ContactForm,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { ContactForm },
  setup() {
    return { args };
  },
  template: '<ContactForm v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {};
