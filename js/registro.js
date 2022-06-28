var btn = document.querySelector('.btn');
var errbtn = document.querySelector('.btn-error span');
var statusInfo = document.querySelector('.status');

var nombre = document.getElementById('nombre')
var errNombre = document.querySelector('.nombre span');

var apellido = document.getElementById('apellido');
var errApellido = document.querySelector('.apellido span');

var email = document.getElementById('email');
var errEmail = document.querySelector('.email span');

var contra = document.getElementById('contra');
var errContra = document.querySelector('.contraseña span');

var validName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
var validApell = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
var validEmail = /^\w+@(\w+\.)+\w{2,4}$/;
var validContra = /^[^\s"'()*+,./:;<=>[^{|}~]+$/;

var contentM = document.querySelector('.modal-content');
var modal = document.querySelector('.modal');

var aceptarM = document.querySelector('.aceptar');

function mostrarError(elem, msj, inp) {
    elem.innerHTML = ''
    elem.innerHTML = msj
    btn.disabled = true;
    if (inp) {
        inp.classList.add('input-error')
    }
}

function ocultarError(elem, inp) {
    elem.innerHTML = ''
    btn.disabled = false;
    if (inp) {
        inp.classList.remove('input-error')
    }
}

function validarNombre() {
    if (nombre.value == '' || nombre.value.length < 3) {
        mostrarError(errNombre, 'El campo debe tener al menos 3 caracteres', nombre);
        return false
    } else {
        if (validName.test(nombre.value)) {
            ocultarError(errNombre, nombre);
            return true
        } else {
            mostrarError(errNombre, 'Ingresa un nombre válido', nombre);
            return false
        }
    }
}

function validarApellido() {
    if (apellido.value == '' || apellido.value.length < 3) {
        mostrarError(errApellido, 'El campo debe tener al menos 3 caracteres', apellido);
        return false
    } else {
        if (validName.test(apellido.value)) {
            ocultarError(errApellido, apellido);
            return true
        } else {
            mostrarError(errApellido, 'Ingresa un nombre válido', apellido);
            return false
        }
    }
}

function validarEmail() {
    if (email.value == '') {
        mostrarError(errEmail, 'Este campo debe ser completado', email)
        return false
    } else {
        if (validEmail.test(email.value)) {
            ocultarError(errEmail, email)
            return true
        } else {
            mostrarError(errEmail, 'Ingrese un email válido', email)
            return false
        }
    }
}

function validarContra() {
    if (contra.value == '' || contra.value.length < 6) {
        mostrarError(errContra, 'La contraseña debe tener al menos 6 caracteres', contra)
        return false
    } else {
        if (validContra.test(contra.value)) {
            ocultarError(errContra, contra)
            return true
        } else {
            mostrarError(errContra, 'Ingrese una contraseña válida', contra)
            return false
        }
    }
}

function comprobarValidaciones() {
    if (validarNombre() && validarApellido() && validarEmail() && validarContra()) {
        return true
    } else {
        validarNombre()
        validarApellido()
        validarEmail()
        validarContra()
        mostrarError(errbtn, 'Debe completar los campos correspondientes correctamente', btn);
        return false
    }
}


function limpiarForm() {
    nombre.value = ""
    apellido.value = ""
    email.value = ""
    contra.value = ""
}

function abrirModal() {
    contentM.classList.remove('acept-content');
    modal.classList.add('acept-modal')

}

function aceptarModal() {
    contentM.classList.add('acept-content');
    modal.classList.add('acept-nodal')
    window.location = "https://erikapavaro.github.io/proyecto-js/login-registro/login"
}

function enviarInfo() {
    if (comprobarValidaciones()) {
        ocultarError(errbtn);
        setTimeout(() => {
            statusInfo.innerHTML = '<span class="enviando">Enviando...</span>'
            return true
        }, 300);
        setTimeout(() => {
            statusInfo.innerHTML = '<span class="enviado">Enviando...</span>'
        }, 2000);
        setTimeout(() => {
            statusInfo.innerHTML = ''
        }, 3000);
        setTimeout(() => {
            limpiarForm()
        }, 3000);
        setTimeout(() => {
            abrirModal()
        }, 3000);
    } else {
        mostrarError(errbtn, 'Completar los campos correspondientes', btn)
        return false
    }
}

nombre.addEventListener("keyup", validarNombre, false);
apellido.addEventListener("keyup", validarApellido, false);
email.addEventListener("keyup", validarEmail, false);
contra.addEventListener("keyup", validarContra, false);

btn.addEventListener("click", enviarInfo, false);
aceptarM.addEventListener("click", aceptarModal, false);
