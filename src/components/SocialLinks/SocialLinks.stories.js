import SocialLinks from "./SocialLinks.vue";

export default {
  title: "Components/Social Links", // Adjusted to ensure it’s consistent with Storybook’s naming conventions
  component: SocialLinks,
};

// Create a template for rendering the component
const Template = (args) => ({
  components: { SocialLinks },
  setup() {
    return { args };
  },
  template: '<SocialLinks v-bind="args" />',
});

// Define a default story
export const Default = Template.bind({});
Default.args = {
  linkCollection: [
    {
      ariaLabel: "Test Aria Label",
      href: "https://TestUrl.com",
      imgSrc: "/assets/images/social/linkedin.png",
    },
  ],
};
