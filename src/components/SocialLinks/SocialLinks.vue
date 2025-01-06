<template>
  <ul class="d-flex">
    <li v-for="(linkItem, index) in linkCollection" :key="index">
      <a
        target="_blank"
        :href="linkItem.href"
        :ariaLabel="`${linkItem.ariaLabel}`"
        :class="linkItem.class"
      >
        <img
          v-if="linkItem.imgSrc"
          :src="linkItem.imgSrc"
          :alt="linkItem?.imgAlt || ''"
          :title="linkItem?.imgTitle || ''"
        />
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "SocialLinks",
  props: {
    linkCollection: {
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
