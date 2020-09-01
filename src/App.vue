<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Footer
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

  #app {
    width: 100%;
  }

  .app {
    width: 100%;
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
