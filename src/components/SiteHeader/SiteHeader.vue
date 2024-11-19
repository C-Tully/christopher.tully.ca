<template>
  <nav>
    <ul>
      <!-- todo:: SB router not mocking -->
      <!-- <li v-for="route in filteredRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li> -->
    </ul>
  </nav>
</template>
<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "SiteHeader",
  props: {},
  setup() {
    const router = useRouter(); // Access to router instance
    const route = useRoute(); // Access to current route
    if (route && router) {
      const allRoutes = router.getRoutes();
      const filteredRoutes = allRoutes.filter((r) => r.path !== route.path);
      return (
        { filteredRoutes } || [
          {
            name: "test",
            path: "/",
          },
        ]
      );
    }

    return [];

    //Todo:: it's failing here, the router isn't being used.
    // console.log("SiteHeader::route::", route);

    // Get all registered routes
    // const allRoutes = router.getRoutes();
    // console.log("SiteHeader::allRoutes::", allRoutes);
    // Filter out the current route

    // console.log("filteredRoutes::", filteredRoutes);
    // return {
    //   filteredRoutes,
    // };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/vars";
nav {
  width: 100%;
  height: 10vh;
  background-color: $background-blue;
}
</style>
