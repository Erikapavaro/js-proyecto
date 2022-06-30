var datos = {
    email:'ejemplo@ejemplo.com',
    contra: '1234567'
}

var btn = document.querySelector('.btn');
var btnErr = document.querySelector('.btn-error span');
var statusEnvio = document.querySelector('.status');

var email = document.getElementById('email');
var errEmail = document.querySelector('.email span');

var contra = document.getElementById('contra');
var errContra = document.querySelector('.contraseña span');

var validEmail = /^\w+@(\w+\.)+\w{2,4}$/;
var validContra = /^[^\s"'()*+,./:;<=>[^{|}~]+$/;

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

function validarEmail(){
    if(email.value==''){
        mostrarError(errEmail,'Este campo debe ser completado', email)
        return false
    } else{
        if(validEmail.test(email.value)){
            ocultarError(errEmail,email)
            return true
        } else{
            mostrarError(errEmail, 'Ingrese un email válido', email)
            return false
        }
    }
}

function validarContra(){
    if(contra.value=='' || contra.value.length<6){
        mostrarError(errContra, 'La contraseña debe tener al menos 6 caracteres', contra)
        return false
    }else{
        if(validContra.test(contra.value)){
            ocultarError(errContra,contra)
            return true
        }else{
            mostrarError(errContra,'Ingrese una contraseña válida', contra)
            return false
        }
    }
}

function comprobarValidaciones(){
    if(validarEmail() && validarContra()){
        compararData()
        return true
    }else{
        validarEmail()
        validarContra()
        mostrarError(btnErr,'Debe completar los campos correspondientes correctamente');
        compararData()
        return false
    }
}

function errorData(){
    statusEnvio.innerHTML=''
    statusEnvio.innerHTML='<span class="error">El usuario o la contraseña son incorrectos</span>'
    email.classList.add('input-error');
    contra.classList.add('input-error');
}

function ocultarErrData(){
    statusEnvio.innerHTML=''
    email.classList.remove('input-error');
    contra.classList.remove('input-error');
}

function compararData(){
    if(email.value == datos.email && contra.value == datos.contra){
        return true
    }else{
        return false
    }
}

function comprobarDatos(){
    setTimeout(() => {
        statusEnvio.innerHTML=''
    }, 100);
    setTimeout(() => {
        statusEnvio.innerHTML+='<span class="comprobando">Comprobando...</span>'
    }, 300);
}

function limpiarForm() {
    email.value = ""
    contra.value = ""
}

function login(){
    if(comprobarValidaciones()){
        if(compararData()){
            comprobarDatos()
            setTimeout(() =>{
                ocultarErrData()
                statusEnvio.innerHTML+='<span class="exito">Has inciado sesión con exíto</span>'
            }, 3000);
            setTimeout(() =>{
                limpiarForm()
                statusEnvio.innerHTML=''
            }, 5000);
        }else{
            comprobarDatos()
            setTimeout(() => {
                errorData()
            }, 3000);
        }
    }
}

email.addEventListener("keyup", validarEmail,false);
contra.addEventListener("keyup", validarContra,false);

btn.addEventListener("click", login, false);