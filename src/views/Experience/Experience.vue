<template>
  <div class="experience-page-wrap">
    <SiteHeader />
    <main>
      <h1>Work Experience</h1>
      <p>Content to go here</p>
      <span>Images?</span>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter/SiteFooter.vue";
import SiteHeader from "@/components/SiteHeader/SiteHeader.vue";

export default {
  name: "Experience",
  props: {
    msg: String,
  },
  components: {
    SiteHeader,
    SiteFooter,
  },
  data() {
    return {
      activeTab: this.$route?.query?.tab || "snp",
    };
  },
  watch: {
    "$route.query.tab"(newTab) {
      this.activeTab = newTab || "snp";
    },
  },
  methods: {
    setTab(tab) {
      this.$router.push({ path: "/experience", query: { tab } });
    },
  },
};
</script>
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
