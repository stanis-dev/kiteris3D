<template>
  <div class="carousel">
    <slot></slot>

    <h4 class="hero-copy">
      Expertos en soluciones de Visualización 3D en tu Web
    </h4>
    <router-link to="/demo" class="action-call">Ver demos</router-link>
    <a class="action-call contact" @click="onGoToForm">Contactar</a>

    <button @click="next" class="next">
      <i class="fas fa-angle-double-right"></i>
    </button>
    <button @click="prev" class="prev">
      <i class="fas fa-angle-double-left"></i>
    </button>

    <div class="counter-container">
      <a
        class="counter"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === visibleSlide }"
        @click="setVisibleSlide(index)"
      >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slides', 'visibleSlide'],
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
    setVisibleSlide(index) {
      this.$emit('set-visible-slide', index)
    }
  }
}
</script>

<style lang="scss" scoped>
$color-primary: #282560;
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(black, 0.7);

  .hero-copy {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    width: 65%;
    max-width: 500px;
    font-size: 1.8rem;
    text-shadow: 0 20px 30px rgba(23, 23, 23, 0.95);
    font-weight: 700;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    top: 30vh;
    left: 15vw;
  }

  .action-call {
    text-align: center;
    position: absolute;
    padding: 1rem 1.2rem;
    border-radius: 15px;
    border: none;
    background-color: $color-primary;
    width: 250px;
    color: white;
    font-size: 1.3rem;
    text-transform: uppercase;
    box-shadow: 0 20px 40px rgba(23, 23, 23, 0.95);
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 2px;
    bottom: 20%;
    left: 15vw;

    &.contact {
      bottom: 10%;
    }
  }

  button {
    position: absolute;
    height: 40px;
    width: 40px;
    top: calc(50% + 10px);
    border: none;
    background-color: rgba(#fff, 0.3);
    color: white;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    font-size: 1.2rem;
    line-height: 1.2rem;

    &:focus,
    &:hover {
      outline: none;
      cursor: pointer;
    }

    &:active {
      background-color: rgba(#fff, 0.7);
      transition: all 0.1s ease-in-out;
    }

    &.next {
      right: 3vw;
    }

    &.prev {
      left: 3vw;
    }
  }

  .counter-container {
    position: absolute;
    bottom: 5vh;
    left: calc(50% - 90px);

    .counter {
      background: rgba($color: #fff, $alpha: 0.4);
      height: 25px;
      width: 25px;
      line-height: 10px;
      margin-left: 5px;
      color: black;
      cursor: pointer;
      border-radius: 50%;
      display: inline-block;
      transition: all 0.3s ease-in-out;

      &.active {
        background: #fff;
        border: 1px white dotted;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
