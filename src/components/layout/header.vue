<template>
  <div class="header-text">
    <h1 class="header-text-background t--uc t--b t--hl">{{ bgText }}</h1>
    <h3 class="header-text t--c">{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    text: {
      type: String,
      required: true
    },
    bgText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.header-text {
  position: relative;

  .header-text-background {
    opacity: 0.2;
  }
  .header-text {
    position: absolute;
    text-align: center;
    width: 100%;
    margin: 0;
    top: 3rem;
  }
}
</style>
