var menu = document.querySelector('.content-menu');
var contMenu = document.querySelector('.AppList');
var body = document.querySelector('body');

var openMenu = document.querySelector('.icono-menu');
var closeMenu = document.querySelector('.closer');

var btnSalir = document.querySelector('.salidaApp');

var tareas = ["Hacer tarea de ingles", "Realizar quiz de matemáticas", "Acabar EL PRINCIPITO", "Entregar maqueta de arte"];
var buscador = document.querySelector('#buscador1')
var tabla = document.querySelector('.pt2-ldt');

var contentM = document.querySelector('.modal-content');
var modal = document.querySelector('.modal');
var contentEd = document.querySelector('.editar-content');
var modalEd = document.querySelector('.editarM');

var guardarM = document.querySelector('.guardar');
var guardarEd = document.querySelector('.guardarEd');
var errGuardar = document.querySelector('.guardar-error');
var errGuardarEd = document.querySelector('.guardarEd-error');
var statusInfo = document.querySelector('.status');
var cancelarM = document.querySelector('.cancelar');
var cancelarEdi = document.querySelector('.cancelarEd');
/* var editar = document.querySelector('.editar-m'); */
var eliminar = document.querySelector('.eliminar-m');
var inputEd = document.querySelector('.caja-comen');
var inputEdOcul = document.querySelector('#inpOculto')

var plus = document.querySelector('.plus');

var input = document.querySelector('.caja-com');
var filM = /^[a-zA-Z0-9ÑñÁáÉéÍíÓóÚúÜü,.-;:'¨"',.:;\s]+$/;

openMenu.addEventListener('click', function () {
    contMenu.classList.add('AppList-open');
    menu.classList.remove('close-content');
});

closeMenu.addEventListener('click', function () {
    menu.classList.add('close-content');
    contMenu.classList.remove('AppList-open');
});

menu.addEventListener('click', function () {
    menu.classList.add('close-content');
    contMenu.classList.remove('AppList-open');
});

btnSalir.addEventListener('click', function () {
    window.location = "https://erikapavaro.github.io/js-proyecto/login"
});


function inicio() {
    for (let index = 0; index < tareas.length; index++) {
        if (index != (tareas.length - 1)) {
            tabla.innerHTML += `<div class="barra">
            <div class="barra-txt"><p>${tareas[index]}</p></div>
            <div class="barra-btn"><div class="editar-m"><img class="editar" onclick="abrirEditarM()" src="./iconos/pen-blue.png"></div>
            <div class="eliminar-m"><img class="eliminar" onclick="" src="./iconos/eliminar.png"></div></div>`

        } else {
            tabla.innerHTML += `
            <div class="barra barra-last">
            <div class="barra-txt"><p>${tareas[index]}</p></div>
            <div class="barra-btn"><div class="editar-m"><img class="editar" onclick="abrirEditarM()" src="./iconos/pen-blue.png"></div>
            <div class="eliminar-m"><img class="eliminar" onclick="" src="./iconos/eliminar.png"></div></div>`
        }
    }
}

inicio();

function mostrarError(elem, msj) {
    elem.innerHTML = ''
    elem.innerHTML = msj
    guardarM.disabled = true;
}

function errInput() {
    input.classList.add('input-error');
}

function corrInput() {
    input.classList.remove('input-error');
}

function ocultarError(elem) {
    elem.innerHTML = ''
    guardarM.disabled = false;
}

function sinGuardar() {
    guardarM.classList.add('sin-guardar')
    if (guardarM == 'sin-guardar') {
        guardarM.add.disabled
    }
}

function guardar() {
    guardarM.classList.remove('sin-guardar')
    if (guardarM == 'guardar') {
        guardarM.remove.disabled
    }
}

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
                <div class="barra-txt"><p>${filtro[index]}</p></div>
                <div class="barra-btn"><div class="editar-m"><img class="editar" onclick="abrirEditarM()" src="./iconos/pen-blue.png"></div>
                <div class="eliminar-m"><img class="eliminar" onclick="" src="./iconos/eliminar.png"></div></div>`
            } else {
                tabla.innerHTML += `
                <div class="barra barra-last">
                <div class="barra-txt"><p>${filtro[index]}</p></div>
                <div class="barra-btn"><div class="editar-m"><img class="editar" onclick="abrirEditarM()" src="./iconos/pen-blue.png"></div>
                <div class="eliminar-m"><img class="eliminar" onclick="" src="./iconos/eliminar.png"></div></div>`
            }
        }
    } else {
        tabla.innerHTML += `<span class="error">No se encontraron coincidencias</span>`
    }
});

function cancelarModal() {
    contentM.classList.add('acept-content');
    modal.classList.add('acept-modal');
    limpiarForm()
    ocultarError(errGuardar, guardarM)
    corrInput()
    statusInfo.classList.remove('guardando');
    statusInfo.classList.remove('guardado');
}

function cancelarEd(){
    contentEd.classList.add('acept-editar');
    modalEd.classList.add('acept-editarM');
}

function validarModal() {
    if (input.value == '') {
        sinGuardar()
        errInput()
        mostrarError(errGuardar, 'Este campo debe ser llenado', guardarM)
        return false
    } else {
        if (filM.test(input.value)) {
            guardar()
            ocultarError(errGuardar, guardarM)
            corrInput()
            return true
        } else {
            errInput()
            mostrarError(errGuardar, 'Solo puedes introducir letras, números y signos de puntuación', guardarM)
            return false
        }
    }
}

function limpiarForm() {
    input.value = ""
}

function agregarTarea() {
    tabla.innerHTML = ''
    const count = tareas.push(input.value)
}

function guardarModal() {
    if (validarModal()) {
        guardar()
        ocultarError(errGuardar);
        corrInput();
        setTimeout(() => {
            statusInfo.innerHTML = '<span class="guardando">Guardando...</span>'
            return true
        }, 100);
        setTimeout(() => {
            statusInfo.innerHTML = ''
            agregarTarea()
        }, 200);
        setTimeout(() => {
            limpiarForm()
            inicio()
        }, 2000);
        setTimeout(() => {
            contentM.classList.add('acept-content');
            modal.classList.add('acept-modal');
        }, 3000);
    } else {
        sinGuardar()
        mostrarError(errGuardar, 'Completar los campos correspondientes', guardarM)
        errInput()
        return false
    }
}

function guardarEditarM() {
    if (validarModal()) {
        guardar()
        ocultarError(errGuardar);
        corrInput();
        setTimeout(() => {
            statusInfo.innerHTML = '<span class="guardando">Guardando...</span>'
            return true
        }, 100);
        setTimeout(() => {
            statusInfo.innerHTML = ''
            agregarTarea()
        }, 200);
        setTimeout(() => {
            limpiarForm()
            inicio()
        }, 2000);
        setTimeout(() => {
            contentM.classList.add('acept-content');
            modal.classList.add('acept-modal');
        }, 3000);
    } else {
        sinGuardar()
        mostrarError(errGuardar, 'Completar los campos correspondientes', guardarM)
        errInput()
        return false
    }
}

function editarTarea(id){
    habilitarEdicion();
    inputEd.value = tareas[id];
    inputEdOcul.value = id;
}


function abrirModal() {
    contentM.classList.remove('acept-content');
    modal.classList.remove('acept-modal')
}

function abrirEditarM(){
    contentEd.classList.remove('acept-editar');
    modalEd.classList.remove('acept-editarM');
}

input.addEventListener("keyup", validarModal, false);
plus.addEventListener("click", abrirModal, false);
guardarM.addEventListener("click", guardarModal, false);
cancelarM.addEventListener("click", cancelarModal, false);
/* editar.addEventListener("click", abrirEditarM, false); */