/* global $ */
'use strict';

//Create FizzBuzz function that takes number and creates fizzbuzz sequence

//Event listener checks for when user submits a number value

//value should get passed to fizzBuzz to create a fizzbuzz array sequence

//for each item in fizzbuzz array, append element to ".js-results" and toggleClass
// to represent item content

function fizzBuzz (num) {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
}

function fizzBuzzer () {
  $('#number-chooser').submit(function (event) {
    event.preventDefault();
    const userSubmit = $('#number-choice').val();
    console.log(userSubmit);

    $('#number-choice').val('');

    let fizzedWord = '';
    for (let i = 1; i <= userSubmit; i++) {
      fizzedWord = fizzBuzz(i);
      console.log(fizzedWord);
      if (typeof fizzedWord === 'number') {
        $('js-results').append(`
        <div class="fizz-buzz-item">
          <span>${fizzedWord}</span>
        </div>
        `);
      } else {
        $('js-results').append(`
        <div class="fizz-buzz-item ${fizzedWord}">
          <span>${fizzedWord}</span>
        </div>
        `);
      }
    }
  });
}

$(fizzBuzzer);