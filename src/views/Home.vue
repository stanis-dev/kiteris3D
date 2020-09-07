<template>
  <div>
    <Hero v-on:scroll-to-form="scrollToForm" />
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

export default {
  components: {
    Hero,
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
