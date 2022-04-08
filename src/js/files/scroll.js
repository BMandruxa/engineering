'use strict'

import {isMobile} from "./functions.js";

document.addEventListener('DOMContentLoaded', () => {
    if (!isMobile.any()) {
        const tabs = document.querySelector('.tabs-triggers')
        const menu = document.querySelector('#menu')
        const serviceOne = document.querySelector('.serviceOne');

        if (!tabs && !menu && !serviceOne) return
        window.addEventListener('scroll', () => {
            if (tabs?.offsetTop < document.documentElement.scrollTop) {
                menu.classList.add('menu_active')
                serviceOne.classList.add('_open');
            } else {
                menu.classList.remove('menu_active')
                serviceOne.classList.remove('_open');
            }
        })
    }
})