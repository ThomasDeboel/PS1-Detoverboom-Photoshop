const oefening1 = document.getElementById("oefening1");
const computedstyle = window.getComputedStyle(oefening1);
const filter1 = computedstyle.getPropertyValue('filter');

const Alertbtn = document.getElementById('controleren');
Alertbtn.addEventListener('click',function (){

    let zwartwitstring = "grayscale(" + sliderZwartWit.value + ")";
    // myElement.style.display = "none";
    if (filter1.includes(zwartwitstring)){
        window.location.href = "oefening2.html";
    }
    else{
        // myElement.style.display = "block";
    }
});