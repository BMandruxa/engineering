"use strict"
// Меню бургер
const burger = document.querySelector('.mobile-menu__burger');
const mobileMenu = document.querySelector('.mobile-menu__container');
const headerBurger = document.querySelector('.header_main');
if (burger) {
   burger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      burger.classList.toggle('_active');
      mobileMenu.classList.toggle('_active');
      headerBurger.classList.toggle('_active');
   });
}