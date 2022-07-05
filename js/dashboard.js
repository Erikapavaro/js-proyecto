var menu = document.querySelector('.AppList');
var cont1 = document.querySelector('.pt1App')
var cont2 = document.querySelector('.pt2App')
var elem1 = document.querySelector('.icono-menu');
var elem2 = document.querySelector('.close');

function openMenu() {
    menu.style.transition = ".4s"
    cont1.style.transition = ".4s"
    cont2.style.transition = ".4s"
    menu.style.width = "30%"
    cont1.style.width = "100%"
    cont2.style.width = "100%"
    
}

function closeMenu() {
    menu.style.transition = ".4s"
    cont1.style.transition = ".4s"
    cont2.style.transition = ".4s"
    menu.style.width = "0%"
    cont1.style.width = "0%"
    cont2.style.width = "0%"
}

closeMenu()

elem1.addEventListener("click", openMenu, false);

elem2.addEventListener("click", closeMenu, false);