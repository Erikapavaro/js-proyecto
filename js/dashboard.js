var menu = document.querySelector('.AppList');
var cont1 = document.querySelector('.pt1App')
var cont2 = document.querySelector('.pt2App')

var openMenu = document.querySelector('.icono-menu');
var closeMenu = document.querySelector('.close');

openMenu.addEventListener('click',function(){
    menu.classList.remove('close-applist');
    cont1.classList.add('close-pt1')
    cont2.classList.add('close-pt2')
});

closeMenu.addEventListener('click',function(){
    menu.classList.add('close-applist');
    cont1.classList.add('close-pt1')
    cont2.classList.add('close-pt2')
});