"use strict"
const radio = document.querySelectorAll(".checkb");
const width = document.querySelectorAll(".calculator__item");
const window = document.querySelectorAll(".calculator__window");
const number = document.querySelectorAll(".calculator__left");
if (radio) {
   radio.forEach((item) =>
      item.addEventListener("click", () => {
         item.classList.toggle("_click");
         width.forEach((wid) => wid.classList.toggle("_active"));
         number.forEach((num) => num.classList.toggle("_active"));
      })
   );
}
if (window) {
   window.forEach((itemTwo) =>
      itemTwo.addEventListener("click", () => {
         itemTwo.classList.toggle("_click");
         width.forEach((wid) => wid.classList.toggle("_active"));
         number.forEach((num) => num.classList.toggle("_active"));
      })
   );
}
// класс _active в calculator.scss строка 271