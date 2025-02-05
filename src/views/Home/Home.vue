<template>
  <div class="home-wrap bubbles flex-container" role="main">
    <div>
      <div class="copy-wrap">
        <div class="main-copy">
          <h1>Hi, I'm <b>Chris</b></h1>
          <p>I'm a <u>Software developer</u> with 14 years experience.</p>
        </div>
        <div class="description-wrap">
          <p>
            I specialize in creating user-friendly, accessible interfaces that
            meet modern web standards. My goal is to ensure every project
            delivers a polished, high-quality end product. With experience
            across diverse industries, I bring a broad skill set and unique
            perspectives that set me apart from the rest.
          </p>
          <p>Stay tuned there's more to come</p>
        </div>
      </div>
      <SocialLinks :linkCollection="socialLinkCollection" />
    </div>
    <div
      class="bubble"
      v-for="n in TOTAL_BUBBLES"
      :key="n"
      v-memo="[TOTAL_BUBBLES]"
      aria-hidden="true"
      tab-index="-1"
    ></div>
  </div>
</template>

<script>
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
import linkedinIcon from "@/assets/images/social/icons/linkedin.png";
import gitHubIcon from "@/assets/images/social/icons/github.png";
import leetCodeIcon from "@/assets/images/social/icons/leetcode.png";

export default {
  name: "Home",
  components: {
    SocialLinks,
  },
  data() {
    return {
      modalVisibility: false,
      TOTAL_BUBBLES: 59,
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
      return (this.modalVisibility = !this.modalVisibility);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-wrap {
  height: 100vh;
  margin: 0;
  background: $primary-background-blue;
  background: $primary-background-gradient;
  position: relative;
}

.flex-container {
  position: absolute;
  top: 25%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3em;

  .copy-wrap {
    flex-flow: row;
    display: flex;

    .main-copy {
      display: flex;
      flex-wrap: nowrap;
      flex: 4;
      flex-flow: column;
      justify-content: flex-start;
      text-align: right;
      padding-left: 5em;
      padding: 0 3em;

      p {
        color: #ffff;
      }
    }

    .description-wrap {
      flex: 4;
      text-align: left;
      color: $primary-font-white;
    }

    b {
      font-weight: 700;
    }
  }
}

:deep(.nav-wrap) {
  flex: 2;

  ul {
    padding-left: 0;
    text-align: right;
  }
}

@media only screen and (max-width: 600px) {
  .flex-container {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    .copy-wrap {
      flex-flow: column;
      width: 100%;

      .main-copy {
        text-align: inherit;
        padding: 0;
      }
    }
  }
}

$bubble-count: 50;
$sway-type: "sway-left-to-right", "sway-right-to-left";

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

@function sample($list) {
  @return nth($list, random(length($list)));
}

.bubbles {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.bubble {
  position: absolute;
  pointer-events: none;
  left: var(--bubble-left-offset);
  bottom: -75%;
  display: block;
  width: var(--bubble-radius);
  height: var(--bubble-radius);
  border-radius: 50%;
  animation: float-up var(--bubble-float-duration) var(--bubble-float-delay)
    ease-in infinite;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(240, 72%, 52%, 0.3);
    border-radius: inherit;
    animation: var(--bubble-sway-type) var(--bubble-sway-duration)
      var(--bubble-sway-delay) ease-in-out alternate infinite;
  }

  @for $i from 0 through $bubble-count {
    &:nth-child(#{$i}) {
      --bubble-left-offset: #{random_range(0vw, 100vw)};
      --bubble-radius: #{random_range(1vw, 10vw)};
      --bubble-float-duration: #{random_range(6s, 12s)};
      --bubble-sway-duration: #{random_range(4s, 6s)};
      --bubble-float-delay: #{random_range(0s, 4s)};
      --bubble-sway-delay: #{random_range(0s, 4s)};
      --bubble-sway-type: #{sample($sway-type)};
    }
  }
}

@keyframes float-up {
  to {
    transform: translateY(-175vh);
  }
}

@keyframes sway-left-to-right {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@keyframes sway-right-to-left {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
