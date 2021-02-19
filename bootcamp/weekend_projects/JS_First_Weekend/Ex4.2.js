/*****************************************************************************
* File Name: Ex4.2.js                                                        *
* Section: JS-first-weekend-project                                          *
* Developer: Michael Sasonker                                                *
* Date: 02/19/21 13:00                                                       *
* Status: done                                                               *
******************************************************************************/

/*---------------------------------------------------------------------------*/
let PrintTribonacci = (arr, num) => {
    let i = 3;
    if (num === 0) 
    {
        return ([]);
    }
    while (i < num)
    {
        arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
        ++i;
    }
    return (arr);
}
/*---------------------------------------------------------------------------*/
/* Main function that runs the program */ 
function MainFunction()
{
    'use strict';

    console.log('PrintTribonacci first result is:');
    console.log(PrintTribonacci([1, 1, 1], 25));
    console.log('');

    console.log('PrintTribonacci second result is:');
    console.log(PrintTribonacci([1, 1, 1], 10));
    console.log('');

    console.log('PrintTribonacci third result is:');
    console.log(PrintTribonacci([1, 1, 1], 0));
    console.log('');


}; MainFunction();