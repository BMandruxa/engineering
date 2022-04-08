"use strict"
document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.portfolio-cases__lnk').forEach((item) =>
      item.addEventListener('click', function (e) {
         e.preventDefault();
         const id = e.target.getAttribute('href').replace('#', '');

         document.querySelectorAll('.portfolio-cases__lnk').forEach(
            (child) => child.classList.remove('_unlock')
         );
         // document.querySelectorAll('...').forEach(
         //     (child) => child.classList.remove('...')
         // );

         item.classList.add('_unlock');
         // document.getElementById(id).classList.add('...);
      })
   );

   document.querySelector('.portfolio-cases__lnk')?.click();
})