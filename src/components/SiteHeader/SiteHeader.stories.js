import SiteHeader from "./SiteHeader.vue";
// import { RouterLinkStub } from "@vue/test-utils";

export default {
  title: "Components/Site Header", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: SiteHeader,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { SiteHeader },
  setup() {
    return { args };
  },
  beforeCreate() {
    this.$router = {
      options: {
        routes: [
          { path: "/", name: "Home" },
          { path: "/skills", name: "Skills" },
          { path: "/experience", name: "Experience" },
        ],
      },
    };
  },
  template: '<SiteHeader v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  linkCollection: [],
};
