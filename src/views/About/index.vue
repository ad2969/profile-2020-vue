<template>
  <div class="About">
    <AboutHero />
    <Divider />
    <AboutWork />
    <Divider />
    <AboutSkills />
    <Divider />
    <AboutInvolvements />
    <Divider />
  </div>
</template>

<script>
import AboutHero from "./hero";
import AboutWork from "./work";
import AboutSkills from "./skills";
import AboutInvolvements from "./involvements";
import Divider from "@/components/layout/divider";

export default {
  name: "About",
  components: {
    Divider,
    AboutHero,
    AboutWork,
    AboutSkills,
    AboutInvolvements
  },
  data() {
    return {};
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
.About {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
