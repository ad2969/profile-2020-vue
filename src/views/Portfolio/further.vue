<template>
  <div class="further">
    <h2>I am always looking for projects to work on.</h2>
    <h3>
      If you have anything in mind, feel free to
      <span class="t--hl">contact me</span>.
    </h3>
    <h3>
      Otherwise, see a full <span class="t--hl">list of projects </span>I've
      worked on.
    </h3>
  </div>
</template>

<script>
export default {
  name: "PortfolioFurther",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.further {
  margin-left: 15%;
  margin-right: 15%;
  min-height: calc(100vh - 6.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
