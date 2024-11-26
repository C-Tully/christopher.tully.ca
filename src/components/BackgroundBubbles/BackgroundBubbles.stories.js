// import BackgroundBubbles from "@/components/BackgroundBubbles.vue";
import BackgroundBubbles from "./BackgroundBubbles.vue";

export default {
  title: "Components/Background bubbles",
  component: BackgroundBubbles,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { BackgroundBubbles },
  setup() {
    return { args };
  },
  template: '<BackgroundBubbles v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {};
