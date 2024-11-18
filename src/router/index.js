import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView/HomeView.vue";

// import AboutView from "./views/AboutView.vue";
// import BlogView from "./views/BlogView.vue";
// import ContactView from "./views/ContactView.vue";
// import ExperienceView from "./views/ContactView.vue";
// import SkillsView from "./views/SkillsView.vue";

const routes = [
  { path: "/", component: HomeView, name: "Home" },
  // { path: "/about", component: AboutView },
  // { path: "/blog", component: BlogView },
  // { path: "/contact", component: ContactView },
  // { path: "/experience", component: ExperienceView },
  // { path: "/skills", component: SkillsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
