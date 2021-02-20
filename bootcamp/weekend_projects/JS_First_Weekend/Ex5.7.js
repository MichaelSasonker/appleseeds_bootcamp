/*****************************************************************************
* File Name: Ex5.7.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 20:20                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let GetLengthShortestWord = (sentence) => {

    let words_arr = sentence.split(' ');

    let length_arr = words_arr.map(word => word.length);

    return (Math.min(...length_arr));
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('GetLengthShortestWord first result is:');
    console.log('aba boo dodod llll a666 nn' + ' --> ' + GetLengthShortestWord('aba boo dodod llll a666 nn'));
    console.log('');

    console.log('GetLengthShortestWord second result is:');
    console.log('122 b11oo 13333' + ' --> ' + GetLengthShortestWord('122 b11oo 13333'));
    console.log('');

}; MainFunction();