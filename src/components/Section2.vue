<template>
  <section class="section-2">
    <div class="wrapper-left">
      <p>
        <i class="fas fa-balance-scale-left"></i>
        Ayudamos a inclinar la balanza a tu favor a través de impresionantes
        diseños 3D.
      </p>
      <p>
        <i class="fas fa-cogs"></i>
        Tú eliges la complejidad. Desde una elegante representación en 3D del
        producto a escenas elaboradas. Ayuda a tus clientes a ver tu producto a
        través de tus ojos.
      </p>
      <p>
        <i class="fas fa-code"></i>
        Nos encargamos de adaptar el UI contenedor de 3D a la estética del
        diseño. Utilizes la tecnología que utilices.
      </p>
      <p>
        <i class="fas fa-code-branch"></i>
        Trabajamos siempre desde la agilidad, la excelencia, la adaptabilidad y
        la expriencia.
      </p>
      <p>
        <i class="fas fa-hiking"></i>
        Estaremos contigo en todo momento del proceso. Siempre tendrás a
        nuestros expertos listos para asesorarte en cualquier duda que puedas
        tener.
      </p>
    </div>
    <div class="wrapper-right"></div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section-2 {
  background-color: #e8e8e8;
  color: black;
  display: flex;
  flex-wrap: wrap;
  min-height: 700px;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .wrapper-left {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;

    p {
      margin-top: 2rem;
      line-height: 1.6rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid black;

      i {
        font-size: 2rem;
        margin-right: 1rem;
        text-align: center;
      }
    }
  }

  .wrapper-right {
    background-image: url('../../public/img/section-2-img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-width: 500px;
    min-height: 700px;
  }
}

@media only screen and (min-width: 1000px) {
  .section-2 {
    flex-wrap: nowrap;
  }
}
</style>
