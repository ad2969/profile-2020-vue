<template>
  <div class="loader-box" :class="{ active: isLoading }">
    <div className="loader" id="loader">
      <span className="loader__circle"></span>
      <span className="loader__square"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    isLoading: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
// variables
$loader-size: 3rem;

// styles
.loader-box {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  background: $black;
  transform: translateY(100%);
  transition: all 0.5s;

  &.active {
    transform: translateY(0);
    transition: all 0.5s;
  }
}

.loader {
  align-items: center;
  display: flex;
  justify-content: center;
  left: 50vw;
  position: absolute;
  bottom: 50vh;
  transform: translate(-0.5 * $loader-size, 2 * $loader-size);
  transition: transform 0.3s;
  -o-transition: transform 0.3s;
  -ms-transition: transform 0.3s;
  -moz-transition: transform 0.3s;
  -webkit-transition: transform 0.3s;

  .loader__circle {
    background: #fff;
    border-radius: 50%;
    height: $loader-size;
    width: $loader-size;
    animation-play-state: paused;
    animation: circlebounce-transform 0.4s infinite alternate
        cubic-bezier(0.18, 0.02, 0.3, 0.99),
      circlebounce-scale 0.4s infinite alternate
        cubic-bezier(0.18, 0.02, 0.3, 0.99);
  }
  .loader__square {
    background: #fff;
    height: 1.3 * $loader-size;
    width: 1.3 * $loader-size;
    animation-play-state: paused;
    animation: squarebounce-transform 0.8s infinite
        cubic-bezier(0.7, 0.14, 0.3, 0.94),
      squarebounce-scale 0.8s infinite cubic-bezier(0.7, 0.14, 0.3, 0.94);
  }
}
.loader.active {
  transform: translate(-0.5 * $loader-size, -8 * $loader-size);

  .loader__circle {
    animation-play-state: running;
  }
  .loader__square {
    animation-play-state: running;
  }
}

@keyframes circlebounce-transform {
  from {
    transform: translate3d(0, 4.4 * $loader-size, 0);
  }
  80% {
    transform: translate3d(0, 0, 0.5 * $loader-size);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes circlebounce-scale {
  from {
    scale: 0.3 1;
  }
  30% {
    scale: 1 1;
  }
  to {
    scale: 1 1;
  }
}

@keyframes squarebounce-transform {
  from {
    transform: translate3d(-1.15 * $loader-size, 5 * $loader-size, 0) rotate(0)
      scaleX(2) scaleY(0.3);
  }
  10% {
    transform: translate3d(
        -1.15 * $loader-size,
        4.6 * $loader-size,
        0.0625 * $loader-size
      )
      rotate(0) scaleX(1) scaleY(1);
  }
  40% {
    transform: translate3d(
        -1.15 * $loader-size,
        1.75 * $loader-size,
        0.5 * $loader-size
      )
      rotate(170deg);
  }
  50% {
    transform: translate3d(-1.15 * $loader-size, 1.75 * $loader-size, 0)
      rotate(180deg);
  }
  60% {
    transform: translate3d(
        -1.15 * $loader-size,
        1.75 * $loader-size,
        0.5 * $loader-size
      )
      rotate(190deg);
  }
  90% {
    transform: translate3d(
        -1.15 * $loader-size,
        4.6 * $loader-size,
        0.0625 * $loader-size
      )
      rotate(360deg) scaleX(1) scaleY(1);
  }
  to {
    transform: translate3d(-1.15 * $loader-size, 5 * $loader-size, 0)
      rotate(360deg) scaleX(2) scaleY(0.3);
  }
}
@keyframes squarebounce-scale {
}
</style>
