<template>
  <div>
    <SiteLogo />
    <nav>
      <ul>
        <!-- todo:: SB router not mocking -->
        <!-- <li v-for="route in filteredRoutes" :key="route.name">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li> -->
      </ul>
    </nav>
  </div>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import SiteLogo from "@/components/SiteLogo/SiteLogo.vue";

export default {
  name: "SiteHeader",
  components: { SiteLogo },
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
// @import "@/assets/styles/vars";
nav {
  width: 100%;
  height: 10vh;
  // background-color: $background-blue;
  background-color: #00008b;
}
</style>
