<template>
  <div class="svg-container">
    <!-- SVG generated using: https://codepen.io/anthonydugois/pen/mewdyZ -->
    <svg viewBox="0 0 800 400" class="svg">
      <path
        id="curve"
        fill="#800014"
        d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
      ></path>
    </svg>
  </div>

  <header>
    <h1>Hi, I'm <b>Chris Tully</b></h1>
    <h3>I'm a <u>Software developer</u> with 14 years experience.</h3>
  </header>

  <main>
    <div>
      <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
    </div>
    <p>
      I specialize in creating user-friendly, accessible interfaces that meet
      modern web standards. My goal is to ensure every project delivers a
      polished, high-quality end product. With experience across diverse
      industries, I bring a broad skill set and unique perspectives that set me
      apart from the rest.
    </p>
    <div class="">
      <h4>My Work</h4>
      <PortfolioCards :portfolioCollection="portfolioCollectionConfig" />
    </div>
    <div>
      <h5>My Links</h5>
      <SocialLinks :linkCollection="socialLinkCollection" />
    </div>
  </main>

  <footer>
    <p>And, the footer.</p>
  </footer>
</template>

<script>
import linkedinIcon from "@/assets/images/social/icons/linkedin.png";
import gitHubIcon from "@/assets/images/social/icons/github.png";
import leetCodeIcon from "@/assets/images/social/icons/leetcode.png";

import { useScrollCurve } from "@/composables/useScrollCurve";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
import { portfolioCollectionConfig } from "@/components/PortfolioCards/config/portfolioCardsConfig.js";
import PortfolioCards from "@/components/PortfolioCards/PortfolioCards.vue";

export default {
  name: "Home",
  components: {
    SocialLinks,
    PortfolioCards,
  },
  data() {
    return {
      portfolioCollectionConfig: portfolioCollectionConfig,
      modalVisibility: false,
      socialLinkCollection: [
        {
          href: "https://www.linkedin.com/in/christopher-tully-17509b46/",
          ariaLabel: "Click here to check out my LinkedIn Profile.",
          imgSrc: linkedinIcon,
          imgAlt: "LinkedIn Logo",
          class: "linkedIn",
        },
        {
          href: "https://leetcode.com/u/c-tully/",
          ariaLabel: "Click here to check out my leetCode profile",
          imgSrc: leetCodeIcon,
          imgAlt: "leetCode Logo",
          class: "leetCode",
          imgTitle:
            "Just a quick heads up! This is an early account, please bear with me.",
        },
        {
          href: "https://github.com/C-Tully",
          ariaLabel: "Click here to check out my GitHub profile",
          class: "gitHub",
          imgSrc: gitHubIcon,
          imgAlt: "GitHub Logo",
        },
      ],
    };
  },
  methods: {
    handleOnClick(event) {
      if (event) {
        this.toggleModalVisibility();
      }
    },
    toggleModalVisibility() {
      this.modalVisibility = !this.modalVisibility;
    },
  },
  mounted() {
    useScrollCurve("curve"); // Call composable inside mounted()
  },
};
</script>

<style lang="scss" scoped>
// @import "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700";
@import "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inclusive+Sans:ital@0;1&family=Spectral:wght@300;400;700&display=swap";

h1 {
  b {
    color: #05f7ff;
  }
}

*,
*:after,
*:before {
  margin: 0;
  padding: 0;
}

.svg-container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

svg {
  path {
    transition: 0.1s;
  }

  &:hover path {
    d: path("M 800 300 Q 400 250 0 300 L 0 0 L 800 0 L 800 300 Z");
  }
}

body {
  background: #fff;
  color: #333;
  font-family: "Ubuntu", sans-serif;
  position: relative;
}

h3 {
  font-weight: 400;
}

header {
  color: #fff;
  padding-top: 10vw;
  padding-bottom: 30vw;
  text-align: center;
}

main {
  background: linear-gradient(to bottom, #ffffff 0%, #dddee1 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10vh 0 80vh;
  position: relative;
  text-align: center;
  overflow: hidden;

  // &::after {
  //   border-right: 2px dashed #0f0f0f;
  //   content: "";
  //   position: absolute;
  //   top: calc(10vh + 1.618em);
  //   bottom: 0;
  //   left: 50%;
  //   width: 2px;
  //   height: 100%;
  // }
}

footer {
  background: #dddee1;
  padding: 5vh 0;
  text-align: center;
  position: relative;
}

small {
  opacity: 0.5;
  font-weight: 300;

  a {
    color: inherit;
  }
}
</style>
