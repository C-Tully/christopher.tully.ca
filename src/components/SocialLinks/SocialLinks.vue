<template>
  <ul class="d-flex">
    <li v-for="(linkItem, index) in linkCollection" :key="index">
      <a
        target="_blank"
        :href="linkItem.href"
        :ariaLabel="`${linkItem.ariaLabel}`"
      >
        <img
          v-if="linkItem.imgSrc"
          :src="linkItem.imgSrc"
          :alt="linkItem?.imgAlt || ''"
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
    setup(props) {
      console.log("linkCollection!!", props.linkCollection);
    },
    // customFontClass: {
    //   type: String,
    //   default: "regular",
    //   validator: (value) => {
    //     const lowerCaseValue = value.toLowerCase();
    //     return ["regular", "bold", "light"].includes(lowerCaseValue);
    //   },
    // },
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  li {
    a {
      img {
        max-width: 50px;
      }
    }
  }
}
</style>
