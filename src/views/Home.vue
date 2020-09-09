<template>
  <div>
    <Hero3 />
    <OurVision />
    <PropuestaValor />
    <Form />
  </div>
</template>

<script>
import Hero3 from '../components/Hero3'
import PropuestaValor from '../components/PropuestaValor'
import OurVision from '../components/OurVision'
import Form from '../components/Form'

export default {
  components: {
    Hero3,
    PropuestaValor,
    OurVision,
    Form
  },
  methods: {
    scrollToForm() {
      console.log('done')
      const el = document.querySelector('.container')
      el.scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
