// import router from "./storybook-router"; // Import your router instance

// /** @type { import('@storybook/vue3').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
//   decorators: [
//     (story) => ({
//       components: { story },
//       template: `
//         <router-view>
//           <story />
//         </router-view>
//       `,
//       setup() {
//         router.push("/"); // Ensure the router starts at a specific route if needed
//       },
//     }),
//   ],
// };

// export default preview;
//Original with mods

import { app } from "@storybook/vue3"; // Import Vue 3 app for Storybook
import BootstrapVueNext from "bootstrap-vue-next"; // Default import of BootstrapVueNext
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import router from "./storybook-router";
// Import your Vue Router instance

// Register BootstrapVueNext globally for Storybook
app.use(BootstrapVueNext);

// Use Vue Router as a global decorator in Storybook
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
          <router-view>
           <story />
         </router-view>
        </div>
      `,
      setup() {
        router.push("/"); // Optional: navigate to a default route
        return { router };
      },
    }),
  ],
};

export default preview;

//end original with mods

// import { app } from "@storybook/vue3";
// import BootstrapVueNext from "bootstrap-vue-next";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// // Use BootstrapVueNext in Storybook
// app.use(BootstrapVueNext);

// /** @type { import('@storybook/vue3').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;
