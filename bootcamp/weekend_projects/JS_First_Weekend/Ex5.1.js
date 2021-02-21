/*****************************************************************************
* File Name: Ex5.1.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 13:40                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function remove the first and last elements in an array */
let RemoveFirstAndLast = (str) => {
    let res = str;

    res = res.split('');
    res.pop();
    res.shift();
    res = res.join('');

    return (res);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('RemoveFirstAndLast first result is:');
    console.log(RemoveFirstAndLast('abaaa'));
    console.log('');

    console.log('RemoveFirstAndLast second result is:');
    console.log(RemoveFirstAndLast('yda'));
    console.log('');

    console.log('RemoveFirstAndLast third result is:');
    console.log(RemoveFirstAndLast('hi, how are you?'));
    console.log('');


}; MainFunction();