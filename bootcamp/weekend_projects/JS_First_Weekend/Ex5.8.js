/*****************************************************************************
* File Name: Ex5.8.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 21:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns the length of the longest word    */
let GetLengthLongestWord = (sentence) => {

    let words_arr = sentence.split(' ');

    let length_arr = words_arr.map(word => word.length);

    return (Math.max(...length_arr));
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('GetLengthLongestWord first result is:');
    console.log('aba boo ddod llll a666 nn' + ' --> ' + GetLengthLongestWord('aba boo ddod llll a666 nn'));
    console.log('');

    console.log('GetLengthLongestWord second result is:');
    console.log('122 b11oo 13333' + ' --> ' + GetLengthLongestWord('122 b11oo 13333'));
    console.log('');

}; MainFunction();