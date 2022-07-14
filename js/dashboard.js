var menu = document.querySelector('.content-menu');
var contMenu = document.querySelector('.AppList');

var openMenu = document.querySelector('.icono-menu');
var closeMenu = document.querySelector('.closer');

var btnSalir = document.querySelector('.salidaApp');

var tareas = ["Hacer tarea de ingles", "Realizar quiz de matemáticas","Acabar EL PRINCIPITO", "Entregar maqueta de arte"];
var tabla = document.querySelector('.tarea');
var buscador = document.querySelector('#buscador1')
var barra = document.querySelector('.barra');

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

function inicio() {
    for (let index = 0; index < tareas.length; index++) {
        tabla.innerHTML += `<p>${tareas[index]}</p>`

    }
}
inicio();

buscador.addEventListener('keyup', function(){
    tabla.innerHTML = ''
    var texto = buscador.value.toLowerCase();

    var filtro = tareas.filter(item => {
        return item.toLocaleLowerCase().includes(texto.toLocaleLowerCase());
    });

    if (filtro.length > 0) {
        for (let index = 0; index < filtro.length; index++) {
            tabla.innerHTML += `<p>${filtro[index]}</p>`
        }
    } else {
        tabla.innerHTML += `<p>No se encontraron coincidencias.<p>`
    }

});