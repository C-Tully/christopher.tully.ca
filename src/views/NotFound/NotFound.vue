<template>
  <div class="hello">
    <h1>
      Ooops, there's nothing here! Please head back to the
      <router-link :to="`/`"> Home page </router-link>
      for now.
    </h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {},
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
