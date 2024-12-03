<template>
  <div class="d-flex notFound-wrap">
    <div>
      <h1>
        Ooops, there's nothing here! Please head back to the
        <router-link :to="`/`"> Home page </router-link>
        for now.
      </h1>
      <img
        src="@/assets/images/404.gif"
        alt="An animation of the numbers 404 beig redrawn"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {},
};
</script>
<style lang="scss" scoped>
.notFound-wrap {
  height: 100vh;
  margin: 0;
  background: $primary-background-blue;
  background: $primary-background-gradient;
  position: relative;
}
</style>
