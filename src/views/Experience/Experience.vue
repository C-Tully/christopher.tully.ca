<template>
  <div class="experience-page-wrap">
    <SiteHeader />
    <main class="container">
      <div class="row page-title">
        <h1>Work Experience</h1>
      </div>
      <div
        class="row"
        v-for="(experience, index) of experienceConfig"
        :key="index"
      >
        <div class="job-meta-wrap">
          <h2>{{ experience.name }}</h2>
          <p>{{ experience.dateRange }}</p>
          <p>
            Roles:
            <ul>
              <li v-for="(role, index) in experience.roles" :key="index">
                {{  role }}
              </li>
            </ul>
          </p>
        </div>
        <div class="job-languages">
          <h3>Languages:</h3>
          <ul >
            <li v-for="(language, index) in experience.languages" :key="index" >
            {{
              language
            }}
            </li>
          </ul>
        </div>
        <div class="job-frameworks">
          <h3>Frameworks:</h3>
          <ul>
            <li
              v-for="(framework, index) in experience.frameworks"
              :key="index"
            >
              {{ framework }}
            </li>
          </ul>
        </div>
        <div class="job-database">
          <h3>Database management:</h3>
          <ul>
            <li v-for="(database, index) in experience.database" :key="index">
              {{ database }}
            </li>
          </ul>
        </div>
        <div class="job-devops">
          <h3>DevOps:</h3>
          <ul>
            <li v-for="(devOp, index) in experience.devOps" :key="index">
              {{ devOp }}
            </li>
          </ul>
        </div>
        <div class="job-skills">
          <h3>Skills:</h3>
          <ul>
            <li v-for="(skill, index) in experience.Skills" :key="index">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="job-description">
          <h3>Desription:</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter/SiteFooter.vue";
import SiteHeader from "@/components/SiteHeader/SiteHeader.vue";

import { experienceConfig } from "@/views/Experience/config/config.js";

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
      experienceConfig: experienceConfig,
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
