<template>
  <ul class="d-flex">
    <li v-for="(portfolioItem, index) in portfolioCollection" :key="index">
      <div
        ref="cards"
        class="flip-card card"
        :title="`Click to see more details on my time with ${portfolioItem.company}`"
        @click="manualFlipCard(index)"
        @keydown.space.prevent="manualFlipCard(index)"
        @keydown.enter.prevent="manualFlipCard(index)"
      >
        <div class="flip-card-inner" :class="{ flipped: flippedCards[index] }">
          <div class="flip-card-front">
            <img
              class="card-img-top"
              :src="portfolioItem.imgSrc"
              :alt="`Logo image of the ${portfolioItem.title}`"
            />
          </div>
          <div class="flip-card-back card-body">
            <h1 class="card-title">
              {{ portfolioItem.title }} at {{ portfolioItem.company }}
            </h1>
            <p>{{ portfolioItem.description }}</p>
            <a class="card-cta" :href="portfolioItem.href"
              >Click the card for more details</a
            >
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PortfolioItems",
  props: {
    portfolioCollection: {
      type: Array,
      default: () => [
        {
          title: "Test-title",
          company: "Test Company",
          imgSrc: "test-imgSrc",
          description: "test-description",
        },
      ],
    },
  },
  setup() {
    const flippedCards = ref({}); // Tracks flipped state for each card

    const manualFlipCard = (index) => {
      flippedCards.value[index] = !flippedCards.value[index];
    };

    return { flippedCards, manualFlipCard };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding-top: 25px;
  width: 100%;
  justify-content: center;

  li {
    padding-right: 8px;
  }
}

.card-body {
  .card-title {
    font-size: 15px;
  }

  p {
    font-size: 12px;
  }
}

/* Flip Effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
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

.flip-card.flipped .flip-card-inner,
.flip-card-inner.flipped {
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
  background-color: $primary-background-red;
  color: $primary-font-white;
  font-family: $primary-font-family;
  transform: rotateY(180deg);
}

/* Mobile Styling */
@media only screen and (max-width: 600px) {
  .d-flex {
    padding-left: 0;
    justify-content: space-between;
  }
}
</style>
