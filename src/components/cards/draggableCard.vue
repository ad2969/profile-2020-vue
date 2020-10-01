<template>
  <div
    v-if="isShowing"
    ref="card"
    class="card-draggable"
    :class="{ isCurrentCard, shouldCardAnimate, shouldCardDisappear }"
    :style="{
      background: bgStyle,
      transform: cardStyle
    }"
  >
    <img :src="image" alt="face" class="card-draggable__img" />
  </div>
</template>

<script>
import interact from "interactjs";
import { REMOVE_CARD_TIME } from "@/utils/constants";

const MAX_ROTATION = 30;
const X_HIDDEN = window.innerWidth;
const Y_HIDDEN = window.innerHeight;
let X_THRESHOLD = window.innerWidth > window.innerHeight ? 300 : 150;
if (X_THRESHOLD > window.innerWidth) X_THRESHOLD = window.innerWidth / 5;
let Y_THRESHOLD = window.innerWidth < window.innerHeight ? 300 : 150;
if (Y_THRESHOLD > window.innerHeight) Y_THRESHOLD = window.innerHeight / 3;

export default {
  name: "DraggableCard",
  props: ["image", "bgColor1", "bgColor2", "current"],
  data() {
    return {
      isShowing: true,
      shouldCardAnimate: true,
      shouldCardDisappear: false,
      cardPosition: {
        x: 0,
        y: 0,
        rotation: 0
      }
    };
  },
  computed: {
    bgStyle() {
      return `linear-gradient(180deg, ${this.bgColor1} 0%, ${this.bgColor2} 100%)`;
    },
    cardStyle() {
      const { x, y, rotation } = this.cardPosition;
      return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
    },
    isCurrentCard() {
      return this.current;
    }
  },
  mounted() {
    const el = this.$refs.card;

    interact(el).draggable({
      onstart: () => {
        this.shouldCardAnimate = false;
      },
      onmove: e => {
        if (!this.isCurrentCard) return;
        const newX = this.cardPosition.x + e.dx;
        const newY = this.cardPosition.y + e.dy;

        let newRotation = MAX_ROTATION * (newX / X_THRESHOLD);

        if (newRotation > MAX_ROTATION) newRotation = MAX_ROTATION;
        else if (newRotation < -MAX_ROTATION) newRotation = -MAX_ROTATION;

        this.setCardPosition(newX, newY, newRotation);
      },
      onend: () => {
        this.shouldCardAnimate = true;

        let verticalDirection = "";
        let horizontalDirection = "";

        if (this.cardPosition.x > X_THRESHOLD) horizontalDirection = "RIGHT";
        else if (this.cardPosition.x < -X_THRESHOLD)
          horizontalDirection = "LEFT";

        if (this.cardPosition.y > Y_THRESHOLD) verticalDirection = "UP";
        else if (this.cardPosition.y < -Y_THRESHOLD) verticalDirection = "DOWN";

        if (verticalDirection || horizontalDirection) {
          this.removeCard(verticalDirection, horizontalDirection);
        } else this.resetCardPosition();
      }
    });
  },
  beforeUnmount() {
    interact(this.$refs.card).unset();
  },
  methods: {
    removeCard(vertical = "LEFT", horizontal = "DOWN") {
      this.shouldCardAnimate = false;
      this.shouldCardDisappear = true;

      let removeX = 0;
      let removeRotation = 0;
      if (horizontal && horizontal === "LEFT") {
        removeX = -X_HIDDEN;
        removeRotation = -MAX_ROTATION;
      } else if (horizontal && horizontal === "RIGHT") {
        removeX = X_HIDDEN;
        removeRotation = MAX_ROTATION;
      }

      let removeY = 0;
      if (vertical && vertical === "DOWN") removeY = -Y_HIDDEN;
      else if (vertical && vertical === "UP") removeY = Y_HIDDEN;

      console.log("removing to", removeX, removeY, removeRotation);
      this.setCardPosition(removeX, removeY, removeRotation);
      this.shouldCardAnimate = false;

      // change title content
      this.$emit("change-content");
      // add a delay before resetting the card
      setTimeout(async () => {
        this.$emit("swipe-complete");
        this.resetCardPosition();
        this.shouldCardAnimate = true;
        this.shouldCardDisappear = false;
      }, REMOVE_CARD_TIME);
    },
    setCardPosition(x = 0, y = 0, rotation = 0) {
      this.cardPosition = { x, y, rotation };
    },
    async resetCardPosition() {
      this.cardPosition = { x: 0, y: 0, rotation: 0 };
    }
  },
  watch: {
    async isCurrentCard() {}
  }
};
</script>

<style scoped lang="scss">
.card-draggable {
  @include flex-col;
  justify-content: flex-end;
  position: absolute;
  transform-origin: 50%, 100%;
  touch-action: none;
  cursor: default !important;
  width: 80%;
  height: 80%;

  &::after {
    content: "";
    position: absolute;
    margin: auto;
    background: rgba($black, 0.3);
  }

  &.isCurrentCard {
    cursor: move !important;
    pointer-events: auto;
  }

  &.shouldCardAnimate {
    transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &.shouldCardDisappear {
    transition: transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card-draggable__img {
    max-width: 80%;
    max-height: 80%;
  }

  $cardsToDisplay: 2;

  @for $i from 1 through $cardsToDisplay {
    $index: $i - 1;

    &:nth-child(#{$i}) {
      z-index: $cardsToDisplay - $index;
      //   transform: translate(-$index * 2rem, -$index * 2rem);

      &.isCurrentCard {
        z-index: $cardsToDisplay;
      }
    }
  }
}
</style>
