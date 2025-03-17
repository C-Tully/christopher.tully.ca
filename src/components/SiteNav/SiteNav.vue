<template>
  <nav class="nav-wrap" role="navigation">
    <ul>
      <!-- <li v-for="route in filteredRoutes" :key="route.name">
        <router-link :to="route.path" :class="customFontClass">{{
          route.name
        }}</router-link>
      </li> -->

      <li v-for="(route, index) in tempRoutes" :key="index">
        <a :href="route.path">
          {{ route.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
// import { useRouter, useRoute } from "vue-router";

export default {
  name: "SiteNav",
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
  data() {
    return {
      tempRoutes: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/",
        },
        {
          name: "Experience",
          path: "/",
        },
        {
          name: "Skills",
          path: "/",
        },
        {
          name: "Projects",
          path: "/",
        },
        {
          name: "Links",
          path: "/",
        },
      ],
    };
  },
  // setup() {
  //   const router = useRouter();
  //   const route = useRoute(); // Access to current route

  //   if (route && router) {
  //     const allRoutes = router.getRoutes();
  //     const filteredRoutes = allRoutes.filter(
  //       (r) => r.path !== route.path && r.name !== "404"
  //     );

  //     return (
  //       { filteredRoutes } || [
  //         {
  //           name: "test",
  //           path: "/",
  //         },
  //       ]
  //     );
  //   }

  //   return [];
  // },
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;

  ul {
    list-style: none;
    display: flex;
    width: 100%;

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
