<template>
  <div class="header-text">
    <h1
      class="header-text-background t--uc t--b t--hl"
      :id="`headertext-${bgText}`"
    >
      {{ bgText }}
    </h1>
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
  margin-bottom: 4rem;

  .header-text-background {
    max-width: 100%;
    opacity: 0.2;
    margin: 0;
    user-select: none;
    @include text-shadow-glow($dark, 2s);
  }
  .header-text {
    position: absolute;
    text-align: center;
    width: 100%;
    margin: 0;
    top: 3rem;
    line-height: 3rem;
  }

  @include for-phone-only {
    margin-bottom: 6rem;
  }
}
</style>
