<template>
  <div>
    <DraggableCard
      v-for="i in images"
      :key="i.title"
      :image="i.image"
      :bgColor1="i.bgColor1 || '#D3E3FC'"
      :bgColor2="i.bgColor2 || '#D3E3FC'"
      :current="i.title === currentTitleToUse"
      @swipe-complete="handleCardSwiped"
      @change-content="handleChangeContent"
    />
  </div>
</template>

<script>
import { REMOVE_CARD_TIME } from "@/utils/constants";
import DraggableCard from "@/components/cards/draggableCard";
export default {
  name: "HeroCardList",
  components: {
    DraggableCard
  },
  data() {
    return {
      currentTitleToUse: this.currentTitle
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
    }
  },
  methods: {
    handleCardSwiped() {
      this.$emit("swipe-complete");
    },
    handleChangeContent() {
      this.$emit("change-content");
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
