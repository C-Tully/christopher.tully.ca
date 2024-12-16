<template>
  <ul>
    <li v-for="(index, linkItem) in linkCollection" :key="index">
      <a
        target="_blank"
        :href="linkItem.href"
        :ariaLabel="`${linkItem.ariaLabel}`"
      >
        <img :src="linkItem.imgSrc" :alt="linkItem?.imgAlt || ''" />
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
