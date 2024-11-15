<template>
  <nav v-if="linkCollection.length > 0">
    <a v-for="(link, index) in linkCollection" :key="index"></a>
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
