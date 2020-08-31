<template>
  <div class="app">
    <Navbar />
    <Hero />
    <Section2 />
    <Footer />
  </div>
</template>

<script>
import inCube from './babylonjs/inCube'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Section2 from './components/Section2'

export default {
  components: {
    Navbar,
    Hero,
    Footer,
    Section2
  },
  mounted() {
    const inCubeS = new inCube()
    inCubeS.start()
  }
}
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
  height: 100%;
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
