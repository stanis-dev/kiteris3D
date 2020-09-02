<template>
  <div class="container">
    <form>
      <picture>
        <h4>Contacto</h4>
        <p>Cuéntanos como podemos ayudarte</p>
      </picture>
      <label for="name">Nombre</label>
      <input type="text" id="name" placeholder="¿Cómo te llamas?" />
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="¿Cómo contactamos contigo?" />
      <label for="phone">Teléfono</label>
      <input
        type="phone"
        id="phone"
        placeholder="Hablar en persona siempre es mejor"
      />
      <label for="message">Mensaje</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Tu mensaje"
      ></textarea>
      <button class="action-call">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$color-primary: #282560;

.container {
  background-color: $color-primary;
  form {
    color: white;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins' sans-serif;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    border-bottom: $color-primary 2px solid;
    padding: 3rem 10vw;
    max-width: 1200px;

    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    p {
      margin-bottom: 2rem;
      text-align: center;
    }

    label {
      color: white;
    }

    input,
    textarea {
      border: none;
      border-bottom: 1px solid rgb(149, 149, 149);
      height: 2rem;
      margin-bottom: 1rem;
      background: transparent;
      line-height: 2rem;
      color: white;
      padding-bottom: 0.5rem;
      font-family: 'Poppins' sans-serif;

      &::placeholder {
        font-family: 'Poppins' sans-serif;
        color: lightgray;
        letter-spacing: 1px;
      }
    }

    textarea {
      height: 100px;
      margin-bottom: 3rem;
      color: white;
      line-height: 1.4;
    }

    .action-call {
      font-family: 'Poppins' sans-serif;
      text-align: center;
      padding: 1rem 1.2rem;
      border-radius: 15px;
      border: none;
      background-color: #8bc540;
      width: 250px;
      color: white;
      font-size: 1.3rem;
      cursor: pointer;
      font-weight: 400;
      letter-spacing: 2px;
      margin: auto;
    }
  }
}
</style>
