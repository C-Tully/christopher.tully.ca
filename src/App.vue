<template>
  <!-- <h1>Hello App!</h1> -->
  <!-- <p><strong>Current route path:</strong> {{ $route.fullPath }}</p> -->
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
<script>
// import HomePage from "./views/HomePage/HomePage.vue";
import SiteHeader from "./components/SiteHeader/SiteHeader.vue";
import SiteFooter from "./components/Footer.vue/Footer.vue";

export default {
  name: "App",
  components: {
    // HomePage,
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
