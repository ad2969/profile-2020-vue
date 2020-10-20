<template>
  <div class="Portfolio">
    <PortfolioHero />
    <SharpLayout
      v-for="showcase in showcases"
      :key="showcase.title"
      :color="showcase.brand"
      :details="showcase"
      >Hello</SharpLayout
    >
    <PortfolioFurther />
  </div>
</template>

<script>
import SharpLayout from "@/components/layout/layoutSharp";
import PortfolioHero from "./hero";
import PortfolioFurther from "./further";

import SemiosLogo from "@/assets/logos/semios-name.png";
import AmazonLogo from "@/assets/logos/amazon-name.png";

const SHOWCASES = [
  {
    brand: "#232F3E",
    color: "#fff",
    title: "Amazon",
    nameLogo: AmazonLogo,
    position: "Software Developer",
    date: "January - August 2021",
    outcome: "Software Developer Stuff",
    technologies:
      "https://uxdesign.cc/i-felt-the-amazon-app-was-outdated-so-i-redesigned-it-using-design-thinking-a-ux-case-study-549c5880d9be"
  },
  {
    brand: "#fff",
    color: "#000",
    title: "Semios",
    nameLogo: SemiosLogo,
    position: "Full-Stack Javascript Developer",
    date: "January - August 2019",
    outcome: "Internal Web Application",
    technologies: "React, Redux, Typescript, PostgreSQL, AWS, GCP"
  }
];

export default {
  name: "Portfolio",
  components: {
    SharpLayout,
    PortfolioHero,
    PortfolioFurther
  },
  data() {
    return {
      showcases: SHOWCASES
    };
  },
  inject: ["toggleLoading", "isLoading"],
  mounted() {
    setTimeout(() => {
      this.toggleLoading(false);
    }, 2000);
  }
};
</script>

<style scoped lang="scss">
.Portfolio {
  width: 100vw;
}
</style>
