var menu = document.querySelector('.AppList');
var elem1 = document.querySelector('.icono-menu');
var elem2 = document.querySelector('.close');

function openMenu() {
    menu.style.transition = ".4s"
    menu.style.width = "30%"
}

function closeMenu() {
    menu.style.transition = ".4s"
    menu.style.width = "0%"
}

closeMenu()

elem1.addEventListener("click", openMenu, false);

elem2.addEventListener("click", closeMenu, false);