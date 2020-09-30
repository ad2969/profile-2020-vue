<template>
  <!-- The one that stays on top -->
  <div class="Navigation" id="Navigation">
    <router-link to="/">
      <img class="navlogo" src="@/assets/logo.png" alt="logo" />
    </router-link>
    <div class="navlinks">
      <router-link
        v-for="page in pages"
        :to="page.path"
        :key="page.name"
        :class="
          'link t--lc t--non' +
            (page.name === currentRouteName ? ' active' : '')
        "
      >
        {{ page.name }}
      </router-link>

      <!-- Temporary "resume" -->
      <a class="link t--lc t--non" href="@/assets/clarence-resume.pdf" download
        >resume</a
      >
    </div>
  </div>

  <!-- Scroll to top button -->
</template>

<script>
import { pages } from "@/router";
// import { convertRemToPixels } from "@/utils";
export default {
  name: "Navigation",
  data() {
    return {
      pages: {},
      atTop: true,
      navPopup: false
    };
  },
  mounted() {
    this.pages = Object.assign({}, pages);
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    handleScroll() {
      let body = document.documentElement; //IE with doctype
      body = body.clientHeight ? body : document.body;
      const navBarHeight = document.getElementById("Navigation").clientHeight;

      if (body.scrollTop <= navBarHeight) this.atTop = true;
      else this.atTop = false;
    }
  }
};
</script>

<style scoped lang="scss">
.Navigation {
  @include flex-row;
  width: 100vw;
  left: 0;
  top: 0;
  transition: transform 0.5s;
  z-index: 1000;

  .navlogo {
    max-height: 2rem;
    padding: 2rem 3rem;
    @include anim-h--scale;
  }

  .navlinks {
    @include flex-row;
    margin-left: auto;
    padding: 2rem 3rem;

    .link {
      padding-left: 2rem;
      padding-right: 2rem;
      color: $black;
      font-size: 1.25rem;
      @include anim-h--scale(1.2);

      &.active {
        color: $dark;
      }
    }
  }
}
</style>
