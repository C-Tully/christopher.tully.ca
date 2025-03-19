<template>
  <ul class="d-flex portfolioCards-wrap">
    <li v-for="(portfolioItem, index) in portfolioCollection" :key="index">
      <a
        role="link"
        tabindex="0"
        :href="portfolioItem.href"
        class="flip-card card"
        :title="`Click to see more details on my time with ${portfolioItem.company}`"
        @click="(e) => handleCardClick(e, index)"
        @keydown.space.prevent="(e) => handleCardClick(e, index)"
        @keydown.enter.prevent="(e) => handleCardClick(e, index)"
      >
        <div
          class="flip-card-inner"
          :class="{ flipped: flippedCardsTracker[index] }"
          :aria-hidden="flippedCardsTracker[index] ? 'true' : 'false'"
        >
          <div class="flip-card-front">
            <img
              class="card-img-top"
              :src="portfolioItem.imgSrc"
              :alt="`Logo image of the ${portfolioItem.title}`"
            />
            <h3>{{ portfolioItem.industry }}</h3>
          </div>
          <div class="flip-card-back card-body" aria-labelledby="cardTitle">
            <h3 id="cardTitle" class="card-title">
              {{ portfolioItem.title }} at {{ portfolioItem.company }}
            </h3>
            <p>{{ portfolioItem.description }}</p>
            <!-- <p class="card-cta">Click the card for more details</p> -->
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PortfolioCards",
  props: {
    portfolioCollection: {
      type: Array,
      default: () => [
        {
          title: "Test-title",
          company: "Test Company",
          imgSrc: "test-imgSrc",
          description: "test-description",
          href: "#", // Example href, replace with actual value
          industry: "Test Industry",
        },
      ],
    },
  },
  setup() {
    const flippedCardsTracker = ref({});

    // eslint-disable-next-line no-unused-vars
    const handleCardClick = (e, index) => {
      e.preventDefault();

      // if (flippedCardsTracker.value[index]) {
      //   redirectUserToExperiencePage(index);
      // } else {
      //   // If the card is not flipped, flip it
      //   flippedCardsTracker.value[index] = true;
      // }
    };

    // const redirectUserToExperiencePage = (index) => {
    //   console.log(`Card ${index} clicked again. Perform different action.`);
    // };

    return { flippedCardsTracker, handleCardClick };
  },
};
</script>

<style lang="scss" scoped>
.portfolioCards-wrap {
  padding: 20px 0;
}

ul {
  list-style: none;
  padding-top: 25px;
  width: 100%;
  justify-content: center;

  li {
    padding-right: 8px;

    .flip-card-inner {
      border: 3px dashed $border-grey;
    }
  }
}

h3 {
  padding-top: 8px;
  color: $primary-font-black;
}

.card-body {
  .card-title {
    font-size: 20px;
    text-decoration: underline;
  }

  p {
    font-size: 16px;
    color: black;
  }
}

//flip effect
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
  padding: 5px;
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  background-color: $primary-grey;
  color: $primary-font-white;
  font-family: $primary-font-family;
  transform: rotateY(180deg);
}

:deep(.card) {
  border: none;
}

/* Mobile Styling */
@media only screen and (max-width: 600px) {
  .d-flex {
    flex-direction: column;
    position: relative;
    min-width: 1px;
    margin: 0 auto;
    z-index: 1;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    li {
      margin-top: 16px;
      max-width: 60vw;

      .flip-card {
        width: 100%;
      }
    }
  }
}
</style>
