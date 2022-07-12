var menu = document.querySelector('.content-menu');
var contMenu = document.querySelector('.AppList');

var openMenu = document.querySelector('.icono-menu');
var closeMenu = document.querySelector('.closer');

var btnSalir = document.querySelector('.salidaApp');

openMenu.addEventListener('click',function(){
    /* menu.classList.remove('close-content'); */
    /* contMenu.classList.add('close-applist') */
    contMenu.style.width="30%"
    menu.classList.remove('close-content');
});

closeMenu.addEventListener('click',function(){
    contMenu.style.width="0%"
    menu.classList.add('close-content');
});

menu.addEventListener('click',function(){
    contMenu.style.width="0%"
    menu.classList.add('close-content');
});

btnSalir.addEventListener('click',function(){
    window.location = "https://erikapavaro.github.io/js-proyecto/login"
});