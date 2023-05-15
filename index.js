// Dom  items
const menu =  document.querySelectorAll('.menu');
const burgerBtn =  document.querySelector('.burger');
const navItem =  document.querySelectorAll('.nav-item')


let  showMenu = false;
 burgerBtn.addEventListener('click', toggleMenu);

 function toggleMenu() {
    if(!showMenu) {
        burgerBtn.classList.add('close');
        menu.classList.add('show');
        navItem.forEach(item => item.classList('show'))
       
        // set  menu state
        showMenu = true;
    } else {
        burgerBtn.classList.remove('close');
        menu.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'))

        //Set menu state
        showMenu = false;
     
    }


 }