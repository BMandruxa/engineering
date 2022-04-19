"use strict"
const chooseOne = document.querySelectorAll("#choose-1");
const selectOne = document.querySelectorAll("#sublist-1");
const vectorOne = document.querySelectorAll("#vector-1");
const chooseTwo = document.querySelectorAll("#choose-2");
const selectTwo = document.querySelectorAll("#sublist-2");
const vectorTwo = document.querySelectorAll("#vector-2");
const chooseThree = document.querySelectorAll("#choose-3");
const selectThree = document.querySelectorAll("#sublist-3");
const vectorThree = document.querySelectorAll("#vector-3");
const chooseFour = document.querySelectorAll("#choose-4");
const selectFour = document.querySelectorAll("#sublist-4");
const vectorFour = document.querySelectorAll("#vector-4");
const chooseFive = document.querySelectorAll("#choose-5");
const selectFive = document.querySelectorAll("#sublist-5");
const vectorFive = document.querySelectorAll("#vector-5");
if (chooseOne) {
   chooseOne.forEach((choose) =>
      choose.addEventListener("click", () => {
         choose.classList.toggle("_click");
         vectorOne.forEach((vector) => vector.classList.toggle("_flip"));
         selectOne.forEach((select) => select.classList.toggle("_active"));
      })
   );
}
if (chooseTwo) {
   chooseTwo.forEach((choose) =>
      choose.addEventListener("click", () => {
         choose.classList.toggle("_click");
         vectorTwo.forEach((vector) => vector.classList.toggle("_flip"));
         selectTwo.forEach((select) => select.classList.toggle("_active"));
      })
   );
}
if (chooseThree) {
   chooseThree.forEach((choose) =>
      choose.addEventListener("click", () => {
         choose.classList.toggle("_click");
         vectorThree.forEach((vector) => vector.classList.toggle("_flip"));
         selectThree.forEach((select) => select.classList.toggle("_active"));
      })
   );
}
if (chooseFour) {
   chooseFour.forEach((choose) =>
      choose.addEventListener("click", () => {
         choose.classList.toggle("_click");
         vectorFour.forEach((vector) => vector.classList.toggle("_flip"));
         selectFour.forEach((select) => select.classList.toggle("_active"));
      })
   );
}
if (chooseFive) {
   chooseFive.forEach((choose) =>
      choose.addEventListener("click", () => {
         choose.classList.toggle("_click");
         vectorFive.forEach((vector) => vector.classList.toggle("_flip"));
         selectFive.forEach((select) => select.classList.toggle("_active"));
      })
   );
}