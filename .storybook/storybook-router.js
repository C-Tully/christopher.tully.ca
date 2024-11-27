import { createRouter, createWebHistory } from "vue-router";

// import Home from "../src/views/Home/Home.vue";

// Define the routes for Storybook testing
const routes = [
  // { path: "/", component: Home, name: "Home" }
  { path: "/", name: "Home", template: "<div>Home Component</div>" },
  { path: "/about", name: "About", template: "<div>About component</div>" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
