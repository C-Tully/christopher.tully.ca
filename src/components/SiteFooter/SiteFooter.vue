<template>
  <footer>
    <small>&copy;Copyright {{ currentYear }}, Christopher Tully</small>
    <div class="nav-list"></div>
  </footer>
</template>
<script>
export default {
  name: "SiteFooter",
  props: {},
  data() {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    return {
      currentYear: currentYear,
    };
  },
};
</script>
<style scoped>
footer {
  /* position: abolute;
  bottom: 0;
  display: flex;
  width: 100%; */
  /* background: #dddee1;
  padding: 5vh 0;
  text-align: center;
  position: relative; */
}
</style>
