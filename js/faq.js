"use strict";

// const iconsOpen = document.querySelectorAll(".faq__icon-open");

// const answers = document.querySelectorAll(".faq__answer");

// answers.forEach((answer) => {
//   answer.classList.add("none");
// });

// const handleIconClick = function () {
//   answers.forEach((answer, index) => {
//     console.log(index);
//     answer.classList.add("block");
//     // answers[index].children.add("block");
//   });
// };

// iconsOpen.forEach((icon) => {
//   icon.addEventListener("click", handleIconClick);
// });

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

