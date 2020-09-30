<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from "@/components/layout/navigation.vue";
export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

html {
  font-size: 10px;

  @include for-tablet-portrait-up {
    font-size: 10px;
  }

  @include for-tablet-landscape-up {
    font-size: 13px;
  }

  @include for-desktop-up {
    font-size: 14px;
  }

  @include for-big-desktop-up {
    font-size: 16px;
  }
}

body {
  margin: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  margin: 0;
  max-width: 1800px;

  @media (min-width: 1500px) {
    margin: 0 auto;
  }

  @media (min-width: 1500px) {
    margin: 0 auto;
  }
}
</style>
