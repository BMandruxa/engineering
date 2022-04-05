"use strict"
$(document).ready(function () {
   $.each($('.calculator__checkboxes'), function (index, val) {
      if ($(this).find('input').prop('checked') == true) {
         $(this).addClass('active');
      }
   });
   $(document).on('click', '.calculator__checkboxes', function (event) {
      $(this).parents('.radiobuttons').find('.calculator__checkboxes').removeClass('active');
      $(this).parents('.radiobuttons').find('.calculator__checkboxes input').prop('checked', false);
      $(this).toggleClass('active');
      $(this).find('input').prop('checked', true);
      return false;
   });
});