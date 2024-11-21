<template>
  <div class="flex-container">
    <div class="copy-wrap">
      <header class="">
        <h1>Hi, I'm <b>Chris</b></h1>
        <p>I'm a <u>Software developer</u> with 13 years experience.</p>
      </header>
      <div class="description-wrap">
        <p><b></b></p>
        <p>
          I specialize in creating user-friendly, accessible interfaces that
          meet modern web standards. My goal is to ensure every project delivers
          a polished, high-quality end product. With experience across diverse
          industries, I bring a broad skill set and unique perspectives that set
          me apart from the rest.
        </p>
        <CustomButton
          @onClick="handleOnClick"
          label="Contact me!"
          primary
          size="medium"
        />
      </div>
    </div>
    <SiteNav />
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

// .nav-wrap {
//   flex: 2;
// }
::v-deep {
  .nav-wrap {
    flex: 2;
  }
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .copy-wrap {
    flex-flow: row;
    // padding: 20px;
    // background-color: #f0f0f0;
    // border-radius: 8px;
    // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    header {
      flex: 4;
    }
    .description-wrap {
      flex: 4;
      text-align: left;
      color: #fafafa;
    }

    h1 {
      color: #73bbd3;
      font-size: 15px;
    }
  }
}

.copy-wrap {
  display: flex;
}
</style>
