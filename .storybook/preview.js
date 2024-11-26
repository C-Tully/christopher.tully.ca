import BootstrapVueNext from "bootstrap-vue-next";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import router from "./storybook-router";

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
        <div>
          <story />
        </div>
      `,
      setup() {
        // Optional: Use router if your components rely on Vue Router
        return { router };
      },
    }),
  ],

  tags: ["autodocs"],
};

export default preview;
