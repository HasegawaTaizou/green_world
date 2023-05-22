"use strict";

const iconsOpen = document.querySelectorAll(".faq__icon-open");

const answers = document.querySelectorAll(".faq__answer");

answers.forEach((answer) => {
  answer.classList.add("none");
});

const handleIconClick = function () {
  answers.forEach((answer, index) => {
    console.log(index);
    answer.classList.add("block");
    // answers[index].children.add("block");
  });
};

iconsOpen.forEach((icon) => {
  icon.addEventListener("click", handleIconClick);
});
