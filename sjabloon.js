const sliderBlur = document.getElementById("rangeBlur");
const sliderZwartWit = document.getElementById("rangeZwartWit");
const sliderContrast = document.getElementById("rangeContrast");

const image = document.getElementById("foto1");

sliderBlur.addEventListener('input', function() {
    image.style.filter = `blur(${this.value}px) grayscale(${sliderZwartWit.value}%) contrast(${sliderContrast.value*10}%)`;
});
sliderZwartWit.addEventListener('input', function() {
    image.style.filter = `blur(${sliderBlur.value}px) grayscale(${this.value}%) contrast(${sliderContrast.value*10}%)`;
});
sliderContrast.addEventListener('input', function () {
    image.style.filter = `blur(${sliderBlur.value}px) grayscale(${sliderZwartWit.value}%) contrast(${this.value*10}%)`;
});

/*
// select all buttons inside #buttongroup
const buttons = document.querySelectorAll('#buttongroup button');
console.log('buttons', buttons);

// loop over the buttons inside the NodeList
buttons.forEach(function (button, index) {
    // log information about every button
    console.log('button', index, button);
});*/
