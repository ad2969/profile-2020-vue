<template>
  <div class="Layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style scoped lang="scss">
.Layout {
  min-height: 75vh;
  max-width: 1750px; // 70% of 2500px
}
</style>
