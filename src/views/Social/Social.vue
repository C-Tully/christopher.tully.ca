<template>
  <div class="social-wrapper">
    <SiteHeader />
    <h1>This is the Social Page component</h1>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter/SiteFooter.vue";
import SiteHeader from "@/components/SiteHeader/SiteHeader.vue";

//import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";

export default {
  name: "Social",
  props: {
    msg: String,
  },
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
