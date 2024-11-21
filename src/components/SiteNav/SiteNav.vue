<template>
  <nav class="nav-wrap">
    <ul>
      <li v-for="route in filteredRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "SiteNav",
  props: {},
  setup() {
    const router = useRouter();
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
  },
};
</script>
<style lang="scss" scoped>
// // @import "@/assets/styles/vars";
// nav {

// }
</style>
