<template>
  <div class="demos-container">
    <div class="demo-item">
      <h4>Rolex</h4>
      <img src="/img/demos/reloj.png" alt="reloj rolex" />
    </div>
    <div class="demo-item">
      <h4>Cava Marevia</h4>
      <img src="/img/demos/botella.png" alt="botella cava marevia" />
    </div>
    <div class="demo-item">
      <h4>Huawei</h4>
      <img src="/img/demos/movil.png" alt="render movil" />
    </div>
    <div class="demo-item">
      <h4>Crema</h4>
      <img
        style="width: 100%; height: auto; top: 110px"
        src="/img/demos/crema.png"
        alt="render crema"
      />
    </div>
    <div class="demo-item">
      <h4>Chaqueta</h4>
      <img src="/img/demos/textil.png" alt="textil" />
    </div>
    <div class="demo-item">
      <h4>Sofa</h4>
      <img src="/img/demos/sofa.png" alt="render sofa" />
    </div>
    <div class="demo-item">
      <h4>Dientes...?</h4>
      <img src="/img/demos/dientes.png" alt="parida" />
    </div>
    <div class="demo-item">
      <h4>Audi</h4>
      <img
        style="width: 100%; height: auto; top: 110px"
        src="/img/demos/car.png"
        alt="coche"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demos-container {
  padding: 5vh 5vw;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1900px;
  justify-content: center;

  .demo-item {
    background-color: #f2f5f8;
    /* background-color: yellow; */
    height: 250px;
    width: 400px;
    position: relative;
    z-index: 2;

    h4 {
      font-size: 2rem;
      text-align: start;
      margin-left: 2rem;
      padding-top: 2rem;
      z-index: 2;
    }

    img {
      position: absolute;
      right: 0;
      top: 30px;
      height: 100%;
      width: auto;
      z-index: -1;
    }
  }
}
</style>
