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

document.addEventListener('DOMContentLoaded', () => {
    if (isMobile.any()) {
        document.body.classList.add('_touch');
        let titleOne = document.querySelector('#title-1');
        const serviceOne = document.querySelector('.serviceOne');

        if (titleOne) {
            titleOne.addEventListener("click", function (e) {
                titleOne.classList.add('_active');
            });
        }
        if (serviceOne) {
            serviceOne.addEventListener("click", function (e) {
                serviceOne.classList.add('_open');
            });
        }

    } else {
        document.body.classList.add('_pc');
        const serviceOne = document.querySelector('.serviceOne');
        if (serviceOne) {
            serviceOne.addEventListener("click",  () => {
                serviceOne.classList.toggle('_open');
            });
        }

        const menu = document.querySelector('#menu')
        if (menu) {
            menu.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    serviceOne.classList.remove('_open');
                }, 300)
            })
        }
    }
})

