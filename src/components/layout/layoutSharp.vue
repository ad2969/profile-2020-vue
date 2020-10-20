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
          <h3>{{ details.outcome }}</h3>
          <h4>{{ details.technologies }}</h4>
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
  @extend .Page--tall;
}
.hexadown {
  position: relative;
  width: 100%;
  box-shadow: 0 0 5rem rgba(0, 0, 0, 0.75);

  /* cover up extra shadows */
  .hexadown-content {
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: 2;
    background: inherit;
    width: 100%;
    height: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    width: 70.7%;
    padding-top: 70.7%;
    transform: scaleY(0.15) rotate(-45deg);
    background-color: inherit;
    left: 14.6%;
    bottom: -69.5%;
    box-shadow: 0 0 25rem rgba(0, 0, 0, 0.75);
  }
}

.hexadown-content {
  .portfolio-content {
    height: 70%;
    margin: 10% 15%;
    text-align: left;
    display: flex;
    flex-direction: column;
    max-width: 35%;

    .content__logo {
      max-height: 10rem;
      margin-bottom: 2rem;
      align-self: flex-start;
    }

    .content__position {
      border-left: 0.5rem solid;
      padding-left: 2rem;
    }

    .content__project {
      margin-top: auto;
    }
  }
}

// shifting sides
.hexadown {
  &:nth-child(odd) {
    .hexadown-content {
      .portfolio-content {
        float: right;
        text-align: right;

        .content__logo {
          align-self: flex-end;
        }

        .content__position {
          border-left: none;
          padding-left: 0;
          padding-right: 2rem;
          border-right: 0.5rem solid;
        }
      }
    }
  }
}
</style>
