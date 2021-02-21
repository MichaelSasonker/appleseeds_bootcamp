/*****************************************************************************
* File Name: Ex6.2.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/20/21 21:10                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
/* This function returns the number of duplicates in a string               */
let CountDuplicates = (str) => {

    let arr_letters = str.toLowerCase().split('');
    
    let count = 0;
      
    for (let i = 0; i < arr_letters.length; ++i)
    {
        let curr_letter = arr_letters[0];
          
        arr_letters.shift();
      
        if (arr_letters.includes(curr_letter))
        {
            ++count;
        }
      
        arr_letters = arr_letters.filter(element => element !== curr_letter)
    }
      
    return (count);
   
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