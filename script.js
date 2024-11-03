let input = document.querySelector("#input");
let img = document.querySelector("#QR");
let qr = document.querySelector(".qrimg");

function getQR(){
    if( input.value.length > 0){
    img.style.visibility = "visible";
    img.src  = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    }
    else{
        input.classList.add("shake");
    }
}
