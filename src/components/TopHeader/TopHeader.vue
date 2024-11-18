<template>
  <nav v-if="linkCollection.length > 0">
    <RouterLink
      v-for="(item, index) in linkCollection"
      :key="index"
      :to="item.href"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>
<script>
export default {
  name: "TopHeader",
  props: {
    linkCollection: { type: Array, required: false },
  },
};
</script>
