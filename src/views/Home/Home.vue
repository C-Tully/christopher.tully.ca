<template>
  <div class="page-wrap">
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
          <div class="sidebar">
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
              <h3>I'm a <u>Software developer</u> with 14 years experience.</h3>
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
          <li v-for="(item, index) in projectCollectionConfig" :key="index">
            <div aria-labelledby="projectCardTitle">
              <img :src="item.githubLink" alt="" />
              <!-- Note: I might have to add a distinct id here to ensure accessibility -->
              <h4 id="projectCardTitle">{{ item.name }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <p>And, the footer.</p>
    </footer>
  </div>
</template>

<script>
import { useScrollCurve } from "@/composables/useScrollCurve";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
import { portfolioCollectionConfig } from "@/components/PortfolioCards/config/portfolioCardsConfig.js";
import PortfolioCards from "@/components/PortfolioCards/PortfolioCards.vue";
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
    useScrollCurve("curve");
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

.sidebar {
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
      // border: 4px solid transparent; /* Prevents layout shift */
      // box-shadow: 0px 0px 0px 2px #e6f9fe, 0px 0px 0px 3px #005587;
      // box-shadow: 0px 0px 0px 2px #e6f9fe, 0px 0px 0px 3px #005587;

      // outline: 2px solid $bmo-cerulean !important;
      // box-shadow: $bmo-blue-box-shadow !important;

      &:focus,
      &:focus-within {
        // box-shadow: 0px 0px 0px 2px #e6f9fe, 0px 0px 0px 3px #005587;
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
</style>
