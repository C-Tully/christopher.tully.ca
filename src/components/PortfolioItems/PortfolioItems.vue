<template>
  <ul class="d-flex">
    <li v-for="(portfolioItem, index) in portfolioCollection" :key="index">
      <b-card
        :title="portfolioItem.title"
        :img-src="portfolioItem.href"
        :img-alt="portfolioItem.alt"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ portfolioItem.description }}
        </b-card-text>

        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      </b-card>
      <!-- <a
        target="_blank"
        :href="portfolioItem.href"
        :ariaLabel="`${portfolioItem.ariaLabel}`"
        :class="portfolioItem.class"
      >
        <img
          v-if="portfolioItem.imgSrc"
          :src="portfolioItem.imgSrc"
          :alt="portfolioItem?.imgAlt || ''"
          :title="portfolioItem?.imgTitle || ''"
        />
        <span>
          {{ portfolioItem.description }}
        </span>
      </a> -->
    </li>
  </ul>
</template>
<script>
export default {
  name: "SocialLinks",
  props: {
    portfolioCollection: {
      type: Array,
      default: () => {
        return [
          {
            ariaLabel: "",
            href: "",
            imgSrc: "",
          },
        ];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  padding-top: 25px;
  width: 100%;
  justify-content: center;

  li {
    padding-right: 8px;

    a {
      img {
        max-width: 50px;
        background-color: white;
        border-radius: 15%;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .d-flex {
    padding-left: 0;
    justify-content: space-between;
  }
}
</style>
