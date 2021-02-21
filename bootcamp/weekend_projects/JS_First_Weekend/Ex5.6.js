/*****************************************************************************
* File Name: Ex5.6.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 20:15                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns the string with '#' sign insted of the original 
*  string except the last 4 letters                                          */
let MaskUntilLastFour = (str) => {

    let words_arr = str.split('');

    words_arr = words_arr.map((letter, index) => ((index >= words_arr.length - 4) ? letter : '#'));
    return (words_arr.join(''));
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('MaskUntilLastFour first result is:');
    console.log('4556364607935616' + ' --> ' + MaskUntilLastFour('4556364607935616'));
    console.log('');

    console.log('MaskUntilLastFour second result is:');
    console.log('1' + ' --> ' + MaskUntilLastFour('1'));
    console.log('');

    console.log('MaskUntilLastFour third result is:');
    console.log('Nananananananananananananananana Batman!' + ' --> ' + MaskUntilLastFour('Nananananananananananananananana Batman!'));
    console.log('');

}; MainFunction();