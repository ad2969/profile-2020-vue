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
import { LEFT, RIGHT, UP, DOWN, REMOVE_CARD_TIME } from "@/utils/constants";

const MAX_ROTATION = 30;

export default {
  name: "DraggableCard",
  props: {
    image: {
      required: true
    },
    bgColor1: {
      type: String,
      default: "#D3E3FC"
    },
    bgColor2: {
      type: String,
      default: "#D3E3FC"
    },
    current: {
      type: Boolean,
      required: true
    },
    lastRemoveDirection: {
      type: Object,
      required: true
    }
  },
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
    },
    X_HIDDEN: () => {
      return window.innerWidth;
    },
    Y_HIDDEN: () => {
      return window.innerHeight;
    },
    X_THRESHOLD: () => {
      let xt = window.innerWidth > window.innerHeight ? 300 : 150;
      if (xt > window.innerWidth) xt = window.innerWidth / 5;
      return xt;
    },
    Y_THRESHOLD: () => {
      let yt = window.innerWidth < window.innerHeight ? 300 : 150;
      if (yt > window.innerHeight) yt = window.innerHeight / 3;
      return yt;
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

        let newRotation = MAX_ROTATION * (newX / this.X_THRESHOLD);

        if (newRotation > MAX_ROTATION) newRotation = MAX_ROTATION;
        else if (newRotation < -MAX_ROTATION) newRotation = -MAX_ROTATION;

        this.setCardPosition(newX, newY, newRotation);
      },
      onend: () => {
        this.shouldCardAnimate = true;

        let verticalDirection = "";
        let horizontalDirection = "";

        if (this.cardPosition.x > this.X_THRESHOLD) horizontalDirection = RIGHT;
        else if (this.cardPosition.x < -this.X_THRESHOLD)
          horizontalDirection = LEFT;

        if (this.cardPosition.y > this.Y_THRESHOLD) verticalDirection = UP;
        else if (this.cardPosition.y < -this.Y_THRESHOLD)
          verticalDirection = DOWN;

        if (verticalDirection || horizontalDirection) {
          this.removeCard(horizontalDirection, verticalDirection);
        } else this.resetCardPosition();
      }
    });

    interact(el).on("tap", () => {
      if (!this.isCurrentCard) return;
      const newHorizontal =
        this.lastRemoveDirection.horizontal === LEFT ? RIGHT : LEFT;
      const newVertical = this.lastRemoveDirection.vertical === UP ? DOWN : UP;
      this.removeCard(newHorizontal, newVertical);
    });
  },
  beforeUnmount() {
    interact(this.$refs.card).unset();
  },
  methods: {
    removeCard(horizontal = LEFT, vertical = DOWN) {
      this.shouldCardAnimate = false;
      this.shouldCardDisappear = true;
      this.$emit("card-remove", { horizontal, vertical });

      let removeX = 0;
      let removeRotation = 0;
      if (horizontal && horizontal === LEFT) {
        removeX = -this.X_HIDDEN;
        removeRotation = -MAX_ROTATION;
      } else if (horizontal && horizontal === RIGHT) {
        removeX = this.X_HIDDEN;
        removeRotation = MAX_ROTATION;
      }

      let removeY = 0;
      if (vertical && vertical === DOWN) removeY = -this.Y_HIDDEN;
      else if (vertical && vertical === UP) removeY = this.Y_HIDDEN;

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
