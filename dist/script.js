const menuBtn = document.querySelector('.toggler');
const dropdownMenu = document.querySelector('.toggled');
let menuOpen = false;

const subMenuBtn = document.querySelector('.toggler');
const dropdownMenu = document.querySelector('.toggled');
let menuOpen = false;

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
