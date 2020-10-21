<template>
  <!-- The one that stays on top -->
  <div class="Navigation" id="Navigation">
    <router-link to="/">
      <PersonalLogo class="navlogo" />
    </router-link>
    <div class="navlinks">
      <router-link
        v-for="page in pages"
        :to="page.path"
        :key="page.name"
        :class="{ active: page.name === currentRouteName }"
        class="link t--lc t--non"
      >
        {{ page.name }}
      </router-link>

      <!-- Temporary "schedule" -->
      <a
        class="link t--lc t--non"
        href="https://calendar.google.com/calendar/u/0/embed?src=clarence.ad29@gmail.com&ctz=America/Vancouver"
        target="_blank"
        >schedule</a
      >
      <!-- Temporary "resume" -->
      <a
        class="link t--lc t--non"
        href="https://drive.google.com/file/d/1eT5cDgOwDseLEzERlJJ7jEC1SJy54zGu/view?usp=sharing"
        target="_blank"
        >resume</a
      >
    </div>
  </div>

  <!-- Scroll to top button -->
</template>

<script>
import { pages } from "@/router";
import PersonalLogo from "@/assets/logo.vue";
// import { convertRemToPixels } from "@/utils";
export default {
  name: "Navigation",
  components: { PersonalLogo },
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
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;

  .navlogo {
    width: auto;
    min-width: 4em;
    max-height: 2.5rem;
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
      font-size: 1.5em;
      outline: none;
      @include anim-h--scale(1.2);

      &.active {
        color: $dark;
      }
    }
  }
}
</style>
