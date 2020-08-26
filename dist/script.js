const menuBtn = document.querySelector('.menu-expand-btn');
const dropdownMenu = document.querySelector('.collapse-toggle');
let menuOpen = false;

const subMenuBtn = document.querySelector('.sub-menu-expand-btn');
const subDropdownMenu = document.querySelector('.submenu-collapse-toggle');
let subMenuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    dropdownMenu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    dropdownMenu.classList.remove('open');
    menuOpen = false;
  }
});

subMenuBtn.addEventListener('click', () => {
  const parentMenu = document.querySelector('.collapse-toggle.open');
  if (!subMenuOpen) {
    subMenuBtn.classList.add('open');
    subDropdownMenu.classList.add('open');
    parentMenu.style.height = '470px';
    subMenuOpen = true;
  } else {
    subMenuBtn.classList.remove('open');
    subDropdownMenu.classList.remove('open');
    parentMenu.style.height = '370px';
    subMenuOpen = false;
  }
});
