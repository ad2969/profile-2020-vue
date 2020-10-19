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
  provide() {
    return {
      toggleLoading: this.toggleLoading,
      isLoading: () => this.isLoading
    };
  }
};
</script>
