var menu = document.querySelector('.content-menu');
var contMenu = document.querySelector('.AppList');

var openMenu = document.querySelector('.icono-menu');
var closeMenu = document.querySelector('.closer');

var btnSalir = document.querySelector('.salidaApp');

var tareas = ["Hacer tarea de ingles", "Realizar quiz de matemáticas", "Acabar EL PRINCIPITO", "Entregar maqueta de arte"];
var buscador = document.querySelector('#buscador1')
var tabla = document.querySelector('.pt2-ldt');

openMenu.addEventListener('click', function () {
    /* menu.classList.remove('close-content'); */
    /* contMenu.classList.add('close-applist') */
    contMenu.style.width = "30%"
    menu.classList.remove('close-content');
});

closeMenu.addEventListener('click', function () {
    contMenu.style.width = "0%"
    menu.classList.add('close-content');
});

menu.addEventListener('click', function () {
    contMenu.style.width = "0%"
    menu.classList.add('close-content');
});

btnSalir.addEventListener('click', function () {
    window.location = "https://erikapavaro.github.io/js-proyecto/login"
});

function inicio() {
    for (let index = 0; index < tareas.length; index++) {
        if (index != (tareas.length - 1)) {
            tabla.innerHTML += `<div class="barra">
            <div class="barra-txt"><p>${tareas[index]}</p></div>
            <div class="barra-btn"><img class="editar" src="./iconos/pen-blue.png">
            <img class="eliminar" src="./iconos/eliminar.png"></div>`
        } else {
            tabla.innerHTML += `
            <div class="barra barra-last">
            <div class="barra-txt"><p>${tareas[index]}</p></div>
            <div class="barra-btn"><img class="editar" src="./iconos/pen-blue.png">
            <img class="eliminar" src="./iconos/eliminar.png"></div>`
        }
    }
}

inicio();




buscador.addEventListener('keyup', function () {
    tabla.innerHTML = ''
    var texto = buscador.value.toLowerCase();

    var filtro = tareas.filter(item => {
        return item.toLocaleLowerCase().includes(texto.toLocaleLowerCase());
    });

    if (filtro.length > 0) {
        for (let index = 0; index < filtro.length; index++) {
            if (index != (filtro.length - 1)) {
                tabla.innerHTML += `<div class="barra">
            <div class="barra-txt"><p>${tareas[index]}</p></div>
            <div class="barra-btn"><img class="editar" src="./iconos/pen-blue.png">
            <img class="eliminar" src="./iconos/eliminar.png"></div>`
            } else {
                tabla.innerHTML += `
            <div class="barra barra-last">
            <div class="barra-txt"><p>${tareas[index]}</p></div>
            <div class="barra-btn"><img class="editar" src="./iconos/pen-blue.png">
            <img class="eliminar" src="./iconos/eliminar.png"></div>`
            }
        }
    } else {
        tabla.innerHTML += `<span class="error">No se encontraron coincidencias</span>`
    }
});