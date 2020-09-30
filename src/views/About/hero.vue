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
    <div class="hero-img">
      <Background class="hero-img__bg" />
      <component
        :is="currentData.image"
        class="hero-img__me"
        @click="changeHero('forward')"
      ></component>
      <div class="hero-img__arrows">
        <Arrow class="arrow" @click="changeHero('forward')" />
        <Arrow class="arrow" direction="right" @click="changeHero('back')" />
      </div>
    </div>
  </div>
</template>

<script>
import { markRaw } from "vue";
import Background from "@/assets/face-bg";
import BackgroundSD from "@/assets/face-sd";
import BackgroundPL from "@/assets/face-pl";
import Arrow from "@/assets/arrow";

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
    image: markRaw(BackgroundSD)
  },
  // {
  //   article: "a",
  //   title: "Product Lead",
  //   description: [
  //     { text: "I enjoy getting involved with all aspects of", coloured: false },
  //     { text: "product design", coloured: true },
  //     { text: "and seeing a product through to launch.", coloured: false }
  //   ],
  //   image: markRaw(BackgroundPL)
  // }
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
    image: markRaw(BackgroundPL)
  }
];

export default {
  name: "AboutHero",
  components: {
    Background,
    Arrow
  },
  data() {
    return {
      heroIndex: 0,
      currentData: POSITIONS[0]
    };
  },
  methods: {
    changeHero(type) {
      let newHeroIndex = 0;
      if (type === "back") {
        newHeroIndex = this.heroIndex - 1;
        if (newHeroIndex < 0) newHeroIndex += POSITIONS.length;
      } else if (type === "forward") {
        newHeroIndex = this.heroIndex + 1;
        if (newHeroIndex >= POSITIONS.length) newHeroIndex -= POSITIONS.length;
      }
      this.heroIndex = newHeroIndex;
      this.currentData = POSITIONS[newHeroIndex];
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
    margin-left: 2rem;

    .hero-img__bg,
    .hero-img__me {
      max-height: 30rem;
      width: 100%;
      height: 100%;
      @include anim-h--scale;
    }
    .hero-img__bg {
      position: absolute;
      transform: translate(-2rem, -2rem);
      z-index: -1;
    }
    .hero-img__arrows {
      display: flex;
      justify-content: space-evenly;
      margin-top: 2rem;

      .arrow {
        @include anim-h--opacity(0.2);
        max-width: 40%;
      }
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
      margin-left: 10%;
    }
  }

  @include for-phone-only {
    display: unset;

    .hero-img {
      @include flex-col;
      margin-top: 5rem;
    }
    .hero-text {
      flex: unset;
      margin-top: 5rem;
    }
  }
}
</style>
