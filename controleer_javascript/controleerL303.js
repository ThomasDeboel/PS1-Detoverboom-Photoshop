/*#oef3{
    filter: grayscale(100%) brightness(60%);
}*/

const oefeningL33 = document.getElementById("oef3");
const computedstylel33 = window.getComputedStyle(oefeningL33);
const filterl33 = computedstylel33.getPropertyValue('filter');

const Alertbtn = document.getElementById('controleren');
Alertbtn.addEventListener('click',function (){

    let grayscale = "grayscale(" + sliderZwartWit.value + ")";
    let brightness = "brightness(" + sliderBrightness.value/10 + ")";
    console.log(grayscale)
    console.log(brightness)
    console.log(filterl33)
    // myElement.style.display = "none";
    if (filterl33.includes(grayscale) && filterl33.includes(brightness)){
        window.location.href = "oefening4.html";
    }
    else{
        // myElement.style.display = "block";
    }
});