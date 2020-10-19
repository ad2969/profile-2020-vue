import Vue from "vue";

export default new Vue({
  template: `
    <span>
        <slot v-bind="{ toggleLoading, isLoading: isLoading() }" />
    </span>
    `,
  inject: ["toggleLoading", "isLoading"]
});
