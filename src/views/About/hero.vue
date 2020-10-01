<template>
  <div class="Page hero">
    <div class="hero-text">
      <h3 class="mb-0">Hi, I'm Clarence. I am {{ currentData.article }}:</h3>
      <h2 class="hero-text__title mt-0 t--uc">
        {{ currentData.title }}
      </h2>
      <h3>
        <span
          v-for="(t, index) in currentData.description"
          :key="'desc' + index"
          :class="t.coloured ? 't--hl' : ''"
        >
          {{ t.text }}&nbsp;
        </span>
      </h3>
    </div>
    <HeroCardList
      class="hero-img"
      :images="positions.map(p => ({ ...p.image, title: p.title }))"
      :currentTitle="currentData.title"
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
      { text: "I enjoy creating products that have a", coloured: false },
      { text: "positive impact", coloured: true },
      { text: "on the people around me.", coloured: false }
    ],
    // markRaw prevents it from being "reactive"
    image: {
      image: FaceSW,
      bgColor1: "#FFCCBB",
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
    image: { image: FacePL }
  },
  {
    article: "an",
    title: "Electrical Engineer",
    description: [
      {
        text:
          "I enjoy tinkering with technology and understand the importance of",
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
      positions: POSITIONS,
      currentData: POSITIONS[0]
    };
  },
  methods: {
    handleCardSwiped() {
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
    @include box-shadow-glow($dark);

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }

  @include for-tablet-portrait-up {
    .hero-text {
      flex: 50%;
      max-width: 45%;
      padding-right: 5%;
    }

    .hero-img {
      flex: 50%;
      max-width: 50%;
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
