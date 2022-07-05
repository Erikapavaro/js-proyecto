var menu = document.querySelector('.content-menu');
var contMenu = document.querySelector('.AppList');

var openMenu = document.querySelector('.icono-menu');
var closeMenu = document.querySelector('.close');

openMenu.addEventListener('click',function(){
    menu.classList.remove('close-content');
    contMenu.classList.add('close-applist')
});

closeMenu.addEventListener('click',function(){
    menu.classList.add('close-content');
    contMenu.classList.add('close-applist')
});