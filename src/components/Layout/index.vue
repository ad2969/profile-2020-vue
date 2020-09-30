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
  margin-left: 15%;
  margin-right: 15%;

  // @include for-desktop-up {
  //   margin-left: 15%;
  //   margin-right: 15%;
  // }
}
</style>
