<template>
  <footer>
    <h3>Grupo Kiteris</h3>

    <div class="img">
      <img
        class="ppm-img"
        src="../../public/img/ppm_img_logotip-1.jpg"
        alt="ppm coachers"
      />
    </div>
    <div class="img">
      <img
        class="bravalab-img"
        src="../../public/img/bravalab.jpg"
        alt="bravalab"
      />
    </div>
    <div class="img">
      <img
        class="kiteris-data-img"
        src="../../public/img/kiteris_data-1.jpg"
        alt="kiteris data"
      />
    </div>

    <div class="sedes">
      <img
        class="kiteris-img"
        src="../../public/img/HoritzontalBi.png"
        alt="kiteris logo"
      />

      <div class="sede">
        <h4>Barcelona</h4>

        <p>Carrer del Camp, 79</p>
        <p>08022 Barcelona</p>

        <a href="mailto:info@kiteris.com">info@kiteris.com</a>
      </div>

      <div class="sede">
        <h4>Madrid</h4>

        <p>Calle Poeta Joan Maragall, 19, 7º E</p>
        <p>28020 Madrid</p>

        <a href="mailto:info@kiteris.com">info@kiteris.com</a>
      </div>

      <div class="sede">
        <h4>Cartagena</h4>

        <p>Calle Jabonerías, 15, 1º</p>
        <p>30201 Cartagena</p>

        <a href="mailto:info@kiteris.com">info@kiteris.com</a>
      </div>
    </div>

    <div class="copyright">
      <strong>© KITERIS 2020</strong>
      <span> · </span>
      <p>Project Management & IT Services</p>
      <span> · </span>
      <a> Aviso Legal</a>
      <span> · </span>
      <a> Política de privacidad</a>
      <span> · </span>
      <a> Política de cookies</a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  color: rgb(51, 50, 50);
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  .kiteris-data-img {
    margin-top: -20px;
  }

  .img {
    width: 100%;
    text-align: center;
    margin-top: 1.5rem;
  }
  img {
    height: 70px;
    padding: 0 20px;
    max-width: 370px;
  }

  .sedes {
    width: 80%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border-top: 1px double black;
    margin-top: 1rem;

    .sede {
      min-width: 300px;
      margin: 1rem;
      text-align: center;

      h4 {
        margin: 1rem 0;
        font-size: 1.2rem;
      }

      & * {
        margin: 0.2rem 0;
        font-size: 0.9rem;
      }
    }
  }

  h3 {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
  }

  a {
    color: #8cc63f;
  }

  .copyright {
    margin-top: 1.5rem;
    border-top: 1px black solid;
    width: 80%;
    max-width: 1200px;
    text-align: center;
    font-size: 12px;
    font-family: 'Roboto' sans-serif;
    font-weight: 600;
    padding: 2rem 0;
    line-height: 1.4rem;

    & * {
      margin-right: 1rem;
      display: inline;
    }
  }
}
</style>
