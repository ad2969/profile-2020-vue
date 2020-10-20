<template>
  <div class="Page hero">
    <div class="hero-text">
      <h3 class="mb-0">Hi, I'm Clarence. I am {{ currentData.article }}:</h3>
      <h2 class="hero-text__title mt-0 t--uc">
        {{ currentData.title }}
      </h2>
      <h3 class="hero-text__description">
        <span
          v-for="(t, index) in currentData.description"
          :key="'desc' + index"
          :class="{ 't--hl': t.coloured }"
        >
          {{ t.text }}&nbsp;
        </span>
      </h3>
    </div>
    <HeroCardList
      class="hero-img"
      :class="{ shake: !touched }"
      :images="positions.map(p => ({ ...p.image, title: p.title }))"
      :currentTitle="currentData.title"
      :originalTitleOrder="originalTitleOrder"
      @swipe-complete="handleCardSwiped"
      @change-content="handleChangeContent"
    />
  </div>
</template>

<script>
import HeroCardList from "./details/heroCardList";
import FaceSW from "@/assets/face-sw.png";
import FaceEE from "@/assets/face-ee.png";
import FacePL from "@/assets/face-pl.png";

const POSITIONS = [
  {
    article: "a",
    title: "Software Developer",
    description: [
      {
        text: "I am passionate about building applications that have a",
        coloured: false
      },
      { text: "positive impact", coloured: true },
      { text: "on the people around me.", coloured: false }
    ],
    // markRaw prevents it from being "reactive"
    image: {
      image: FaceSW,
      bgColor1: "#FFF2EE",
      bgColor2: "#FFCCBB"
    }
  },
  {
    article: "a",
    title: "Product Lead",
    description: [
      { text: "I enjoy getting involved with all aspects of", coloured: false },
      { text: "product design", coloured: true },
      { text: "and seeing a product through to launch.", coloured: false }
    ],
    image: {
      image: FacePL,
      bgColor1: "#E5FFFF",
      bgColor2: "#00887A"
    }
  },
  {
    article: "an",
    title: "Electrical Engineer",
    description: [
      {
        text:
          "I love tinkering with technology and understand the importance of",
        coloured: false
      },
      { text: "engineering practices", coloured: true },
      { text: "in industry.", coloured: false }
    ],
    image: {
      image: FaceEE,
      bgColor1: "#D3E3FC",
      bgColor2: "#77A6F6"
    }
  }
];

export default {
  name: "AboutHero",
  components: {
    HeroCardList
  },
  data() {
    return {
      originalTitleOrder: POSITIONS.map(p => p.title),
      positions: POSITIONS,
      currentData: POSITIONS[0],
      touched: false
    };
  },
  methods: {
    handleCardSwiped() {
      this.touched = true;
      const removedPosition = this.positions.shift();
      this.positions.push(removedPosition);
    },
    handleChangeContent() {
      this.currentData = { ...this.positions[1] };
    }
  }
};
</script>

<style scoped lang="scss">
.hero {
  @include flex-row;

  &.Page {
    min-height: 600px;
  }

  .hero-text {
    text-align: left;
  }

  .hero-img {
    position: relative;
    margin-left: 2rem;
    @include flex-row;
    align-items: center;
    justify-content: center;

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
      width: 100%;
      @include box-shadow-glow($dark);
    }

    &.shake {
      @include shake;
    }
  }

  @include for-tablet-portrait-up {
    .hero-text {
      flex: 70%;
      max-width: 65%;
      padding-right: 5%;
    }

    .hero-img {
      flex: 40%;
      max-width: 40%;
      position: relative;
      margin: 10% 0 10% 10%;
    }
  }

  @include for-phone-only {
    display: unset;

    .hero-img {
      @include flex-col;
      margin-top: 5rem;
      margin-left: 0;
    }
    .hero-text {
      flex: unset;
      margin-top: 5rem;
    }
  }
}
</style>
