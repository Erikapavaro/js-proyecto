var btnLog = document.querySelector('.btn1hm');
var btnLogT= document.querySelector('.btn1hm2_1');
var btnReg = document.querySelector('.btn2hm');
var btnRegT= document.querySelector('.btn2hm2_2');


function btnLogin(){
    window.location='https://erikapavaro.github.io/proyecto-js/login-registro/login'
}

function btnRegistrarse(){
    window.location='https://erikapavaro.github.io/proyecto-js/login-registro/registro'
}

btnLog.addEventListener("click", btnLogin, false);
btnLogT.addEventListener("click", btnLogin, false);
btnReg.addEventListener("click", btnRegistrarse, false);
btnRegT.addEventListener("click", btnRegistrarse, false);

/*/////////////////////////////////////////SLIDER////////////////////////////////////////////////////////////*/

var btnL = document.getElementById("btn-left");
var btnR = document.getElementById("btn-right");

function inicioSlider() {
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
}

inicioSlider()
cicloSlider()

function sliderAutom(){
    const slider = document.querySelector("#slider");
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function cicloSlider(){
    setInterval(() => {
        sliderAutom()
    }, 20000);

}


btnR.addEventListener('click', function () {
    const slider = document.querySelector("#slider");
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);

});

btnL.addEventListener('click', function () {
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);

});