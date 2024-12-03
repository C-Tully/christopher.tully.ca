<template>
  <div class="notFound-wrap flex-container">
    <div class="copy-wrap">
      <h1>Ooops, there's nothing here!</h1>
      <p>
        Please head back to the
        <!-- <router-link :to="`/`"> Home page </router-link> -->
        for now.
      </p>

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

.copy-wrap {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 4.2vw;
}

img {
  width: 350px;
}

p {
  color: #ffff;
}

@media only screen and (max-width: 600px) {
  .flex-container {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;

    .copy-wrap {
      flex-flow: column;
      width: 100%;

      .main-copy {
        text-align: inherit;
        padding: 0;
      }
    }
  }
}
</style>
