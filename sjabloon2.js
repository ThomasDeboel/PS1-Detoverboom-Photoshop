const chosen_input = document.getElementById("foto")
var uploaded_img = "";

chosen_input.addEventListener("change", function (){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_img = reader.result;
        document.getElementById("foto1").style.backgroundImage = `url(${uploaded_img})`;
    });
    reader.readAsDataURL(this.files[0]);
})

const chosen_input2 = document.querySelector("#chosen_image2");
var uploaded_img2 = "";

chosen_input2.addEventListener("change", function (){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_img2 = reader.result;
        document.getElementById("foto1").style.backgroundImage = `url(${uploaded_img2})`;
    });
    reader.readAsDataURL(this.files[0]);
})