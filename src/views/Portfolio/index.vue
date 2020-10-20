<template>
  <div class="Portfolio">
    <div>Hello</div>
    <Divider />
    <div>Hello</div>
    <Divider />
  </div>
</template>

<script>
import Divider from "@/components/layout/divider";

export default {
  name: "Portfolio",
  components: {
    Divider
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
.Portfolio {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
