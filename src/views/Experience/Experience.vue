<template>
  <div class="experience-page-wrap" v-if="!loading">
    <SiteHeader />
    <main class="container">
      <div class="row page-title">
        <h1>Work Experience</h1>
      </div>
      <div class="row job-container">
        <div
          class="job-item"
          v-for="(experience, index) of experienceConfig"
          :key="index"
          :class="{
            active: isActiveExperienceFlag(experience.key),
          }"
        >
          <div class="job-meta-wrap">
            <div class="job-title">
              <h2>{{ experience.name }}</h2>
              <p>{{ experience.dateRange }}</p>
            </div>
            <div class="job-roles">
              <h3 class="d-inline-block">Roles:</h3>
              <ul class="list-group list-group-horizontal">
                <li
                  class=""
                  v-for="(role, index) in experience.roles"
                  :key="index"
                >
                  <span
                    class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle"
                  >
                    {{ role }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="job-languages">
            <h3 class="d-inline-block">Languages:</h3>
            <ul class="list-group list-group-horizontal">
              <li
                v-for="(language, index) in experience.languages"
                :key="index"
              >
                <span
                  class="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-primary-subtle border border-primary-subtle"
                >
                  {{ language }}
                </span>
              </li>
            </ul>
          </div>
          <div class="job-frameworks">
            <h3>Frameworks:</h3>
            <ul class="list-group list-group-horizontal">
              <li
                v-for="(framework, index) in experience.frameworks"
                :key="index"
              >
                <span
                  class="badge bg-success-subtle border border-success-subtle text-success-emphasis"
                >
                  {{ framework }}
                </span>
              </li>
            </ul>
          </div>
          <div class="job-database">
            <h3>Database management:</h3>
            <ul class="list-group list-group-horizontal">
              <li
                v-for="(database, index) in experience.databaseManagement"
                :key="index"
              >
                <span
                  class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis"
                >
                  {{ database }}
                </span>
              </li>
            </ul>
          </div>
          <div class="job-devops">
            <h3>DevOps:</h3>
            <ul class="list-group list-group-horizontal">
              <li v-for="(devOp, index) in experience.devOps" :key="index">
                <span
                  class="badge bg-info-subtle border border-info-subtle text-info-emphasis"
                >
                  {{ devOp }}
                </span>
              </li>
            </ul>
          </div>
          <div class="job-skills">
            <h3>Skills:</h3>
            <ul class="list-group list-group-horizontal">
              <li v-for="(skill, index) in experience.skills" :key="index">
                <span
                  class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle"
                  >{{ skill }}</span
                >
              </li>
            </ul>
          </div>
          <div class="job-description">
            <h3>Description:</h3>
            <p>{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
  <div v-else>TODO:: loading Spinner goes here</div>
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
      activeView: this.$route?.query?.view || "freelance",
      experienceConfig: experienceConfig,
      loading: false,
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
    isActiveExperienceFlag(key) {
      return this.activeView === key;
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 3em;
  padding-left: 0;
  margin-bottom: 48px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 0;
}

h3 {
  // margin: 40px 0 0;
  font-size: 1.45em;
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

.active {
  display: inline-block !important;
}

.container {
  margin-top: 48px;
}

.job-item {
  display: none;

  & > div {
    margin-bottom: 40px;
  }

  .job-title {
    display: flex;
    justify-content: space-between;
  }

  .job-roles {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px dashed lightgrey;
    padding-bottom: 24px;
    box-sizing: border-box;

    span {
      height: 24px;
    }

    h3 {
      margin-bottom: 0;
    }
  }
}

.job-container {
  border-bottom: 1px inset lightgrey;
  margin-bottom: 48px;
}

.list-group-horizontal {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 8px;

  .list-group-item {
    // margin: 0;
    // border: none;
    // padding: 0;
  }

  // .rounded-pill {
  //   min-width: 100px;
  //   justify-content: center;
  // }
}
</style>
