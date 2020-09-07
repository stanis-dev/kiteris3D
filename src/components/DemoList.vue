<template>
  <section>
    <ul>
      <li>
        <div class="demo-item-container">
          <h3>VINOS</h3>
          <img src="../../public/img/demos/vino.png" alt="botella de vino" />
        </div>
      </li>
      <li>
        <div class="demo-item-container">
          <h3>TEXTIL</h3>
          <img src="../../public/img/demos/textil.png" alt="vestido" />
        </div>
      </li>
      <li>
        <div class="demo-item-container">
          <h3>SUPERMERCADOS</h3>
          <img src="../../public/img/demos/arroz.png" alt="arroz" />
        </div>
      </li>
      <li>
        <div class="demo-item-container">
          <h3>ARQUITECTURA</h3>
          <img src="../../public/img/demos/casa.png" alt="casa" />
        </div>
      </li>
      <li>
        <div class="demo-item-container">
          <h3>INDUSTRIAL</h3>
          <img
            src="../../public/img/demos/limpiafondos.png"
            alt="maquina limpiafondos"
          />
        </div>
      </li>
      <li>
        <div class="demo-item-container">
          <h3>AUTOMOCIÓN</h3>
          <img src="../../public/img/demos/car.png" alt="coche" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  margin: 100px 0;

  ul {
    display: flex;
    gap: 10vw;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 4vw;

    li {
      .demo-item-container {
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease-in-out;
        }

        height: 300px;
        width: 300px;
        background: grey;
        position: relative;
        z-index: 2;
        cursor: pointer;

        h3 {
          text-align: start;
          color: white;
          margin-left: 1rem;
          padding-top: 1rem;
          font-family: 'Raleway', sans-serif;
          font-size: 1.8rem;
          z-index: 2000;
        }

        img {
          height: 100%;
          width: auto;
          position: absolute;
          bottom: -30px;
          right: -10px;
          z-index: -1;
        }
      }
    }
  }
}
</style>
