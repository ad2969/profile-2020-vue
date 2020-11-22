<template>
  <slot />
  <Loader :isLoading="isLoading" />
</template>

<script>
import Loader from "@/components/layout/loader";

export default {
  name: "LoaderProvider",
  components: {
    Loader
  },
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    toggleLoading(trigger = !this.isLoading) {
      this.isLoading = trigger;
    }
  },
  watch: {
    $route(to) {
      if (this.isLoading && to.fullPath.includes("assets")) {
        this.toggleLoading();
      }
    }
  },
  provide() {
    return {
      toggleLoading: this.toggleLoading,
      isLoading: () => this.isLoading
    };
  }
};
</script>
