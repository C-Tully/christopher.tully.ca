<template>
  <header>
    <div class="container">
      <div class="row">
        <img
          class="banner-logo"
          src="@/assets/images/bannerLogo.png"
          alt="Christopher Tully - Full Stack Developer Logo"
        />
        <SiteNav includeNav />
      </div>
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
  // background-color: $primary-background-red;
  background-color: #dddee1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  // nav {
  //   ul {
  //     li {
  //       a {
  //         font-size: 20px;

  //         &.bold {
  //           font-family: "Spectral", serif;
  //           font-weight: 700;
  //           font-style: normal;
  //         }

  //         &:hover {
  //           // color: $primary-font-white;
  //         }
  //       }
  //     }
  //   }
  // }

  :deep(.row) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;

    & > * {
      padding: 0;
    }
  }

  :deep(ul) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    list-style: none !important;
    padding-left: 0;
    align-items: flex-end;
    gap: 8px;
    margin-bottom: 0;

    li {
      a {
        color: $primary-link-blue;
        background-color: transparent;
        font-size: 20px;
        border: none;

        &:hover,
        &:focus,
        &:focus-within {
          color: $primary-red;

          outline: 0 solid #800014 !important;
          box-shadow: 0 0 4px 3px rgba(235, 115, 115, 0.35) !important;
        }
      }
      // img {
      //   border: 1px solid $primary-font-black;
      //   border-radius: 10px;
      // }
    }
  }

  // :deep(.nav-wrap) {
  //   ul {
  //     li {
  //       &:focus,
  //       &:focus-within {
  //         outline: 2px solid #800014 !important;
  //         box-shadow: 0 0 4px 3px rgba(235, 115, 115, 0.35) !important;
  //       }
  //     }
  //   }
  // }

  .banner-logo {
    width: 75px;
    border: 3px solid black;
    border-radius: 10px;
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
