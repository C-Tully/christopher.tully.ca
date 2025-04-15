<template>
  <header>
    <div>
      <img src="" alt="Christopher Tully - Full Stack Developer Logo" />
      <SiteNav />
    </div>
  </header>
</template>
<script>
import { useRouter, useRoute } from "vue-router";
import SiteNav from "@/components/SiteNav/SiteNav.vue";

export default {
  name: "SiteHeader",
  components: {
    SiteNav,
  },
  props: {
    customFontClass: {
      type: String,
      default: "regular",
      validator: (value) => {
        const lowerCaseValue = value.toLowerCase();
        return ["regular", "bold", "light"].includes(lowerCaseValue);
      },
    },
  },
  setup() {
    const router = useRouter();
    const route = useRoute(); // Access to current route

    if (route && router) {
      const allRoutes = router.getRoutes();
      const filteredRoutes = allRoutes.filter(
        (r) => r.path !== route.path && r.name !== "404"
      );

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
header {
  width: 100%;
  background-color: $primary-background-red;

  nav {
    ul {
      li {
        a {
          font-size: 20px;

          &.bold {
            font-family: "Spectral", serif;
            font-weight: 700;
            font-style: normal;
          }

          &:hover {
            color: $primary-font-white;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .flex-container {
    .copy-wrap {
      flex-flow: column;
    }
  }

  .nav-wrap {
    flex: 1;
    display: inline-flex;
    width: 100%;

    ul {
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
    }
  }
}
</style>

<!-- /** 
* Todo:: BootstrapVue isn't working.
     <b-navbar variant="faded" type="light">
        <b-navbar-brand
          v-for="route in filteredRoutes"
          :key="route.path"
          href="#"
        >
          {{ route.name }}
        </b-navbar-brand>
      </b-navbar>
*/ -->
