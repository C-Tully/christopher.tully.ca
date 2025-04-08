<template>
  <nav
    v-if="includeNav"
    class="nav-wrap"
    :class="{
      global: includeNav,
    }"
    role="navigation"
  >
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
    <button
      class="hamburger-menu"
      @click="toggleMobileAside"
      aria-label="Click to toggle the mobile navigation menu"
    ></button>
  </nav>
  <div v-else>
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
  </div>
  <transition name="slide">
    <aside
      v-if="mobileAsideFlag"
      class="mobile-aside"
      :ariaExpanded="mobileAsideFlag ? 'true' : 'false'"
    >
      <div>
        <button
          class="close"
          @click="toggleMobileAside"
          aria-label="Click to toggle the mobile navigation menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <svg viewBox="0 0 36 36" class="circle" aria-hidden="true">
            <path
              stroke-dasharray="100, 100"
              d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </button>
        <ul>
          <li v-for="(route, index) in tempRoutes" :key="index">
            <a :href="route.path">
              {{ route.name }}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </transition>
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
    includeNav: {
      type: Boolean,
      default: false,
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
      mobileAsideFlag: false,
    };
  },
  methods: {
    toggleMobileAside() {
      console.log("toggle::");
      this.mobileAsideFlag = !this.mobileAsideFlag;
    },
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

  .nav-wrap.global {
    flex-direction: row-reverse;

    ul {
      display: none;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(55%); // 100% - 35% width = visible portion
}

.hamburger-menu {
  background-image: url("@/assets/images/hamburgerMenuIcon.svg");
  width: 32px;
  margin-right: 16px;
  background-repeat: no-repeat;
  background-position: center;
  // background-size: 32px 32px; // or `contain` if you want it to scale
  background-size: contain;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.mobile-aside {
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  background-color: $primary-red;
  z-index: 999;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: flex;
  flex-flow: column;

  div:first-child {
    flex-flow: column;
    align-items: flex-start;
    padding: 16px 8px 0 8px;

    button {
      display: flex;
      margin-left: auto;
    }
  }

  ul {
    flex-flow: column;
    align-items: flex-start;
    padding: 16px 0 0 8px;

    li {
      width: 100%;
      margin-bottom: 16px 0;

      a {
        color: $primary-font-white;
        text-decoration: none;

        &:hover,
        &:active {
          color: white !important;
          border-bottom: 1px solid white !important;
        }
      }
    }
  }
}

.close {
  $size: 32px;
  $borderSize: 2px;
  // $borderColor: rgba(white, 1);
  $borderColor: rgba(black, 0);
  $speed: 0.5s;
  width: $size;
  height: $size;
  position: relative;
  // background: #455a64;
  background: white;

  border-radius: 50%;
  box-shadow: 0 0 20px -5px rgba(white, 0.5);
  // box-shadow: 0 0 20px -5px rgba(black, 0);
  transition: 0.25s ease-in-out;
  cursor: pointer;
  animation: fade-in $speed ease-out 0.25s both;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(1.1);
    }
  }
  .circle {
    path {
      // stroke: $borderColor;
      stroke: transparent;
      fill: none;
      stroke-width: $borderSize/2;
      stroke-linecap: round;
      animation: progress $speed ease-out 0.25s both;
      @keyframes progress {
        from {
          stroke-dasharray: 0 100;
        }
      }

      &:active {
        // s: white !important;
        // border-bottom: 1px solid white !important;
      }
    }
  }
  span {
    display: block;
    width: ($size/4) - 2px;
    height: $borderSize;
    // background: $borderColor;
    // background: black;
    background: green;
    // box-shadow: 0 0 20px -5px rgba(green, 0.5);
    border-radius: 20px;
    position: absolute;
    $padding: $size/3;
    transition: 0.25s ease-in-out;
    animation: slide-in $speed ease-in-out 0.25s both;
    @keyframes slide-in {
      from {
        width: 0;
      }
    }

    &:nth-child(1) {
      top: ($padding - ($borderSize/2));
      left: $padding;
      transform: rotate(45deg);
      transform-origin: top left;
    }

    &:nth-child(2) {
      top: ($padding - ($borderSize/2));
      right: $padding;
      transform: rotate(-45deg);
      transform-origin: top right;
    }

    &:nth-child(3) {
      bottom: ($padding - ($borderSize/2));
      left: $padding;
      transform: rotate(-45deg);
      transform-origin: bottom left;
    }

    &:nth-child(4) {
      bottom: ($padding - ($borderSize/2));
      right: $padding;
      transform: rotate(45deg);
      transform-origin: bottom right;
    }
  }
  &:hover {
    // background: #37474f;
    background: black;
    span {
      width: ($size/4);
      color: white;
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
