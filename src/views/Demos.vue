<template>
  <section class="container">
    <div class="title-container">
      <h2> Experiencias innovadoras para cada producto</h2>
    </div>
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
  padding-top: 83px;
  color: $corporate-purple;

  .title-container {
    height: 15vh;
    color: $corporate-purple;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      text-transform: uppercase;
      font-weight: 100;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
}
</style>
