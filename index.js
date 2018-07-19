/* global $ */
'use strict';
console.log('Hello World');

function makeTopImage () {
  $('input').on('click', function (event) {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.full-image').attr('src', imgSrc);
    $('.full-image').attr('alt', imgAlt);
  });
}

$(makeTopImage);