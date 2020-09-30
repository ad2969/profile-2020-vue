<template>
  <Layout>
    <AboutHero />
    <Divider />
    <AboutWork />
    <Divider />
    <AboutSkills />
    <Divider />
    <AboutInvolvements />
    <Divider />
  </Layout>
</template>

<script>
import AboutHero from "./hero";
import AboutWork from "./work";
import AboutSkills from "./skills";
import AboutInvolvements from "./involvements";
import Layout from "@/components/layout/index";
import Divider from "@/components/layout/divider";

export default {
  name: "About",
  components: {
    Layout,
    Divider,
    AboutHero,
    AboutWork,
    AboutSkills,
    AboutInvolvements
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
