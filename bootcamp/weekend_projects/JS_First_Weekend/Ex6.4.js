/*****************************************************************************
* File Name: Ex6.4.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 00:30                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function checks if a string is ogram string                     */
let Isogram = (str) => {

    let letter_arr = str.toLowerCase().split('');

    for (let i = 0; i <= letter_arr.length - 1; ++i)
    {   /* if it found the same letter in the array returns false */
        if (letter_arr.includes(letter_arr[i], i + 1))
        {
            return (false);
        }
    }
    return (true);
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('Isogram first result is:');
    console.log('Dermatoglyphics' + ' --> ' + Isogram('Dermatoglyphics'));
    console.log('');
    
    console.log('Isogram second result is:');
    console.log('aba' + ' --> ' + Isogram('aba'));
    console.log('');
    
    console.log('Isogram third result is:');
    console.log('moOse' + ' --> ' + Isogram('moOse'));
    console.log('');

}; MainFunction();