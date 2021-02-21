/*****************************************************************************
* File Name: Ex5.4.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 14:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns a sentence with upper case for any even index */
let ToWeirdCase = (sentence) => {

    let words_arr = sentence.split(' ');

    words_arr = words_arr.map(word => {
        let letter = word.split('');
        letter = letter.map((letter, index) => (index % 2 === 0) ? letter.toUpperCase() : letter.toLowerCase())
        word = letter.join('');

        return word;
    });

    words_arr = words_arr.join(' ');

    return (words_arr);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('ToWeirdCase first result is:');
    console.log('String' + ' --> ' + ToWeirdCase('String'));
    console.log('');

    console.log('ToWeirdCase second result is:');
    console.log('weird string case' + ' --> ' + ToWeirdCase('weird string case'));
    console.log('');

}; MainFunction();