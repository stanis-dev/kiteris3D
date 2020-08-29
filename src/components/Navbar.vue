<template>
  <nav class="navbar-top">
    <a class="logo-link" href="#">
      <img
        class="logo"
        src="https://www.kiteris.com/wp-content/uploads/2020/01/HoritzontalBi.png"
        alt="kiteris"
    /></a>

    <!--  TODO make the whole <li> clickable -->
    <div class="navbar-menu">
      <div class="desktop-menu">
        <ul>
          <li><a href="#">empresa</a></li>
          <li><a href="#">servicios</a></li>
          <li><a href="#">kiteris data</a></li>
          <li><a href="#">kiteris 3D</a></li>
          <li><a href="#">valores kiteris</a></li>
          <li><a href="#">empleos</a></li>
          <li><a href="#">contacto</a></li>
          <li>
            <a href="#">
              <img
                class="wpml-ls-flag"
                src="https://www.kiteris.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png"
                alt="español"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img
                class="wpml-ls-flag"
                src="https://www.kiteris.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
                alt="english"
            /></a>
          </li>
        </ul>
      </div>
      <div @click="toggleMobileMenu()" class="menu-expand-btn">
        <div :class="{ open: mobileMenuIsOpen }" class="burger"></div>
      </div>
      <div class="linked-in-logo">
        <a
          class="linked-in"
          href="https://es.linkedin.com/company/kiteris"
          target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>
      </div>
    </div>
    <div
      :style="{ height: mobileMenuHeight }"
      :class="{ open: mobileMenuIsOpen }"
      class="collapse-toggle"
    >
      <ul>
        <li><a href="#">empresa</a></li>
        <li>
          <a class="sub-menu-expand-btn" @click="toggleSubMenu()"
            >servicios <i class="fas fa-angle-down"></i
          ></a>

          <ul :class="{ open: subMenuIsOpen }" class="submenu-collapse-toggle">
            <li><a href="#">Acompañamiento estratégico y organizativo</a></li>
            <li><a href="#">Servicios tecnológicos</a></li>
            <li><a href="#">Gestión y optimización de proyectos</a></li>
          </ul>
        </li>
        <li><a href="#">kiteris data</a></li>
        <li><a href="#">kiteris 3d</a></li>
        <li><a href="#">valores de kiteris</a></li>
        <li><a href="#">empleos</a></li>
        <li><a href="#">contacto</a></li>
        <li>
          <a href="#">
            <img
              class="wpml-ls-flag"
              src="https://www.kiteris.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png"
              alt="español"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="wpml-ls-flag"
              src="https://www.kiteris.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png"
              alt="english"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuIsOpen: false,
      subMenuIsOpen: false,
      mobileMenuHeight: '0px',
    };
  },
  methods: {
    toggleMobileMenu() {
      if (this.mobileMenuIsOpen) {
        this.mobileMenuIsOpen = false;
        this.mobileMenuHeight = '0px';
      } else {
        this.mobileMenuIsOpen = true;
        this.mobileMenuHeight = '370px';
      }
    },
    toggleSubMenu() {
      if (this.subMenuIsOpen) {
        this.subMenuIsOpen = false;
        this.mobileMenuHeight = '370px';
      } else {
        this.subMenuIsOpen = true;
        this.mobileMenuHeight = '470px';
      }
    },
  },
  watch: {},
};
</script>

<style lang="scss">
$color-primary: #282560;
.navbar-top {
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 9999;
  background-color: white;
  width: 100%;
  box-shadow: 0 20px 40px rgba($color-primary, 0.6);

  .logo-link {
    .logo {
      height: 70px;
      margin-top: 7px;
    }
  }

  .navbar-menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .desktop-menu {
      display: none;
      ul {
        display: flex;

        li {
          margin-right: 1.3rem;
          cursor: pointer;

          a {
            color: $color-primary;
            font-weight: 600;
          }
        }
      }
    }

    /* Mobile Menu Burger Icon Styles */
    .menu-expand-btn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 80px;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      .burger {
        width: 30px;
        height: 3px;
        border-radius: 5px;
        background: $color-primary;
        transition: all 0.5s ease-in-out;
        box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);

        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 3px;
          transition: all 0.5s ease-in-out;
          background: $color-primary;
        }

        &::before {
          transform: translateY(-10px);
        }

        &::after {
          transform: translateY(10px);
        }

        /* BURGER ANIMATION */
        &.open {
          transform: translateX(-50px);
          background: transparent;
          box-shadow: none;

          &::before {
            transform: rotate(45deg) translate(35px, -35px);
          }

          &::after {
            transform: rotate(-45deg) translate(35px, 35px);
          }
        }
      }
    }
    transition: all 2.5s ease-in-out;

    .linked-in-logo {
      display: none;
      width: 40px;
      height: 30px;
      border-left: 1px $color-primary solid;
      margin-left: 0.6rem;

      .linked-in {
        font-size: 1.5rem;
        padding-left: 1.1rem;

        i {
          color: $color-primary;
        }
      }
    }
  }

  /* Mobile Dropdown Menu Styles */
  .collapse-toggle {
    height: 0;
    overflow: hidden;
    z-index: 20;
    position: absolute;
    background-color: rgba(23, 23, 23, 0.95);
    min-width: 100vw;
    right: 0px;
    top: 83px;
    -moz-transition-duration: 1s;
    transition-duration: 0.5s;

    &.open {
      height: 370px;
      overflow: hidden;
      -moz-transition-duration: 1s;
      transition-duration: 0.5s;
    }

    ul {
      text-align: right;
      font-size: 0.9rem;

      /* MOBILE SUB-MENU TOGGLE */
      &.submenu-collapse-toggle {
        height: 0;
        overflow: hidden;
        width: 109%;
        background: #232323;
        -moz-transition-duration: 1s;
        transition-duration: 0.5s;

        &.open {
          height: 99px;
          overflow: hidden;
          -moz-transition-duration: 1s;
          transition-duration: 0.5s;
        }

        & li {
          font-size: 0.83rem;
          line-height: 2rem;
        }
      }

      li {
        line-height: 2.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        padding-right: 6vw;
        cursor: pointer;
      }
    }
  }
}
</style>
