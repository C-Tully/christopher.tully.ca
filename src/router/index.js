import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home/Home.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
// import About from "@/views/About/About.vue";
// import Blog from "@/views/Blog/Blog.vue";
// import Contact from "@/views/Contact/Contact.vue";
// import Experience from "@/views/Experience/Experience.vue";
// import Skills from "@/views/Skills/Skills.vue";

const routes = [
  { path: "/", component: Home, name: "Home", meta: { gtm: "Home" } },
  {
    path: "/:pathMatch(.*)*", // Catch-all route
    name: "404",
    component: NotFound,
    meta: { gtm: "404" },
  },
  // { path: "/about", component: About, name: "About" },
  // { path: "/blog", component: Blog, name: "Blog" },
  // { path: "/contact", component: Contact, name: "Contact" },
  // { path: "/experience", component: Experience, name: "Experience" },
  // { path: "/skills", component: Skills, name: "Skills" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "pageview",
      page_path: to.fullPath,
      page_title: to.meta.gtm || document.title,
    });
  }
});

export default router;
