const menuBtn = document.querySelector('.menu-expand-btn');
const dropdownMenu = document.querySelector('.collapse-toggle');
let = menuOpen = false;

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
