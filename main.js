// Dom  items
const header = document.querySelector('#header');
const burger = document.querySelector('#burger');

let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    header.classList.remove('header');
    header.classList.add('header-active');
    burger.classList.remove('burger');
    burger.classList.add('burger-active');
    document.body.style.overflowY = 'hidden';

    // set  menu state
    showMenu = true;
  } else {
    header.classList.remove('header-active');
    header.classList.add('header');
    burger.classList.remove('burger-active');
    burger.classList.add('burger');
    document.body.style.overflowY = 'auto';

    // Set menu state
    showMenu = false;
  }
}
burger.addEventListener('click', toggleMenu);