import router from "./storybook-router"; // Import your router instance

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <router-view>
          <story />
        </router-view>
      `,
      setup() {
        router.push("/"); // Ensure the router starts at a specific route if needed
      },
    }),
  ],
};

export default preview;
