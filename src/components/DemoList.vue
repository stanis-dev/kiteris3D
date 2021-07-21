<template>
  <div class="demos-container">
    <a href="https://kiteris.com/3d/reloj/">
      <div class="demo-item">
        <h4>Rolex</h4>
        <img src="/3d/img/demos/reloj.png" alt="reloj rolex" />
      </div>
    </a>

    <a href="https://kiteris.com/3d/gafas/">
      <div class="demo-item">
        <h4>Gafas</h4>
        <img src="/3d/img/demos/gafas.png" alt="render gafas" />
      </div>
    </a>
    <a href="https://kiteris.com/3d/movil/">
      <div class="demo-item">
        <h4>Huawei</h4>
        <img src="/3d/img/demos/movil.png" alt="render movil" />
      </div>
    </a>
    <a href="https://kiteris.com/3d/cosmetico/">
      <div class="demo-item">
        <h4>Crema</h4>
        <img
          style="width: 100%; height: auto; top: 100px; margin-right: -20px"
          src="/3d/img/demos/crema.png"
          alt="render crema"
        />
      </div>
    </a>
    <a href="https://kiteris.com/3d/ropa/">
      <div class="demo-item">
        <h4>Chaqueta</h4>
        <img src="/3d/img/demos/textil.png" alt="textil" />
      </div>
    </a>

    <a href="https://kiteris.com/3d/sofa/">
      <div class="demo-item">
        <h4>Sofa</h4>
        <img
          src="/3d/img/demos/sofa.png"
          alt="render sofa"
          style="margin-top: 25px;"
        />
      </div>
    </a>

    <a href="https://kiteris.com/3d/dientes/">
      <div class="demo-item">
        <h4>Dentadura</h4>
        <img
          src="/3d/img/demos/dientes.png"
          alt="parida"
          style="margin-right: -25px; margin-top: 20px;"
        />
      </div>
    </a>

    <a href="https://kiteris.com/3d/bmw/">
      <div class="demo-item">
        <h4>BMW</h4>
        <img
          style="width: 100%; height: auto; top: 80px; margin-right: -25px"
          src="/3d/img/demos/bmw.png"
          alt="coche"
        />
      </div>
    </a>

    <a href="https://www.luxcoverbygalindo.com/">
      <div class="demo-item">
        <h4>Galindo</h4>
        <img
          style="width: 70%; height: auto; top: 110px; margin-right: 15%"
          src="/3d/img/demos/galindoLogo.png"
          alt="coche"
        />
      </div>
    </a>

    <a href="https://www.prestocustom.com/">
      <div class="demo-item">
        <h4>Presto Custom</h4>
        <img style="" src="/3d/img/demos/prestoLogo.png" alt="coche" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  /* methods: {
    goTo() {
      this.$r
    }
  } */
}
</script>

<style lang="scss" scoped>
a {
  color: #282560;
}
.demos-container {
  margin: auto;
  padding: 15vh 5vw;
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
    box-shadow: 0 20px 40px rgba($color: #262261, $alpha: 0.4);
    border-radius: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.025);
      transition: all 0.2s ease-in-out;
    }

    a {
      color: #282560;
      width: 100%;
      height: 100%;
    }

    h4 {
      position: absolute;
      font-size: 2rem;
      text-align: start;
      margin-left: 2rem;
      padding-top: 2rem;
      z-index: 2222;
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
