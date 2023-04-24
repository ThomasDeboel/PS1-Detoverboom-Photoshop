
const sliderDraaien3 = document.getElementById("rangeDraaien3");
const sliderDraaien = document.getElementById("rangeDraaien");
const image = document.getElementById("foto1");

sliderDraaien.style.display ='none';
sliderDraaien3.addEventListener('input', function() {
    image.style.transform = `rotate(${this.value}deg)`;
});
const buttonDraaien = document.querySelector('#draaien');
buttonDraaien.addEventListener('click', function (){
    if(sliderDraaien.style.display ==='none') {
        sliderDraaien.style.display ='flex';
    }
    else{
        sliderDraaien.style.display ='none';
    }
});