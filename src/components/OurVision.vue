<template>
  <section>
    <div class="wrapper-left"></div>
    <div class="wrapper-right">
      <h3>NUESTRA VISIÓN</h3>
      <div class="point">
        <i class="fas fa-check"></i>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et accusamus
          rerum velit omnis debitis. Corrupti consectetur sed vero laborum
          animi, molestias officia quas harum est quos?
        </p>
      </div>
      <div class="point">
        <i class="fas fa-check"></i>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et accusamus
          rerum velit omnis debitis. Corrupti consectetur sed vero laborum
          animi, molestias officia quas harum est quos?
        </p>
      </div>
      <div class="point">
        <i class="fas fa-check"></i>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et accusamus
          rerum velit omnis debitis. Corrupti consectetur sed vero laborum
          animi, molestias officia quas harum est quos?
        </p>
      </div>
    </div>
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
  flex-direction: column-reverse;
  min-height: 700px;
  justify-content: center;
  /* align-items: center; */
  max-width: 1900px;

  .wrapper-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5vw;

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;
      margin: 1rem auto;
      padding-left: 2rem;
      padding-top: 1rem;
      color: $color-primary;
    }

    .point {
      display: flex;
      align-items: center;
      max-width: 100%;
      border-bottom: 1px solid rgba($color: $color-primary, $alpha: 0.3);

      i {
        font-size: 2rem;
        margin-right: 3rem;
        text-align: center;
        min-width: 40px;
        color: $color-primary;
      }

      p {
        margin-top: 2rem;
        line-height: 1.6rem;
        padding-bottom: 1.5rem;
      }

      &:last-child {
        p {
          border-bottom: none;
        }
      }
    }
  }

  .wrapper-left {
    background-image: url('../../public/img/eye.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-width: 450px;
    min-height: 800px;
  }
}

@media only screen and (min-width: 1000px) {
  section {
    flex-wrap: nowrap;
    flex-direction: row;
  }
}
</style>
