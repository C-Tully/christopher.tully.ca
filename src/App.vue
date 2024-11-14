<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HomeView msg="Welcome to Your Vue.js App" />
</template>

<script>
import HomeView from "./views/HomeView/HomeView.vue";

export default {
  name: "App",
  components: {
    HomeView,
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
