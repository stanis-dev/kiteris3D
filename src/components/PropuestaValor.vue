<template>
  <section>
    <div class="wrapper-left">
      <h3>PROPUESTA DE VALOR</h3>
      <div class="point">
        <i class="fas fa-balance-scale-left"></i>
        <p>
          Ayudamos a inclinar la balanza a tu favor a través de impresionantes
          diseños 3D.
        </p>
      </div>
      <div class="point">
        <i class="fas fa-cogs"></i>
        <p>
          Tú eliges la complejidad. Desde una elegante representación en 3D del
          producto a escenas elaboradas. Ayuda a tus clientes a ver tu producto
          a través de tus ojos.
        </p>
      </div>
      <div class="point">
        <i class="fas fa-code"></i>
        <p>
          Nos encargamos de adaptar el UI contenedor de 3D a la estética del
          diseño. Utilices la tecnología que utilices.
        </p>
      </div>
      <div class="point">
        <i class="fas fa-code-branch"></i>
        <p>
          Trabajamos siempre desde la agilidad, la excelencia, la adaptabilidad
          y la experiencia.
        </p>
      </div>
      <div class="point">
        <i class="fas fa-hiking"></i>
        <p>
          Estaremos contigo en todo momento del proceso. Siempre tendrás a
          nuestros expertos listos para asesorarte en cualquier duda que puedas
          tener.
        </p>
      </div>
    </div>
    <div class="wrapper-right"></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$color-primary: #282560;
section {
  background-color: #e8e8e8;
  color: black;
  display: flex;
  flex-wrap: wrap;
  min-height: 700px;
  justify-content: center;
  align-items: center;
  width: 100%;

  .wrapper-left {
    width: 100%;
    display: flex;
    flex-direction: column;

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;
      margin: 1rem;
      padding-left: 2rem;
      padding-top: 1rem;
      color: $color-primary;
    }

    .point {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 3rem;

      i {
        font-size: 2rem;
        margin-right: 3rem;
        text-align: center;
        display: block;
        min-width: 40px;
        color: $color-primary;
      }

      p {
        margin-top: 2rem;
        line-height: 1.6rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba($color: $color-primary, $alpha: 0.3);
        display: block;
      }

      &:last-child {
        p {
          border-bottom: none;
        }
      }
    }
  }

  .wrapper-right {
    background-image: url('../../public/img/section-2-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-width: 320px;
    min-height: 800px;
  }
}

@media only screen and (min-width: 1000px) {
  section {
    flex-wrap: nowrap;
  }
}
</style>
