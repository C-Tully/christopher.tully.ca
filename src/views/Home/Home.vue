<template>
  <div class="home-wrap bubbles">
    <div class="flex-container">
      <div class="copy-wrap">
        <header class="">
          <h1>Hi, I'm <b>Chris</b></h1>
          <p>I'm a <u>Software developer</u> with 13 years experience.</p>
        </header>
        <div class="description-wrap">
          <p>
            I specialize in creating user-friendly, accessible interfaces that
            meet modern web standards. My goal is to ensure every project
            delivers a polished, high-quality end product. With experience
            across diverse industries, I bring a broad skill set and unique
            perspectives that set me apart from the rest.
          </p>
          <CustomButton
            @onClick="handleOnClick"
            label="Contact me!"
            primary
            size="medium"
          />
        </div>
      </div>
      <SiteNav customFontClass="bold" />
    </div>
    <div
      class="bubble"
      v-for="n in TOTAL_BUBBLES"
      :key="n"
      v-memo="[TOTAL_BUBBLES]"
    ></div>
  </div>
</template>

<script>
import SiteNav from "@/components/SiteNav/SiteNav.vue";
export default {
  name: "Home",
  components: {
    SiteNav,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      modalVisibility: false,
      TOTAL_BUBBLES: 59,
    };
  },
  methods: {
    handleOnClick(event) {
      if (event) {
        console.log("Home::handleOnClickEvent::event::", event);
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
//temp

.home-wrap {
  height: 100%;
  margin: 0;
  background: rgb(12, 12, 131);
  background: linear-gradient(
    90deg,
    rgba(12, 12, 131, 1) 0%,
    rgba(46, 46, 221, 1) 54%,
    rgba(12, 12, 131, 1) 100%
  );
  position: relative;
}

::v-deep {
  .nav-wrap {
    flex: 2;
    ul {
      list-style-type: none;
      padding-left: 0;
      text-align: right;
    }
  }
}

.flex-container {
  position: relative;
  z-index: 2; // Foreground content layer
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 100vh;
  width: 100%;
  padding: 3em;

  .copy-wrap {
    flex-flow: row;
    // padding: 20px;
    // background-color: #f0f0f0;
    // border-radius: 8px;
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    header {
      display: flex;
      flex-wrap: nowrap;
      flex: 4;
      flex-flow: column;
      justify-content: flex-start;
      text-align: right;
      padding-left: 5em;
      padding: 0 3em;

      // text-align: right;

      p {
        color: #ffff;
      }
    }

    .description-wrap {
      flex: 4;
      text-align: left;
      color: #fafafa;
    }

    h1 {
      color: #a6cff2;
      font-size: 9.2vw;
      font-family: "Bebas Neue", serif;
      font-weight: 400;
      font-style: normal;
      line-height: 0.9em;
    }
    b {
      font-weight: 700;
    }
  }
}

.copy-wrap {
  display: flex;
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
  mouse-interactions: none;
}

.bubble {
  position: absolute;
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
