<template>
  <Layout>
    <AboutHero />
    <Divider />
    <AboutWork />
    <Divider />
    <AboutSkills />
  </Layout>
</template>

<script>
import AboutHero from "./hero";
import AboutWork from "./work";
import AboutSkills from "./skills";
import Layout from "@/components/layout";
import Divider from "@/components/layout/divider";

export default {
  name: "About",
  components: {
    Layout,
    Divider,
    AboutHero,
    AboutWork,
    AboutSkills
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
