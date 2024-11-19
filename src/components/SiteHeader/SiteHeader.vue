<template>
  <nav>
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
  name: "SiteHeader",
  props: {
    linkCollection: { type: Array, required: false },
  },
  setup() {
    const router = useRouter(); // Access to router instance
    const route = useRoute(); // Access to current route
    console.log("SiteHeader::route::", route);

    // Get all registered routes
    const allRoutes = router.getRoutes();
    console.log("SiteHeader::allRoutes::", allRoutes);
    // Filter out the current route
    const filteredRoutes = allRoutes.filter((r) => r.path !== route.path);
    console.log("filteredRoutes::", filteredRoutes);
    return {
      filteredRoutes,
    };
  },
};
</script>
