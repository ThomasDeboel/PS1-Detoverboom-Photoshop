const sliderZwartWit = document.getElementById("rangeZwartWit3");
const image = document.getElementById("foto1");
sliderZwartWit.addEventListener('input', function() {
    image.style.filter = `grayscale(${this.value*10}%)`;
});