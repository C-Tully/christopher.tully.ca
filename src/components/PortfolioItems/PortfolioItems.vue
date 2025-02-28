<template>
  <ul class="d-flex">
    <li v-for="(portfolioItem, index) in portfolioCollection" :key="index">
      <a class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              :src="portfolioCollection.imgSrc"
              :alt="`Logo image of the ${portfolioCollection.title}`"
            />
            <!-- style="width: 300px; height: 300px" -->
          </div>
          <div class="flip-card-back">
            <h1>{{ portfolioCollection.title }}</h1>
            <p>{{ portfolioCollection.description }}</p>
            <div class="footer">Click the card for more details</div>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "PortfolioItems",
  props: {
    portfolioCollection: {
      type: Array,
      default: () => {
        return [
          {
            title: "Test-title",
            ariaLabel: "test-aria-label",
            alt: "test-alt",
            href: "test-hef",
            imgSrc: "test-imgSrc",
            description: "test-description",
          },
        ];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
//flip card effect : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card
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

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 600px) {
  .d-flex {
    padding-left: 0;
    justify-content: space-between;
  }
}
</style>
