const sliderZwartWit3 = document.getElementById("rangeZwartWit3");
const sliderZwartWit = document.getElementById("rangeZwartWit");
const image = document.getElementById("foto1");

sliderZwartWit.style.display ='none';
sliderZwartWit3.addEventListener('input', function() {
    image.style.filter = `grayscale(${this.value*100}%)`;
});
const buttonblackwhite = document.querySelector('#zwartwit');
buttonblackwhite.addEventListener('click', function (){
    if(sliderZwartWit.style.display ==='none') {
        sliderZwartWit.style.display ='flex';
    }
    else{
        sliderZwartWit.style.display ='none';
    }
});