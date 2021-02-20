/*****************************************************************************
* File Name: Ex6.2.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 21:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let CountDuplicates = (str) => {

    let letter_arr = str.toLowerCase();
    letter_arr = letter_arr.split('');

    let arr = [];
    let arr2 = [];


    for (let i = 0; i < letter_arr.length - 1; ++i)
    {
        flag = 0;
        if (letter_arr.includes(letter_arr[i], i + 1))
        {
            flag = 1;
            arr.push(letter_arr[i]);
        }

    }

   
    for (let i = 0; i < arr.length - 1; ++i)
    {
        arr2 = arr.filter(element => element !== arr[i]);
    }
    console.log(arr);
    console.log(arr2);
    console.log(arr2.length + 1);
    if (arr2.length === 0)
    {
        return 0;
    }
    else
    {
        return (arr2.length + 1);
    }
   
}

/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('CountDuplicates first result is:');
    console.log('abcd' + ' --> ' + CountDuplicates('abcd'));
    console.log('');

    console.log('CountDuplicates second result is:');
    console.log('aabbcde' + ' --> ' + CountDuplicates('aabbcde'));
    console.log('');

    console.log('CountDuplicates third result is:');
    console.log('aabBcde' + ' --> ' + CountDuplicates('aabBcde'));
    console.log('');

    console.log('CountDuplicates fourth result is:');
    console.log('indivisibility' + ' --> ' + CountDuplicates('indivisibility'));
    console.log('');

    console.log('CountDuplicates fifth result is:');
    console.log('Indivisibilities' + ' --> ' + CountDuplicates('Indivisibilities'));
    console.log('');

    console.log('CountDuplicates sixth result is:');
    console.log('aA11' + ' --> ' + CountDuplicates('aA11'));
    console.log('');

    console.log('CountDuplicates seventh result is:');
    console.log('ABBA' + ' --> ' + CountDuplicates('ABBA'));
    console.log('');

}; MainFunction();