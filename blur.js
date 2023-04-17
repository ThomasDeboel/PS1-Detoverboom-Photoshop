const sliderBlur3 = document.getElementById("rangeBlur3");
const sliderBlur = document.getElementById("rangeBlur");
const image = document.getElementById("foto1");

sliderBlur.style.display ='none';
sliderBlur3.addEventListener('input', function() {
    image.style.filter = `blur(${this.value}%)`;
});
const buttonBlur = document.querySelector('#blur');
buttonBlur.addEventListener('click', function (){
    if(sliderBlur.style.display ==='none') {
        sliderBlur.style.display ='flex';
    }
    else{
        sliderBlur.style.display ='none';
    }
});