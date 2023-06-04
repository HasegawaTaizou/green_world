"use strict";

function changeState(element, image) {
    let display = document.querySelector(element).style.display;
    let img = document.querySelector(image)

    if (display == "block") {
        document.querySelector(element).style.display = "none";
        img.src = '../img/plus-sign-icon.png'
        
    } else {
        document.querySelector(element).style.display = "block";
        img.src = '../img/minus-sign-icon.png'
    }
}
