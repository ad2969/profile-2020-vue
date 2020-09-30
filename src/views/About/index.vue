<template>
  <Layout>
    <AboutHero />
    <Divider />
    <AboutWork />
    <Divider />
  </Layout>
</template>

<script>
import AboutHero from "./hero";
import AboutWork from "./work";
import Layout from "@/components/layout";
import Divider from "@/components/layout/divider";

export default {
  name: "About",
  components: {
    Layout,
    Divider,
    AboutHero,
    AboutWork
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
