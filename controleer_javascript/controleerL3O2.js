
const oefening2L3 = document.getElementById("oef2")
const computedstyleoef2 = window.getComputedStyle(oefening2L3);
const filter2L3 = computedstyleoef2.getPropertyValue('filter');

const Alertbtn = document.getElementById('controleren');
const myElement = document.getElementById("alert")

Alertbtn.addEventListener('click',function (){
    let bluring = "blur(" + sliderBlur.value + "px)";
    let contrasting = "contrast("+sliderContrast.value/10 + ")";
    console.log(filter2L3)
    console.log(bluring)
    console.log(contrasting)
    if (filter2L3.includes(bluring) && filter2L3.includes(contrasting)){
        window.location.href = "oefening3.html"
    }
});