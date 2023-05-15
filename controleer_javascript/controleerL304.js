/*
#oef4{
    filter: blur(2px) contrast(200%);
}*/
const oefeningL34 = document.getElementById("oef4");
const computedstylel34 = window.getComputedStyle(oefeningL34);
const filterl34 = computedstylel34.getPropertyValue('filter');

const Alertbtn = document.getElementById('controleren');
Alertbtn.addEventListener('click',function (){

    let blur = "blur(" + sliderBlur.value + "px)";
    let contrast = "contrast(" + sliderContrast.value/10 + ")";
    console.log(blur)
    console.log(contrast)
    console.log(filterl34)
    // myElement.style.display = "none";
    if (filterl34.includes(blur) && filterl34.includes(contrast)){
        window.location.href = "oefening5.html";
    }
    else{
        // myElement.style.display = "block";
    }
});