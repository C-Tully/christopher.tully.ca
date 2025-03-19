import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home/Home.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
// import Experience from "@/views/Experience/Experience.vue";
// import Skills from "@/views/Skills/Skills.vue";

// import SocialLinks from "@/views/SocialLinks/SocialLinks.vue";
// import About from "@/views/About/About.vue";
// import Contact from "@/views/Contact/Contact.vue";

// import Blog from "@/views/Blog/Blog.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  // { path: "/experience", component: Experience, name: "Experience" },
  {
    path: "/:pathMatch(.*)*", // Catch-all route
    name: "404",
    component: NotFound,
  },
  // { path: "/skills", component: Skills, name: "Skills" },
  // { path: "/social", component: SocialLinks, name: "Social" },
  // { path: "/about", component: About, name: "About" },
  // { path: "/contact", component: Contact, name: "Contact" },

  // { path: "/blog", component: Blog, name: "Blog" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
