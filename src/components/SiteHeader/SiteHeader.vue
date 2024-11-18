<template>
  <nav>
    SiteHeader
    <RouterLink
      v-for="(item, index) in linkCollection"
      :key="index"
      :to="item.href"
    />
  </nav>
</template>
<script>
export default {
  name: "SiteHeader",
  props: {
    linkCollection: { type: Array, required: false },
  },
};
</script>
