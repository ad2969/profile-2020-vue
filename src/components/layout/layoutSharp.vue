<template>
  <div class="SharpLayout hexadown" :style="{ backgroundColor: details.brand }">
    <span class="hexadown-content">
      <div class="portfolio-content" :style="{ color: details.color }">
        <img :src="details.nameLogo" alt="logo" class="content__logo" />
        <h3 class="content__position">
          {{ details.position }}<br />
          {{ details.date }}<br />
        </h3>
        <div class="content__project">
          <h3>
            {{ details.outcome }}<br />
            {{ details.technologies }}<br />
          </h3>
        </div>
      </div>
    </span>
    <slot />
  </div>
</template>

<script>
export default {
  name: "SharpLayout",
  props: {
    details: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped lang="scss">
.SharpLayout {
  width: 100vw;

  @include descending-z-index(20);
}
.hexadown {
  position: relative;
  height: 50vw;
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.75);

  /* cover up extra shadows */
  .hexadown-content {
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: inherit;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 71vw;
    height: 71vw;
    transform: scaleY(0.15) rotate(-45deg);
    background-color: inherit;
    left: 14.5%;
    bottom: -71%;
    box-shadow: 0 0 25rem rgba(0, 0, 0, 0.75);
  }
}

.hexadown-content {
  .portfolio-content {
    height: 80%;
    margin: 10% 15%;
    text-align: left;

    .content__logo {
      max-height: 10rem;
      margin-bottom: 2rem;
    }

    .content__position {
      border-left: 1rem solid;
      padding-left: 3rem;
    }

    .content__project {
      height: 100%;
      align-content: flex-end;
    }
  }
}
</style>
