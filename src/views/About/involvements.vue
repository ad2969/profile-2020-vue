<template>
  <div class="Page involvements">
    <Header bgText="orgs" text="the organizations I've joined" />
    <div class="involvement-list">
      <div v-for="inv in involvements" :key="inv.organization" class="inv">
        <!-- <img class="inv__bg" :src="inv.image" /> -->
        <div
          class="inv__bg"
          :style="{ backgroundImage: `url(${inv.image})` }"
        ></div>
        <a tag="div" :href="inv.link" target="_blank" class="inv-content">
          <img class="inv__icon" :src="inv.icon" />
          <p class="inv__title t--non">{{ inv.organization }}</p>
        </a>
        <!-- <div class="inv__content">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/header";
import AkpsiLogo from "@/assets/logos/akpsi.png";
import BiztechLogo from "@/assets/logos/biztech.png";
import CtcLogo from "@/assets/logos/ctc.png";
import TuringLogo from "@/assets/logos/turing.png";
import AkpsiImage from "@/assets/images/akpsi-img.png";
import BiztechImage from "@/assets/images/biztech-img.png";
import CtcImage from "@/assets/images/ctc-img.jpg";
import TuringImage from "@/assets/images/turing-img.jpg";

const INVOLVEMENTS = [
  {
    organization: "UBC Biztech",
    icon: BiztechLogo,
    image: BiztechImage,
    link: "https://www.ubcbiztech.com/"
  },
  {
    organization: "Code the Change Foundation",
    icon: CtcLogo,
    image: CtcImage,
    link: "http://codethechange.ca/"
  },
  {
    organization: "UBC Turing Club",
    icon: TuringLogo,
    image: TuringImage,
    link: "https://turing-club.github.io/"
  },
  {
    organization: "Alpha Kappa Psi Business Fraternity",
    icon: AkpsiLogo,
    image: AkpsiImage,
    link: "http://www.akpsiubc.com/"
  }
];

export default {
  name: "AboutInvolvements",
  components: {
    Header
  },
  data() {
    return {
      involvements: INVOLVEMENTS
    };
  }
};
</script>

<style scoped lang="scss">
.involvement-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(50% - 2rem));
  grid-gap: 2rem;
  // max-width: 600px;
  margin: 0 auto;

  @include for-tablet-portrait-up {
    width: 80%;
    grid-template-columns: repeat(auto-fill, calc(50% - 2rem));
  }

  @include for-big-desktop-up {
    // maximum number of organizations (100/num)
    grid-template-columns: repeat(auto-fill, calc(33% - 2rem));
  }

  .inv {
    padding: 1rem;
    display: grid;
    place-items: center;
    position: relative;

    &::before {
      // for apsect ratio
      content: "";
      display: block;
      padding-bottom: 100%;
      grid-area: 1 / 1 / 2 / 2;
    }

    .inv__bg {
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      position: absolute;
      height: 100%;
      width: 100%;
      max-width: 40vw;
      z-index: 1;

      &:before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
        background: rgba(0, 0, 0, 0.5);
      }
    }

    .inv-content {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba($white, 0.8);
      @include flex-col;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      z-index: 3;

      .inv__icon {
        max-width: 30%;
        max-height: 40%;
      }

      .inv__title {
        font-size: 1.5rem;
        line-height: 2rem;
        color: $black;
        max-width: 80%;
        margin: 0.5em 0 0 0;
      }
    }

    @include for-tablet-portrait-up {
      .inv__bg {
        height: 100%;
        max-width: 35vw;
      }

      .inv-content {
        @include anim-h--opacity(0);
      }
    }
  }
}
</style>
