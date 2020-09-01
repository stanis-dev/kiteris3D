<template>
  <div>
    <Hero />
    <OurVision />
    <PropuestaValor />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import PropuestaValor from '../components/PropuestaValor'
import OurVision from '../components/OurVision'

import inCube from '../babylonjs/inCube'

export default {
  components: {
    Hero,
    PropuestaValor,
    OurVision
  },
  mounted() {
    const inCubeS = new inCube()
    inCubeS.start()
  }
}
</script>

<style lang="scss" scoped></style>
