<template>
  <section class="container">
    <h2>Experiencias innovadoras para cada producto</h2>
    <DemoList />
  </section>
</template>

<script>
import DemoList from '../components/DemoList'
export default {
  components: {
    DemoList
  }
}
</script>

<style lang="scss" scoped>
$corporate-purple: #282560;
.container {
  text-align: center;
  padding-top: 150px;
  color: $corporate-purple;

  h2 {
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
}
</style>
