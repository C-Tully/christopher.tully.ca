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
    <BackgroundBubbles />
  </div>
</template>

<script>
import SiteNav from "@/components/SiteNav/SiteNav.vue";
import BackgroundBubbles from "@components/BackgroundBubbles/BackgroundBubbles.vue";
export default {
  name: "Home",
  components: {
    SiteNav,
    BackgroundBubbles,
  },
  props: {},
  data() {
    return {
      modalVisibility: false,
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

    header {
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

@media only screen and (max-width: 600px) {
  .flex-container {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    .copy-wrap {
      flex-flow: column;
      width: 100%;

      header {
        text-align: inherit;
        padding: 0;
      }
    }
  }
}
</style>
