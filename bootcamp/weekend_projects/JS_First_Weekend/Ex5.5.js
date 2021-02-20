/*****************************************************************************
* File Name: Ex5.5.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 19:55                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let AbbreviateTwoWords = (name) => {

    let words_arr = name.split('');

    return (words_arr[0].toUpperCase() + '.' + words_arr[words_arr.indexOf(' ') + 1].toUpperCase());
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('AbbreviateTwoWords first result is:');
    console.log('Sam Harris' + ' --> ' + AbbreviateTwoWords('Sam Harris'));
    console.log('');

    console.log('AbbreviateTwoWords second result is:');
    console.log('patrick feeney' + ' --> ' + AbbreviateTwoWords('patrick feeney'));
    console.log('');

}; MainFunction();