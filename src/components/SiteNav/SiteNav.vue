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
      ref="mobileAside"
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

import { useScreenSize } from "@/composables/isMobileCheck";

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
  computed: {
    ...useScreenSize(),
  },
  methods: {
    toggleMobileAside() {
      this.mobileAsideFlag = !this.mobileAsideFlag;
    },
    closeAsideIfClickedOutside(event) {
      console.log("event::", event);
      ///Problem:: Auto triggering on click of mobile button.
      // Check if the click was outside of the mobile aside
      if (
        this.mobileAsideFlag === true &&
        this.$refs.mobileAside &&
        !this.$refs.mobileAside.contains(event.target)
      ) {
        // this.mobileAsideFlag = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.closeAsideIfClickedOutside);
    //document needs to be adjust likely...
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeAsideIfClickedOutside);
  },
};
</script>
<style lang="scss" scoped>
.hamburger-menu {
  display: none;
}

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
  transform: translateX(55%);
}

.hamburger-menu {
  background: url("@/assets/images/hamburgerMenuIcon.svg") no-repeat center /
    contain;
  width: 32px;
  margin-right: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
}

// .mobile-aside {
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 40vw;
//   height: 100vh;
//   background-color: $primary-red;
//   z-index: 999;
//   box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
//   padding: 1rem;
//   display: flex;
//   flex-flow: column;

//   div:first-child {
//     flex-flow: column;
//     align-items: flex-start;
//     padding: 16px 8px 0 8px;

//     button {
//       display: flex;
//       margin-left: auto;
//     }
//   }

//   ul {
//     flex-flow: column;
//     align-items: flex-start;
//     padding: 16px 0 0 8px;

//     li {
//       width: 100%;
//       margin-bottom: 16px 0;

//       a {
//         color: $primary-font-white;
//         text-decoration: none;

//         &:hover,
//         &:active {
//           color: white !important;
//           border-bottom: 1px solid white !important;
//         }
//       }
//     }
//   }
// }

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
  flex-direction: column;

  > div:first-child {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 8px 0;

    button {
      margin-left: auto;
    }
  }

  ul {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0 0 8px;

    li {
      width: 100%;
      margin-bottom: 16px;

      a {
        color: $primary-font-white;
        text-decoration: none;

        &:hover,
        &:active {
          color: white !important;
          border-bottom: 1px solid $background-white !important;
        }
      }
    }
  }
}

.close {
  $size: 32px;
  $borderSize: 2px;
  $borderColor: rgba($primary-black, 0);
  $speed: 0.5s;
  width: $size;
  height: $size;
  position: relative;
  background: $background-white;
  border-radius: 50%;
  box-shadow: 0 0 20px -5px rgba($background-white, 0.5);
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
    }
  }
  span {
    display: block;
    width: ($size/4) - 2px;
    height: $borderSize;
    // background: $borderColor;
    background: $primary-black;
    // background: red;
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
    // background: $primary-footer-grey;
    background: transparent;

    span {
      width: ($size/4);
      background-color: $primary-font-white;
    }
  }
}
</style>
