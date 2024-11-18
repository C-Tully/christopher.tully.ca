import HomeView from "@/views/HomeView/HomeView.vue";
import SiteHeader from "@/components/SiteHeader/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter/SiteFooter.vue";

export default {
  title: "Views/HomeView", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: HomeView,
};

// Create a template for rendering the components
const Template = (args) => ({
  components: { HomeView, SiteHeader, SiteFooter },

  setup() {
    return { args };
  },
  template: '<SiteHeader /><HomeView v-bind="args" /><SiteFooter />',
  // template: "test",
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  msg: "Welcome to the Home Page!", // Adjust as necessary
};
