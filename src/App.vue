<template>
  <LoaderProvider>
    <Navigation />
    <Layout>
      <router-view />
    </Layout>
    <Footer />
  </LoaderProvider>
</template>

<script>
import LoaderProvider from "@/context/LoaderProvider";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/index";
export default {
  name: "App",
  components: {
    LoaderProvider,
    Navigation,
    Footer,
    Layout
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

html {
  font-size: 9px;

  @include for-tablet-portrait-up {
    font-size: 9px;
  }

  @include for-tablet-landscape-up {
    font-size: 10px;
  }

  @include for-desktop-up {
    font-size: 11px;
  }

  @include for-big-desktop-up {
    font-size: 13px;
  }
}

body {
  margin: 0;
  overflow-x: hidden;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  @media (min-width: 1500px) {
    margin: 0 auto;
  }

  @media (min-width: 1500px) {
    margin: 0 auto;
  }
}
</style>
