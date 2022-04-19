"use strict"

/* Проверка мобильного браузера */
export const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
// открытие 2-го меню с выбором табов в файле transitionmenu.scss через css селекторы
document.addEventListener('DOMContentLoaded', () => {
    if (isMobile.any()) {
        document.body.classList.add('_touch');
        let titleOne = document.querySelector('#title-1');
        let titleTwo = document.querySelector('#title-2');
        const serviceOne = document.querySelector('.serviceOne');
        const serviceTwo = document.querySelector('.serviceTwo');
        const serviceThree = document.querySelector('.serviceThree');
        const serviceFour = document.querySelector('.serviceFour');
        const serviceFive = document.querySelector('.serviceFive');
        const serviceSix = document.querySelector('.serviceSix');
        const serviceSeven = document.querySelector('.serviceSeven');
        const serviceEight = document.querySelector('.serviceEight');

        if (titleOne) {
            titleOne.addEventListener("click", function (e) {
                titleOne.classList.add('_active');
            });
        }
        if (titleTwo) {
            titleTwo.addEventListener("click", function (e) {
                titleTwo.classList.add('_active');
            });
        }
        if (serviceOne) {
            serviceOne.addEventListener("click", function (e) {
                serviceOne.classList.add('_open');
            });
        }
        if (serviceTwo) {
            serviceTwo.addEventListener("click", function (e) {
                serviceTwo.classList.add('_open');
            });
        }
        if (serviceThree) {
            serviceThree.addEventListener("click", function (e) {
                serviceThree.classList.add('_open');
            });
        }
        if (serviceFour) {
            serviceFour.addEventListener("click", function (e) {
                serviceFour.classList.add('_open');
            });
        }
        if (serviceFive) {
            serviceFive.addEventListener("click", function (e) {
                serviceFive.classList.add('_open');
            });
        }
        if (serviceSix) {
            serviceSix.addEventListener("click", function (e) {
                serviceSix.classList.add('_open');
            });
        }
        if (serviceSeven) {
            serviceSeven.addEventListener("click", function (e) {
                serviceSeven.classList.add('_open');
            });
        }
        if (serviceEight) {
            serviceEight.addEventListener("click", function (e) {
                serviceEight.classList.add('_open');
            });
        }

    } else {
        document.body.classList.add('_pc');
        const serviceOne = document.querySelector('.serviceOne');
        const serviceTwo = document.querySelector('.serviceTwo');
        const serviceThree = document.querySelector('.serviceThree');
        const serviceFour = document.querySelector('.serviceFour');
        const serviceFive = document.querySelector('.serviceFive');
        const serviceSix = document.querySelector('.serviceSix');
        const serviceSeven = document.querySelector('.serviceSeven');
        const serviceEight = document.querySelector('.serviceEight');
        if (serviceOne) {
            serviceOne.addEventListener("click", () => {
                serviceOne.classList.toggle('_open');
            });
        }
        if (serviceTwo) {
            serviceTwo.addEventListener("click", function (e) {
                serviceTwo.classList.add('_open');
            });
        }
        if (serviceThree) {
            serviceThree.addEventListener("click", function (e) {
                serviceThree.classList.add('_open');
            });
        }
        if (serviceFour) {
            serviceFour.addEventListener("click", function (e) {
                serviceFour.classList.add('_open');
            });
        }
        if (serviceFive) {
            serviceFive.addEventListener("click", function (e) {
                serviceFive.classList.add('_open');
            });
        }
        if (serviceSix) {
            serviceSix.addEventListener("click", function (e) {
                serviceSix.classList.add('_open');
            });
        }
        if (serviceSeven) {
            serviceSeven.addEventListener("click", function (e) {
                serviceSeven.classList.add('_open');
            });
        }
        if (serviceEight) {
            serviceEight.addEventListener("click", function (e) {
                serviceEight.classList.add('_open');
            });
        }


        const menu = document.querySelector('#menu')
        if (menu) {
            menu.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    serviceOne.classList.remove('_open');
                    serviceTwo.classList.remove('_open');
                    serviceThree.classList.remove('_open');
                    serviceFour.classList.remove('_open');
                    serviceFive.classList.remove('_open');
                    serviceSix.classList.remove('_open');
                    serviceSeven.classList.remove('_open');
                    serviceEight.classList.remove('_open');
                }, 300)
            })
        }
    }
})

