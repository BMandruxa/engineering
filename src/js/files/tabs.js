"use strict"
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(document.location.search);
    const tab = params.get("tab");

    document.querySelectorAll('.tabs-triggers__item').forEach((item) => {
            const tabIndex = item.getAttribute('href').replace('#tab-', '')
            const id = item.getAttribute('href').replace('#', '');

            if (tab === tabIndex) {
                item.classList.add('tabs-triggers__item--active');
                document.getElementById(id).classList.add('tabs-content__item--active');
            }

            item.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelectorAll('.tabs-triggers__item').forEach(
                    (child) => child.classList.remove('tabs-triggers__item--active')
                );
                document.querySelectorAll('.tabs-content__item').forEach(
                    (child) => child.classList.remove('tabs-content__item--active')
                );

                item.classList.add('tabs-triggers__item--active');
                document.getElementById(id).classList.add('tabs-content__item--active');
            })
        }
    );
    

    if (!tab) {
        document.querySelector('.tabs-triggers__item')?.click();
    }
})
