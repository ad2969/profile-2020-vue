<template>
  <span>
    <slot v-bind="{ toggleLoading, isLoading: isLoading() }" />
  </span>
</template>

<script>
export default {
  name: "LoaderConsumer",
  inject: ["toggleLoading", "isLoading"]
};
</script>
