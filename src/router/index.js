import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/Home.vue";

import About from "@/views/About/About.vue";
import Blog from "@/views/Blog/Blog.vue";
// import BlogView from "./views/BlogView.vue";
import Contact from "@/views/Contact/Contact.vue";
import Experience from "@/views/Experience/Experience.vue";
import Skills from "@/views/Skills/Skills.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/blog", component: Blog, name: "Blog" },
  { path: "/contact", component: Contact, name: "Contact" },
  { path: "/experience", component: Experience, name: "Experience" },
  { path: "/skills", component: Skills, name: "Skills" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
