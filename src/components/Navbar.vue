<template>
  <header class="navbar-top" v-scroll="handleScroll">
    <router-link to="/" class="logo-link">
      <img class="logo" :src="logo" alt="kiteris"
    /></router-link>

    <div class="navbar-menu">
      <div class="desktop-menu">
        <ul>
          <li><a href="https://www.kiteris.com/presentacion/">empresa</a></li>
          <li class="has-submenu">
            <a href="#">servicios</a>
            <ul class="desktop-submenu">
              <li>
                <a
                  href="https://www.kiteris.com/acompanamiento-estrategico-y-organizativo/"
                  >Acompañamiento estratégico y organizativo</a
                >
              </li>
              <li>
                <a href="https://www.kiteris.com/servicios-tecnologicos/"
                  >Servicios tecnológicos</a
                >
              </li>
              <li>
                <a
                  href="https://www.kiteris.com/gestion-y-optimizacion-de-proyectos/"
                  >Gestión y optimización de proyectos</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.kiteris.com/kiteris-data/">kiteris data</a>
          </li>
          <li class="has-submenu">
            <a href="https://www.kiteris.com/kiteris-3d/">kiteris 3D</a>
            <ul class="desktop-submenu">
              <li><a href="">Demos</a></li>
            </ul>
          </li>
          <li>
            <a href="https://www.kiteris.com/valores-de-kiteris/"
              >valores kiteris</a
            >
          </li>
          <li><a href="https://www.kiteris.com/empleos/">empleos</a></li>
          <li><a href="https://www.kiteris.com/contacto/">contacto</a></li>
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
    <nav
      :style="{ height: mobileMenuHeight }"
      :class="{ open: mobileMenuIsOpen }"
      class="collapse-toggle"
    >
      <ul>
        <li><a href="https://www.kiteris.com/presentacion/">empresa</a></li>
        <li>
          <a class="sub-menu-expand-btn" @click="toggleSubMenu()"
            >servicios <i class="fas fa-angle-down"></i
          ></a>

          <ul :class="{ open: subMenuIsOpen }" class="submenu-collapse-toggle">
            <li>
              <a
                href="https://www.kiteris.com/acompanamiento-estrategico-y-organizativo/"
                >Acompañamiento estratégico y organizativo</a
              >
            </li>
            <li>
              <a href="https://www.kiteris.com/servicios-tecnologicos/"
                >Servicios tecnológicos</a
              >
            </li>
            <li>
              <a
                href="https://www.kiteris.com/gestion-y-optimizacion-de-proyectos/"
                >Gestión y optimización de proyectos</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="https://www.kiteris.com/kiteris-data/">kiteris data</a>
        </li>
        <li><a href="https://www.kiteris.com/kiteris-3d/">kiteris 3d</a></li>
        <li>
          <a href="https://www.kiteris.com/valores-de-kiteris/"
            >valores de kiteris</a
          >
        </li>
        <li><a href="https://www.kiteris.com/empleos/">empleos</a></li>
        <li><a href="https://www.kiteris.com/contacto/">contacto</a></li>
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
    </nav>
    <a @click="scrollToTop" class="arrow-up" v-if="showScrollToTopArrow"
      ><i class="fas fa-arrow-up"></i
    ></a>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mobileMenuIsOpen: false,
      subMenuIsOpen: false,
      mobileMenuHeight: '0px',
      textColor: '#282560',
      logo: '/3d/img/kiteris3d.png',
      showScrollToTopArrow: false
    }
  },
  methods: {
    toggleMobileMenu() {
      if (this.mobileMenuIsOpen) {
        this.mobileMenuIsOpen = false
        this.subMenuIsOpen = false
        this.mobileMenuHeight = '0px'
      } else {
        this.mobileMenuIsOpen = true
        this.mobileMenuHeight = '370px'
      }
    },
    toggleSubMenu() {
      if (this.subMenuIsOpen) {
        this.subMenuIsOpen = false
        this.mobileMenuHeight = '370px'
      } else {
        this.subMenuIsOpen = true
        this.mobileMenuHeight = '470px'
      }
    },

    handleScroll(evt, el) {
      /* console.log(evt, el) */

      if (window.scrollY > 100) {
        el.classList.add('on-scroll')
        this.textColor = 'white'
        this.logo = '/3d/img/logo-white.png'
        this.showScrollToTopArrow = true
      } else {
        el.classList.remove('on-scroll')
        this.textColor = '#282560'
        ;(this.logo = '/3d/img/kiteris3d.png'), (this.showScrollToTopArrow = false)
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  directives: {
    scroll(el, binding) {
      let f = function(evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
  }
}
</script>

<style lang="scss">
$corporate-purple: #282560;
$text-color: $corporate-purple;

.navbar-top {
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 9999;
  background-color: white;
  width: 100%;
  transition: all 0.5s;

  /* SCROLL UP ARROW */
  .arrow-up {
    position: fixed;
    cursor: pointer;
    top: 91%;
    right: 6vw;
    width: 30px;
    height: 30px;
    z-index: 9999;
    background-color: lightgrey;
    text-align: center;
    border-radius: 100%;
    transition: all 0.3s ease-in-out;

    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: grey;
    }

    i {
      /* color: $corporate-purple; */
      line-height: 30px;
      color: $corporate-purple;
      font-size: 1.5rem;
    }
  }

  /* NAVBAR COLOR CHANGE ON SCROLL DOWN */
  &.on-scroll {
    background-color: #262261;

    .navbar-menu {
      .desktop-menu {
        ul {
          li {
            a {
              color: white;
            }
          }
        }
      }

      .menu-expand-btn {
        .burger,
        .burger::after,
        .burger::before {
          background: white;
        }
      }
    }

    .linked-in-logo {
      .linked-in {
        border-left: 1px white solid;
        i {
          color: white !important;
        }
      }
    }
  }

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
          line-height: 83px;
          height: 83px;

          &.has-submenu {
            position: relative;

            &:hover {
              ul.desktop-submenu {
                transition: all 0.25s ease-in-out;
                opacity: 1;
              }
            }

            ul.desktop-submenu {
              transition: all 0.25s ease-in-out;
              opacity: 0;
              position: absolute;
              background: black;
              top: 80px;
              left: 0;
              display: flex;
              flex-direction: column;
              background: rgba(35, 35, 35, 1);
              padding: 4px 0 15px;
              min-width: 225px;
              line-height: 1.43;

              li {
                padding-left: 28px;
                padding-right: 20px;
                font-size: 12px;
                line-height: 1.43;
                margin-right: 0;
                height: auto;
                margin-top: 4px;

                &:hover {
                  a {
                    color: white;
                    transition: all 0.25s ease-in-out;
                    transform: translateX(5px);
                  }
                }

                a {
                  display: block;
                  color: #9d9d9d;
                  font-size: 12px;
                  font-weight: 500;
                  line-height: 1.43;
                  padding: 9px 0 7px 0;
                  transition: all 0.25s ease-in-out;
                }
              }
            }
          }

          a {
            color: $text-color;
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
        background: $text-color;
        transition: all 0.5s ease-in-out;

        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 3px;
          transition: all 0.5s ease-in-out;
          background: $text-color;
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
      border-left: 1px $text-color solid;
      margin-left: 0.6rem;

      .linked-in {
        font-size: 1.5rem;
        padding-left: 1.1rem;

        i {
          color: $text-color;
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
