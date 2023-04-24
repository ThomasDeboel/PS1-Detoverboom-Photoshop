const sliderBlur = document.getElementById("rangeBlur");
const sliderZwartWit = document.getElementById("rangeZwartWit");
const sliderContrast = document.getElementById("rangeContrast");
const sliderDraaien = document.getElementById("rangeDraaien");
const sliderBrightness = document.getElementById("rangeBrightness");

const image = document.getElementById("foto1");

sliderZwartWit.style.display = 'none';
sliderDraaien.style.display ='none';
sliderContrast.style.display ='none';
sliderBlur.style.display ='none';
sliderBrightness.style.display ='none';

// if you change this slider than the blur will wil increase or decrease
sliderBlur.addEventListener('input', function() {
    image.style.filter = `blur(${this.value}px) grayscale(${sliderZwartWit.value*100}%) contrast(${sliderContrast.value*10}%) brightness(${sliderBrightness.value*10}%)`;
});
// if you change this slider than the zwartwit value will wil increase or decrease
sliderZwartWit.addEventListener('input', function() {
    image.style.filter = `blur(${sliderBlur.value}px) grayscale(${this.value*100}%) contrast(${sliderContrast.value*10}%) brightness(${sliderBrightness.value*10}%)`;
});
// if you change this slider than the contrast will wil increase or decrease
sliderContrast.addEventListener('input', function () {
    image.style.filter = `blur(${sliderBlur.value}px) grayscale(${sliderZwartWit.value*100}%) contrast(${this.value*10}%) brightness(${sliderBrightness.value*10}%)`;
});
sliderBrightness.addEventListener('input', function () {
    image.style.filter = `blur(${sliderBlur.value}px) grayscale(${sliderZwartWit.value*100}%) contrast(${sliderContrast.value*10}%) brightness(${this.value*10}%)`;
});

// if you change the value of the slider than the picture will turn
sliderDraaien.addEventListener('input', function () {
    image.style.filter = `blur(${sliderBlur.value}px) grayscale(${sliderZwartWit.value*100}%) contrast(${sliderContrast.value*10}%) brightness(${sliderBrightness.value*10}%)`;
    image.style.transform = `rotate(${this.value*10}deg)`;
});

// select of all the buttons
const buttonblackwhite = document.querySelector('#zwartwit');
const buttonblur = document.querySelector('#blur');
const buttoncontrast = document.querySelector('#contrast');
const buttondraaien = document.querySelector('#draaien');
const buttonbrightness = document.querySelector('#brightness');

// if the buttonblackwhite is pressed than it checks if the slider is visible it hides it and if it is not visible it hides all the other sliders
buttonblackwhite.addEventListener('click', function (){
    if(sliderZwartWit.style.display ==='none') {
        sliderZwartWit.style.display ='flex';
        sliderDraaien.style.display ='none';
        sliderContrast.style.display ='none';
        sliderBlur.style.display ='none';
    }
    else{
        sliderZwartWit.style.display ='none';
    }
});
buttonblur.addEventListener('click', function (){
    if(sliderBlur.style.display ==='none') {
        sliderZwartWit.style.display ='none';
        sliderDraaien.style.display ='none';
        sliderContrast.style.display ='none';
        sliderBlur.style.display ='flex';
        sliderBrightness.style.display = 'none';
    }
    else{
        sliderBlur.style.display ='none';
    }
});
buttoncontrast.addEventListener('click', function (){
    if(sliderContrast.style.display ==='none') {
        sliderZwartWit.style.display ='none';
        sliderDraaien.style.display ='none';
        sliderContrast.style.display ='flex';
        sliderBlur.style.display ='none';
        sliderBrightness.style.display = 'none';
    }
    else{
        sliderContrast.style.display ='none';
    }
});
buttondraaien.addEventListener('click', function (){
    if(sliderDraaien.style.display ==='none') {
        sliderZwartWit.style.display ='none';
        sliderDraaien.style.display ='flex';
        sliderContrast.style.display ='none';
        sliderBlur.style.display ='none';
        sliderBrightness.style.display = 'none';
    }
    else{
        sliderDraaien.style.display ='none';
    }
});
buttonbrightness.addEventListener('click', function (){
    if(sliderBrightness.style.display ==='none') {
        sliderZwartWit.style.display ='none';
        sliderDraaien.style.display ='none';
        sliderContrast.style.display ='none';
        sliderBlur.style.display ='none';
        sliderBrightness.style.display = 'flex';
    }
    else{
        sliderBrightness.style.display = 'none';
    }
});

const oefening1 = document.getElementById("oefening1");
const computedstyle = window.getComputedStyle(oefening1);
const filter1 = computedstyle.getPropertyValue('filter');

const Alertbtn = document.getElementById('controleren');
const myElement = document.getElementById("alert")

Alertbtn.addEventListener('click',function (){

    let zwartwitstring = "grayscale(" + sliderZwartWit.value + ")";
    myElement.style.display = "none";
    if (filter1.includes(zwartwitstring)){
        window.location.href = "oefening2.html";
        console.log(filter1)
        console.log(zwartwitstring)
    }
    else{
        myElement.style.display = "block";
    }
});