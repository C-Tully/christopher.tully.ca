<template>
  <div class="page-wrap">
    <!-- <aside ref="sidebar" class="sidebar">
      <SiteNav />
    </aside> -->
    <div class="svg-container">
      <svg viewBox="0 0 800 400" class="svg">
        <path
          id="curve"
          fill="#800014"
          d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
        ></path>
      </svg>
    </div>
    <header>
      <div class="container">
        <div class="wrapper">
          <div class="headshot-aside">
            <div class="box">
              <img
                class="circletag"
                src="@/assets/images/headshot.png"
                alt="Image of a person"
              />
            </div>
          </div>
          <div class="main">
            <div class="box">
              <h1>Hi, I'm <b>Chris Tully</b></h1>
            </div>
            <div class="box">
              <h2>I'm a <u>Software developer</u> with 14 years experience.</h2>
            </div>
            <SocialLinks :linkCollection="socialLinkCollection" />
          </div>
        </div>
      </div>
    </header>
    <main class="d-flex">
      <div class="summary-wrapper">
        <div>
          <h3>Summary</h3>
          <p>
            I specialize in creating user-friendly, accessible interfaces that
            meet modern web standards. My goal is to ensure every project
            delivers a polished, high-quality end product. With experience
            across diverse industries, I bring a broad skill set and unique
            perspectives that set me apart from the rest.
          </p>
        </div>
        <div class="skills-wrapper">
          <ul>
            <li v-for="(img, index) in skillsImageCollection" :key="index">
              <img class="logo" :src="img.src" :alt="img.alt" />
            </li>
          </ul>
        </div>
      </div>
      <div class="work-wrapper">
        <h3>Recent Roles</h3>
        <p>(See the experience section for more.)</p>
        <PortfolioCards :portfolioCollection="portfolioCollectionConfig" />
      </div>
      <div class="projects-wrapper">
        <h3>Projects</h3>

        <ul>
          <li
            v-for="(item, index) in projectCollectionConfig"
            :key="index"
            class="project-link"
          >
            <a
              target="_blank"
              aria-labelledby="projectCardTitle"
              :href="item.githubLink"
            >
              <img :src="item.thumbnail" alt="" />
              <!-- Note: I might have to add a distinct id here to ensure accessibility -->
              <h4 id="projectCardTitle">{{ item.name }}</h4>
              <p>{{ item.description }}</p>
            </a>
          </li>
        </ul>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import { useScrollCurve } from "@/composables/useScrollCurve";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
// import SiteNav from "@/components/SiteNav/SiteNav.vue";
import PortfolioCards from "@/components/PortfolioCards/PortfolioCards.vue";
import SiteFooter from "@/components/SiteFooter/SiteFooter.vue";

import { portfolioCollectionConfig } from "@/components/PortfolioCards/config/portfolioCardsConfig.js";
import { projectCollectionConfig } from "@/views/Home/config/projectConfig";
import { skillsImageConfig } from "@/views/Home/config/skillsConfig";

import linkedInLogoImage from "@/assets/images/social/icons/linkedin.png";
import leetCodeLogoImage from "@/assets/images/social/icons/leetcode.png";
import gitHubLogoImage from "@/assets/images/social/icons/github.png";

export default {
  name: "Home",
  components: {
    SocialLinks,
    PortfolioCards,
    // SiteNav,
    SiteFooter,
  },
  mounted() {
    useScrollCurve("curve");
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      portfolioCollectionConfig: portfolioCollectionConfig,
      projectCollectionConfig: projectCollectionConfig,
      modalVisibility: false,
      socialLinkCollection: [
        {
          href: "https://www.linkedin.com/in/christopher-tully-17509b46/",
          ariaLabel: "Click here to check out my LinkedIn Profile.",
          imgSrc: linkedInLogoImage,
          imgAlt: "LinkedIn Logo",
          class: "linkedIn",
        },
        {
          href: "https://leetcode.com/u/c-tully/",
          ariaLabel: "Click here to check out my leetCode profile",
          imgSrc: leetCodeLogoImage,
          imgAlt: "leetCode Logo",
          class: "leetCode",
          imgTitle:
            "Just a quick heads up! This is an early account, please bear with me.",
        },
        {
          href: "https://github.com/C-Tully",
          ariaLabel: "Click here to check out my GitHub profile",
          class: "gitHub",
          imgSrc: gitHubLogoImage,
          imgAlt: "GitHub Logo",
        },
      ],
      skillsImageCollection: skillsImageConfig,
      scrollY: 0,
      targetTop: 70, // Initial position in percentage
      currentTop: 70, // For smooth transition
      triggerPoint: 200, // Scroll threshold
      animationFrame: null, // Store requestAnimationFrame ID
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
    handleScroll() {
      this.scrollY = window.scrollY;
      this.targetTop = this.scrollY > this.triggerPoint ? 50 : 70;

      if (!this.animationFrame) {
        this.smoothTransition();
      }
    },
    smoothTransition() {
      if (Math.abs(this.currentTop - this.targetTop) < 0.1) {
        this.currentTop = this.targetTop;
        this.animationFrame = null;
        return;
      }

      this.currentTop += (this.targetTop - this.currentTop) * 0.1;
      this.$refs.sidebar.style.top = `${this.currentTop}%`;

      this.animationFrame = requestAnimationFrame(this.smoothTransition);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inclusive+Sans:ital@0;1&family=Spectral:wght@300;400;700&display=swap";

.circletag {
  display: block;
  width: 200px;
  height: 200px;
  background: #fff;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
}

.wrapper {
  display: flex;
  width: 80%;
}

.headshot-aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  padding: 0 10px;

  .box {
    justify-content: center;
  }
}

.box {
  display: flex;
  justify-content: flex-start;
}

.box:last-child {
  border-bottom: none;
}

h1 {
  font-size: 7.2vw;

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

h2,
h3 {
  font-weight: 400;
  text-align: left;
}

header {
  color: #fff;
  padding-top: 10vw;
  padding-bottom: 20vw;
  text-align: center;
}

main {
  flex-direction: column;
  flex: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 50px 0 30vh 0;
  position: relative;
  flex-flow: column;
  width: 900px;
  margin: 0 auto;
}

.summary-wrapper,
.work-wrapper,
.projects-wrapper {
  margin-bottom: 6em;
}

.summary-wrapper {
  flex-direction: column;
  display: flex;
}

.sidebar {
  position: fixed;
  left: 10px;
  width: 125px;
  background: white;
  color: $primary-font-black;
  padding: 20px;
  // border-radius: 8px;
  transition: top 0.3s ease-in-out;
  top: 70%;
  transform: translateY(-50%);
  border: 1px solid $primary-font-black;

  :deep(ul) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
    list-style: none !important;
    padding-left: 0;

    li {
      border: 1px solid $primary-font-black;
    }
  }
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

.skills-wrapper {
  ul {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    list-style: none;

    li {
      margin: 8px;
      display: flex;
      justify-content: center;

      &:focus,
      &:focus-within {
        outline: 2px solid #800014 !important;
        box-shadow: 0 0 4px 3px rgba(235, 115, 115, 0.35) !important;
      }
    }
  }

  .logo {
    width: 120px;
    max-height: 120px;
  }
}

.projects-wrapper {
  ul {
    display: flex;
    list-style: none;
    padding-top: 25px;
    width: 100%;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;

    li {
      padding-right: 8px;
      width: 275px;
      justify-content: center;
      display: flex;
      text-align: center;
    }

    .project-link {
      &:focus,
      &:focus-within {
        outline: 2px solid #800014 !important;
        box-shadow: 0 0 4px 3px rgba(235, 115, 115, 0.35) !important;
      }
      a:focus {
        outline: none;
        border: none;
      }
    }
  }
  img {
    max-width: 200px;
    max-height: 200px;
  }
}
</style>
