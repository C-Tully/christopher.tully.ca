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
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item" v-for="(role, index) in experience.roles" :key="index">
                {{  role }}
              </li>
            </ul>
          </p>
        </div>
        <div class="job-languages">
          <h3>Languages:</h3>
          <ul class="list-group list-group-horizontal" >
            <li v-for="(language, index) in experience.languages" :key="index" >
              <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
            {{
              language
            }}</span>
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
            <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
              {{ framework }}
            </span>
            
            </li>
          </ul>
        </div>
        <div class="job-database">
          <h3>Database management:</h3>
          <ul>
            <li v-for="(database, index) in experience.database" :key="index">
              <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">{{ database }}</span>
            </li>
          </ul>
        </div>
        <div class="job-devops">
          <h3>DevOps:</h3>
          <ul>
            <li v-for="(devOp, index) in experience.devOps" :key="index">
              <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">{{ devOp }}</span>
            </li>
          </ul>
        </div>
        <div class="job-skills">
          <h3>Skills:</h3>
          <ul>
            <li v-for="(skill, index) in experience.Skills" :key="index">
              <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">{{ skill }}</span>
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
