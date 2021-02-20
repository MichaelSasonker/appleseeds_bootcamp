/*****************************************************************************
* File Name: Ex6.3.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 00:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let GetsDistincts = (str1, str2) => {

    let letter_arr = (str1.toLowerCase() + str2.toLowerCase()).split('');

    let non_repeat_arr = [];

    for (let i = 0; i <= letter_arr.length - 1; ++i)
    {
        if (!(non_repeat_arr.includes(letter_arr[i])))
        {   
            non_repeat_arr.push(letter_arr[i]);
        }
    }
    return (non_repeat_arr.sort().join(''));
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('GetsDistincts first result is:');
    console.log('xyaabbbccccdefww' + ' ' + 'xxxxyyyyabklmopq' + ' --> ' 
        + GetsDistincts('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));
    console.log('');
    
    console.log('GetsDistincts first second is:');
    console.log('abcdefghijklmnopqrstuvwxyz' + ' ' + 'abcdefghijklmnopqrstuvwxyz' + ' --> ' 
        + GetsDistincts('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'));
    console.log('');

}; MainFunction();