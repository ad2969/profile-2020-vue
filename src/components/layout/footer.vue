<template>
  <div class="Footer">
    <!--  -->
    <div class="footer-links">
      <!-- <a href="https://www.instagram.com/clarence_adrian/" target="_blank">
        <InstagramLogo class="link logo" />
      </a> -->
      <a href="mailto:clarenceadrian@alumni.ubc.ca">
        <MailLogo class="link logo" />
      </a>
      <div class="link-spacer"></div>
      <a href="https://github.com/ad2969" target="_blank">
        <GithubLogo class="link logo" />
      </a>
      <div class="link-spacer"></div>
      <router-link to="/">
        <PersonalLogo class="link footerlogo" />
      </router-link>
      <div class="link-spacer"></div>
      <a href="https://www.linkedin.com/in/clarence-adrian/" target="_blank">
        <LinkedinLogo class="link logo" />
      </a>
      <div class="link-spacer"></div>
      <a href="https://twitter.com/ad2969" target="_blank">
        <TwitterLogo class="link logo" />
      </a>
    </div>
    <h4 class="footer-text">
      <!-- Vancouver, Jakarta -->
      (the website is a WIP)
      <br />
      2020 © designed and built by Clarence Adrian
    </h4>
  </div>
</template>

<script>
import GithubLogo from "@/assets/logos/github";
import PersonalLogo from "@/assets/logo.vue";
// import InstagramLogo from "@/assets/logos/instagram";
import LinkedinLogo from "@/assets/logos/linkedin";
import MailLogo from "@/assets/logos/mail";
import TwitterLogo from "@/assets/logos/twitter";

export default {
  name: "Footer",
  components: { PersonalLogo, GithubLogo, LinkedinLogo, MailLogo, TwitterLogo }
};
</script>

<style scoped lang="scss">
.Footer {
  @include flex-col;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: $black;
  padding: 5rem 3rem;

  &:after {
    content: "";
    width: 100vw;
    background: $black;
    height: min-content;
  }

  @include for-phone-only {
    padding-left: 0;
    padding-right: 0;
  }

  .footer-links {
    @include flex-row;
    justify-content: space-between;
    max-width: 80%;

    @include for-tablet-portrait-up {
      max-width: 50%;
    }

    .link,
    .logo {
      margin: 3rem 0;
    }
    .link {
      @include anim-h--scale(1.1);
    }

    .link-spacer,
    .logo {
      max-height: 3rem;
      width: 5rem;
      max-width: 8vw;
    }
    .logo {
      max-width: 5vw;
    }

    .footerlogo {
      max-height: 5rem;
      max-width: 10vw;
    }

    a {
      outline: none;
    }
  }

  .footer-text {
    color: white;
    line-height: 2.5rem;
  }
}
</style>
