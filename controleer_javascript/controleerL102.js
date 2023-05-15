const oefening2 = document.getElementById("oefening2");
const computedstyle2 = window.getComputedStyle(oefening2);
const filterxx = computedstyle2.getPropertyValue("transform");

const Alertbtn = document.getElementById('controleren');
console.log(computedstyle2)
Alertbtn.addEventListener('click',function (){

    let draaien = "rotate(" + sliderDraaien.value*10 + "deg)";
    console.log(draaien)
    console.log(filterxx)
    // myElement.style.display = "none";
    if (filterxx.includes(draaien)){
        window.location.href = "oefening3.html";
    }
    else{
        // myElement.style.display = "block";
    }
});