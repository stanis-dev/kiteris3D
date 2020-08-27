<template>
  <div class="app">
    <Navbar></Navbar>
    <Hero></Hero>
    <section class="section-2"><h3>Hello!</h3></section>
  </div>
</template>

<script>
import inCube from './babylonjs/inCube';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default {
  components: {
    Navbar,
    Hero,
  },
  mounted() {
    const inCubeS = new inCube();
    inCubeS.start();
  },
};
</script>

<style lang="scss">
$color-primary: #282560;

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  line-height: 1.4;
  color: white;
}

ul {
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}

body {
  font-family: 'Roboto', sans-serif;
  color: white;
  line-height: 1.4;

  /* HERO SECTION */

  .section-2 {
    min-height: 70vh;
    background-color: yellowgreen;
  }
}

/* TABLET MEDIA QUERIES */

@media only screen and (min-width: 700px) {
  body {
    .navbar-top {
      .navbar-menu {
        .linked-in-logo {
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width: 1000px) {
  body {
    .navbar-top {
      .navbar-menu {
        .menu-expand-btn {
          display: none;
        }
        .desktop-menu {
          display: block;
        }
      }
    }
  }
}
</style>
