<template>
  <div>
    <DraggableCard
      v-for="i in images"
      :key="i.title"
      :image="i.image"
      :bgColor1="i.bgColor1"
      :bgColor2="i.bgColor2"
      :current="i.title === currentTitleToUse"
      :lastRemoveDirection="lastRemoveDirection"
      @swipe-complete="handleCardSwiped"
      @change-content="handleChangeContent"
      @card-remove="handleCardRemove"
    />
    <div class="image-indicators">
      <span
        v-for="i in originalTitleOrder"
        :key="i + 'indicator'"
        :class="{ active: i === currentTitle }"
        class="indicator"
        :style="{
          width: `${100 / (originalTitleOrder.length + 1)}%`,
          marginLeft: `${(100 / originalTitleOrder.length + 1) /
            originalTitleOrder.length /
            2}%`,
          marginRight: `${(100 / originalTitleOrder.length + 1) /
            originalTitleOrder.length /
            2}%`
        }"
      ></span>
    </div>
  </div>
</template>

<script>
import { REMOVE_CARD_TIME } from "@/utils/constants";
import DraggableCard from "@/components/cards/draggableCard";
import { UP, DOWN } from "@/utils/constants";

const VERTICAL_OPTIONS = [UP, DOWN];

export default {
  name: "HeroCardList",
  components: {
    DraggableCard
  },
  data() {
    return {
      currentTitleToUse: this.currentTitle,
      lastRemoveDirection: {
        horizontal: "",
        vertical: ""
      }
    };
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    currentTitle: {
      type: String,
      required: true
    },
    originalTitleOrder: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleCardSwiped() {
      this.$emit("swipe-complete");
    },
    handleChangeContent() {
      this.$emit("change-content");
    },
    handleCardRemove({ horizontal }) {
      this.lastRemoveDirection.horizontal = horizontal;
      this.lastRemoveDirection.vertical =
        VERTICAL_OPTIONS[Math.floor(Math.random() * 2)];
    }
  },
  watch: {
    currentTitle() {
      // the delay before updating the card list
      setTimeout(() => {
        this.currentTitleToUse = this.currentTitle;
      }, REMOVE_CARD_TIME);
    }
  }
};
</script>

<style scoped lang="scss">
.image-indicators {
  @include flex-row;
  width: 80%;
  position: absolute;
  bottom: 0;
  justify-content: space-between;

  .indicator {
    height: 1em;
    margin-bottom: 5%;
    border-radius: 1px;
    border: 1px solid rgba($dark, 0.1);
    background-color: none;
    transition: background-color 0.5s;

    &.active {
      height: 0.5em;
      border: none;
      background-color: rgba($dark, 0.2);
      box-shadow: 0 0 0.5rem 0.25rem rgba($dark, 0.05);
      transition: background-color 0.5s;
    }
  }
}
</style>
