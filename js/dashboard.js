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
var contentElimin = document.querySelector('.elimin-content');
var modalElimin = document.querySelector('.elimin');
var eliminBody = document.querySelector('.elimin-body');

var guardarM = document.querySelector('.guardar');
var guardarEd = document.querySelector('.guardarEd');
var errGuardar = document.querySelector('.guardar-error');
var errGuardarEd = document.querySelector('.guardarEd-error');
var statusInfo = document.querySelector('.status');
var statusInfoEd = document.querySelector('.statusEd');
var statusInfoElim = document.querySelector('.statusElim')
var cancelarM = document.querySelector('.cancelar');
var cancelarEdi = document.querySelector('.cancelarEd');
var cancelarElim = document.querySelector('.cancelarElim')
var eliminTarea = document.querySelector('.eliminarElim')
var eliminar = document.querySelector('.eliminar-m');
var inputEd = document.querySelector('#caja-comen');
var inputEdOcul = document.querySelector('#inpOculto')

var plus = document.querySelector('.plus');

var input = document.querySelector('#caja-com');
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
            <div class="barra-btn"><div class="editar-m"><img class="editar" onclick="abrirEditarM(); editarTarea(${index});" src="./iconos/pen-blue.png"></div>
            <div class="eliminar-m"><img class="eliminar" onclick="abrirElim()" src="./iconos/eliminar.png"></div></div>`

        } else {
            tabla.innerHTML += `
            <div class="barra barra-last">
            <div class="barra-txt"><p>${tareas[index]}</p></div>
            <div class="barra-btn"><div class="editar-m"><img class="editar" onclick="abrirEditarM(); editarTarea(${index});" src="./iconos/pen-blue.png"></div>
            <div class="eliminar-m"><img class="eliminar" onclick="abrirElim()" src="./iconos/eliminar.png"></div></div>`
        }
    }
}

inicio();
/* elimInicio();

function elimInicio() {
    for (let index = 0; index < tareas.length; index++) {
        if (index != (tareas.length - 1)) {
            eliminBody.innerHTML +=  `<div class="botones-elimin">
                    <button class="cancelarElim" onclick="cancelarElimin(${index})">CANCELAR</button>
                    <button class="eliminarElim" onclick="eliminarTarea(${index})">ELIMINAR</button>
                </div>` 

        }
    }
}
 */
function abilitarBtn(btn) {
    btn.attr


}

function deshabilitarBtn() {

}

function mostrarError(elem, msj) {
    elem.innerHTML = ''
    elem.innerHTML = msj
    guardarM.disabled = true;
    guardarEd.disabled = true;
}

function errInput() {
    if (input) {
        input.classList.add('input-error');
    } if (inputEd) {
        inputEd.classList.add('input-error');
    }

}

function corrInput() {
    if (input) {
        input.classList.remove('input-error');
    } if (inputEd) {
        inputEd.classList.remove('input-error');
    }
}

function ocultarError(elem) {
    elem.innerHTML = ''
    guardarM.disabled = false;
    guardarEd.disabled = false;
}

function sinGuardar() {
    guardarM.classList.add('sin-guardar')
    guardarEd.classList.add('sin-guardar')
    if (guardarM == 'sin-guardar' || guardarEd == 'sin-guardar') {
        guardarM.add.disabled
        guardarEd.add.disabled
    }
}

function guardar() {
    guardarM.classList.remove('sin-guardar')
    guardarEd.classList.remove('sin-guardar')
    if (guardarM == 'guardar' || guardarEd == 'guardar') {
        guardarM.remove.disabled
        guardarEd.remove.disabled
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
                <div class="barra-btn"><div class="editar-m" ><img class="editar" onclick="abrirEditarM(); editarTarea(${index});" src="./iconos/pen-blue.png"></div>
                <div class="eliminar-m"><img class="eliminar" onclick="abrirElim()" src="./iconos/eliminar.png"></div></div>`
            } else {
                tabla.innerHTML += `
                <div class="barra barra-last">
                <div class="barra-txt"><p>${filtro[index]}</p></div>
                <div class="barra-btn"><div class="editar-m"><img class="editar" onclick="abrirEditarM(); editarTarea(${index});" src="./iconos/pen-blue.png"></div>
                <div class="eliminar-m"><img class="eliminar" onclick="abrirElim()" src="./iconos/eliminar.png"></div></div>`
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
    corrInput(input)
    statusInfo.classList.remove('guardando');
    statusInfo.classList.remove('guardado');
}

function cancelarEd() {
    contentEd.classList.add('acept-editar');
    modalEd.classList.add('acept-editarM');
    limpiarForm()
    ocultarError(errGuardarEd, guardarEd)
    corrInput(inputEd)
    statusInfoEd.classList.remove('guardando');
    statusInfoEd.classList.remove('guardado');
}

function cancelarElimin() {
    contentElimin.classList.add('acept-eliminar');
    modalElimin.classList.add('acept-elemin');
}

function validarModal() {
    if (input.value == '') {
        sinGuardar(guardarM)
        errInput(input)
        mostrarError(errGuardar, 'Este campo debe ser llenado', guardarM)
        return false
    } else {
        if ((filM.test(input.value))) {
            guardar()
            ocultarError(errGuardar, guardarM)
            corrInput(input)
            return true
        } else {
            errInput(input)
            mostrarError(errGuardar, 'Solo puedes introducir letras, números y signos de puntuación', guardarM)
            return false
        }
    }
}

function validarModalEd() {
    if (inputEd.value == '') {
        sinGuardar(guardarEd)
        errInput(inputEd)
        mostrarError(errGuardarEd, 'Este campo debe ser llenado', guardarEd)
        return false
    } else {
        if ((filM.test(inputEd.value))) {
            guardar()
            ocultarError(errGuardarEd, guardarEd)
            corrInput(inputEd)
            return true
        } else {
            console.log("holaaaaaa")
            errInput(inputEd)
            mostrarError(errGuardarEd, 'Solo puedes introducir letras, números y signos de puntuación', guardarEd)
            return false
        }
    }
}

function limpiarForm() {
    input.value = ""
    inputEd.value = ""
}

function agregarTarea() {
    tabla.innerHTML = ''
    const count = tareas.push(input.value)
    actualizar()
}

function actualizar() {
    tabla.innerHTML = ""
    inicio();
}

function guardarModal() {
    if (validarModal()) {
        guardar()
        ocultarError(errGuardar);
        corrInput(input);
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
        }, 2000);
        setTimeout(() => {
            contentM.classList.add('acept-content');
            modal.classList.add('acept-modal');
        }, 3000);
    } else {
        sinGuardar(guardarM)
        mostrarError(errGuardar, 'Completar los campos correspondientes', guardarM)
        errInput(input)
        return false
    }
}

function habilitarEdicion() {
    inputEd.disabled = false;
    guardarEd.disabled = false;
}

function editarTarea(id) {
    habilitarEdicion()
    inputEd.value = tareas[id];
    inputEdOcul.value = id;
}


function abrirModal() {
    contentM.classList.remove('acept-content');
    modal.classList.remove('acept-modal')
}

function abrirEditarM() {
    contentEd.classList.remove('acept-editar');
    modalEd.classList.remove('acept-editarM');
}

function abrirElim() {
    contentElimin.classList.remove('acept-eliminar');
    modalElimin.classList.remove('acept-elemin');
}

function guardarElemento() {
    var txt = inputEd.value;
    var id = Number(inputEdOcul.value);
    if (validarModalEd()) {
        guardar()
        ocultarError(errGuardarEd);
        corrInput(inputEd);
        tareas[id] = txt;
        setTimeout(() => {
            statusInfoEd.innerHTML = '<span class="guardando">Guardando...</span>'
        }, 1000);
        setTimeout(() => {
            statusInfoEd.innerHTML = ''
            inputEd.value = ''
            inputEdOcul.value = ''
        }, 5000);
        setTimeout(() => {
            limpiarForm()
            actualizar();
        }, 5000);
        setTimeout(() => {
            cancelarEd()
        }, 6000);
    } else {
        sinGuardar(guardarEd)
        mostrarError(errGuardarEd, 'Completar los campos correspondientes', guardarEd)
        errInput(inputEd)
        return false
    }
}

function eliminarTarea() {
    tabla.innerHTML = ''
    tareas.splice(1);
    actualizar()
}

input.addEventListener("keyup", validarModal, false);
inputEd.addEventListener("keyup", validarModalEd, false);
plus.addEventListener("click", abrirModal, false);
guardarM.addEventListener("click", guardarModal, false);
cancelarM.addEventListener("click", cancelarModal, false);
guardarEd.addEventListener("click", guardarElemento, false);
eliminTarea.addEventListener('click',);