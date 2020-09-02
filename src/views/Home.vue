<template>
  <div>
    <Hero />
    <OurVision />
    <PropuestaValor />
    <Form />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import PropuestaValor from '../components/PropuestaValor'
import OurVision from '../components/OurVision'
import Form from '../components/Form'

import inCube from '../babylonjs/inCube'

export default {
  components: {
    Hero,
    PropuestaValor,
    OurVision,
    Form
  },
  mounted() {
    const inCubeS = new inCube()
    inCubeS.start()
  }
}
</script>

<style lang="scss" scoped></style>
