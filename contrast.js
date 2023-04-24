const sliderContrast3 = document.getElementById("rangeContrast3");
const sliderContrast = document.getElementById("rangeContrast");
const image = document.getElementById("foto1");

sliderContrast.style.display ='none';
sliderContrast3.addEventListener('input', function() {
    image.style.filter = `contrast(${sliderContrast3.value*10}%) `;
});
const buttoncontrast = document.querySelector('#contrast');
buttoncontrast.addEventListener('click', function (){
    if(sliderContrast.style.display ==='none') {
        sliderContrast.style.display ='flex';
    }
    else{
        sliderContrast.style.display ='none';
    }
});