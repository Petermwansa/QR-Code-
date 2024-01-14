

let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

// this is the function for generating the qr code 
generateQR = () => {
    // here we are checking if ther input box is not empty and then gen the code 
    if (qrText.value.length > 0 ) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show__img");
    } else {
        // if the input is empty, we add the error class and then remove it after a second 
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000)
    }

}