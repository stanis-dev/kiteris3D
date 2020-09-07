<template>
  <section class="hero">
    <canvas class="canvas" id="renderCanvas"> </canvas>
    <h4 class="hero-copy">
      Expertos en soluciones de Visualización 3D en tu Web
    </h4>
    <router-link to="/demo" class="action-call">Ver demos</router-link>
    <a class="action-call contact" @click="onGoToForm">Contactar</a>
  </section>
</template>

<script>
import { onMounted } from 'vue'

import inCube from '../babylonjs/inCube'

export default {
  name: 'Hero',

  setup() {
    onMounted(() => {
      const inCubeS = new inCube()
      inCubeS.start()
    })
  },
  methods: {
    onGoToForm() {
      this.$emit('scroll-to-form')
    }
  }
}
</script>

<style lang="scss">
$color-primary: #282560;
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5.2rem;
  position: relative;

  /* 3D CANVAS */
  #renderCanvas {
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(90deg, black, black);
  }

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
    margin-left: 5vw;
    margin-top: 5vw;
    top: 20%;
    left: 5%;
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
    left: 10%;

    &.contact {
      bottom: 10%;
      left: 10%;
    }
  }
}
</style>
